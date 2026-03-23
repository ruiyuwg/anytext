An SSH node in DataWorks lets you remotely access a host that is connected to a specified SSH data source and run a script on the remote host. This topic describes the development flow of an SSH node.

## **Node introduction**

An SSH node lets you remotely access a host that is connected to an SSH data source from DataWorks. For example, you can use this method to remotely access an Elastic Compute Service (ECS) instance from DataWorks and run scripts on the ECS instance on a recurring schedule.

## Prerequisites

-   The RAM user that you want to use is added to your workspace.
    
    If you want to use a RAM user to develop tasks, you must add the RAM user to your workspace as a member and assign the **Develop** or **Workspace Administrator** role to the RAM user. The Workspace Administrator role has more permissions than necessary. Exercise caution when you assign the Workspace Administrator role. For more information about how to add a member and assign roles to the member, see [Add workspace members and assign roles to them](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   A serverless resource group is associated with your workspace. For more information, see the topics in the [Use serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups) directory.
    
-   An SSH node is created. For more information, see [Create an auto triggered task](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    
-   An SSH data source is created.
    
    You must create an SSH data source to remotely access your SSH server before you can develop and schedule recurring SSH tasks in an SSH node. For information about how to create a data source, see [Create an SSH data source](/help/en/dataworks/user-guide/create-an-ssh-data-source#t2720720.html).
    
    **Note**
    
    You can use SSH nodes to develop tasks based only on SSH data sources that are created in DataWorks using the Java Database Connectivity (JDBC) connection string mode. Additionally, you must ensure that your data source is connected to the correct resource group to prevent task execution failures.
    

## **Limits**

The code executed in an SSH node cannot exceed `128 KB`.

## **Precautions**

-   When an SSH node starts a process on a remote host, the process on the remote host is not affected if the SSH node task exits unexpectedly, for example, due to a timeout. In this scenario, DataWorks does not issue a command to terminate the process on the remote host.
    
-   SSH nodes support the standard Shell syntax but not the interactive syntax.
    
-   When an SSH node is used to run scripts on an ECS instance, temporary files are generated on the instance. Ensure that the disk space and the maximum number of files on the ECS instance meet your requirements.
    
-   Avoid performing operations on the same file using multiple tasks at the same time to prevent SSH node exceptions.
    

## **Step 1: Develop an SSH node**

### **(Optional) Select an SSH data source**

If multiple SSH data sources exist in your workspace, you must select the required data source on the configuration tab of the SSH node. If only one SSH data source exists, it is used by default.

**Note**

You can use SSH nodes to develop tasks based only on SSH data sources that are created in DataWorks using the Java Database Connectivity (JDBC) connection string mode. Additionally, you must ensure that your data source is connected to the correct resource group to prevent task execution failures.

### **Develop code: Simple example**

In the code editor for the SSH node, write the script to be executed. The following code is an example.

```
# 1. Prepare an environment.
# Find the file that you want to run on the remote host. For example, the hello.sh file is stored in the tmp directory of the remote host.
# To facilitate testing, you can run the following command on the SSH node to create the hello.sh file.
echo "echo hello,dataworks" >/tmp/hello.sh
# 2. Use the SSH node to trigger the running of the file on the remote host.
# Use the SSH node in DataWorks to trigger the running of the /tmp/hello.sh file.
sh /tmp/hello.sh
```

### **Develop code: Use scheduling parameters**

DataWorks provides **Scheduling Parameters** that allow you to use dynamic parameters in recurring schedule scenarios. You can define variables in the code of a node using the `${Variable name}` format and assign a value to the variable in the **Scheduling Configuration** > **Scheduling Parameters** section in the right-side navigation bar of the node configuration page. For more information about the supported formats and configurations for scheduling parameters, see [Scheduling configurations](/help/en/dataworks/user-guide/node-scheduling/).

The following example shows how to use scheduling parameters in an SSH node:

```
# Requirement: Write the running time of the SSH node to the /tmp/sshnode.log file on a daily basis.
# Implementation: Use the ${myDate} variable in the sshnode.log file and assign $[yyyy-mm-dd hh24:mi:ss] to the myDate variable as a value. This way, the running time of the SSH node is written to the file.
echo ${myDate} >/tmp/sshnode.log
cat /tmp/sshnode.log
```

After you develop the script for the SSH node, you must configure scheduling properties for the node to run the SSH task on a recurring schedule. For more information, see [Scheduling configurations](/help/en/dataworks/user-guide/node-scheduling/).

## **Step 2: Deploy the node and perform O&M operations**

1.  After you configure the scheduling properties, you can submit and publish the SSH node to the production environment. For more information, see [Publish a node or workflow](/help/en/dataworks/user-guide/task-release/).
    
2.  The published task runs periodically based on your specified scheduling configurations. You can go to **Operation Center** > **Task O&M** > **Auto Triggered Task O&M** > **Auto Triggered Task** to view and manage the published auto triggered task. For more information, see [Get started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## References

For more information about how to implement load balancing and high availability for SSH nodes, see [Implement load balancing and high availability for SSH nodes](/help/en/dataworks/user-guide/ssh-node-implements-load-balancing-and-high-availability).
