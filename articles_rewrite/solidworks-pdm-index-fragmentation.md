---
title: "Check SOLIDWORKS PDM Database Index Fragmentation"
date: 2025-09-16
categories: [solidworks-pdm]
tags: [SOLIDWORKS PDM, SQL Server, index maintenance, data management]
description: "Use SQL queries to evaluate SOLIDWORKS PDM index fragmentation before reorganizing or rebuilding."
slug: "solidworks-pdm-index-fragmentation"
---

<p>SQL Server index maintenance is essential for SOLIDWORKS PDM performance, but automated rebuilds are not always the best answer. Start by measuring fragmentation so you can choose the appropriate maintenance action.</p>

<h2>Run a Fragmentation Report</h2>

<p>Microsoft provides the <code>sys.dm_db_index_physical_stats</code> function to evaluate fragmentation on each index. Execute the query below inside the vault database to list the most fragmented objects.</p>

<pre><code>SELECT
    dbschemas.[name] AS [Schema],
    dbtables.[name] AS [Table],
    dbindexes.[name] AS [Index],
    indexstats.avg_fragmentation_in_percent,
    indexstats.page_count
FROM sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, NULL) AS indexstats
INNER JOIN sys.tables dbtables
    ON dbtables.[object_id] = indexstats.[object_id]
INNER JOIN sys.schemas dbschemas
    ON dbtables.[schema_id] = dbschemas.[schema_id]
INNER JOIN sys.indexes AS dbindexes
    ON dbindexes.[object_id] = indexstats.[object_id]
    AND indexstats.index_id = dbindexes.index_id
WHERE indexstats.database_id = DB_ID()
ORDER BY indexstats.avg_fragmentation_in_percent DESC;</code></pre>

<p>SOLIDWORKS Knowledge Base article S-061702 also offers guidance on when to reorganize (typically 30 percent or lower fragmentation) versus rebuild.</p>

<h2>Be Selective with Rebuild Schedules</h2>

<p>SQL Server Agent can automate index maintenance, but scheduling a rebuild task to run blindly may waste resources. Industry experts argue that you should only rebuild when fragmentation is significantly affecting performance. Review articles such as <a href="http://www.brentozar.com/archive/2012/08/sql-server-index-fragmentation/" rel="nofollow">SQL Server Index Fragmentation</a> and Microsoft&rsquo;s <a href="http://blogs.technet.com/b/sql_server_isv/archive/2010/10/18/index-fragmentation-if-it-isn-t-broke-don-t-fix-it.aspx" rel="nofollow">If It Isn&rsquo;t Broke, Don&rsquo;t Fix It</a> to understand the trade-offs.</p>

<h2>Understand the Impact</h2>

<p>Not everyone agrees that fragmentation is a critical performance factor. Consider viewpoints such as <a href="https://www.youtube.com/watch?v=fD1CZVc6oUk" rel="nofollow">Why Index Fragmentation Doesn&rsquo;t Matter in SQL Server</a> before committing to aggressive maintenance plans.</p>

<h2>Conclusion</h2>

<p>Reorganize and rebuild remain valid tools, but they should follow data-driven decisions. Regularly review fragmentation metrics, then apply the appropriate SOLIDWORKS PDM database maintenance task instead of relying on blanket schedules.</p>
