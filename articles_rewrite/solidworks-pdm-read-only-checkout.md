---
title: "Fix SOLIDWORKS PDM Checkouts Opening as Read-Only"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, permissions, troubleshooting, data management]
description: "Resolve read-only SOLIDWORKS PDM files by updating Windows folder permissions and file flags."
slug: "solidworks-pdm-read-only-checkout"
---

<p>If a checked-out SOLIDWORKS PDM file still opens as read-only, Windows is likely blocking the vault from toggling file attributes. Correcting folder permissions restores normal checkout behavior and prevents lost work.</p>

<h2>Why the Read-Only Flag Matters</h2>

<p>During checkout, SOLIDWORKS PDM removes the read-only attribute from the cached file so you can edit it. When the file is checked back in, PDM re-enables the attribute to stop unauthorized edits. Without the ability to flip that flag, the vault behaves as if the file were never checked out.</p>

<figure>
  <img src="/assets/images/Read-only-check-box-Properties-window.png" alt="Windows file properties showing the read-only checkbox" />
</figure>

<h2>Grant Full Control on the Vault Folder</h2>

<ol>
  <li>Open File Explorer and browse to the local vault view folder.</li>
  <li>Right-click the vault and choose <strong>Properties</strong> (in Windows 11 select <em>Show More Options</em> first).</li>
</ol>

<figure>
  <img src="/assets/images/Right-Click-Properties.png" alt="Accessing vault view properties from the context menu" />
</figure>

<p>Switch to the <strong>Security</strong> tab and confirm that your Windows account and the Users group have full control.</p>

<figure>
  <img src="/assets/images/Security-Properties-Window.png" alt="Security tab of the vault folder properties" />
</figure>

<p>If you are unsure which account to add, run <code>whoami</code> in a Command Prompt to display the current domain and username.</p>

<figure>
  <img src="/assets/images/whoami-Command-Prompt.png" alt="Using the whoami command to identify the Windows user" />
</figure>

<p>Add the account, grant <strong>Full control</strong>, and repeat for the Users group.</p>

<figure>
  <img src="/assets/images/Full-Control-Security-Box.png" alt="Granting full control permissions on the vault folder" />
</figure>

<h2>Clear the Read-Only Attribute Manually</h2>

<p>After updating permissions, right-click the affected file inside the vault view and open <strong>Properties</strong>.</p>

<figure>
  <img src="/assets/images/File-Right-Click-Properties-1.png" alt="Opening file properties from the SOLIDWORKS PDM vault" />
</figure>

<p>Uncheck the <strong>Read-only</strong> option and select <strong>OK</strong>. You should now be able to check in the file and resume normal operation.</p>

<figure>
  <img src="/assets/images/File-Read-only-check-box-Properties-window.png" alt="Removing the read-only attribute from a file" />
</figure>

<h2>Conclusion</h2>

<p>Ensuring that the vault folder grants full control to end users allows SOLIDWORKS PDM to manage file attributes correctly. Once permissions are set, read-only checkouts disappear and designers can check in their work without delays.</p>
