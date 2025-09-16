---
title: "Add SOLIDWORKS PDM Licenses to an Existing SNL Manager"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, licensing, SolidNetWork License Manager, administration]
description: "Extend your SolidNetWork License Manager with SOLIDWORKS PDM serial numbers in six steps."
slug: "add-epdm-licenses-solidnetwork-license-manager"
---

<p>SOLIDWORKS PDM Professional (formerly Enterprise PDM) now relies on the SolidNetWork License Manager (SNL) instead of standalone license files. If you already host SOLIDWORKS CAD licenses on SNL, simply add your PDM serial numbers to the same server by following this process.</p>

<h2>1. Match the Software Versions</h2>

<p>Ensure the SNL Manager version matches your SOLIDWORKS PDM release—for example, EPDM 2015 requires the 2015 SNL Manager. Older SOLIDWORKS CAD clients can still connect to the newer license manager.</p>

<figure>
  <img src="/assets/images/Step-11.png" alt="SolidNetWork License Manager version selection" />
</figure>

<h2>2. Modify the Existing Installation</h2>

<p>Open <strong>Control Panel &gt; Programs and Features</strong>, select <strong>SolidNetWork License Manager</strong>, and choose <strong>Change</strong>. In the Installation Manager, pick <strong>Modify</strong> and click <strong>Next</strong>.</p>

<figure>
  <img src="/assets/images/Step-21.png" alt="Modify option in the SolidNetWork License Manager installer" />
</figure>

<h2>3. Enter the PDM Serial Number</h2>

<p>Select <strong>Install</strong> to continue, then on the <strong>License Information</strong> screen add your 24-digit SOLIDWORKS PDM serial number. Separate it from existing SOLIDWORKS serials with a comma. You can retrieve serial numbers from the SOLIDWORKS Customer Portal if needed.</p>

<figure>
  <img src="/assets/images/Step-3-b.png" alt="Installation summary before adding SOLIDWORKS PDM licenses" />
</figure>

<figure>
  <img src="/assets/images/Step-3.png" alt="License information screen for entering SOLIDWORKS PDM serial numbers" />
</figure>

<h2>4. Reactivate the License Manager</h2>

<p>After the installer finishes, launch the SolidNetWork License Manager. On the <strong>Server Administration</strong> tab, click <strong>Modify</strong> to start reactivation.</p>

<figure>
  <img src="/assets/images/Step-4.png" alt="Server Administration tab with Modify button highlighted" />
</figure>

<h2>5. Activate the Updated License Pool</h2>

<p>Choose <strong>Activate/Reactivate a software license</strong> and proceed.</p>

<figure>
  <img src="/assets/images/Step-5.png" alt="Activation wizard selection inside SolidNetWork License Manager" />
</figure>

<h2>6. Select All Products</h2>

<p>Highlight every product in the list and click <strong>Next</strong> to complete activation. The PDM seats are now available to clients.</p>

<figure>
  <img src="/assets/images/Step-6.png" alt="Selecting products before activating SolidNetWork licenses" />
</figure>

<h2>Need a Walkthrough?</h2>

<p>For a visual guide, watch the video <a href="https://www.youtube.com/watch?v=fGtmHGhF21E">Tech Tip: Adding the EPDM License to an existing SolidNetwork License Manager</a>.</p>

<p>Keeping licensing centralized simplifies administration and ensures SOLIDWORKS PDM clients can obtain seats alongside CAD users.</p>
