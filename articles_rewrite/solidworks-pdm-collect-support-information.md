---
title: "Use the SOLIDWORKS PDM Collect Support Information Wizard"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, support, troubleshooting, data management]
description: "Gather logs and diagnostics for SOLIDWORKS PDM support using the built-in collection wizard."
slug: "solidworks-pdm-collect-support-information"
---

<p>When you contact SOLIDWORKS PDM support, technicians typically request log files from the affected workstation and server. The Collect Support Information wizard compiles everything into a single archive so you can send complete diagnostics with minimal effort.</p>

<h2>Launch the Wizard</h2>

<p>On the workstation experiencing the issue, open the SOLIDWORKS PDM Administration tool, right-click your vault, and choose <strong>Collect Support Information</strong>.</p>

<figure>
  <img src="/assets/images/Step-1.png" alt="Selecting Collect Support Information from the SOLIDWORKS PDM Administration tool" />
</figure>

<p>Log in as the <code>admin</code> account to continue.</p>

<figure>
  <img src="/assets/images/Step-2.png" alt="Logging into the SOLIDWORKS PDM Administration tool as admin" />
</figure>

<h2>Collect Logs and Settings</h2>

<p>Leave all items selected on the <em>Collect Logs and Settings</em> page and click <strong>Next</strong>. If the wizard reports an error later, rerun it with the problematic options deselected and notify your support contact.</p>

<figure>
  <img src="/assets/images/Step-3.png" alt="Selecting log and setting options for collection" />
</figure>

<h2>Skip Archives and SQL Backups Unless Requested</h2>

<p>The wizard can include file archives or trigger an SQL backup, but these options are usually unnecessary unless your technician asks for them. Click <strong>Next</strong> to bypass both steps.</p>

<figure>
  <img src="/assets/images/Step-4.png" alt="Archive selection step in the support information wizard" />
</figure>

<figure>
  <img src="/assets/images/Step-5.png" alt="SQL backup options in the support information wizard" />
</figure>

<h2>Describe the Issue</h2>

<p>Provide any relevant notes on the <em>Add Additional Information</em> screen. Include error messages, the workflow state involved, or recent changes to your SOLIDWORKS PDM environment.</p>

<figure>
  <img src="/assets/images/Step-6.png" alt="Adding comments for the SOLIDWORKS PDM support package" />
</figure>

<h2>Create the Package</h2>

<p>Choose an output location for the ZIP file and click <strong>Finish</strong>. The wizard compresses the selected logs and settings into the package.</p>

<figure>
  <img src="/assets/images/Step-7.png" alt="Choosing an output folder for the support package" />
</figure>

<figure>
  <img src="/assets/images/Step-7-Finished.png" alt="Completed SOLIDWORKS PDM support information package" />
</figure>

<h2>Send to Support</h2>

<p>Once the archive is generated, share it with your SOLIDWORKS PDM support technician. Providing complete diagnostics up front helps them resolve the issue faster.</p>
