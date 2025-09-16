---
title: "Convert SOLIDWORKS Drawings to PDF in PDM Standard"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, PDF, automation, tasks]
description: "Automate drawing-to-PDF conversion inside SOLIDWORKS PDM Standard using the Convert task."
slug: "solidworks-pdm-standard-drawing-pdf-conversion"
---

<p>SOLIDWORKS PDM Standard 2018 introduced automated drawing-to-PDF conversion through the Convert task. The task replicates SOLIDWORKS&rsquo; native Save as PDF command but requires no manual interaction once configured.</p>

<h2>Install the Convert Task</h2>

<p>Open SOLIDWORKS PDM Administration and expand <strong>Tasks</strong>. The Convert task appears when the vault is created; if it is missing, import it from the <code>Default Data</code> folder in the PDM installation directory.</p>

<figure>
  <img src="/assets/images/Task-in-admin.png" alt="SOLIDWORKS PDM Administration displaying the convert task" />
</figure>

<figure>
  <img src="/assets/images/Import-task.png" alt="Importing the convert task in SOLIDWORKS PDM" />
</figure>

<figure>
  <img src="/assets/images/convert-import-file.png" alt="Convert task definition file inside the Default Data folder" />
</figure>

<h2>Review Required Configuration Pages</h2>

<p>The SOLIDWORKS PDM Administration Guide outlines each configuration page. At minimum, confirm the add-in user context, menu command, execution method, conversion settings, file card mapping, output location, and permissions.</p>

<figure>
  <img src="/assets/images/Task-Steps.png" alt="List of configuration pages for the convert task" />
</figure>

<h2>Run the Convert Task</h2>

<p>After configuration, users can right-click drawings in the vault view and choose <strong>Convert to PDF</strong>. You can also trigger the task from a workflow transition to generate PDFs automatically during release.</p>

<figure>
  <img src="/assets/images/right-mouse-task.png" alt="Convert to PDF option in the SOLIDWORKS PDM context menu" />
</figure>

<p><strong>Note:</strong> Ensure Task Host Configuration is enabled on each workstation that runs the Convert task before executing it.</p>
