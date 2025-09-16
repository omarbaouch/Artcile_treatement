---
title: "Automate SOLIDWORKS PDM Database Backups with SQL Server"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, SQL Server, backups, maintenance plan]
description: "Build a SQL Server maintenance plan that creates and cleans SOLIDWORKS PDM database backups every day."
slug: "solidworks-pdm-sql-backup-maintenance-plan"
---

<p>Protecting SOLIDWORKS PDM data requires backing up both the archive folders and the SQL database. If you run SOLIDWORKS PDM Professional on Microsoft SQL Server Standard or Enterprise, use SQL Server Agent to schedule daily <code>.bak</code> files that align with your archive backups. Remember: SOLIDWORKS PDM Standard relies on SQL Express, so you must use a different backup method there.</p>

<h2>Prepare SQL Server Agent</h2>

<ol>
  <li>Open <strong>SQL Server Configuration Manager</strong> and confirm the <strong>SQL Server Agent</strong> service is running. Start it if necessary.</li>
</ol>

<figure>
  <img src="/assets/images/SQL-Server-Agent.png" alt="SQL Server Configuration Manager showing the SQL Server Agent service running" />
</figure>

<h2>Launch the Maintenance Plan Wizard</h2>

<ol start="2">
  <li>Sign in to SQL Server Management Studio on the instance hosting your SOLIDWORKS PDM vault databases.</li>
</ol>

<figure>
  <img src="/assets/images/1-Login.jpg" alt="SQL Server Management Studio login window" />
</figure>

<ol start="3">
  <li>Expand <strong>Management</strong> in Object Explorer, right-click <strong>Maintenance Plans</strong>, and choose <strong>Maintenance Plan Wizard</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/Maintanence-Plan.png" alt="Object Explorer context menu for Maintenance Plans" />
</figure>

<ol start="4">
  <li>Review the welcome screen and click <strong>Next</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/3-Wizard.jpg" alt="Maintenance Plan Wizard introduction screen" />
</figure>

<h2>Define the Backup Schedule</h2>

<ol start="5">
  <li>Name the plan and keep <strong>Single schedule for the entire plan</strong> selected, then click <strong>Change</strong> to set the schedule.</li>
</ol>

<figure>
  <img src="/assets/images/4-Plan-Name.jpg" alt="Plan Properties dialog for a SQL Server maintenance plan" />
</figure>

<ol start="6">
  <li>Schedule the job to run daily, ensuring it finishes before any archive or disk backups.</li>
</ol>

<figure>
  <img src="/assets/images/5-Schedule.jpg" alt="SQL Server Agent job schedule configured for daily execution" />
</figure>

<h2>Select Maintenance Tasks</h2>

<ol start="7">
  <li>Choose both <strong>Back Up Database (Full)</strong> and <strong>Maintenance Cleanup Task</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/6-Tasks.jpg" alt="Maintenance Plan Wizard task selection screen" />
</figure>

<ol start="8">
  <li>Accept the default task order.</li>
</ol>

<figure>
  <img src="/assets/images/7-Task-Order.jpg" alt="Maintenance Plan Wizard task order confirmation" />
</figure>

<h2>Configure the Backup Task</h2>

<ol start="9">
  <li>Select the SOLIDWORKS PDM vault databases and <code>ConisioMasterDb</code> for inclusion.</li>
</ol>

<figure>
  <img src="/assets/images/8a-Select-Databases.jpg" alt="Database selection for SOLIDWORKS PDM maintenance plan" />
</figure>

<ol start="10">
  <li>Set the destination folder, ensure the extension is <strong>bak</strong> (without a leading period), and create a separate file for each database.</li>
</ol>

<figure>
  <img src="/assets/images/8b-Destination.jpg" alt="Destination tab specifying backup file path and extension" />
</figure>

<h2>Configure the Cleanup Task</h2>

<ol start="11">
  <li>Target the same folder, delete files with the <strong>bak</strong> extension, and keep seven to fourteen days of history according to policy.</li>
</ol>

<figure>
  <img src="/assets/images/9-Cleanup.jpg" alt="Maintenance Cleanup Task settings for removing old .bak files" />
</figure>

<h2>Finalize the Plan</h2>

<ol start="12">
  <li>Optionally set a custom report location, then click <strong>Next</strong>.</li>
</ol>

<figure>
  <img src="/assets/images/10-Report.jpg" alt="Report options for the SQL maintenance plan" />
</figure>

<ol start="13">
  <li>Confirm the summary and click <strong>Finish</strong> to create the maintenance plan.</li>
</ol>

<figure>
  <img src="/assets/images/Finish.jpg" alt="Maintenance Plan Wizard completion summary" />
</figure>

<p>Copy the resulting backup files off the SQL server alongside your archive snapshots each night. Coordinated, automated backups keep SOLIDWORKS PDM data management resilient against outages.</p>
