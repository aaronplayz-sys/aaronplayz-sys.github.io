---
layout: post
title: How to Get Started in IT! Part 3 - Servers, VPS, and the Cloud
date: 2026-02-09
description: Moving beyond the local desktop, we explore what servers are, the benefits of Virtual Private Servers (VPS), and a beginner-friendly introduction to Cloud Computing.
tags: IT, Servers, VPS, Cloud Computing, AWS, Azure, GCP, GettingStarted
categories: posts
toc:
  sidebar: left
---

## Transitioning from Local to Remote

In [Part 2](https://aaronplayzgaming.com/blog/2026/how-to-get-started-in-it-part2/), we talked about Virtual Machines (VMs) running on your own computer. This is a great way to learn without breaking your main machine. However, in the professional world, most services don't run on a laptop... they run on **Servers**.

## What is a "Server"?

Technically, any computer can be a server. A server is simply a device or program that provides services to other computers (known as "clients") on a network.

When you visit a website, your browser is the client, and the computer hosting the website is the server. In IT, we usually designate powerful, headless (no monitor/keyboard) machines as servers because they are built to run 24/7.

## Home Labs vs. Virtual Private Servers (VPS)

As you start your IT journey, you'll hear the term **Home Lab** a lot. This usually means a dedicated computer or raspberry pi in your house running services. While Home Labs are great for learning hardware and networking, they have limitations (bandwidth, power usage, and making them accessible from the internet safely).

This is where a **VPS (Virtual Private Server)** comes in.

### What is a VPS?

A VPS is a virtual machine hosted in a data center by a provider like **Linode (Akamai)**, **Vultr**, or **DigitalOcean**.

**Benefits of a VPS:**

1. **Accessibility:** It has a public IP address, meaning you can access it from anywhere in the world.
2. **Reliability:** These servers are in professional data centers with redundant power and internet.
3. **Simplicity:** You can "spin up" a new server in seconds and delete it when you're done, only paying for the time it was running.

## Introduction to Cloud Computing

If a VPS is like renting an apartment, **Cloud Computing** is like renting a whole utility grid.

When people talk about "The Cloud," they are usually referring to the big three providers:

- **AWS (Amazon Web Services)**
- **Microsoft Azure**
- **Google Cloud Platform (GCP)**

### Why the Cloud?

As a student currently in a Cloud Computing degree program, I can tell you that the industry has shifted away from managing physical hardware and toward "Services."

In the cloud, you don't just rent a server; you can rent a database as a service, a website hosting platform as a service, or even AI processing power. It scales automatically and you only pay for what you use.

## Your First Steps into the Cloud

Most major cloud providers offer a **Free Tier** for new users.

- **AWS Free Tier:** Offers 12 months of free usage for certain services, including a small Linux server.
- **Oracle Cloud:** Known for having a very generous "Always Free" tier that includes surprisingly powerful VMs.

### A Word of Warning:

Before you sign up for a cloud provider, **always set up a Billing Alarm**. It is very easy to accidentally leave a resource running and end up with a surprise bill at the end of the month.

## Conclusion

Understanding the shift from your local PC to remote servers and eventually the cloud is a huge milestone in your IT journey. It opens up the possibility of hosting your own portfolio, game servers, or web applications for the world to see.

In **Part 4**, we'll dive into **Containerization (Docker)** and why it's slowly replacing traditional VMs in the modern workplace!

> Continue to Part 4: [Link will be here once Part 4 is created]
