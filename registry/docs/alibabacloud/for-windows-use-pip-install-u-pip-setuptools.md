PyODPS is the Python software development kit (SDK) for MaxCompute. It provides basic operations on MaxCompute objects and a DataFrame framework to enable Python-based data analytics. You can use PyODPS in DataWorks or in a local environment. This topic describes how to install PyODPS for use in a local environment.

## Prerequisites

Ensure that you have [Python](https://www.python.org/downloads/) 3.6 or later installed.

## Install PyODPS

1.  Open the command-line terminal and run the following command to install PyODPS.
    
    ```
    # For Windows, use pip install pyodps
    pip3 install pyodps
    ```
    
2.  Run the following command to verify the installation. The installation is successful if no value or error message is returned.
    
    ```
    # For Windows, use python -c "from odps import ODPS"
    python3 -c "from odps import ODPS"
    ```
    

## **Set environment variables**

Obtain the AccessKey of an Alibaba Cloud Resource Access Management (RAM) user. This AccessKey serves as the identity credential to access a MaxCompute project. For security, set it as an environment variable.

**Note**

This section uses a macOS system with zsh as an example to demonstrate how to set a global environment variable. For more information about how to set environment variables on Linux, macOS, and Windows systems, see [Set an Alibaba Cloud AccessKey in an environment variable](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems#6d0fd29be62ep).

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/profile/access-keys) to obtain an AccessKey ID and an AccessKey secret.
    
2.  Open and edit the configuration file.
    
    ```
    -- For macOS with zsh. If zsh is not installed, run brew install zsh first.
    vim ~/.zshrc
    
    -- Add the following two lines to the file.
    
    -- Replace <ACCESS_KEY_ID> with your AccessKey ID.
    export ALIBABA_CLOUD_ACCESS_KEY_ID=yourAccessKeyID
    
    -- Replace <ACCESS_KEY_SECRET> with your AccessKey secret.
    export ALIBABA_CLOUD_ACCESS_KEY_SECRET=yourAccessKeySecret
    ```
    
3.  Reload the configuration file to apply the changes.
    
    ```
    source ~/.zshrc
    ```
    
4.  Verify that the environment variables are set.
    
    ```
    echo $ALIBABA_CLOUD_ACCESS_KEY_ID
    echo $ALIBABA_CLOUD_ACCESS_KEY_SECRET
    ```
    

## **What to do next**

After you install PyODPS and set the environment variables, you can [use PyODPS in a local environment](/help/en/maxcompute/user-guide/use-pyodps-in-local-environment) for development.

## **Common installation issues**

### **Dependency package installation errors**

If an error occurs when you install dependency packages such as numpy or pyarrow, a C code compilation error is usually displayed. This may be because the pip or setuptools versions are outdated. Upgrade pip and setuptools and then retry the installation.

```
# For Windows, use pip install -U pip setuptools
pip3 install -U pip setuptools
```

### **pip version conflicts for different Python versions**

If you are not using the system's default Python version, run the following command to use the correct Python executable.

```
/home/tops/bin/python3.7 -m pip install pyodps
#/home/tops/bin/python3.7 is the installation path of Python.
```

### **urllib3 OpenSSL version error**

If you encounter the urllib3 v2.0 only supports OpenSSL 1.1.1+ error during installation, it indicates that Python is using an older OpenSSL version that is incompatible with the urllib3 dependency. In this case, first install an earlier version of urllib3, and then install PyODPS.

```
# For Windows, use pip install "urllib3<2.0"
pip3 install "urllib3<2.0"
```
