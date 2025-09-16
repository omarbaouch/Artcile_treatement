---
title: "Perform a Clean Uninstall of SOLIDWORKS PDM Client"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, troubleshooting, installation, data management]
description: "Remove SOLIDWORKS PDM client files and registry entries before reinstalling the software."
slug: "clean-uninstall-solidworks-pdm-client"
---

<p>When a workstation experiences persistent SOLIDWORKS PDM issues, removing every trace of the client can help. The following checklist walks through a complete uninstall, including cached files and registry entries. Only perform these steps on client machines&mdash;not on servers hosting vault components.</p>

<h2>Prepare the Vault View</h2>

<ol>
  <li>Check in all files from the workstation. If you cannot log in, continue to the next step.</li>
  <li>Right-click the local vault view and choose <strong>Delete File Vault View</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/Delete-vault-view.png" alt="SOLIDWORKS PDM delete file vault view dialog" />
</figure>

<p>If you still need the cached files, select <em>Leave the local contents of the file vault view as normal files and folders</em>. Otherwise choose to remove the cached files.</p>

<figure>
  <img src="/assets/images/leave-local-contents.png" alt="Option to leave local vault contents during deletion" />
</figure>

<ol start="3">
  <li>Rename the remaining local folder (for example, <code>PDM Vault_OLD</code>) to preserve any content you need to review.</li>
  <li>Uninstall <strong>SOLIDWORKS PDM Client</strong> from <em>Programs and Features</em> in the Windows Control Panel.</li>
  <li>Restart the computer to release DLLs and background processes.</li>
</ol>

<h2>Clean Up Registry and File System Entries</h2>

<p><strong>Warning:</strong> Editing the Windows registry requires administrative rights and can impact system stability. Proceed carefully.</p>

<ol>
  <li>Launch <code>regedit</code> and remove (or rename) the <code>PDMWorks Enterprise</code> keys from:<br />
    <code>HKEY_LOCAL_MACHINE\SOFTWARE\SolidWorks\Applications\PDMWorks Enterprise</code><br />
    <code>HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\SolidWorks\Applications\PDMWorks Enterprise</code><br />
    <code>HKEY_CURRENT_USER\Software\SolidWorks\Applications\PDMWorks Enterprise</code></li>
  <li>Browse to <code>%localappdata%\SolidWorks</code> and delete the <code>SOLIDWORKS PDM</code> folder.</li>
  <li>Remove any leftover installation folders under <code>C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS PDM</code> and <code>C:\Program Files (x86)\SOLIDWORKS PDM</code>.</li>
</ol>

<h2>Reinstall the Client</h2>

<p>After cleaning the system, reinstall SOLIDWORKS PDM Client and recreate the local vault view. The fresh install should eliminate configuration conflicts that caused the original problem.</p>
