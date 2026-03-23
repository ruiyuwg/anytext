AliSQL provides the Purge Large File Asynchronously feature to improve the stability of your database service.

## Background information

If you execute the DROP TABLE statement to delete data, the corresponding InnoDB data file is directly deleted from the file system. If the data file is large, the deletion of the data file causes serious stability issues in the Portable Operating System Interface (POSIX) file system. The Purge Large File Asynchronously feature starts a thread to asynchronously delete the data file. When you execute the DROP TABLE statement to delete data, the corresponding data file is saved as a temporary file, and the thread is started to asynchronously and smoothly delete the data file.

## Procedure

1.  Execute the following statement to view the global variable settings of your RDS instance:
    
    ```
    SHOW GLOBAL VARIABLES LIKE '%data_file_purge%';
    ```
    
    The following code shows a sample query result:
    
    ```
      +----------------------------------------+-------+
      | Variable_name                          | Value |
      +----------------------------------------+-------+
      | innodb_data_file_purge                 | ON    |
      | innodb_data_file_purge_all_at_shutdown | OFF   |
      | innodb_data_file_purge_dir             |       |
      | innodb_data_file_purge_immediate       | OFF   |
      | innodb_data_file_purge_interval        | 100   |
      | innodb_data_file_purge_max_size        | 128   |
      | innodb_print_data_file_purge_process   | OFF   |
      +----------------------------------------+-------+
    ```
    
    The following table describes the global variables.
    
    **Variable**
    
    **Description**
    
    innodb\_data\_file\_purge
    
    Specifies whether to enable the Purge Large File Asynchronously feature.
    
    innodb\_data\_file\_purge\_all\_at\_shutdown
    
    Specifies whether to delete all files when the host on which your RDS instance resides is shut down.
    
    innodb\_data\_file\_purge\_dir
    
    The directory that stores temporary files.
    
    innodb\_data\_file\_purge\_immediate
    
    Specifies whether to retain data files and revoke only the links of the data files.
    
    innodb\_data\_file\_purge\_interval
    
    The interval at which files are deleted. Unit: milliseconds.
    
    innodb\_data\_file\_purge\_max\_size
    
    The maximum size of a single file that can be deleted. Unit: MB.
    
    innodb\_print\_data\_file\_purge\_process
    
    Specifies whether the system displays a progress bar to indicate the progress of file deletion.
    
    **Note**
    
    We recommend that you use the following settings:
    
    ```
    set global INNODB_DATA_FILE_PURGE = on;
    set global INNODB_DATA_FILE_PURGE_INTERVAL = 100;
    set global INNODB_DATA_FILE_PURGE_MAX_SIZE = 128;
    ```
    
2.  Execute the following statement to view the file deletion progress:
    
    ```
    select * from information_schema.innodb_purge_files;
    ```
    
    The following code shows a sample query result:
    
    ```
    +--------+---------------------+--------------------+---------------+-------------------------+--------------+
    | log_id | start_time          | original_path      | original_size | temporary_path          | current_size |
    +--------+---------------------+--------------------+---------------+-------------------------+--------------+
    |      0 | 2021-05-14 14:40:01 | ./file_purge/t.ibd |     146800640 | ./#FP_210514 14:40:01_9 |     79691776 |
    +--------+---------------------+--------------------+---------------+-------------------------+--------------+
    ```
    
    The following table describes the parameters in the return result.
    
    **Parameter**
    
    **Description**
    
    start\_time
    
    The point in time at which the deletion starts.
    
    original\_path
    
    The original path of the folder in which the data files are stored before they are deleted.
    
    original\_size
    
    The original size of the data files before they are deleted. Unit: bytes.
    
    temporary\_path
    
    The path of the folder in which the temporary files are stored when they are deleted.
    
    current\_size
    
    The size of the temporary files that are to be deleted. Unit: bytes.
