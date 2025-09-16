---
title: "Configure the SOLIDWORKS PDM Standard Drawing to PDF Task"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, tasks, PDF, automation]
description: "Set up the SOLIDWORKS PDM Standard convert task to publish drawing PDFs."
slug: "solidworks-pdm-standard-pdf-task"
---

<p>SOLIDWORKS PDM Standard includes a built-in Convert task that can publish drawing PDFs automatically. Proper configuration ensures that task hosts, permissions, and output folders are ready before the command runs inside a workflow.</p>

<h2>Access the Task Node</h2>

<p>Open SOLIDWORKS PDM Administration and expand the <strong>Tasks</strong> node. The Convert task appears by default in PDM Standard and lists recent jobs.</p>

<figure>
  <img src="/assets/images/Task-Node.png" alt="SOLIDWORKS PDM Administration showing the Tasks node" />
</figure>

<h2>Define Convert Task Properties</h2>

<p>Double-click the Convert task to open its properties. Use the <strong>Add-in</strong> page to select the user whose permissions should be applied when the task executes. This is useful if the workflow should temporarily elevate access.</p>

<figure>
  <img src="/assets/images/Run-task-as-1.png" alt="SOLIDWORKS PDM convert task properties" />
</figure>

<h2>Enable Task Hosts</h2>

<p>Each workstation that runs the convert task must enable Task Host Configuration. From the PDM tray icon, choose <strong>Task Host Configuration</strong> and allow the Convert add-in for the vault.</p>

<figure>
  <img src="/assets/images/Task-Host-Edit-Blog-Article.png" alt="Opening the Task Host Configuration dialog" />
</figure>

<figure>
  <img src="/assets/images/taskhost-edit-blog-article-600x396.png" alt="Selecting the convert task in Task Host Configuration" />
</figure>

<p>In the <strong>Execution Method</strong> tab of the task properties, list the computers that can process the job.</p>

<figure>
  <img src="/assets/images/Execution-Method.png" alt="Execution method settings for the convert task" />
</figure>

<h2>Adjust Conversion Options</h2>

<p>Use the <strong>Conversion Settings</strong> page to define PDF export parameters and decide whether to pull the latest or referenced versions. PDM Standard focuses on drawing PDFs, while PDM Professional adds options for parts, assemblies, and DWG output.</p>

<figure>
  <img src="/assets/images/conversion-settings.png" alt="Conversion options for the SOLIDWORKS PDM PDF task" />
</figure>

<h2>Map Variables and Outputs</h2>

<p>On the <strong>File Card</strong> tab, map drawing variables such as Title, Number, or Revision to the generated PDF.</p>

<figure>
  <img src="/assets/images/file-card.png" alt="Mapping SOLIDWORKS drawing variables to PDF properties" />
</figure>

<p>Configure the <strong>Output File Details</strong> page to set the destination folder, filename pattern, and behavior when a PDF already exists.</p>

<figure>
  <img src="/assets/images/Output-File-Details.png" alt="Output file settings for the PDF conversion task" />
</figure>

<h2>Finalize Notifications and Workflow</h2>

<p>Optional success and error notifications keep stakeholders informed. Once saved, attach the Convert task to a workflow transition so drawing releases automatically produce PDFs for downstream teams.</p>
