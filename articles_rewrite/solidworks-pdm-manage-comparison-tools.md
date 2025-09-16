---
title: "Comparison Tools for SOLIDWORKS PDM and SOLIDWORKS Manage"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, SOLIDWORKS Manage, comparison tools, data management]
description: "Compare BOMs and CAD revisions with SOLIDWORKS PDM and extend analysis with SOLIDWORKS Manage."
slug: "solidworks-pdm-manage-comparison-tools"
---

<p>Design reviews move faster when you can spot differences between revisions without digging through folders. SOLIDWORKS PDM and SOLIDWORKS Manage offer comparison tools that highlight bill of materials changes, document properties, and geometry updates. Use the right tool for each scenario to keep engineering and manufacturing aligned.</p>

<h2>Compare Bills of Materials in SOLIDWORKS PDM</h2>

<p>The BOM tab in SOLIDWORKS PDM includes a <strong>Compare</strong> command that evaluates two versions of the same file. The results color-code components that were added, removed, or modified.</p>

<figure>
  <img src="/assets/images/1_PDM-BOM-Compare-1220x487.png" alt="SOLIDWORKS PDM BOM compare button on the bill of materials tab" />
</figure>

<p>Select the revision or version you want to evaluate against the current file.</p>

<figure>
  <img src="/assets/images/2-PDM-BOM-Compare-1220x493.png" alt="Selecting a SOLIDWORKS PDM BOM version to compare" />
</figure>

<p>The comparison highlights each difference so reviewers can confirm material changes before approving an engineering change.</p>

<figure>
  <img src="/assets/images/3-PDM-BOM-Compare.png" alt="Color-coded results showing differences between BOM versions" />
</figure>

<p>Remember that this tool compares versions of the same file. To evaluate different assemblies, move to SOLIDWORKS Manage.</p>

<h2>Compare SOLIDWORKS Models with Vault Versions</h2>

<p>While working inside SOLIDWORKS, the Compare command reads versions stored in the vault. You can compare document properties, features, and geometry for parts, assemblies, and drawings.</p>

<h3>Parts</h3>

<figure>
  <img src="/assets/images/5-SOLIDWORKS-Compare-Part-1220x367.png" alt="Accessing the SOLIDWORKS Compare tool from the Tools menu" />
</figure>

<figure>
  <img src="/assets/images/6-SOLIDWORKS-Compare-Part-1220x539.png" alt="Selecting document versions for a part comparison" />
</figure>

<figure>
  <img src="/assets/images/8-SOLIDWORKS-Compare-Part.png" alt="Feature comparison results between two part revisions" />
</figure>

<figure>
  <img src="/assets/images/9-SOLIDWORKS-Compare-Part-600x287.png" alt="SOLIDWORKS geometry comparison highlighting added and removed material" />
</figure>

<p>The interface opens both models side by side, listing feature changes and showing volumes that were added or removed.</p>

<h3>Assemblies</h3>

<figure>
  <img src="/assets/images/11-SOLIDWORKS-Compare-Assembly.png" alt="Comparing two SOLIDWORKS assembly versions" />
</figure>

<p>Assembly comparisons include document properties and geometry. Large assemblies may take longer to process because every component is analyzed.</p>

<h3>Drawings</h3>

<p>Drawings use the same command to compare document-level properties. For deeper analysis, use tools such as DrawCompare on separate drawing files.</p>

<h2>Review History with PDM Viewers</h2>

<p>The History dialog in SOLIDWORKS PDM lets you preview previous versions and launch them in eDrawings for manual inspection.</p>

<figure>
  <img src="/assets/images/13-PDM-Compare-Tool-1220x688.png" alt="Viewing legacy versions through the SOLIDWORKS PDM history window" />
</figure>

<p>If you install a third-party comparison utility, administrators can register it with the History dialog so users can select two versions and run the external comparison.</p>

<figure>
  <img src="/assets/images/17-PDM-Compare-Tool-1220x539.png" alt="SOLIDWORKS PDM history window with a custom comparison tool option" />
</figure>

<h2>Use SOLIDWORKS Manage for Advanced BOM Analysis</h2>

<p>SOLIDWORKS Manage extends BOM comparisons beyond single files. You can contrast variants such as regional packaging or compare entirely different assemblies.</p>

<figure>
  <img src="/assets/images/SOLIDWORKS-Manage-BOM-Compare-1220x580.png" alt="Opening the comparison tool from SOLIDWORKS Manage" />
</figure>

<p>Select revisions and BOM variants to evaluate.</p>

<figure>
  <img src="/assets/images/19-Manage-Compare-BOM-Variations-1220x147.png" alt="Choosing SOLIDWORKS Manage BOM revisions and variants" />
</figure>

<p>Results highlight additions, removals, and quantity changes. Export the report to Excel to share with stakeholders or attach to change documentation.</p>

<figure>
  <img src="/assets/images/20-Manage-Compare-BOM-Variations.png" alt="Comparison results between SOLIDWORKS Manage BOM variants" />
</figure>

<p>You can also compare different assemblies or object types stored in Manage.</p>

<figure>
  <img src="/assets/images/22-Manage-Compare-BOM-to-Different-Assembly-1220x424.png" alt="Selecting a different assembly for comparison in SOLIDWORKS Manage" />
</figure>

<figure>
  <img src="/assets/images/24-Manage-Compare-BOM-to-Different-Assembly.png" alt="SOLIDWORKS Manage comparison output for two assemblies" />
</figure>

<h2>Summary of Comparison Options</h2>

<ul>
  <li><strong>SOLIDWORKS PDM BOM Compare:</strong> Review added, removed, or modified components between versions of the same assembly.</li>
  <li><strong>SOLIDWORKS Compare:</strong> Analyze parts, assemblies, and drawings directly inside SOLIDWORKS using vault revisions.</li>
  <li><strong>PDM History and eDrawings:</strong> Open legacy versions for visual inspection or connect external comparison tools.</li>
  <li><strong>SOLIDWORKS Manage:</strong> Compare BOM variants or entirely different assemblies, then export the results for downstream teams.</li>
</ul>

<h2>Conclusion</h2>

<p>Combining SOLIDWORKS PDM and SOLIDWORKS Manage comparison tools gives reviewers the context they need to approve changes confidently. Use these capabilities to communicate revisions clearly and avoid surprises in production.</p>
