---
layout: page
title: Betterfox Updater
description: A cross-platform utility to automate Betterfox installation with custom overrides and hardware detection.
img: assets/img/betterfoxlogo.png
importance: 1
category: Personal
---

## Betterfox Updater

Repository: [https://github.com/aaronplayz-sys/betterfox-updater](https://github.com/aaronplayz-sys/betterfox-updater)

A cross-platform, Python-based utility designed to automate the installation of [Betterfox](https://github.com/yokoffing/Betterfox) while preserving custom user overrides.

### ✨ Key Features

- **Intelligent Profile Detection**: Automatically locates the default-release Firefox profile across Windows, macOS, and Linux.
- **Modular Overrides**: Merges the latest Betterfox user.js with your personal tweaks (`common-overrides.js`, `windows-overrides.js`, `mac-overrides.js`, or `linux-overrides.js`).
- **Hardware Aware**: Automatically detects your GPU or CPU and applies the right override file (NVIDIA, AMD, Intel, Apple Silicon).
- **Firefox Running Detection**: Warns you if Firefox is open before syncing.
- **Backup & Restore**: Automatically creates timestamped backups (keeps the last 5) with a built-in restore menu.
- **Modern GUI**: Simple interface with a live progress log built with CustomTkinter.

### Why this project?

This project was inspired by [Betterfox Issue #167](https://github.com/yokoffing/Betterfox/issues/167) and aims to solve the "stalled updater" problem by providing a modular, hardware-aware sync tool. It allows users to stay up to date with the latest privacy and performance improvements from Betterfox without losing their personal customizations.
