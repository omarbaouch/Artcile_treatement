---
title: "Fix SOLIDWORKS PDM Web2 Issues After an Upgrade"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, Web2, IIS, administration]
description: "Restore the Web2 application pool identity so SOLIDWORKS PDM stays accessible after upgrades."
slug: "solidworks-pdm-web2-post-upgrade-identity"
---

<p>After upgrading SOLIDWORKS PDM Professional, Web2 may stall at login, loop back to the sign-in page, or display a <em>Could not open database</em> error. The common culprit is the IIS application pool reverting to the default <strong>Network Service</strong> account.</p>

<h2>Confirm the Correct Service Account</h2>

<p>Web2 requires a Windows account that has logged into the vault, selected at least one folder, and belongs to both the <strong>IIS_IUSRS</strong> and local <strong>Administrators</strong> groups. If the identity changes during an upgrade, Web2 loses access.</p>

<h2>Update the Application Pool Identity</h2>

<ol>
  <li>Open <strong>Internet Information Services (IIS) Manager</strong>, select <strong>Application Pools</strong>, highlight <strong>SOLIDWORKS PDM Web2</strong>, and choose <strong>Advanced Settings</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/After-upgrade-1220x734.jpg" alt="IIS Manager showing the SOLIDWORKS PDM Web2 application pool" />
</figure>

<ol start="2">
  <li>In the Advanced Settings dialog, click the <strong>Identity</strong> field and then the browse button (<strong>…</strong>).</li>
</ol>

<figure>
  <img src="/assets/images/Advanced-Settings.jpg" alt="Advanced Settings dialog highlighting the Identity field" />
</figure>

<ol start="3">
  <li>Select <strong>Custom account</strong>, click <strong>Set</strong>, and enter the credentials for the approved Windows profile.</li>
</ol>

<figure>
  <img src="/assets/images/specific-user.jpg" alt="Dialog for setting the custom account credentials in IIS" />
</figure>

<h2>Verify Access</h2>

<p>Recycle the SOLIDWORKS PDM Web2 application pool and sign in again. The proper identity restores navigation, folder browsing, and file viewing across your SOLIDWORKS PDM data management environment.</p>
