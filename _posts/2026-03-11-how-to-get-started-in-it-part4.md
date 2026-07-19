---
layout: post
title: How to Get Started in IT! Part 4 - The Magic of Containers with Docker
date: 2026-03-11
description: We explore containerization, a technology that has revolutionized software development, and provide a hands-on introduction to Docker.
tags: IT, Docker, Containers, DevOps, GettingStarted
categories: posts
toc:
  sidebar: left
---

## Welcome to Part 4!

In our last post, we journeyed from local machines to the cloud, discussing servers and VPS hosting. Now, we're going to dive into one of the most transformative technologies in modern IT: **Containerization**, with a focus on its most popular tool, **Docker**.

## The Problem: "But it works on my machine!"

Every developer has said it. You write code on your Windows laptop with a specific version of Python, and it works perfectly. Then, you give it to a colleague who uses a Mac with a different Python version, and it breaks. Or worse, you deploy it to a Linux server in the cloud, and nothing works at all.

This is where containers come in. They solve this problem by packaging an application and all its dependencies—libraries, system tools, code, and runtime—into a single, isolated "box."

## Virtual Machines vs. Containers: What's the Difference?

In Part 2, we learned that a Virtual Machine (VM) virtualizes the hardware to run a full-blown guest operating system.

- **VMs are like Houses:** Each house is fully self-contained with its own infrastructure (plumbing, electricity, etc.) and is quite heavy.
- **Containers are like Apartments:** Multiple apartments exist in one building, sharing the building's core infrastructure (foundation, main water line) but having their own isolated living spaces.

Containers virtualize the *operating system*, not the hardware. They sit on top of a single host OS and share its kernel, making them incredibly lightweight and fast to start.

## Introducing Docker

Docker is the platform that made containers mainstream. It provides a simple set of tools to build, share, and run containers. Let's break down the core concepts.

### 1. The Dockerfile: The Blueprint
A `Dockerfile` is a simple text file that contains instructions on how to build a Docker image. It's like a recipe for your application's environment.

**Example `Dockerfile` for a simple web server:**
```dockerfile
# Use an official Nginx image as a starting point
FROM nginx:alpine

# Copy our custom website files into the image
COPY ./my-website /usr/share/nginx/html
```
This file says: "Start with a lightweight Nginx web server, then copy my website's HTML files into the directory where Nginx serves files from."

### 2. The Image: The Template
A Docker **Image** is the result of running a `Dockerfile`. It's a read-only template that contains your application and its environment. You build it once with the `docker build` command.

```bash
# Build an image from the Dockerfile in the current directory
# and "tag" it with the name "my-cool-website"
docker build -t my-cool-website .
```

### 3. The Container: The Running Application
A **Container** is a running instance of an image. You can start, stop, and delete containers. This is where your application actually lives and breathes.

```bash
# Run a container from our new image
# -d: Run in the background (detached)
# -p 8080:80: Map port 8080 on our computer to port 80 inside the container
# --name my-site: Give the container a memorable name
docker run -d -p 8080:80 --name my-site my-cool-website
```
If you run this command, you can now open your web browser to `http://localhost:8080` and see your website running, perfectly isolated inside its container!

## Docker Compose: For Multi-Container Apps

What if your application needs a database? You could run two separate `docker run` commands, but that gets complicated. **Docker Compose** is a tool for defining and running multi-container applications using a simple YAML file.

I use this for my own projects, including running an [AdGuard Home setup](https://aaronplayzgaming.com/blog/2025/my-adguard-home-setup/).

**Example `docker-compose.yml` for WordPress:**
```yaml
version: '3.8'

services:
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: somepassword
      MYSQL_DATABASE: wordpress
    volumes:
      - db_data:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    ports:
      - "8000:80"
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: somepassword
      WORDPRESS_DB_NAME: wordpress

volumes:
  db_data:
```
With this single file, you can run `docker-compose up` and it will automatically start both a MySQL database and a WordPress container, and even connect them for you.

## Conclusion

Docker and containerization are fundamental to modern DevOps and Cloud Native practices. They provide consistency, portability, and efficiency. I highly recommend installing **Docker Desktop** and trying to run a simple Nginx container yourself.

In the next and final part of this introductory series, we'll tie everything together and discuss how to build a simple project using these technologies to showcase your new skills.

> Continue to Part 5: [Link will be here once Part 5 is created]
