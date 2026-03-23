Release notes describe the new features, feature optimizations, and bug fixes in each new engine version. This helps you quickly understand the latest capabilities, performance improvements, and resolved issues.

Detailed release notes for each engine are listed below. They include instructions on how to view your engine version in the console and how to upgrade. This helps you identify your current version and upgrade as needed.

-   [Release notes for LindormTable](/help/en/lindorm/product-overview/release-notes-of-lindormtable)
    
-   [Release notes for LindormTSDB](/help/en/lindorm/product-overview/release-notes-of-lindormtsdb)
    
-   [Release notes for LindormSearch](/help/en/lindorm/product-overview/release-notes-of-lindormsearch)
    
-   [Release notes for LindormDFS](/help/en/lindorm/product-overview/release-notes-of-lindormdfs)
    

## **Latest release notes for Lindorm engines**

### **LindormTable**

**Version number**

**Release date**

**Type**

**Description**

2.8.6

January 21, 2026

New features

-   Supports setting memory limits for SQL queries using the [QUERY\_MAX\_MEM](/help/en/lindorm/developer-reference/alter-system-1#95c3cb535fica) system parameter.
    
-   Supports the `INSERT INTO SELECT` syntax.
    
-   Enables batch updates and deletions by default to improve performance.
    
-   Supports multiple [JSON functions](/help/en/lindorm/developer-reference/lindorm-sql-json-function-reference).
    
-   Supports using SQL to show or kill queries initiated by HBase clients.
    

Feature optimizations

-   Optimizes the performance of the HBase-compatible layer.
    
-   Optimizes the performance of SQL read and write operations on many columns.
    
-   Optimizes the write performance for Multi-zone Deployment (Basic).
    
-   Optimizes the index building process.
    
-   Includes other stability fixes.
    

### **LindormTSDB**

**Version number**

**Release date**

**Type**

**Description**

3.4.48

January 6, 2026

Feature optimizations

-   Fixes an issue where the monitoring metric for the response time (RT) of SQL queries in the console returns no data.
    
-   Fixes an error that occurs in queries that use the TagValue in operator.
    
-   Includes stability fixes.
    

### **search engine**

**Version number**

**Release date**

**Type**

**Description**

3.9.31.1

September 10, 2025

New features

-   Supports the use of numeric types as enumeration values for enumeration partitions.
    
-   Supports the customization of all files in the IK dictionary.
    
-   Supports search paging for efficient and postFilter.
