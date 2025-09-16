---
title: "Enable Get Version Access in SOLIDWORKS PDM"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, data management, Get Version, add-in]
description: "Let designers retrieve older revisions while still defaulting to the latest SOLIDWORKS PDM files."
slug: "enable-get-version-solidworks-pdm"
---

<p>Administrators can let designers always open the latest revision in SOLIDWORKS PDM while still permitting them to fetch older copies when needed. The Get Version command in the SOLIDWORKS add-in keeps vault data synchronized without forcing a trip back to Windows Explorer.</p>

<h2>Turn on the Get Version Command</h2>

<p>Within the SOLIDWORKS PDM Administration tool, edit the appropriate user or group settings and enable <strong>Enable the get version command in SOLIDWORKS Add-in</strong>. This option keeps the <em>Always work with latest version of files</em> preference intact but exposes a manual override inside SOLIDWORKS.</p>

<figure>
  <img src="/assets/images/Enable-get-version.png" alt="SOLIDWORKS PDM user setting to enable the Get Version command" />
</figure>

<h2>Retrieve Earlier Revisions Inside SOLIDWORKS</h2>

<p>Once the setting is active, users can select <strong>Get Version</strong> from the SOLIDWORKS PDM task pane to download an earlier revision for offline reference or comparison. This capability only appears inside the SOLIDWORKS add-in, ensuring the vault maintains latest-version discipline while still supporting engineering change reviews.</p>

<figure>
  <img src="/assets/images/get.png" alt="Get Version option shown in the SOLIDWORKS PDM add-in" />
</figure>

<h2>Keep Data Access Flexible</h2>

<p>Combining the <em>Always work with latest version</em> rule with controlled Get Version access keeps projects moving. Teams stay confident they are editing the most current models, yet they retain the flexibility to inspect or restore prior revisions without leaving SOLIDWORKS PDM.</p>
