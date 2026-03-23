The Simple Log Service (SLS) command-line interface (CLI) supports most SLS features, such as project management, logstore management, log queries, automatic paging, and geo-replication across multiple accounts. This topic describes how to install the SLS CLI.

## Before you start

The SLS CLI is developed using Python. You must install Python before using the CLI. For more information, see the [official Python website](https://www.python.org/downloads/).

**Item**

**Description**

Current CLI version

0.2.9

**Note**

Run the installation command to upgrade the CLI. We recommend that you upgrade the CLI to the latest version.

Source code

[Aliyun Log CLI](https://github.com/aliyun/aliyun-log-cli)

Supported Python versions

-   The minimum version for Python 2 is Python 2.7.
    
-   The minimum version for Python 3 is Python 3.7.
    

Supported operating systems

Windows, Linux, and macOS.

Dependent components

After Python is installed, we recommend that you run the `pip install package_name` command to preferentially install the following dependent components.

-   docopt
    
-   aliyun-log-python-sdk
    
-   jmespath
    
-   aliyun-python-sdk-core
    
-   aliyun-python-sdk-sts
    
-   requests
    

## **Step 1: Configure Python environment variables**

**Important**

You must configure environment variables to ensure that the aliyunlog commands run as expected. After you configure the environment variables, you may need to restart your developer tools, such as integrated development environments (IDEs) or services, for the new settings to take effect.

### **Configure Python environment variables in Linux and macOS**

1.  Create the `.bash_profile` file.
    
    **Note**
    
    If you are setting environment variables for the first time, run `touch ~/.bash_profile` to create the configuration file. If the configuration file already exists, run the `vim ~/.bash_profile` command to edit the file.
    
    ```
    touch ~/.bash_profile
    vim ~/.bash_profile
    ```
    
2.  View the Python installation directory.
    
    ```
    which python3
    ```
    
3.  Configure the `.bash_profile` file.
    
    ```
    export PATH=$PATH:/usr/local/python3/bin
    ```
    
4.  Apply the settings in the `.bash_profile` file.
    
    ```
    # Make the configuration file take effect.
    source ~/.bash_profile
    ```
    

### **Configure Python environment variables in Windows**

The following steps describe how to set environment variables in the graphical user interface (GUI) of Windows 10.

1.  Find the Python installation path.
    
    On the desktop, right-click **This PC** and select **Properties > Advanced System Settings > Environment Variables > User Variables** > **Path** to find the environment variable for Python.
    
2.  Add the Python environment variable.
    
    On the desktop, right-click **This PC** and select **Properties > Advanced System Settings > Environment Variables > User Variables** > **Path** > **New**. For example, if the path that you found in the previous step is `D:\dev\python\python37\`, the path to add is `D:\dev\python\python37\bin`.
    

## **Step 2:** Install the CLI

### **Install the CLI in Linux**

1.  Log on to a Linux server.
    
2.  Run the following command to install the CLI.
    
    ```
    pip3 install aliyun-log-python-sdk aliyun-log-cli -U --no-cache
    ```
    
3.  Verify the installation.
    
    Run the following command:
    
    ```
    aliyunlog --version
    ```
    
    If the command executes without errors, the installation is successful.
    

### **Install the CLI in Windows**

1.  Log on to a Windows server.
    
2.  Open the command line interface in Windows.
    
    If the Python environment variable is set, run the installation command in the next step. If you receive a message indicating that the pip3 command is not found, the Python environment variable is not configured correctly. Run the cd command to navigate to the Python installation path and then run the installation command.
    
3.  Run the following command to install the CLI.
    
    ```
    pip3 install aliyun-log-python-sdk aliyun-log-cli -U --no-cache
    ```
    
4.  Verify the installation.
    
    Run the following command:
    
    ```
    aliyunlog --version
    ```
    
    If the command executes without errors, the installation is successful.
    

### **Install the CLI in macOS**

We recommend that you use pip3 to install the SLS CLI. Use the following sample command:

```
pip3 install -U aliyun-log-cli --no-cache
```

## Upgrade the CLI

Run the installation command again to upgrade the CLI. We recommend that you upgrade the CLI to the latest version.

## Uninstall the CLI

If you no longer need the CLI, run the following command to uninstall it:

```
pip3 uninstall aliyun-log-cli
```

## **FAQ**

### **The default Python version on an ECS Linux instance is 3.6. How do I upgrade Python to 3.7 or later?**

We recommend that you do not uninstall the default Python version on ECS. Modify the symbolic link or use a multi-version management tool to control the Python version.

-   Modify the symbolic link
    
    1.  Install a later version of Python. For more information, see [Install Python using a package manager](/help/en/ecs/user-guide/deploy-a-python-environment#427437fc8cfgr).
        
    2.  Check the installation path of Python 3. Run `which python3` to find the installation path of Python 3. The command returns a path, such as `/usr/bin/python3`.
        
    3.  Modify the symbolic link.
        
        ```
        sudo which python3 pip3
        rm -rf /usr/bin/python3 /usr/bin/pip3
        
        # Add a symbolic link. /usr/bin/python3.11 is the installation path of the later version.
        sudo ln -s /usr/bin/python3.11 /usr/bin/python3
        sudo ln -s /usr/bin/pip3.11 /usr/bin/pip3
        ```
        
    4.  After the modification is complete, run `python -V` to verify that the change was successful.
        
-   [Multi-version management tool](/help/en/ecs/user-guide/deploy-a-python-environment)
