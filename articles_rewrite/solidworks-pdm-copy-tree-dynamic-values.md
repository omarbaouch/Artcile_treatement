---
title: "Use Dynamic Variable Values in SOLIDWORKS PDM Copy Tree"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, copy tree, variables, automation]
description: "Populate metadata automatically when creating files with SOLIDWORKS PDM Copy Tree."
slug: "solidworks-pdm-copy-tree-dynamic-values"
---

<p>SOLIDWORKS PDM 2018 introduced dynamic variable values to the Copy Tree command, giving administrators more flexibility when creating new files. Instead of clearing or hard-coding metadata, you can populate variables with context-aware information such as the target filename or current user.</p>

<figure>
  <img src="/assets/images/Untitled.png" alt="Dynamic variable value options in the SOLIDWORKS PDM Copy Tree dialog" />
</figure>

<h2>Available Dynamic Values</h2>

<p>Click the <strong>Value</strong> column beside a variable while configuring Copy Tree and use the drop-down list to choose one or more of the following options:</p>

<ul>
  <li><strong>Current time</strong> and <strong>Today&rsquo;s date</strong> capture when the Copy Tree ran.</li>
  <li><strong>File Name</strong>, <strong>File name without extension</strong>, and <strong>File Path</strong> reference the source document.</li>
  <li><strong>Target File Name</strong>, <strong>Target File name without extension</strong>, and <strong>Target File Path</strong> use the new filename and destination chosen by the user.</li>
  <li><strong>Logged in user</strong>, <strong>User &ndash; Full name</strong>, <strong>User &ndash; initials</strong>, and <strong>User &ndash; User data</strong> pull values from the vault user record.</li>
</ul>

<p>Combine multiple dynamic values to build unique identifiers, automatically fill custom properties, or tag copies for auditing. The Copy Tree command writes the calculated values to the new files as soon as they are created.</p>
