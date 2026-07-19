---
layout: post
title: "Stop Windows from Silent-Installing Adware via Your Monitor"
description: "How Windows uses Device Companion Apps to sneak vendor bloatware onto your system—and how to permanently block it using the registry or group policy."
date: 2026-07-19
categories: tech-guides windows
giscus_comments: false
related_posts: false
toc:
  sidebar: left
---

Recently, a massive issue blew up across the PC hardware community regarding how Windows handles peripheral device installations. When users connected certain LG monitors—even older models—Windows quietly pulled down third-party software bundles, specifically the **"LG Monitor App Installer"**, via automated operating system pipelines. This framework, intended for basic vendor drivers, was immediately caught pushing intrusive third-party adware (like McAfee) and requesting sweeping administrative system privileges.

This behavior is powered by a Windows architecture mechanism called **Device Companion Apps**. When a plug-and-play device metadata package is parsed, Windows Update interacts with the Microsoft Store infrastructure to install vendor-designated software automatically. 

If you want to protect your system, clear out the bloatware, or share this fix with your community, here is the complete blueprint to pull it out and lock down the delivery pipe system-wide.

---

## The Clean-Up (If already affected)

If a machine has already been targeted by this installation behavior, the bundled background applications must be completely removed before hardening the operating system policy flags.

1. Navigate to **Settings > Apps > Installed Apps**.
2. Locate the package identified as **LG Monitor App Installer** (or matching the developer package identifier string `9PM9N6F47JB8-LGElectronics`) and select **Uninstall**.
3. Open **Settings > Apps > Startup** and verify that no lingering vendor helper binaries remain toggled active.

---

## System Hardening (Permanent Mitigation)

To prevent Windows from using device driver registration to install unsolicited software bundles in the future, apply one of the following deployment methodologies based on your Windows edition.

### Method A: The Registry Command (Universal & Scriptable)

This method injects a policy override directly into the local machine hive, explicitly instructing the Windows installation engine to skip partner co-installer binaries during hardware setups. This flag can be safely deployed via administrative terminals. **You must run your terminal as an Administrator.**

#### For Standard Command Prompt (`cmd.exe`):
```cmd
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\DeviceInstall\Settings" /v "DisableCoInstallers" /t REG_DWORD /d 1 /f
```
#### For Powershell:

Because native PowerShell architecture parses forward slashes as token parameters rather than raw strings, use the explicit binary wrapper execution syntax to ensure arguments pass correctly.

```
reg.exe add "HKLM\SOFTWARE\Policies\Microsoft\Windows\DeviceInstall\Settings" /v "DisableCoInstallers" /t REG_DWORD /d 1 /f
```

### Method B: Local Group Policy Editor (Windows Pro / Enterprise)

For system administrators seeking an explicit, structured policy block without direct registry manipulation:

1. Invoke the execution run window via `Win + R`, type `gpedit.msc`, and hit Enter.

2. Traverse the configuration tree to:
`Computer Configuration` > `Administrative Templates` > `System` > `Device Installation`

3. Locate the policy directive titled "Prevent device co-installers from launching".

Double-click the policy, toggle the status to Enabled, click Apply, and confirm with OK.

### Method C: Legacy System Properties Tweak (Windows Home Edition)

Honestly I would use this method along with Method A abov. This is meant for systems lacking Group Policy administrative layouts, you can access the classic control architecture to shut down metadata app delivery

1. Invoke `Win + R`, type `sysdm.cpl`, and execute to launch System Properties.

2. Select the `Hardware` configuration tab.

3. Click the `Device Installation Settings` interactive button.

4. Alter the selection token from "Yes (recommended)" to "No (your device might not work as expected)" and save modifications.

> ##### WARNING
>
> Technical Note on System Stability: Toggling off device installation metadata apps or co-installers does not break basic plug-and-play operations or stop native display drivers from functioning. It exclusively blocks the secondary hooks that allow background application deployment vectors to slide into the OS stack unnoticed.
{: .block-warning }

## Verify the changes

Following a system restart, you can verify that the OS restriction policy is actively running. Open the terminal as administrator and execute the following command:

```DOS
reg query "HKLM\SOFTWARE\Policies\Microsoft\Windows\DeviceInstall\Settings" /v "DisableCoInstallers"
```

It should return the following output:

```
DisableCoInstallers    REG_DWORD    0x1
```

Here's screenshot provided by a friend:

{% include figure.liquid loading="eager" path="assets/img/monitor-adware-output.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
  Screenshot of the expected output you should get after running the verification command
</div>
