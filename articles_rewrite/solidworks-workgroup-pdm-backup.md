---
title: "Back Up the SOLIDWORKS Workgroup PDM Vault"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [Workgroup PDM, backups, data management]
description: "Locate the Workgroup PDM vault folder and set a regular backup routine to protect project data."
slug: "solidworks-workgroup-pdm-backup"
---

<p>SOLIDWORKS Workgroup PDM stores every project file, user account, and revision inside a single vault folder. That self-contained design makes backups simple—as long as you know where the folder resides and copy it on a schedule.</p>

<h2>Find the Vault Folder</h2>

<p>Launch the Workgroup PDM VaultAdmin tool on any machine with the client installed. On the <strong>Vault Management</strong> tab, note the <strong>Vault computer</strong> host and the <strong>Root Directory</strong>. The root directory—<code>C:\VaultData</code> by default—is the top-level folder you must back up.</p>

<figure>
  <img src="/assets/images/Vault-Location.png" alt="Workgroup PDM VaultAdmin showing the vault root directory" />
</figure>

<h2>Back Up Everything</h2>

<p>The vault folder contains user accounts, project trees, and all SOLIDWORKS models. Copy the entire directory to secure storage.</p>

<figure>
  <img src="/assets/images/Folder.png" alt="Windows Explorer listing the SOLIDWORKS Workgroup PDM vault data folder" />
</figure>

<h2>Establish a Schedule</h2>

<p>Back up the vault daily to a separate server or NAS, and replicate that backup off-site at least weekly. Treat Workgroup PDM data as the critical business asset it is.</p>
