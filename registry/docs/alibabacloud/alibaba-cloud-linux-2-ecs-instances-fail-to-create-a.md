This topic describes the causes of and solutions to the issue that a large number of processes cannot be created on an Elastic Compute Service (ECS) instance that runs Alibaba Cloud Linux 2.

## Problem description

When the fork or clone system call runs on an Alibaba Cloud Linux 2 instance, processes cannot be created on the instance and the "`-1 EAGAIN (Resource temporarily unavailable)`" error message appears. This issue typically occurs in one of the following scenarios:

-   Scenario 1: When you run shell commands on the instance, the "`bash: fork: retry: No child processes`" error message appears.
    
-   Scenario 2: Processes or threads cannot be created for specific applications, but can be created for other applications.
    

## Causes

The preceding issue may occur due to the following reasons:

-   Cause 1: The maximum number of threads that the system user can create is reached. You can run the `ulimit -u` command to query the maximum number of threads that the system user can create.
    
-   Cause 2: The number of processes (nr\_user\_process) created by the runtime user for specific applications exceeds the application-specific upper limit (app\_limit).
    

## Solutions

### **Change** **the maximum number of threads that the system user can create**

1.  View the applications for which processes cannot be created.
    
2.  Run the following command to forcefully terminate the applications that occupy numerous threads.
    
    **Warning**
    
    `kill` commands may cause risks. Before you run the kill command, we recommend that you create snapshots for the instance or back up critical files of the instance to ensure data security.
    
    Replace `<PID>` with the process ID (PID) of an application that you want to terminate.
    
    ```
    kill -9 <PID>
    ```
    
3.  Run the following command to change the maximum number of threads that the system user can create:
    
    ```
    ulimit -u <$Num_Of_Process>
    ```
    

### **Change the resource limit of a process**

1.  (Optional) If the `util-linux` package is not installed on the instance, run the following command to install it:
    
    ```
    yum install -y util-linux
    ```
    
2.  Change the resource limit of a process.
    
    Replace `<$PID>` with a PID.
    
    ```
    prlimit --pid <$PID> --nproc=unlimited
    ```
