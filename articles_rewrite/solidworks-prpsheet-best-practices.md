---
title: "Best Practices for Using $PRPSHEET with SOLIDWORKS PDM"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, data management, metadata, $PRPSHEET]
description: "Link SOLIDWORKS custom properties to PDM data cards with reliable $PRPSHEET mappings."
slug: "solidworks-prpsheet-best-practices"
---

<p>Engineering teams rely on SOLIDWORKS PDM to keep design data synchronized across models, drawings, and task-specific views. One of the most powerful tools for automating that synchronization is the <code>$PRPSHEET</code> variable, which bridges drawing notes, custom properties, and PDM data cards. Following a few best practices ensures that metadata moves cleanly between documents without creating duplicate entry work.</p>

<h2>Understand Where $PRPSHEET Gets Its Data</h2>

<p>In SOLIDWORKS, every part or assembly can store metadata as custom properties. Each property captures a value such as Customer, Description, or Material, and those values can then be displayed on other documents.</p>

<figure>
  <img src="/assets/images/Custom-Properties-2.png" alt="SOLIDWORKS part custom property showing a Customer value" />
</figure>

<p>When you add <code>$PRPSHEET</code> to a drawing note, the callout pulls the value of a property from the referenced model. Because the value lives with the model, editing the property in the part or assembly automatically updates the linked drawing text the next time the sheet is rebuilt.</p>

<figure>
  <img src="/assets/images/PRPSHEET.png" alt="Drawing note using the $PRPSHEET link to show a custom property" />
</figure>

<p>Using this approach means designers only enter information once, eliminating mismatched notes and reducing time spent on manual edits.</p>

<h2>Map SOLIDWORKS PDM Variables to Custom Properties</h2>

<p>SOLIDWORKS PDM stores similar metadata as variables on the file&rsquo;s data card. Those variables write values into the vault database so they can be searched, reported on, and reused in automated workflows.</p>

<figure>
  <img src="/assets/images/data-card-1.png" alt="SOLIDWORKS PDM data card displaying variable values" />
</figure>

<p>To keep the PDM database, model properties, and drawings synchronized, map each PDM variable to the matching SOLIDWORKS custom property. This mapping is created on the variable definition by adding an attribute that targets the property name used inside SOLIDWORKS.</p>

<figure>
  <img src="/assets/images/attributes.png" alt="Mapping a SOLIDWORKS PDM variable to a matching custom property" />
</figure>

<p>Once the mapping is in place, any value typed into the data card is automatically written to the model property. A drawing note that calls <code>$PRPSHEET:"Customer"</code> will then show the same customer name that appears on the data card.</p>

<figure>
  <img src="/assets/images/Information-flow-part-to-note-780x118.png" alt="Diagram showing data flow from a PDM data card to a drawing note" />
</figure>

<h2>Push Data Directly to Drawings with $PRPSHEET Attributes</h2>

<p>You can extend the mapping further by adding a second attribute to the same variable that targets the drawing file. This extra step allows SOLIDWORKS PDM to write the value into the drawing&rsquo;s custom properties during check-in, even if the drawing note references <code>$PRP</code> instead of <code>$PRPSHEET</code>.</p>

<figure>
  <img src="/assets/images/PRPattribute.png" alt="SOLIDWORKS PDM variable configuration with the $PRPSHEET attribute" />
</figure>

<p>With both mappings defined, the data flows from the vault data card to the model properties and finally to the drawing properties the next time the sheet is opened and saved.</p>

<figure>
  <img src="/assets/images/Information-flow-part-to-draw-780x154.png" alt="Diagram showing data flow from a PDM data card into drawing properties" />
</figure>

<h2>Keep Linked Metadata Up to Date</h2>

<p>Because SOLIDWORKS drawings update property values when they are opened, schedule time to rebuild and save any documents that should reflect new metadata. For larger batches, the SOLIDWORKS Task Scheduler <em>Update Files</em> command can process drawing updates automatically.</p>

<p>Remember that mapping values into drawings requires the SOLIDWORKS PDM add-in, which in turn needs an Editor license. Assemblies benefit from the exact same technique, so apply these practices consistently across your vault.</p>

<h2>Conclusion</h2>

<p>Linking SOLIDWORKS PDM variables through <code>$PRPSHEET</code> removes redundant data entry and keeps product documentation synchronized. By mapping variables to custom properties and confirming that the PDM add-in writes values back to drawings, administrators establish a reliable data management foundation that supports every revision.</p>
