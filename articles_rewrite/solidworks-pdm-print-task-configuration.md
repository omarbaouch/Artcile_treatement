---
title: "Configure the SOLIDWORKS PDM Print Task"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, tasks, automation, printing]
description: "Import and configure the SOLIDWORKS PDM Print task to control printers, paper sizes, and permissions."
slug: "solidworks-pdm-print-task-configuration"
---

<p>SOLIDWORKS PDM Professional includes a Print task within the SOLIDWORKS Task Add-in. Administrators can import the template, choose which workstation runs the job, and define default printers and paper settings so users receive consistent output every time.</p>

<h2>Import the Print Task Template</h2>

<p>Open the SOLIDWORKS PDM Administration tool and expand <strong>Tasks</strong>. Right-click and choose <strong>Import</strong>, then browse to the <code>Default Data</code> folder in the PDM installation directory to locate the Print task definition.</p>

<figure>
  <img src="/assets/images/1-1.jpg" alt="Importing a task into SOLIDWORKS PDM Administration" />
</figure>

<figure>
  <img src="/assets/images/2-1.jpg" alt="Print task template stored in the Default Data folder" />
</figure>

<h2>Configure Print Properties</h2>

<p>Double-click the imported task to open the <strong>Print Properties</strong> dialog. Work through each section in the left pane:</p>

<figure>
  <img src="/assets/images/3-1.jpg" alt="SOLIDWORKS PDM Print task property pages" />
</figure>

<ul>
  <li><strong>Execution Method:</strong> Select the computer that will host the SOLIDWORKS PDM Task Add-in and decide whether the job runs silently or prompts the initiating user.</li>
  <li><strong>Printer:</strong> Choose a fixed printer, present a list of allowed printers, or map printers automatically based on paper size.</li>
  <li><strong>Paper Size, Scale, and Orientation:</strong> Define default page settings and enable overrides if users should adjust them.</li>
  <li><strong>Margins:</strong> Establish margin values and optional headers or footers, or allow the task dialog to collect them at runtime.</li>
  <li><strong>Files:</strong> Control how referenced drawings are handled and specify an error log folder.</li>
  <li><strong>Permissions:</strong> Grant access to the users and groups who should initiate the Print task.</li>
</ul>

<h2>Save and Deploy</h2>

<p>Click <strong>OK</strong> to store the configuration. Users can now launch the Print task from the vault to generate consistent hard copies without manually adjusting printer settings.</p>
