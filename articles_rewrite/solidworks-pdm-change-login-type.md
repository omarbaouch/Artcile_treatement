---
title: "How to Change SOLIDWORKS PDM Vault Login Types"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, administration, login settings, data management]
description: "Switch between SOLIDWORKS PDM, Windows, or LDAP authentication after installation."
slug: "solidworks-pdm-change-login-type"
---

<p>During server installation, SOLIDWORKS PDM prompts you to choose a default authentication method. Administrators can later switch a vault to SOLIDWORKS PDM logins, Windows, or LDAP authentication depending on company requirements. Follow these steps to adjust the login type safely.</p>

<h2>Open Archive Server Configuration</h2>

<p>On the archive server, browse to <strong>Start &gt; All Programs &gt; SOLIDWORKS PDM &gt; Archive Server Configuration</strong>. Run the utility as an administrator.</p>

<figure>
  <img src="/assets/images/archive-server-config.png" alt="Opening the Archive Server Configuration tool" />
</figure>

<h2>Edit Vault Properties</h2>

<p>In the left pane, right-click the vault that needs a new authentication method and choose <em>Properties</em>. The vault properties window displays the current login type along with other connection details.</p>

<figure>
  <img src="/assets/images/Vault-properties.png" alt="Vault properties dialog in SOLIDWORKS PDM" />
</figure>

<h2>Select a New Login Type</h2>

<p>Choose between SOLIDWORKS PDM logins, Windows authentication, or LDAP. Switching to SOLIDWORKS PDM logins is a helpful troubleshooting step because it removes dependencies on Active Directory or LDAP servers.</p>

<figure>
  <img src="/assets/images/login-type.png" alt="Selecting a login type in the vault properties" />
</figure>

<h2>Provide Directory Credentials</h2>

<p>If you select Windows or LDAP, supply the domain controller information and designate which users or groups should access the vault. Ensure the service account running the archive server has permission to query the directory.</p>

<figure>
  <img src="/assets/images/LDAP.png" alt="Configuring LDAP server settings for SOLIDWORKS PDM" />
</figure>

<figure>
  <img src="/assets/images/Windows.png" alt="Choosing Windows users and groups for vault access" />
</figure>

<h2>Conclusion</h2>

<p>Adjusting authentication settings lets administrators align SOLIDWORKS PDM security with IT policies. Use SOLIDWORKS PDM logins to isolate issues during troubleshooting, then switch back to Windows or LDAP once directory integration is verified.</p>
