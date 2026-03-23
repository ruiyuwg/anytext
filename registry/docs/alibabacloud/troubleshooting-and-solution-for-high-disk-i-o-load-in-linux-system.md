## Problem description

-   The website or application hosted on the Elastic Compute Service (ECS) instance responds slowly, times out, or I/O-related error logs appear.
    
-   The IOPS, throughput, or device utilization (`%util`) metrics for the instance are excessively high.
    

## **Causes**

-   **Process with high I/O consumption**: A process on the instance, such as database reads/writes, heavy log writing, or a backup job, generates many disk read/write requests and consumes the entire disk I/O bandwidth.
    
-   **Disk performance bottleneck**: The normal I/O demand of your current business exceeds the performance limit (IOPS or throughput) of the disk attached to the instance.
    

## **Solutions**

Use `iostat` to confirm the disk bottleneck, then use `iotop` to identify the specific process. Finally, optimize or upgrade resources as needed.

### **Step 1: Confirm the disk I/O bottleneck**

1.  Log on to the ECS instance.
    
    1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  Go to the details page of the target instance. Click **Connect** and select **Workbench**. Follow the prompts on the page to log on to the terminal.
        
2.  Use `iostat` to monitor the disk I/O status.
    
    1.  Install the sysstat package.
        
        #### **Alibaba Cloud Linux / CentOS / Fedora**
        
        ```
        sudo yum install -y sysstat
        ```
        
        #### **Ubuntu / Debian**
        
        ```
        sudo apt install -y sysstat
        ```
        
        #### **openSUSE**
        
        ```
        sudo zypper install -y sysstat
        ```
        
    2.  Run `iostat` to refresh the data every 2 seconds.
        
        ```
        iostat -d -x -k 2
        ```
        
3.  Analyze the `iostat` output. Pay attention to the following metrics:
    
    -   `r/s`, `w/s`: The number of read and write requests per second (IOPS).
        
    -   `rkB/s`, `wkB/s`: The amount of data read and written per second (throughput).
        
    -   `%util`: The disk I/O utilization. If this value is consistently close to 100%, the disk device is saturated.
        

### **Step 2: Locate the process with high I/O consumption**

After you confirm that the disk I/O is saturated, you need to identify the process that is causing the high load.

1.  Use `iotop` to view the I/O activity of processes in real time.
    
    1.  Install `iotop`.
        
        #### **Alibaba Cloud Linux / CentOS / Fedora**
        
        ```
        sudo yum install -y iotop
        ```
        
        #### **Ubuntu / Debian**
        
        ```
        sudo apt install -y iotop
        ```
        
        #### **openSUSE**
        
        ```
        sudo zypper install -y iotop
        ```
        
    2.  Display active I/O processes.
        
        ```
        sudo iotop -o
        ```
        
2.  Analyze the `iotop` output.
    
    -   Identify the process: Find the process with the highest I/O in the `DISK WRITE` or `DISK READ` column.
        
    -   Additional context: The `IO>` column shows the percentage of time the process spends waiting for I/O.
        

### **Step 3: Analyze and handle the abnormal process**

1.  **Analyze the cause**: Possible causes include slow SQL queries, a high log level, or frequent file read/write operations.
    
2.  **Resolution methods** (including but not limited to):
    
    -   Database: Check the slow query log. Optimize SQL statements and indexes.
        
    -   Log service: Lower the log level of the application (for example, from DEBUG to INFO) and configure log rotation.
        
    -   File I/O strategies: Check the file read/write logic. Use a memory cache and increase the buffer size.
        

### **Step 4: Evaluate and upgrade disk performance (Optional)**

If you cannot reduce the load through application layer optimization, you can upgrade the disk to improve performance.

1.  Evaluate requirements: Determine the performance target based on the actual IOPS and throughput reported by `iostat`.
    
2.  Perform the upgrade: Based on the performance target, [upgrade the disk](/help/en/ecs/user-guide/change-the-category-of-a-disk) to a higher specification.
    

## Recommendation

-   [Configure monitoring and alerts](/help/en/ecs/user-guide/configure-alerts-for-an-ecs-instance): For key disk metrics such as `%util`, IOPS, and throughput, configure reasonable alert thresholds (for example, 80%) to detect issues early.
    
-   Application I/O optimization: At the application layer, implement caching whenever possible to reduce direct disk reads and writes. For write-intensive scenarios, consider using asynchronous or batch writes to smooth out I/O peaks.
