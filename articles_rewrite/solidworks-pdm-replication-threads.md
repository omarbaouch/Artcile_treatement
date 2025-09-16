---
title: "Tune SOLIDWORKS PDM Replication Thread Counts"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, replication, archive server, administration]
description: "Adjust the ReplicationThreads registry value to control SOLIDWORKS PDM file transfers per cycle."
slug: "solidworks-pdm-replication-threads"
---

<p>Replicated SOLIDWORKS PDM Professional vaults default to transferring 10 files per scheduled replication cycle. You can increase the count to maximize available bandwidth or decrease it to diagnose slow links. The setting lives in the Windows registry on each target archive server.</p>

<h2>Locate the Archive Server Key</h2>

<p><strong>Warning:</strong> Editing the registry can impact system stability. Only proceed if you are comfortable with Regedit or have IT assistance.</p>

<ol>
  <li>Open the Registry Editor on the replica server and browse to <code>HKEY_LOCAL_MACHINE\SOFTWARE\SolidWorks\Applications\PDMWorks Enterprise\ArchiveServer</code>.</li>
</ol>

<figure>
  <img src="/assets/images/Adjusting-replication-performance-Navigate-to-Key.png" alt="Registry path for the SOLIDWORKS PDM ArchiveServer key" />
</figure>

<h2>Create and Modify ReplicationThreads</h2>

<ol start="2">
  <li>Create a new <strong>DWORD (32-bit) Value</strong> named <code>ReplicationThreads</code>.</li>
</ol>

<figure>
  <img src="/assets/images/Adjusting-replication-performance-New-DWORD.png" alt="Context menu for creating the ReplicationThreads DWORD value" />
</figure>

<ol start="3">
  <li>Right-click the new value and select <strong>Modify</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/Adjusting-replication-performance-ReplicationThreads-Modify.png" alt="Modify dialog for the ReplicationThreads registry value" />
</figure>

<ol start="4">
  <li>Set the base to <strong>Decimal</strong> and enter the number of files to transfer per cycle (1–64).</li>
</ol>

<figure>
  <img src="/assets/images/Adjusting-replication-performance-Set-The-Value.png" alt="Editing the ReplicationThreads value in decimal" />
</figure>

<h2>Apply the Change</h2>

<p>Close the Registry Editor and restart the SOLIDWORKS PDM Archive Server service so the new thread count takes effect.</p>

<figure>
  <img src="/assets/images/Adjusting-replication-performance-Restart-the-archive-server-services.png" alt="Service console showing the SOLIDWORKS PDM Archive Server restart option" />
</figure>

<p>Adjusting <code>ReplicationThreads</code> helps balance replication performance against network capacity, keeping distributed vaults synchronized without saturating the link.</p>
