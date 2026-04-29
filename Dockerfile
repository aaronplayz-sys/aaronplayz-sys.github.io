FROM ruby:3.4.7-slim

ENV DEBIAN_FRONTEND=noninteractive

LABEL authors="aaronplayz-sys" \
      description="Docker image for Frontier Biz guides (Dev & Prod)" \
      version="1.1.0"

# Install system dependencies
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    git \
    imagemagick \
    libmagickwand-dev \
    pkg-config \
    locales \
    inotify-tools \
    nodejs \
    npm \
    procps \
    python3 \
    python3-pip \
    python3-venv \
    zlib1g-dev && \
    # Set up locales
    sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen en_US.UTF-8 && \
    # Clean up cache
    apt-get clean && \
    apt-get autoclean && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives /var/tmp/*

ENV EXECJS_RUNTIME=Node \
    JEKYLL_ENV=production \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8 \
    NODE_ENV=production

WORKDIR /usr/src/app

# --- Ruby gems (cached layer) ---
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && \
    bundle install --jobs=4 --retry=3

# --- Node packages (cached layer) ---
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# --- Python packages (cached layer) ---
COPY requirements.txt ./
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
RUN pip install --no-cache-dir -r requirements.txt jupyter

# --- Application code ---
COPY . .

# Strip Windows line endings (CRLF → LF), install entrypoint to standard bin path, and make executable
RUN sed -i 's/\r//' bin/entrypoint.sh && \
    install -m 755 bin/entrypoint.sh /usr/local/bin/entrypoint.sh

EXPOSE 4000 35729

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:4000 || exit 1

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]