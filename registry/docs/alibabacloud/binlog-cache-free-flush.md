If your application runs large transactions, the time that is required to process binary logs during the transaction commitment is excessively long and your ApsaraDB RDS for MySQL instance stops responding or fails to process write requests for a long period of time. To resolve the issues, ApsaraDB RDS for MySQL provides the binlog cache free flush feature. This feature optimizes the commitment of large transactions and improves the stability of your RDS instance.

## **Prerequisites**

Your RDS instance runs MySQL 8.0 or MySQL 5.7 and a minor engine version of 20240731 or later.

**Note**

To view the minor engine version of your RDS instance, you can log on to the ApsaraDB RDS console and go to the **Basic Information** page. In the **Configuration Information** section, check whether the **Upgrade Kernel Version** button is displayed. If the button is displayed, you can click the button to view and update the minor engine version of your RDS instance. If the button is not displayed, your RDS instance runs the latest minor engine version. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).

## **Implementation**

### **Binary log cache**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3646817471/CAEQFRiBgMCo15KF6RgiIDQ0MDEzOGNlMWVmNjQ0ODk5Y2ViM2NjMWNiNzM3MzFm4134512_20231222161436.781.svg)

A binary log cache is the session-level disk space that is occupied by temporary files. A binary log cache is allocated for each session to temporarily store binary log events. The size of a binary log cache is the sum of the memory cache size and the size of temporary files. The memory cache size is specified by the binlog\_cache\_size parameter. If a transaction is large and the memory cache is full, the events of the transaction are recorded in a temporary file.

During the execution of a transaction, the events that are generated are temporarily stored in the binary log cache. If a transaction is being committed, the system reads the generated events one after another from the binary log cache, updates the end position and the checksum, and then writes the events to a binary log file. The entire process requires a lock to ensure that the events that are generated for the transaction are written to the binary log without interruptions. As a result, if the events of one transaction are written to the binary log file, other transactions are blocked.

### **Impacts caused by binary log writes from large transactions**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3646817471/CAEQFRiBgICR2JKF6RgiIDNhMGVlN2QwODU4ZDQxYjg5OTQ5ZjZlYTBlOGEyMGU24134512_20231222161436.781.svg)

If a transaction is excessively large and occupies a binary log cache of dozens of GB, the time that is required to write the events of the transaction to a binary log file during the transaction commitment is long. This causes the following impacts:

-   Writing the events of a large transaction to a binary log file requires a write lock. As a result, the RDS instance fails to process write requests during the write process.
    
-   Writing the events of a large transaction to a binary log file consumes a large amount of I/O resources. If the I/O resources are insufficient, the RDS instance may stop responding.
    

### **Optimization of the binlog cache free flush feature**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3646817471/CAEQFRiBgMCW2ZKF6RgiIGYwMzE5MzNkZWU1NTQwN2U5YmIzYTRkOWE1MWJkYjll4134512_20231222161436.781.svg)

AliSQL optimizes the binlog cache free flush feature. After the optimization, temporary files that are stored in a binary log cache can be converted into binary log files. After the binlog cache free flush feature is enabled, the temporary files in a binary log cache are converted into binary log files during the commitment of a large transaction. This helps improve efficiency, reduce the consumption of I/O resources, and reduce the impacts that are caused by binary log writes from large transactions on an RDS instance.

#### **Optimization of the binary log caching mechanism**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4646817471/CAEQFRiBgMD82ZKF6RgiIDQ0ZTNhMWY2Y2YyYzQ0Mzk5N2FlYTg5YzFiOTA5MTYz4134512_20231225094850.090.svg)

To convert temporary files in a binary log cache into binary log files, AliSQL optimizes the binary log caching mechanism from the following aspects:

-   When the system writes temporary files in the binary log cache, some space is reserved for file headers. When a temporary file is converted into a binary log file, the reserved space is used to store event headers in the binary log file.
    
-   When the system writes data to the binary log cache, each event calculates its end position based on the size of the reserved space.
    

#### **Conversion of temporary files into binary log files**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4646817471/CAEQFRiBgIDY2pKF6RgiIGQyZDBkNzNlMTM5MDQwNDI4MDAxMjE4Y2IyY2NiN2I54134512_20231225094850.090.svg)

If a large transaction is committed, the system converts the temporary file in a binary log cache into a binary log file. During the conversion, the header and header events of the binary log file occupy all reserved space. The reserved space stores the following types of data:

-   File header: The 4-byte header `[ 0xFE 'bin']` is used to identify a file as a binary log file. Each binary log file includes this header.
    
-   Header event: The format description event and the previous global transaction identifier (GTID) event are included.
    
-   Empty event: The empty events of the ignorable event type in the current binary log file are used to occupy the remaining reserved space.
    
-   GTID event: The GTID of a transaction is generated during the transaction commitment. The GTID event is also written to the reserved space.
    

The events in the binary log cache with reserved space allocated are stored in a binary log file that is converted from the temporary file in a binary log cache. The events include query events, table map events, row-based events, and XID events.

The following list describes the differences between a binary log file that is converted by using the binlog cache free flush feature and a regular binary log file:

-   The converted binary log file has an empty event.
    
-   The checksum of the converted binary log file is disabled by default.
    

The binlog cache free flush feature does not change the format of binary log files. The replication by using binary log files and the third-party tools are not affected.

## **Parameter description**

-   loose\_binlog\_cache\_free\_flush:
    
    specifies whether to enable the binlog cache free flush feature. The global system variable. If you change the value of this parameter, the change immediately takes effect. You do not need to restart your RDS instance.
    
    Valid values: on and off.
    
-   loose\_binlog\_cache\_free\_flush\_limit\_size:
    
    specifies whether to convert temporary files into binary log files. After you enable the binlog cache free flush feature, if the number of binary log files of a transaction exceeds the value of this parameter, the temporary files that are stored in the binary log cache are converted into the binary log files during the transaction commitment.
    
    Default value: 256 MB.
    
    Value range: 20971520 to 18446744073709551615. Unit: bytes.
    

## Optimization effects

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3298307071/p750363.png)

The preceding figure shows the differences between the time required to commit a large transaction to an RDS instance that uses Enterprise SSDs (ESSDs) of performance level 1 (PL1) or Premium Local SSDs when the binlog cache free flush feature is enabled and disabled.

If the binlog cache free flush feature is enabled, the time that is required to commit a large transaction is shortened, and issues such as insufficient I/O resources and long locking duration are resolved.
