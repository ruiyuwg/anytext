The Lindorm compute engine provides a RESTful API to submit Spark Python jobs. You can use this API to run streaming and batch tasks, machine learning tasks, and graph computing tasks. This topic describes how to develop and submit a Python job for the Lindorm compute engine.

## Prerequisites

You have activated the Lindorm compute engine. For more information, see [Activate the service](/help/en/lindorm/user-guide/activate-ldps-and-modify-the-configurations#task-2142804).

## Spark Python Job Development Process

1.  [Define a Python-based Spark job](#section-0s0-3ab-9on)
    
2.  [Package the Python-based Spark job](#section-r0e-k37-fgp)
    
3.  [Upload the files of the Python-based Spark job](#section-3o4-akg-jg9)
    
4.  [Submit the Python-based Spark job](#section-66i-w8t-ihm)
    

## Step 1: Define a Python-based Spark job

1.  Click [Sample Spark job](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20260210/ovnsmy/lindorm-spark-examples-current.tar.gz) to download the sample package.
    
2.  Extract the downloaded package. The extracted folder is named `lindorm-spark-examples`. Go to the `lindorm-spark-examples/python` directory and review the Python directory structure.
    
3.  This section describes the project directory structure, assuming that `your_project` is the project root directory.
    
    1.  Create an empty file named `__init__.py` in the `your_project` directory.
        
    2.  Modify the entry file.
        
        1.  Add the path of the `your_project` directory to `sys.path`. For details, see the Notice1 section in `lindorm-spark-examples/python/your_project/main.py`.
            
            ```
            # Notice1: You need to do the following step to complete the code modification:
            # Step1: Please add a "__init__.py" to your project directory, your project will act as a module of launcher.py
            # Step2: Please add current dir to sys.path, you should add the following code to your main file
            current_dir = os.path.abspath(os.path.dirname(__file__))
            sys.path.append(current_dir)
            print("current dir in your_project: %s" % current_dir)
            print("sys.path: %s \n" % str(sys.path))
            ```
            
        2.  Encapsulate the entry logic into the `main(argv)` method. For details, see the Notice2 section in `lindorm-spark-examples/python/your_project/main.py`.
            
            ```
            # Notice2: Move the code in `if __name__ == "__main__":` branch to a new defined main(argv) function,
            # so that launcher.py in parent directory just call main(sys.argv)
            def main(argv):
                print("Receive arguments: %s \n" % str(argv))
            
                print("current dir in main: %s \n" % os.path.abspath(os.path.dirname(__file__)))
                # Write your code here
            
            
            if __name__ == "__main__":
                main(sys.argv)
            ```
            
        
    3.  Create an entry file to call the `main(argv)` method. In the root directory `your_project`, create a file named `launcher.py`. You can copy the code from `lindorm-spark-examples/python/launcher.py`.
        

## Step 2: Package the Python-based Spark job

1.  Package the Python runtime environment and third-party libraries that your project depends on. We recommend using Conda or Virtualenv to package these dependencies into a tar file. For more information, see [Python Package Management](https://archive.apache.org/dist/spark/docs/3.3.1/api/python/user_guide/python_packaging.html).
    
    **Important**
    
    -   Use the spark.archives parameter to pass tar files created by Conda or Virtualenv. All formats supported by **spark.archives** are valid. For more information, see [spark.archives](https://spark.apache.org/docs/latest/configuration.html).
        
    -   Complete this step in Linux to ensure the Lindorm compute engine recognizes Python binary files.
        
    
2.  Package the project files. Compress the `your_project` directory into a `.zip` or `.egg` file.
    
    -   Run the following command to create a `.zip` file:
        
        ```
        zip -r project.zip your_project
        ```
        
    -   To create a `.egg` file, see [Building Eggs](http://peak.telecommunity.com/DevCenter/PythonEggs#building-eggs).
        
    

## Step 3: Upload the files of the Python-based Spark job

Upload the following files to OSS. For more information, see [Simple upload](/help/en/oss/user-guide/simple-upload#concept-bws-3bb-5db).

-   The tar file containing the Python runtime environment and third-party libraries, created in [Step 2](#step-jm4-vxr-8fy).
    
-   The project file (.zip or .egg) created in [Step 2](#step-k3a-k4g-sj7).
    
-   The `launcher.py` file created in [Step 1](#step-noy-ios-dli).
    

## Step 4: Submit the Python-based Spark job

The Lindorm compute engine supports two ways to submit and manage jobs:

-   Submit jobs in the Lindorm console. For more information, see [Manage jobs in the console](/help/en/lindorm/user-guide/manage-jobs-in-the-apsaradb-for-lindorm-console#task-2143991).
    
-   Submit jobs using DMS. For more information, see [Manage jobs using DMS](/help/en/lindorm/user-guide/use-dms-to-schedule-lindorm-spark-jobs#task-2221126).
    

Request parameters consist of the following two parts:

-   Parameters for the Python job runtime environment. Example:
    
    ```
    {"spark.archives":"oss://testBucketName/pyspark_conda_env.tar.gz#environment", "spark.kubernetes.driverEnv.PYSPARK_PYTHON":"./environment/bin/python","spark.submit.pyFiles":"oss://testBucketName/your_project.zip"}
    ```
    
    -   When submitting project files (`.zip`, `.egg`, or `.py`), set **spark.submit.pyFiles** in the **configs** parameter.
        
    -   When submitting the tar file containing the Python runtime environment and third-party libraries, set **spark.archives** and **spark.kubernetes.driverEnv.PYSPARK\_PYTHON** in the **configs** parameter.
        
        -   Use a number sign (#) to specify targetDir in the **spark.archives** parameter.
            
        -   Set **spark.kubernetes.driverEnv.PYSPARK\_PYTHON** to the path of the Python executable.
            
-   If you upload files to OSS, configure the following parameters in the configs parameter.
    
    Table 1. Configs parameters
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    spark.hadoop.fs.oss.endpoint
    
    oss-cn-beijing-internal.aliyuncs.com
    
    The endpoint of the OSS bucket where you store Python files.
    
    spark.hadoop.fs.oss.accessKeyId
    
    testAccessKey ID
    
    The AccessKey ID and AccessKey secret that you create in the Alibaba Cloud Management Console. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task-354412).
    
    spark.hadoop.fs.oss.accessKeySecret
    
    testAccessKey Secret
    
    spark.hadoop.fs.oss.impl
    
    org.apache.hadoop.fs.aliyun.oss.AliyunOSSFileSystem
    
    The class used to access OSS.
    
    **Note**
    
    For more parameters, see [Parameters](https://hadoop.apache.org/docs/r3.0.0/hadoop-aliyun/tools/hadoop-aliyun/index.html).
    

## Python Job Development Example

1.  Click [Sample Spark job](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20260210/ovnsmy/lindorm-spark-examples-current.tar.gz) to download and extract the file.
    
2.  Open the your\_project/main.py file and modify the entry point.
    
    1.  Add the your\_project directory to sys.path.
        
        ```
        current_dir = os.path.abspath(os.path.dirname(__file__))
        sys.path.append(current_dir)
        print("current dir in your_project: %s" % current_dir)
        print("sys.path: %s \n" % str(sys.path))
        ```
        
    2.  Add the entry logic to the main.py file. The following example initializes a SparkSession.
        
        ```
        from pyspark.sql import SparkSession
        spark = SparkSession \
            .builder \
            .appName("PythonImportTest") \
            .getOrCreate()
        print(spark.conf)
        spark.stop()
        ```
        
    
3.  In the Python directory, compress the your\_project directory into a ZIP file.
    
    ```
    zip -r your_project.zip your_project
    ```
    
4.  In Linux, use Conda to package the Python runtime environment.
    
    ```
    conda create -y -n pyspark_conda_env -c conda-forge numpy conda-pack
    conda activate pyspark_conda_env
    conda pack -f -o pyspark_conda_env.tar.gz
    ```
    
5.  Upload your\_project.zip, pyspark\_conda\_env.tar.gz, and launcher.py to OSS.
    
6.  Submit the job using one of the following methods:
    
    -   Submit the job in the Lindorm console. For more information, see [Manage jobs in the console](/help/en/lindorm/user-guide/manage-jobs-in-the-apsaradb-for-lindorm-console#task-2143991).
        
    -   Submit the job using DMS. For more information, see [Manage jobs using DMS](/help/en/lindorm/user-guide/use-dms-to-schedule-lindorm-spark-jobs#task-2221126).
        
    

## Job diagnostics

After you submit a Python job, view its status and Spark UI address on the **Jobs** page. For more information, see [View a job](/help/en/lindorm/user-guide/manage-jobs-in-the-apsaradb-for-lindorm-console#section-mr0-pxc-4vm). If you encounter issues during submission, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm?spm=a2c63.p38356.0.0.24dc687axh6IvP#/ticket/createIndex). Provide the job ID and Spark UI address to support staff.
