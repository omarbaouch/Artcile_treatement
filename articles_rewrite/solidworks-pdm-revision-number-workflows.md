---
title: "When to Increment Revision Numbers in SOLIDWORKS PDM"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, revision management, workflows, data management]
description: "Compare default and alternative SOLIDWORKS PDM workflows to decide when to assign new revision numbers."
slug: "solidworks-pdm-revision-workflows"
---

<p>During SOLIDWORKS PDM implementations, teams often debate whether the next revision should be created as soon as engineering starts a change or only after approval. Understanding how the vault handles revisions helps administrators design workflows that satisfy both data management rules and user expectations.</p>

<h2>How the Default Workflow Handles Revisions</h2>

<p>The predefined <em>Default</em> workflow increments the revision when a file enters the Approved state. Users make their edits under the previous revision label until the change is reviewed and promoted.</p>

<figure>
  <img src="/assets/images/default_wf.jpg" alt="Default SOLIDWORKS PDM workflow showing approval transitions" />
</figure>

<p>History records confirm this behavior: revision A appears on version 3 after approval, and revision B is stamped on version 5. Versions created during the work in progress retain the earlier revision value.</p>

<figure>
  <img src="/assets/images/history1.jpg" alt="File history showing revision letters assigned after approval" />
</figure>

<p>This method aligns with built-in functions such as Get Version, Cold Storage, and reporting tools that assume a revision is tied to a released version.</p>

<h2>Assigning Revisions Before Approval</h2>

<p>Some departments prefer to display the next revision as soon as engineering starts a change. Achieving that behavior requires an additional workflow state and, in SOLIDWORKS PDM Professional, an automatic transition that sets the new revision upon the first check-in.</p>

<figure>
  <img src="/assets/images/modified_wf.jpg" alt="Workflow modified to add a pre-approval revision state" />
</figure>

<p>The resulting history shows revision letters assigned to work-in-progress versions even though approval has not occurred.</p>

<figure>
  <img src="/assets/images/history2.jpg" alt="History list with revisions applied prior to approval" />
</figure>

<p>From the data card perspective, the record looks identical to the default workflow.</p>

<figure>
  <img src="/assets/images/card.jpg" alt="SOLIDWORKS PDM data card displaying revision B" />
</figure>

<h2>Risks of Pre-Approval Revisions</h2>

<p>Although the alternative workflow displays the expected revision, it conflicts with other SOLIDWORKS PDM behaviors:</p>

<h3>Get Version Shows the Wrong Data</h3>

<figure>
  <img src="/assets/images/get_version.jpg" alt="SOLIDWORKS PDM Get Version menu listing older versions" />
</figure>

<p>When non-design groups retrieve the latest approved version, they may actually receive an unreleased work-in-progress file, because the revision letter was applied before approval.</p>

<h3>Permissions Become Difficult to Manage</h3>

<figure>
  <img src="/assets/images/permissions.jpg" alt="Permission settings for the Show working versions of files option" />
</figure>

<p>The <em>Show working versions of files</em> permission no longer hides unreleased data. Users without design privileges might see the pre-release version instead of the approved revision.</p>

<h3>Cold Storage Treats the Wrong Version as Released</h3>

<figure>
  <img src="/assets/images/cold_storage.jpg" alt="Cold storage schema assigning rules based on revision versions" />
</figure>

<p>Cold storage rules that protect released revisions may archive or delete the wrong file. Compliance programs that require permanent retention could be compromised.</p>

<h2>A Balanced Alternative</h2>

<p>If you need the data card to display the upcoming revision during development, update the revision variable when the change request is created, but only increment the actual revision during the approval transition.</p>

<figure>
  <img src="/assets/images/Revision-Variable-Only2-600x426.jpg" alt="Workflow transition updating the revision variable before approval" />
</figure>

<figure>
  <img src="/assets/images/Passed-Approval2-600x432.jpg" alt="Workflow transition that increments the revision after approval" />
</figure>

<p>This compromise keeps SOLIDWORKS PDM&rsquo;s revision counter in sync with released versions while still communicating the upcoming revision on the data card. Consider adding the workflow state next to the revision field to clarify that the new letter is still in progress.</p>

<figure>
  <img src="/assets/images/Rev-out-of-sync.jpg" alt="Comparison of revision values on the data card and in the history" />
</figure>

<h2>Conclusion</h2>

<p>SOLIDWORKS PDM can increment a revision at any point in the workflow, but releasing the revision during approval avoids conflicts with built-in automation. If business requirements demand early visibility of the next revision, update data card variables without changing the actual revision entry until release to maintain reliable data management.</p>
