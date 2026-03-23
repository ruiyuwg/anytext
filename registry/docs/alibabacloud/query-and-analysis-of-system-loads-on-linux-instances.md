## Symptoms

-   **Slow response:** Secure Shell Protocol (SSH) commands are delayed. Website or API access is slow or times out.
    
-   **High metrics:** CPU, memory, and disk I/O metrics consistently exceed 80%.
    
-   **Service interruption:** The system terminates critical processes due to an out-of-memory (OOM) error, and the instance automatically restarts.
    
-   **Logon failure:** SSH connections are refused.
    

## Causes

-   **Application issues:** The application code has performance bottlenecks or memory leaks.
    
-   **Traffic spikes:** Concurrent access exceeds the processing capacity of the instance.
    
-   **I/O bottleneck:** Disk read and write operations are saturated, which causes high CPU `iowait`.
    

## Solutions

### Step 1: Use htop to quickly identify abnormal processes

1.  Log on to an ECS instance using a VNC connection.
    
    1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  Go to the details page of the target instance. Click **Connect** and select **VNC**. Enter the username and password to log on to the ECS instance.
        
2.  Install and run htop.
    
    ```
    sudo yum install -y htop
    htop
    ```
    
3.  Analyze the output in the htop interface.
    
    -   To find processes with high CPU consumption, press the `F6` key and sort by `PERCENT_CPU` in descending order.
        
    -   To find processes with high memory consumption, press the `F6` key and sort by `PERCENT_MEM` in descending order.
        

### Step 2: Use sar to diagnose resource bottlenecks

After you use `htop` to identify a symptom, use `sar` to obtain quantitative data and confirm whether the bottleneck is CPU, memory, or I/O.

1.  Install and enable sysstat.
    
    ```
    sudo yum install -y sysstat
    systemctl start sysstat && systemctl enable sysstat
    ```
    
2.  Run a targeted analysis.
    
    -   Analyze CPU usage (`sar -u`) to confirm where CPU time is spent.
        
        ```
        # Collect data once per second for a total of 5 times
        sar -u 1 5
        ```
        
        -   High `%user`: Indicates an application issue.
            
        -   High `%system`: Indicates frequent kernel or I/O calls.
            
        -   `%iowait` is consistently greater than 20%: Indicates a disk I/O bottleneck.
            
    -   Analyze the system load (`sar -q`) to measure how busy the system is.
        
        ```
        # Collect data once every 2 seconds for a total of 5 times
        sar -q 2 5
        ```
        
        -   `ldavg-1` is greater than the number of CPU cores: The system is overloaded.
            
        -   High `runq-sz`: Many processes are in the queue waiting for the CPU.
            
    -   Analyze memory and swap activity (`sar -r` and `sar -W`) to determine whether memory is exhausted.
        
        ```
        # Analyze memory usage
        sar -r 1 3
        # Analyze swap activity (Swap)
        sar -W 1 3
        ```
        
        -   `pswpin/s` or `pswpout/s` is consistently greater than 0: Physical memory is insufficient, and the system is swapping to disk. This degrades performance.
            
    -   Analyze disk I/O (`sar -d`) to identify disk performance bottlenecks.
        
        ```
        # Collect data once per second for a total of 3 times to analyze a specific disk
        sar -d 1 3
        ```
        
        -   `%util` is close to 100%: Disk I/O is saturated.
            
        -   `await` is greater than 20 ms: I/O request processing time is too long.
            

### Step 3: Apply targeted solutions and optimizations

-   For application processes with high CPU consumption:
    
    -   Code optimization: Use tools such as `perf` (C/C++) and `jstack` (Java) to identify and optimize hot spot code.
        
    -   Logic optimization: Check for and fix inefficient operations such as infinite loops and SQL queries that perform full table scans.
        
-   For insufficient memory or frequent swapping:
    
    -   Investigate leaks: Use tools such as `valgrind` (C/C++) and `jmap` (Java) to analyze memory leaks.
        
    -   Adjust configurations: Configure application memory parameters, such as the `-Xms` and `-Xmx` parameters for a Java Virtual Machine (JVM).
        
    -   Upgrade resources: Increase physical memory by changing the instance type. For more information, see [Overview of instance type changes](/help/en/ecs/user-guide/overview-of-instance-configuration-changes).
        
-   High disk I/O: For more information, see [Troubleshoot high disk I/O load on Linux systems](/help/en/ecs/support/troubleshooting-and-solution-for-high-disk-i-o-load-in-linux-system).
    

## Next steps

-   [Configure monitoring and alerts](/help/en/ecs/user-guide/configure-alerts-for-an-ecs-instance): Set alert thresholds for key metrics such as CPU, memory, load, and disk to receive early warnings.
    
-   [Plan for Auto Scaling](/help/en/ecs/user-guide/create-a-scaling-group-based-on-an-existing-ecs-instance): For workloads with fluctuations, such as web applications, configure Auto Scaling policies to automatically add or remove instances in response to traffic changes.
