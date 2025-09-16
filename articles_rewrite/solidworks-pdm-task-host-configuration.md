---
title: "Configure SOLIDWORKS PDM Task Hosts Correctly"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, task host, automation, data management]
description: "Authorize vaults and add-ins so your SOLIDWORKS PDM task host can execute automation jobs."
slug: "solidworks-pdm-task-host-configuration"
---

<p>Automation tasks in SOLIDWORKS PDM only run on computers that are explicitly authorized. Before scheduling print jobs, conversions, or custom add-in actions, verify the Task Host Configuration for each workstation.</p>

<h2>Open the Task Host Configuration</h2>

<p>On the workstation that will execute tasks, right-click the SOLIDWORKS PDM icon in the Windows system tray. Choose <strong>Task Host Configuration</strong> from the menu.</p>

<figure>
  <img src="/assets/images/PDMIcon.png" alt="SOLIDWORKS PDM icon in the Windows system tray" />
</figure>

<figure>
  <img src="/assets/images/TaskHost.png" alt="Task Host Configuration menu option in SOLIDWORKS PDM" />
</figure>

<h2>Select Vaults and Add-ins</h2>

<p>In the Task Host Configuration dialog, pick the correct file vault and enable the add-ins that should run on this machine—such as PDF publishing, SOLIDWORKS tasks, or custom automation.</p>

<figure>
  <img src="/assets/images/SOLIDWORKS-PDM-Task-Host-Configuration-600x398.png" alt="SOLIDWORKS PDM Task Host Configuration dialog with vault permissions" />
</figure>

<h2>Keep Automation Reliable</h2>

<p>Review these settings whenever you add a new vault, deploy a workstation, or install updated task add-ins. Ensuring hosts are authorized prevents failed jobs and keeps your SOLIDWORKS PDM data management workflows running smoothly.</p>
