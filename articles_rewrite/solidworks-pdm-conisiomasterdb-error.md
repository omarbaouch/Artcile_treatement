---
title: "Fix the 'Could Not Add Vault to ConisioMasterDb' Error"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, SQL Server, troubleshooting, installation]
description: "Resolve ConisioMasterDb file conflicts when creating a SOLIDWORKS PDM vault after reinstalling SQL Server."
slug: "solidworks-pdm-conisiomasterdb-error"
---

<p>After reinstalling Microsoft SQL Server and SOLIDWORKS PDM on the same machine, you might see the message <em>“Could not add vault ‘[VaultName]’ to the SOLIDWORKS PDM master database ‘ConisioMasterDb’.”</em> The error indicates that legacy database files are blocking the creation of the master vault database.</p>

<h2>Why the Error Appears</h2>

<p>When you create the first vault on a server, SOLIDWORKS PDM generates the <code>ConisioMasterDb</code> database along with two files:</p>

<ul>
  <li><strong>ConisioMasterDb.mdf</strong> &ndash; stores core metadata for the vault environment.</li>
  <li><strong>ConisioMasterDb.ldf</strong> &ndash; records transaction logs for the master database.</li>
</ul>

<p>If SQL Server was previously installed, older versions of these files may remain in the data directory. PDM cannot overwrite them, so the vault creation fails.</p>

<h2>Steps to Resolve</h2>

<ol>
  <li><strong>Verify backups.</strong> Ensure you have current backups of any existing PDM databases before deleting files.</li>
  <li>Navigate to the SQL data directory, typically <code>C:\Program Files\Microsoft SQL Server\MSSQLXX.MSSQLSERVER\MSSQL\DATA</code>.</li>
  <li>Delete <code>ConisioMasterDb.mdf</code> and <code>ConisioMasterDb.ldf</code>.</li>
  <li>Return to the SOLIDWORKS PDM Administration tool and create the vault again. PDM will regenerate fresh master database files.</li>
</ol>

<p>Once the files are recreated, you can continue restoring or configuring the vault without further errors.</p>
