---
title: "Change the SOLIDWORKS PDM License Server in One Step"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, licensing, administration, data management]
description: "Update every vault to use a new SOLIDWORKS PDM license server from a single client."
slug: "solidworks-pdm-license-server-change"
---

<p>Moving SOLIDWORKS PDM licenses to a new server does not require reinstalling clients or touching each vault. You can redirect every user to the new SolidNetWork License (SNL) location from any administration console.</p>

<h2>Update the Licensing Node</h2>

<p>Log in to the SOLIDWORKS PDM Administration tool as the <strong>Admin</strong> user from any workstation. Expand your vault and double-click <em>Licensing</em> to open the <em>Set License</em> dialog.</p>

<figure>
  <img src="/assets/images/PDM-Licensing-Node.jpg" alt="SOLIDWORKS PDM licensing node showing server list" />
</figure>

<p>Select the <em>Server List</em> tab, click <strong>Add</strong>, and enter the new server using the <code>25734@servername</code> format (adjust the port if you customized SNL). After the new entry appears, highlight the old server and choose <strong>Remove</strong>.</p>

<h2>Apply the Change to All Vaults</h2>

<p>The licensing configuration is shared across all vault databases hosted on the same SQL Server instance. Updating the node once automatically points every vault to the new license host.</p>

<p>Notify users to exit SOLIDWORKS PDM and log back in so their clients read the updated server list. If they stay logged in, the old connection will expire after the one-hour grace period and access will be interrupted until they restart the client.</p>

<figure>
  <img src="/assets/images/Clients-Must-Log-Out.jpg" alt="Dialog reminding users to log out after the license server changes" />
</figure>

<h2>Conclusion</h2>

<p>A quick update to the licensing node keeps production running when you migrate the SOLIDWORKS PDM license server. Centralized administration ensures every client reconnects without manual reconfiguration.</p>
