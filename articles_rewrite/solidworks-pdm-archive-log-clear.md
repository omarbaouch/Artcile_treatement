---
title: "How to Clear the SOLIDWORKS PDM Archive Server Log"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, administration, archive server, logs]
description: "Remove resolved messages from the SOLIDWORKS PDM archive server log using Windows Event Viewer."
slug: "solidworks-pdm-archive-log-clear"
---

<p>The SOLIDWORKS PDM user log offers a quick <em>Empty the Log</em> button, but the archive server log requires a different approach. Because the archive log tracks server-side activity, clear it only after documenting the events you need for troubleshooting.</p>

<figure>
  <img src="/assets/images/Emty-log.png" alt="SOLIDWORKS PDM user log menu with the empty the log icon" />
</figure>

<figure>
  <img src="/assets/images/Archive-log-menu-bar.png" alt="Archive server log menu without an empty option" />
</figure>

<h2>Use Windows Event Viewer</h2>

<p>The archive log is written to the Windows Event Viewer under <em>ConisioArchiverServerLog</em>. To remove resolved entries:</p>

<ol>
  <li>Open Event Viewer on the archive server.</li>
  <li>Expand <strong>Applications and Services Logs</strong> and locate <strong>ConisioArchiverServerLog</strong>.</li>
  <li>Right-click the log and choose <strong>Clear Log</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/Clear-Log-1220x262.png" alt="Event Viewer showing the clear log command for the archive server" />
</figure>

<p>When prompted, select <strong>Save and Clear</strong> to archive the existing log file before wiping it, or choose <strong>Clear</strong> to remove entries without saving.</p>

<figure>
  <img src="/assets/images/Clear-log-options.png" alt="Options to save and clear the SOLIDWORKS PDM archive log" />
</figure>

<h2>Conclusion</h2>

<p>Clearing the archive log via Event Viewer keeps the record manageable while preserving important diagnostics. Save logs whenever possible so you can compare future issues against historical data.</p>
