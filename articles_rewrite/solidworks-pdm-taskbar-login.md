---
title: "Log In and Out of SOLIDWORKS PDM from the Windows Taskbar"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, data management, taskbar, automatic login]
description: "Use the Windows taskbar icon to switch SOLIDWORKS PDM users and control automatic login prompts."
slug: "solidworks-pdm-taskbar-login"
---

<p>Most users open the SOLIDWORKS PDM vault by launching Windows Explorer or the Quick Access shortcut. When you need to switch accounts quickly—especially while troubleshooting permissions—use the Windows taskbar icon instead. The approach works for any vault connection configured on the workstation.</p>

<h2>Open the Vault Menu from the Taskbar</h2>

<p>Select the hidden icons arrow on the Windows taskbar to reveal background applications. The SOLIDWORKS PDM icon appears alongside other utilities, just like when you configure a workstation as a task host.</p>

<figure>
  <img src="/assets/images/28-09-2020-03-19-53.png" alt="Windows taskbar hidden icons showing the SOLIDWORKS PDM app" />
</figure>

<p>Click the SOLIDWORKS PDM icon to open commands for <strong>Log In</strong>, <strong>Log Off</strong>, and other quick actions. It is an efficient way to alternate between the Admin account and a standard user without reopening File Explorer.</p>

<figure>
  <img src="/assets/images/28-09-2020-03-22-27.png" alt="SOLIDWORKS PDM taskbar menu with Log In and Log Off commands" />
</figure>

<h2>Disable Automatic Login When Needed</h2>

<p>If the vault still signs you in automatically after logging off, automatic login is enabled for that machine. Open the SOLIDWORKS PDM Administration tool, expand <strong>Local Settings</strong>, and edit the workstation settings. Clear <em>Use server default</em> or <em>Use automatic login for this vault</em> for the affected vault.</p>

<figure>
  <img src="/assets/images/2024-03-19_11-50-51-600x335.png" alt="SOLIDWORKS PDM automatic login options in the Administration tool" />
</figure>

<h2>Streamline Daily Administration</h2>

<p>With automatic login disabled, returning to the vault prompts for credentials so you can select the appropriate user profile. Remember that you can also log out directly inside the Local Vault View. Leveraging these shortcuts keeps SOLIDWORKS PDM administration nimble without disrupting your Windows session.</p>
