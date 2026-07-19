---
layout: post
title: How to Get Started in IT! Part 2 - Virtualization and Operating Systems
date: 2026-01-05
description: In this second part, we dive into the world of virtualization, why it's a game-changer for learning, and how to choose your first operating system to explore.
tags: IT, Virtualization, VM, Linux, Windows, GettingStarted
categories: posts
toc:
  sidebar: left
---

## Welcome back to Part 2!

In [Part 1](https://aaronplayzgaming.com/blog/2025/how-to-get-started-in-it-part1/), we covered the broad foundations of what IT is and why it's such an exciting field to enter. Now, it's time to get our hands dirty. One of the most powerful tools in an IT professional's arsenal is **Virtualization**.

## What is Virtualization?

At its simplest, virtualization allows you to run multiple "virtual" computers (Virtual Machines or VMs) on a single physical computer. Each VM acts like a completely independent system with its own operating system, CPU, memory, and storage, all while sharing the resources of your physical "host" machine.

### Why is this a game-changer for learning?

1.  **Safety:** You can experiment, break things, and even catch viruses in a VM without any risk to your main computer. If something goes wrong, you can just delete the VM or revert to a "snapshot" (a saved state).
2.  **Cost:** You don't need to buy five different computers to learn five different systems. You just need one reasonably powerful machine.
3.  **Versatility:** You can run Linux, Windows, and even older versions of macOS all at the same time.
4.  **Snapshots:** Think of these as "save points" in a video game. Before you try a risky configuration, take a snapshot. If it fails, you're one click away from being back where you started.

## Choosing Your Virtualization Software

There are several great options to get started, depending on your needs and OS:

- **Oracle VM VirtualBox (Free & Open Source):** This is the gold standard for beginners. It's cross-platform (Windows, macOS, Linux) and very well-documented.
- **VMware Workstation Player (Free for Personal Use):** A very polished and high-performance option for Windows and Linux users.
- **Proxmox VE (Advanced):** If you have an old PC lying around and want to turn it into a dedicated "Home Lab" server, Proxmox is an incredible Type-1 hypervisor that runs directly on the hardware.

## Choosing Your First Operating System (OS)

While you're likely familiar with Windows or macOS, the majority of the IT world runs on **Linux**.

### Why Linux?

Linux powers the vast majority of the world's servers, cloud infrastructure (like what I'm studying in my bachelors!), and even your Android phone to certain extent. Learning the Linux command line is arguably the most valuable skill you can acquire early on.

### Recommended "Distros" (Distributions) for Beginners:

1.  **Ubuntu:** The most popular choice. It has a massive community, making it easy to find help online.
2.  **Linux Mint:** Great for those coming from Windows, as the interface feels very familiar.
3.  **Fedora:** A bit more "bleeding edge" and great for learning how Red Hat Enterprise Linux (RHEL) works—a staple in corporate environments.

#### Still not sure what distro to start with?

Go with Ubuntu. Most guides on the internet-whether if it is gaming or debugging a weird application issue are written for Ubuntu and the distributions based on it.

## Setting Up Your First VM

Regardless of the software you choose, the process is generally the same:

1.  **Download an ISO:** This is the "disk image" of the OS you want to install (e.g., the Ubuntu Desktop ISO).
2.  **Create a New VM:** Give it a name, select the OS type, and allocate resources.
    - _Tip:_ I recommend at least 2 CPU cores and 4GB of RAM for a smooth experience, if your host machine allows it.
3.  **Mount the ISO:** Tell the VM to "boot" from the ISO file you downloaded.
4.  **Install the OS:** Follow the on-screen prompts just like you would on a real computer.
5.  **Install "Guest Additions" or "Tools":** This is a crucial step that enables features like shared clipboards, folder sharing, and better screen resolution.

## Conclusion

Virtualization is your playground. It removes the fear of breaking things and opens up a world of experimentation. I highly encourage you to download VirtualBox and try installing Ubuntu today or over the weekend and have fun with it.

I personally use VMs to test code changes (e.g. this website) before making them public.

In **Part 3**, we'll move beyond the desktop and talk about **Servers, VPS, and the basics of Cloud Computing**.

> Continue to Part 3: [How to Get Started in IT! Part 3 - Servers, VPS, and the Cloud](https://aaronplayzgaming.com/blog/2026/how-to-get-started-in-it-part3/)
