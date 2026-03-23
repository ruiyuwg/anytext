This topic describes how to install the Simple Log Service SDK for Python to use in your applications.

## Prerequisites

-   [Python](/help/en/sdk/developer-reference/installing-python#fa977dfd36sus) and a Python development environment, such as [PyCharm](/help/en/sdk/developer-reference/installing-python-ide-on-windows), are installed.
    
    The Simple Log Service SDK for Python is compatible with the following Python versions. Use the `python -V` command to verify your Python version.
    
    -   Python 2.7
        
    -   Python 3.7 or later
        
    -   PyPy 2.7
        
    -   PyPy 3.7 or later
        
-   The Python package manager [pip](https://pip.pypa.io/en/latest/installation/) is installed.
    
    To verify the installed version of pip, run the `pip -V` command. If you use Python 3, you may need to use `pip3 -V`.
    

## Install the SDK

Run the following command as an administrator in your CLI to install the Simple Log Service SDK for Python. For more information, see [aliyun-log-python-sdk releases](https://pypi.org/project/aliyun-log-python-sdk/#history).

```
pip install -U aliyun-log-python-sdk
```

## Verify the SDK

To verify the installation, run the following command:

```
pip show aliyun-log-python-sdk
```

A successful installation returns information similar to the following:

```
Name: aliyun-log-python-sdk
Version: 0.9.12
Summary: Aliyun log service Python client SDK
Home-page: https://github.com/aliyun/aliyun-log-python-sdk
Author: Aliyun
```

## **FAQ**

### What should I do if I see the error "'pip' is not recognized as an internal or external command"?

This error typically occurs on Windows when the installation directory for Python or pip is not in your system's Path environment variable. To resolve this, add the Python installation directory and its Scripts subdirectory (which usually contains pip) to the Path variable. After updating the Path, you may need to restart your command prompt or your computer for the change to take effect.

## What to do next

-   After installing the SDK, [configure your access credentials](/help/en/sls/developer-reference/configure-sls-access-credentials).
