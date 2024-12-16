---
layout: page
title: Green Lion Gaming Store
description: A college project I worked on with classmates to create a web app from bottom up with a database.
img: assets/img/greenliongaming/GreenLionGamingPage.png
importance: 5
category: Other
---

Source code: [GitHub](https://github.com/Green-Lion-Gaming/GreenLionGamingWebsite)

## What is this?

Green Lion Gaming got its name from the team name our professor gave us. The five of us decided to set up an online game store that would be similar to Steam.

## What kind of class/course that would require a team to create something like this from scratch?

IT Capstone CIS-2910C-13439 is a required course for AS programs at Valencia College. It helps students prepare for the kinds of things they'll encounter in the workplace on a team.

The course also gives you a chance to put all the skills you've learned in previous courses to the test by building a working web application that meets the project requirements.

## Project requirements

- User interface (Front end) - Website (Built in HTML, CSS, and JavaScript). **Do not attempt to build this in Spring Boot, Angular, or similar.**
- Database - This database has to be developed using SQL, or MySQL, or SQLite, or NoSQL, or MongoDB (No MS Access Database). You are required to use 00webhost for all hosting. The free version allows for 1 website, 300MB disk space, and 1 MySQL Database.
- The website and database must be deployed on a server located in the cloud, or web hosting service. You are required to use 00webhost for all hosting. The free version allows for 1 website, 300MB disk space, and 1 MySQL Database
- Use a repository to store all HTML, CSS, and Javascript code. **An example of a repository is GitHub**. 00webhost does not allow GitHub integration on the free version. However, you can still store all your code on GitHub. (Needs to be publically accessible)
- Use a project management tool to track all assigned tasks and to track the progress of the application. A Gantt chart needs to be included in every milestone submission. **MS Project is an example.**

## Problems with these requirements

Unfortunately, the web host we were supposed to use is no longer offering free services. The professor said we can use whatever hosting solution each team decides on.

## What we decided to do

We started out using [InfinityFree](https://www.infinityfree.com/) as our hosting solution. They offer free hosting with PHP and MySQL included.

### The problem with InfinityFree

When we tried to use MySQL Workbench to connect to our database remotely, we discovered that this isn't allowed.

## The solution?

We've decided to use Node.js [Express framework](https://expressjs.com/), which lets us connect a database to the site which one of our team member who is letting us use his hosting provider.

## The Database purpose

Given that our web application is a store, the database purpose is to store Customer login information, hold customer products for checkout and product information such as the Name, price, and thumbnail image.

## Milestone Videos

Per milestone, we had to record, edit, and upload videos to YouTube unlisted as required by our professor.

### Milestone 1

{% include video.liquid path="https://www.youtube.com/embed/YI3X5-655-k" class="img-fluid rounded z-depth-1" %} 

### Milestone 2

{% include video.liquid path="https://www.youtube.com/embed/xlj7Hrj_hmk" class="img-fluid rounded z-depth-1" %} 

### Milestone 3

{% include video.liquid path="https://www.youtube.com/embed/snvX3wrF9mU" class="img-fluid rounded z-depth-1" %} 

### Milestone 4

{% include video.liquid path="https://www.youtube.com/embed/nqI_SaNczjE" class="img-fluid rounded z-depth-1" %} 

## Final presentation

In our final video we had options on how to present our web application. We decided to take aim towards marketing to potential investors.

> Note: The website URL that can be found in the video or GitHub repository may no longer be working as we were using paid services to run the project.

{% include video.liquid path="https://www.youtube.com/embed/6yA5x3Rnsyc" class="img-fluid rounded z-depth-1" %} 