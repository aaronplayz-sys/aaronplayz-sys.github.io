---
layout: post
title: How To Dual Boot Windows
date: 2023-12-16
description: A guide on boot Windows and your choice of Linux Distro.
tags: Linux, Windows, how-to
categories: posts
toc:
  sidebar: left
---

## Assumptions

Before we get started, there are a few things that I assume you have on hand, have the knowledge of and are comfortable doing.

- Know the layout of your UEFI/BIOS menu
- Boot override
- A dedicated drive to install your choice of Linux distribution

## Downloading the ISO

First, you want to navigate to your choice of Linux distribution website and save the `ISO file` somewhere you can `easily find` it. For this guide, I am going to use Nobara Linux as an example.

{% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/nobara-homepage.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
  Nobara homepage
</div>

{% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/nobara-downloads.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
  Nobara's downloads page
</div>

## Flashing the ISO to thumb drive

To keep it simple, we are going to use balena etcher to write our image (the ISO file) to our thumb drive aka USB stick.

Go to [https://etcher.balena.io/](https://etcher.balena.io/) and download the installer, then open the file and install the application as normal, accept all defaults.

{% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/balena-etcher-download-page.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
  balena etcher's download section
</div>

After installing balena etcher, go ahead and insert your thumb drive into your computer, then open the app if it is not yet open already.

{% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/balena-etcher.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
  The application should look like this when open
</div>

Click on "Flash from file" button and locate your downloaded ISO file and click open.

<div class="row mt-3"> 
  <div class="col-sm mt-3 mt-md-0"> 
    {% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/flash-from-file.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0"> 
    {% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/select-file.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0"> 
    {% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/selected-file.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption"> 
  Screenshot's for reference
</div>

Before you continue, if you have any data on your thumb drive that you like to keep, now would be the time to back it by simply copying your files either to a cloud storage or to another folder on your computer. Click on "Select target" and choose your flash drive, then click on select to confirm. Then click on "Flash!".

<div class="row mt-3"> 
  <div class="col-sm mt-3 mt-md-0"> 
    {% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/choose-drive.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/flash.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption"> 
  Screenshot's for reference
</div>

## Installing the OS

Congrats, you just flashed an operating system to your thumb drive, yay! Now time to install that operating system to your spare drive. Restart your computer and press your BIOS key to enter the bios, the most common key is the delete key aka Del on your keyboard. Find your way around the menu and look for boot override section, then select your thumb drive and press enter. This will boot you off of the thumb drive.

### Grub bad shim signature

One common thing to happen is getting an error message saying somewhere along the line of "Bad Shim Signature". This is due to the kernel not being compatible with secure boot. To get around this, just turn off secure boot in your BIOS and try booting off your thumb drive again.

Once you are successfully booted off your thumb drive, you should see an application to start the installation process. For some operating systems like Nobara you might be shown the grub menu. In this case, I selected "Start Nobara 38".

<div class="row mt-3"> 
  <div class="col-sm mt-3 mt-md-0"> 
    {% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/grub-screen.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/how-to-dual-boot-windows/install-screen.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption"> 
  Screenshot's for reference, note this being done on a VM(Virtual Machine) for quality sake
</div>

Set up your location and keyboard to your liking, when it comes to where you want to install the operating system to a drive, be sure to select your spare drive and **not** the drive that has your windows' installation. From there, you can choose if you want the drive to be encrypted or what not, and finish the installation of your new operating system.

# That's all!

Now that you have installed the operating system of your choice to a dedicated drive, can you just choose what operating system you want to use when you turn on your computer. Personally I use the menu selection that's built-in with my motherboard, I believe there are other ways of doing this, but that's how I like to do it.

I hope you found this guide to be helpful, feel free to take a look at my other works and writings.
