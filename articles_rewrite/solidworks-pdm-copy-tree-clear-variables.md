---
title: "Clear Copy Tree Variables Automatically in SOLIDWORKS PDM"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, Copy Tree, data cards, automation]
description: "Configure Copy Tree settings so duplicated projects start with blank metadata in SOLIDWORKS PDM."
slug: "solidworks-pdm-copy-tree-clear-variables"
---

<p>Copy Tree is ideal for duplicating assemblies when launching a new project, but the command also copies data card values—like project numbers and revisions—that should be reset. Rather than clearing fields manually, define which variables SOLIDWORKS PDM should wipe during Copy Tree.</p>

<h2>See What Gets Copied</h2>

<p>The Copy Tree dialog automatically includes referenced files, and the destination cards inherit metadata from the originals.</p>

<figure>
  <img src="/assets/images/Copy-Tree.jpg" alt="Copy Tree command selected for a SOLIDWORKS assembly" />
</figure>

<figure>
  <img src="/assets/images/Copy-Tree-Dialogue.jpg" alt="Copy Tree dialog showing referenced assembly files" />
</figure>

<figure>
  <img src="/assets/images/Destination-Files.jpg" alt="Copied SOLIDWORKS PDM data card retaining original metadata" />
</figure>

<h2>Configure Automatic Clearing</h2>

<ol>
  <li>In SOLIDWORKS PDM Administration, right-click <strong>Users</strong> and choose <strong>Settings</strong>.</li>
  <li>Select <strong>Copy Tree</strong> from the left pane.</li>
  <li>Click <strong>Add…</strong> to specify file types. Leave <code>*.*</code> to apply the same rules to every extension, or define unique sets per file type.</li>
  <li>Choose <strong>Add Variable</strong> and pick each data card variable to clear. Leave <strong>Value</strong> blank so the field is emptied when Copy Tree runs.</li>
</ol>

<figure>
  <img src="/assets/images/Settings-1.jpg" alt="Copy Tree settings dialog listing variables to clear" />
</figure>

<h2>Launch Clean Projects</h2>

<p>After saving the settings, Copy Tree automatically resets the selected variables for every duplicate. The team gets a fresh data card without worrying about stale revisions or project identifiers.</p>
