To manage Object Storage Service (OSS) buckets, upload and download objects, manage data, or perform image processing, install the OSS SDK for Python. This topic describes the installation process.

## Before you begin

1.  Install [Python](http://www.python.org).
    
    OSS SDK for Python requires Python 2.6, 2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, or later.
    
    **Note**
    
    When you install OSS SDK for Python on Windows, make sure that the version of Visual C++ is 15.0 or later.
    
2.  Run the following command to check the Python version:
    
    ```
    python --version
    ```
    
    The following response indicates that Python 3.8.2 is installed:
    
    ```
    Python 3.8.2
    ```
    

## **Download OSS SDK for Python**

-   [Download OSS SDK for Python from GitHub](https://github.com/aliyun/aliyun-oss-python-sdk)
    
-   [Download previous versions of OSS SDK for Python](https://github.com/aliyun/aliyun-oss-python-sdk/releases)
    

## Install python-devel

After you prepare the environment, you must install the python-devel package first.

**Note**

OSS SDK for Python uses the crcmod library for CRC (Cyclic Redundancy Check) calculations. This library has a C extension that provides high performance, but it depends on the Python.h file from the python-devel package. If Python.h is missing when you install the SDK, the C extension for crcmod fails to build. The SDK will still function but will fall back to a pure Python implementation of crcmod. This fallback results in significantly slower performance for operations that require CRC checks, such as object uploads and downloads.

## Windows

When you install Python on Windows, the Python.h file is installed together with Python. Therefore, you do not need to install python-devel.

## macOS

When you install Python on macOS, the Python.h file is installed together with Python. Therefore, you do not need to install python-devel.

## CentOS

Run the following command to install python-devel:

```
sudo yum install python-devel                 
```

## RHEL

Run the following command to install python-devel:

```
sudo yum install python-devel                 
```

## Fedora

Run the following command to install python-devel:

```
sudo yum install python-devel                 
```

## Debian

Run the following command to install python-devel:

```
sudo apt-get install python-dev                  
```

## Ubuntu

Run the following command to install python-devel:

```
sudo apt-get install python-dev                  
```

## Install OSS SDK for Python

After you install python-devel, you can use one of the following methods to install OSS SDK for Python:

## pip

1.  Install [pip](https://pip.pypa.io/en/stable/installation/).
    
    For Python 2.7.9 or later and Python 3.4 or later, pip is installed by default.
    
2.  Run the following command to install the latest version of OSS SDK for Python:
    
    ```
    pip install oss2                   
    ```
    

## Source code

1.  Visit [GitHub](https://github.com/aliyun/aliyun-oss-python-sdk) to download the latest version of OSS SDK for Python package. Decompress the package and check whether the setup.py file exists in the directory.
    
    For more information about how to download an earlier version of OSS SDK for Python, see [Historical versions](https://github.com/aliyun/aliyun-oss-python-sdk/releases).
    
2.  Run the following command to install OSS SDK for Python:
    
    ```
    python setup.py install                   
    ```
    

## Verify the installation

After installing the SDK, perform the following steps to verify the installation:

1.  Run the following command to enter the Python environment:
    
    ```
    python
    ```
    
2.  Run the following command to check the version of OSS SDK for Python:
    
    ```
    import oss2
    oss2.__version__                         
    ```
    
    The following response indicates that OSS SDK for Python 2.18.3 is installed.
    
    ```
    '2.18.3'
    ```
    

## **FAQ**

#### What do I do if I get a **'No module named \_crcfunext' error?**

#### **Description**

Upload and download operations with the OSS SDK for Python are much slower than with other tools, such as [ossutil](/help/en/oss/developer-reference/overview-59/#concept-cnr-3d4-vdb) or other SDKs.

#### **Causes**

When you compile the crcmod library, the \_crcfunext.so file depends on the Python.h file. The error occurs because the Python.h file does not exist in the system, which causes the \_crcfunext.so file to fail to be generated. For more information about crcmod, see [crcmod introduction](http://crcmod.sourceforge.net/intro.html).

#### **Solutions**

You can perform the following steps to check whether the crcmod extensions in C are installed:

1.  Run the following command to enter the Python environment:
    
    ```
    python
    ```
    
2.  Run the following command to import the C extension module of \_crcfunext in the crcmod module:
    
    ```
    import crcmod._crcfunext
    ```
    
    If the following error message appears, the crcmod extensions in C fail to be installed:
    
    ```
    Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    ImportError: No module named _crcfunext                                 
    ```
    
3.  Select a solution based on your operating system:
    
    ## Windows
    
    1.  Download [crcmod-1.7.win32-py2.7.msi](https://pypi.org/project/crcmod/1.7/#files) or a .msi file of a different version.
        
        **Note**
        
        The crcmod library for win32 systems is also compatible with win64 systems.
        
    2.  Install the .msi file and specify the Lib\\site-packages directory in the local installation path of Python as the installation path of crcmod. Example: D:\\python\\Lib\\site-packages\\.
        
    3.  After the installation is complete, verify the crcmod C extension installation again.
        
    
    ## Linux
    
    For Linux, perform the following steps to resolve the issue:
    
    1.  Run the following command to uninstall the crcmod library:
        
        ```
        pip uninstall crcmod
        ```
        
    2.  Install python-devel. For more information, see [Install python-devel](#python-devel).
        
    3.  Run the following command to re-install the crcmod library:
        
        ```
        pip install crcmod
        ```
        
        If the crcmod library fails to be installed after you perform the preceding steps, uninstall the crcmod library. Then, run the following command to view the details of the installation failure:
        
        ```
        pip install crcmod -v
        ```
        
    

#### What do I do if I get a "**No module named 'Crypto'"** error?

#### **Description**

Your program fails with a  `No module named 'Crypto'` error.

#### **Causes**

This error occurs because the required `Crypto` module is not installed, or a directory named `crypto` exists instead of `Crypto`.

#### **Solutions**

Check whether Crypto exists in the local installation path of Python, such as `D:\python3.9\Lib\site-packages`.

-   If Crypto does not exist, run the following command:
    
    ```
    python -m pip install --upgrade setuptools
    ```
    
-   If a directory named `crypto` exists (with a lowercase c), rename it to `Crypto` and try running your program again.
    

#### What do I do if an error message indicating that the command is not an internal or external command is returned?

On Windows, if an error message indicating that the command is not an internal or external command is returned, modify the `Path` environment variable and add the installation paths of Python and pip to the environment variable. The installation path of pip is the Scripts directory in the installation path of Python. After editing the `Path` variable, you must open a new command prompt window or restart your computer for the changes to take effect.

#### What do I do if the SDK installation fails?

If the SDK installation fails, run the following command to uninstall it, then try installing it again.

```
pip uninstall oss2            
```

#### **How do I upgrade OSS SDK for Python?**

Run the following command to upgrade OSS SDK for Python:

```
 pip install --upgrade oss2
```
