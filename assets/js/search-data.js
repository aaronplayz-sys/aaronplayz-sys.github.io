// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-how-to-get-started-in-it-part-1-the-foundations",
        
          title: "How to Get Started in IT! Part 1 - The Foundations",
        
        description: "This is the first part of a series exploring the fundamentals of Information Technology, what it means, and how to begin your journey.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/how-to-get-started-in-it-part1/";
          
        },
      },{id: "post-my-adguard-home-dns-setup",
        
          title: "My Adguard Home DNS Setup",
        
        description: "For a while I have been expeirmenting my configurations, now I feel like sharing my journey and my configurations.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/my-adguard-home-setup/";
          
        },
      },{id: "post-how-to-dual-boot-windows",
        
          title: "How To Dual Boot Windows",
        
        description: "A guide on boot Windows and your choice of Linux Distro.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/how-to-dual-boot-windows/";
          
        },
      },{id: "post-removal-of-aquanovanetwork",
        
          title: "Removal of AquaNovaNetwork",
        
        description: "I talk about why AquaNovaNetwork has been removed from my site",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Removal-of-aquanovanetwork/";
          
        },
      },{id: "post-made-my-own-whitelist-for-adlists",
        
          title: "Made my own whitelist for adlists",
        
        description: "Here I go into why I made my own list and why you may need to aswell.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/make_a_whitelist/";
          
        },
      },{id: "post-test-post",
        
          title: "Test post",
        
        description: "Just a test post",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/update/";
          
        },
      },{id: "news-my-website-is-now-a-static-website-hosted-on-github",
          title: 'My website is now a static website hosted on GitHub!',
          description: "",
          section: "News",},{id: "news-i-added-a-new-project-in-https-aaronplayzgaming-com-projects",
          title: 'I added a new project in https://aaronplayzgaming.com/projects',
          description: "",
          section: "News",},{id: "news-added-my-homemade-whitelist-you-read-more-about-it-in-this-blog-post-here",
          title: 'Added my homemade whitelist. You read more about it in this blog post...',
          description: "",
          section: "News",},{id: "news-did-a-little-update-have-to-fix-some-stuff-but-it-s-all-good",
          title: 'Did a little update, have to fix some stuff but it’s all good...',
          description: "",
          section: "News",},{id: "news-made-a-change-to-one-of-my-project-pages-amp-amp-added-a-new-post",
          title: 'Made a change to one of my project pages &amp;amp;amp; added a new...',
          description: "",
          section: "News",},{id: "news-noticable-changes-is-removal-of-aquanovanetwork-from-projects",
          title: 'Noticable changes is removal of AquaNovaNetwork from projects',
          description: "",
          section: "News",},{id: "news-added-social-links-amp-amp-doing-some-cleaning-on-the-backend-for-this-website",
          title: 'Added Social links &amp;amp;amp; doing some cleaning on the backend for this website....',
          description: "",
          section: "News",},{id: "news-i-have-taken-the-time-to-move-this-site-from-netlify-to-cloudflare-pages-to-prevent-visitors-from-potential-malicious-attacks-via-supply-chain-temporary",
          title: 'I have taken the time to move this site from Netlify to Cloudflare...',
          description: "",
          section: "News",},{id: "news-new-updates-to-website-polyfill-replaced-and-more",
          title: 'New updates to website, polyfill replaced, and more',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9/";
            },},{id: "news-obtained-a-degree-pursuing-another",
          title: 'Obtained a degree! Pursuing another...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10/";
            },},{id: "news-i-updated-the-homepage-to-include-badges-that-have-been-issued-to-me-via-credly-i-also-took-the-time-to-update-my-adguard-home-configuration-to-include-new-features",
          title: 'I updated the homepage to include badges that have been issued to me...',
          description: "",
          section: "News",},{id: "news-added-new-aws-badge-to-the-about-home-page",
          title: 'Added new AWS badge to the about/home page.',
          description: "",
          section: "News",},{id: "news-started-a-new-project-creating-a-documentation-site-for-a-discord-community-click-here-to-view",
          title: 'Started a new project, creating a documentation site for a discord community. Click...',
          description: "",
          section: "News",},{id: "news-refactored-site-to-be-up-to-date-with-the-theme-s-v0-14-7-update-and-taking-the-time-to-redo-my-getting-started-in-it-series-posted-part-1-in-the-blog",
          title: 'Refactored site to be up-to-date with the theme’s v0.14.7 update and taking the...',
          description: "",
          section: "News",},{id: "projects-frontier-biz-guide-website",
          title: 'Frontier Biz Guide Website',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FrontierBizDocs/";
            },},{id: "projects-mesmer-yearbook",
          title: 'Mesmer Yearbook',
          description: "Me being a yearbook maintainer.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MesmerYearbook/";
            },},{id: "projects-robocop",
          title: 'RoboCop',
          description: "My discord bot using Red Discord Bot and making cogs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RoboCop/";
            },},{id: "projects-green-lion-gaming-store",
          title: 'Green Lion Gaming Store',
          description: "A college project I worked on with classmates to create a web app from bottom up with a database.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/greenliongamingstore/";
            },},{id: "projects-ranger",
          title: 'Ranger',
          description: "A multi purpose discord bot with only slash commands!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ranger/";
            },},{id: "projects-search-engine",
          title: 'Search Engine',
          description: "My own SearxNG search engine node!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/searx/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Aaron_Khan_resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%61%72%6F%6E@%61%61%72%6F%6E%70%6C%61%79%7A%67%61%6D%69%6E%67.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aaronplayz-sys", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aaron-khan-7b5915232", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
