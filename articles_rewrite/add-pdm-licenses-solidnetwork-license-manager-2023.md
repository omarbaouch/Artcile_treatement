---
title: "Update SOLIDWORKS PDM Licenses in SolidNetWork License Manager"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, licensing, SolidNetWork License Manager, administration]
description: "Add or remove SOLIDWORKS PDM serial numbers using the 2023 Product Activation Wizard or legacy workflow."
slug: "add-pdm-licenses-solidnetwork-license-manager-2023"
---

<p>SOLIDWORKS PDM 2023 streamlines license management by letting administrators add serial numbers directly from the SolidNetWork License Manager (SNL) Product Activation Wizard. Earlier releases required modifying the Windows installation. Follow the appropriate steps for your environment.</p>

<h2>Before You Begin</h2>

<p>Confirm the SNL Manager version matches your SOLIDWORKS PDM release. For example, PDM 2023 requires the 2023 SNL Manager, although older SOLIDWORKS CAD clients can still connect.</p>

<h2>Add or Remove Licenses in 2023 and Newer</h2>

<ol>
  <li>On the SNL server, open the SolidNetWork License Manager application and switch to the <strong>Server Administration</strong> tab. Click <strong>Modify</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/new_1.png" alt="Server Administration tab in SolidNetWork License Manager with the Modify button highlighted" />
</figure>

<ol start="2">
  <li>Select <strong>Activate/Reactivate your product license(s)</strong> and click <strong>Next</strong> twice.</li>
</ol>

<figure>
  <img src="/assets/images/new_2.png" alt="Activation wizard showing options to activate or reactivate product licenses" />
</figure>

<ol start="3">
  <li>Use the new <strong>Add</strong> and <strong>Remove</strong> buttons to manage serial numbers. Paste multiple serials on separate lines, or select entries to remove them.</li>
</ol>

<figure>
  <img src="/assets/images/new_3.png" alt="Dialog with Add and Remove buttons for managing SOLIDWORKS PDM serial numbers" />
</figure>

<ol start="4">
  <li>Choose <strong>Next</strong> to apply the changes. The wizard reactivates your products automatically.</li>
</ol>

<h2>Legacy Process for 2015–2022</h2>

<ol>
  <li>Open <strong>Control Panel &gt; Programs and Features</strong>, select <strong>SOLIDWORKS SolidNetWork License Manager</strong>, and choose <strong>Modify/Change</strong>.</li>
  <li>Proceed through the installer, choose <strong>Modify</strong>, then click <strong>Install</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/old_1.png" alt="Modify option inside the SolidNetWork License Manager installer" />
</figure>

<figure>
  <img src="/assets/images/old_2.png" alt="Install step when updating SolidNetWork License Manager components" />
</figure>

<ol start="3">
  <li>Add or remove serial numbers in the license information field, separating entries with commas, and click <strong>Next</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/old_3.png" alt="Field for entering SOLIDWORKS and PDM serial numbers separated by commas" />
</figure>

<h2>Reactivate After Modifying the Installation</h2>

<ol>
  <li>Launch the SNL Manager. If prompted to activate, select <strong>Yes</strong>. Otherwise, return to the <strong>Server Administration</strong> tab and click <strong>Modify</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/old_4.png" alt="Server Administration tab prompting to modify license information" />
</figure>

<ol start="2">
  <li>Choose <strong>Activate/Reactivate your product license(s)</strong> and click <strong>Next</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/old_5.png" alt="Activation wizard option for reactivating SolidNetWork licenses" />
</figure>

<ol start="3">
  <li>Select <strong>Select All</strong>, keep <strong>Automatically over the Internet</strong> enabled, provide a valid email address, and click <strong>Next</strong> to finish.</li>
</ol>

<figure>
  <img src="/assets/images/old_6.png" alt="Activation summary showing all products selected for internet activation" />
</figure>

<h2>Keep Licenses Current</h2>

<p>Whether you use the new activation workflow or the legacy installer, keeping SOLIDWORKS PDM serial numbers up to date ensures designers and data management users always have access to the seats they need.</p>
