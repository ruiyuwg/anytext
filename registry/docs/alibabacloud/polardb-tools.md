This topic describes the components of PolarDB-Tools and how to download and install PolarDB-Tools.

## **Usage guide**

PolarDB-Tools is a suite of PolarDB client tools for Alibaba Cloud Linux, Rocky Linux, CentOS Stream, and all versions of CentOS. It includes the following tools:

**Tool name**

**Description**

**Usage**

**Differences from native tools**

psql

A client tool for connecting to PostgreSQL.

The usage is the same as that of the native psql tool. For more information, see [the psql documentation on the official PostgreSQL website](https://www.postgresql.org/docs/14/app-psql.html?spm=a2c4g.311009.0.0.79c856b2pWU2Zn).

-   It is optimized for PolarDB for PostgreSQL (Compatible with Oracle) and supports Oracle compatibility syntax. Using the community version may cause unexpected errors.
    
-   You can use the community version of the psql tool to execute simple SQL statements when you manage a PolarDB cluster. Note that the community version of the psql tool does not support creating stored procedures. If you use it to create a stored procedure, the SQL string may be truncated unexpectedly.
    
-   When you use the psql client, you can download the latest version of PolarDB-Tools. Newer versions are backward-compatible.
    

pg\_dump

A logical backup tool for PostgreSQL used to back up a single database in a cluster.

The usage is the same as that of the native pg\_dump tool. For more information, see [the pg\_dump documentation on the official PostgreSQL website](https://www.postgresql.org/docs/14/app-pgdump.html).

-   PolarDB supports data backups and log backups in the console. For more information, see [Configure a backup policy](/help/en/polardb/polardb-for-oracle/configure-a-backup-policy).
    
-   It is optimized for PolarDB for PostgreSQL (Compatible with Oracle) and supports Oracle compatibility syntax. If you use the community version, some objects may not be dumped.
    
-   When you use the pg\_dump client, you can download the latest version of PolarDB-Tools. Newer versions are backward-compatible.
    

pg\_restore

A PostgreSQL tool used to restore backup files created by pg\_dump and pg\_dumpall.

The usage is the same as that of the native pg\_restore tool. For more information, see [the pg\_restore documentation on the official PostgreSQL website](https://www.postgresql.org/docs/14/app-pgrestore.html).

-   PolarDB supports two restore methods: point-in-time restore and restoring from a backup set (snapshot). These methods restore historical data to a new cluster. For more information, see [Restoration operations](/help/en/polardb/polardb-for-oracle/restoration-methods/).
    
-   It is optimized for PolarDB for PostgreSQL (Compatible with Oracle) and supports Oracle compatibility syntax. If you use the community version, some objects may not be restored.
    
-   When you use the pg\_restore client, you can download the latest version of PolarDB-Tools. Newer versions are backward-compatible.
    

ecpg

An embedded SQL C preprocessor.

The usage is the same as that of the native ecpg tool. For more information, see [the ecpg documentation on the official PostgreSQL website](https://www.postgresql.org/docs/14/app-ecpg.html).

-   It is optimized for PolarDB for PostgreSQL (Compatible with Oracle) and supports Oracle compatibility syntax. If you use the community version, some objects may not be transformed.
    
-   When you use the ecpg client, you can download the latest version of PolarDB-Tools. Newer versions are backward-compatible.
    

## **Download and installation**

1.  Download the PolarDB-Tools installation package. The download links are as follows:
    
    **System version**
    
    **Processor architecture**
    
    **PolarDB-Tools** **installation package**
    
    -   AliOS 8
        
    -   Alibaba Cloud Linux 3
        
    
    **Note**
    
    glibc version: 2.32.
    
    X86
    
    [PolarDB-Tools-2.0.14.40.0-20251225192324.al8.x86\_64.rpm](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20260107/igcyvm/PolarDB-Tools-2.0.14.40.0-20251225192324.al8.x86_64.rpm)
    
    ARM
    
    [PolarDB-Tools-2.0.14.40.0-20251225192324.al8.aarch64.rpm](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20260107/fjgmki/PolarDB-Tools-2.0.14.40.0-20251225192324.al8.aarch64.rpm)
    
    -   Anolis 8
        
    -   CentOS 8
        
    -   Rocky 8
        
    
    **Note**
    
    glibc version: 2.28.
    
    X86
    
    [PolarDB-Tools-2.0.14.31.0-20250516002749.el8.x86\_64.rpm](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250919/snlzux/PolarDB-Tools-2.0.14.31.0-20250516002749.el8.x86_64.rpm)
    
    ARM
    
    [PolarDB-Tools-2.0.14.31.0-20250516002749.el8.aarch64.rpm](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250919/jofdol/PolarDB-Tools-2.0.14.31.0-20250516002749.el8.aarch64.rpm)
    
    -   AliOS 7
        
    -   ALinux 2
        
    -   Anolis 7
        
    -   CentOS 7
        
    
    **Note**
    
    glibc version: 2.17.
    
    X86
    
    [PolarDB-Tools-2.0.14.40.0-20251225192324.alios7.x86\_64.rpm](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20260107/imknon/PolarDB-Tools-2.0.14.40.0-20251225192324.alios7.x86_64.rpm)
    
    ARM
    
    [PolarDB-Tools-2.0.14.40.0-20251225192324.alios7.aarch64.rpm](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20260107/pcrilh/PolarDB-Tools-2.0.14.40.0-20251225192324.alios7.aarch64.rpm)
    
2.  Run the following command to install the package.
    
    **Note**
    
    Use the name of the package that you downloaded.
    
    ```
    yum install PolarDB-Tools-2.0.14.30.0-20250301091754.alios7.x86_64.rpm
    ```
    
    After the installation is complete, the tools are installed in the `/u01/polardb_pg_tools/bin/` directory.
