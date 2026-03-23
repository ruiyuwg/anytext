The HDFS shell is the command-line tool provided by Hadoop Distributed File System (HDFS). LindormDFS is fully compatible with HDFS. You can use the HDFS shell to manage the files stored in LindormDFS. For example, you can query files, delete files, manage file permissions, and modify file names. This topic describes the common commands of the HDFS shell and provides examples.

## **Precautions**

The underlying file system is a high availability (HA) system that uses multiple NameNodes. You must configure an automatic failover mechanism to prevent access failures if the primary NameNode fails over. For more information about how to configure this mechanism, see [Configure Hadoop](/help/en/lindorm/user-guide/use-open-source-hdfs-clients-to-connect-to-and-use-lindormdfs#section-rv1-d0a-vtc).

## **Environment**

For more information about how to configure the environment, see [Download the client](/help/en/lindorm/user-guide/use-open-source-hdfs-clients-to-connect-to-and-use-lindormdfs#section-tke-8v8-og9) and [Configure Apache Hadoop](/help/en/lindorm/user-guide/use-open-source-hdfs-clients-to-connect-to-and-use-lindormdfs#section-rv1-d0a-vtc).

## Common commands

### **Upload data**

The following table lists the commands that are commonly used to upload data from local paths to LindormDFS.

**Command**

**Description**

put

This command copies files from one or more source paths in the local file system to LindormDFS. You can also run this command to read data from a standard input (stdin) and write the input data to LindormDFS.

copyFromLocal

This command is similar to the **put** command. However, the source path specified in this command must be a local path.

moveFromLocal

This command moves files from the local file system to LindormDFS.

appendToFile

Appends one or more source files (`src`) from the local file system to the destination file in LDFS.

### **Process data**

The following table lists the commands that are commonly used to process data stored in LindormDFS.

**Command**

**Description**

cp

This command copies files from the source path to the destination path. You can run this command to copy files from multiple source paths to the destination path. In this case, the destination path must be a directory.

mv

This command moves files from the source path to the destination path. You can run this command to copy files from multiple source paths to the destination path. In this case, the destination path must be a directory. Files cannot be moved between different file systems.

chown

This command changes the owner of one or more files. The **\-R** option recursively makes the change through the directory structure. The user who runs the command must have superuser permissions.

chgrp

This command changes the group to which a file belongs. The -R option recursively makes the change through the directory structure. The user who runs the command must be the owner of the file or a superuser.

chmod

This command changes the permissions on a file. The -R option recursively makes the change through the directory structure. The user who runs the command must be the owner of the file or a superuser.

mkdir

Takes a path URL as a parameter and creates the specified folders. The behavior is similar to the Unix `mkdir -p` command, which creates parent folders along the path.

du

This command displays the size of each file in the directory or displays the size of a specified file.

df

You can view file usage.

cat

This command copies the content of a specified file in a path to a standard output (stdout).

rm

This command deletes a specified file. You can delete only non-empty directories and files.

ls

-   For a file, returns information in the following format: `File name <Number of replicas> File size Modification date Modification time Permissions User ID Group ID`.
    
-   For a folder, returns a list of its direct children, similar to the \`ls\` command in Unix. The list contains information in the following format: `Folder name <dir> Modification date Modification time Permissions User ID Group ID` .
    

### **Download data**

The following table lists the commands that are commonly used to download data from LindormDFS to the local storage.

**Command**

**Description**

get

This command copies files from LindormDFS to the local file system. You can specify the **\-ignorecrc** option to copy files that failed the cyclic redundancy check (CRC). You can specify the **\-crc** option to copy files with their CRC information.

getmerge

This command accepts a source directory and a destination file as inputs and concatenates files in the source directory into a local destination file.

copyToLocal

This command is similar to the get command. However, the destination path specified in this command must be a local path.

You can run the **help** command to view all commands supported by the HDFS shell. For more information, see [Introduction to the Apache HDFS shell](http://hadoop.apache.org/docs/r2.7.2/hadoop-project-dist/hadoop-common/FileSystemShell.html).

## Examples

When you use the sample code, replace `${instance ID}` with your Lindorm instance ID.

-   Query all files in the specified directory.
    
    ```
    ${HADOOP_HOME}/bin/hadoop fs -ls hdfs://${Instance ID}/
    ```
    
-   Upload a local file to LindormDFS.
    
    ```
    ${HADOOP_HOME}/bin/hadoop fs -put test.txt hdfs://${Instance ID}/
    ```
    
-   Download a file to the specified local path.
    
    ```
    ${HADOOP_HOME}/bin/hadoop fs -get hdfs://${Instance ID}/${filename}
    ```
    
    In this command, `${filename}` represents the name of the file to download.
    
-   Delete a file.
    
    ```
    ${HADOOP_HOME}/bin/hadoop fs -rm hdfs://${Instance ID}/${filename}
    ```
    
    Where `${filename}` is the name of the file to download.
    
    **Note**
    
    The preceding command moves the file to the `Trash` folder instead of permanently deleting it. To permanently delete the file, run the **hadoop fs -expunge** command to empty the recycle bin.
