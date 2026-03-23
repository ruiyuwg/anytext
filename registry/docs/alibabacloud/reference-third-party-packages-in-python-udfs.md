MaxCompute allows you to reference third-party packages in Python user-defined functions (UDFs). The packages can be NumPy packages, third-party packages that need to be compiled, and third-party packages that are dependent on dynamic-link libraries (DLLs). This topic describes how to reference third-party packages in Python UDFs.

## Background information

You can reference third-party packages in Python UDFs in the following scenarios:

-   [Reference NumPy packages in Python 3 UDFs](#section-fvb-vln-9z0)
    
    You must change the name extension of the NumPy package, use the MaxCompute client to upload the NumPy package, and then create a UDF. You can call the Python 3 UDF after you create the UDF.
    
-   [Reference third-party packages that need to be compiled](#section-3sz-bc7-5cf)
    
    You must compile the setup.py script in a third-party package, generate a wheel package, and then change the name extension of the wheel package in an environment that is compatible with MaxCompute. Then, use the MaxCompute client to upload the wheel package and create the UDF. You can call the Python UDF after you create the UDF. We recommend that you use a Linux operating system. If you use a Windows operating system, we recommend that you use Docker.
    
-   [Reference third-party packages that are dependent on DLLs](#section-uxo-u1g-j8o)
    
    You must compile the .so library file based on the source code of a third-party package, generate a wheel package, and then change the name extension of the wheel package. Then, use the MaxCompute client to upload the wheel package and the .so library file and create the UDF. You can call the Python UDF after you create the UDF.
    

## Prerequisites

Make sure that the following requirements are met:

-   Python is installed. We recommend that you install Python 3.
    
-   The [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) is installed and configured. For more information, see [Install and configure the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).
    
-   [pip](https://pip.pypa.io/en/stable/installing/?spm=a2c4g.11186623.2.11.1d257cafW1D5nG), setuptools, and wheel are installed if you want to use Python UDFs to reference third-party packages that need to be compiled. You can run the `pip install setuptools` command to install setuptools and run the `pip install wheel` command to install wheel.
    
-   PROJ 6 is installed if you use a third-party package of GDAL 3.0 or later.
    
-   [Docker](https://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/) is installed if you use Docker to compile third-party packages. For more information, see [Docker documentation](https://docs.docker.com/get-docker/).
    

## Reference NumPy packages in Python 3 UDFs

You can use Python 3 in MaxCompute to reference NumPy packages. By default, the NumPy library is installed in Python 2 in MaxCompute. You do not need to manually upload NumPy packages in Python 2. To reference a NumPy package in Python 3 UDFs, perform the following steps:

1.  In the **Download files** section of the [PyPI](https://pypi.org/project/numpy/#files) page, click the package whose name ends with cp37-cp37m-manylinux1\_x86\_64.whl to download the package. In this example, NumPy 1.19.2 is used.
    
    ![下载numpy包](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2814096061/p181499.png)
    
    **Note**
    
    If you download a package whose name ends with other characters, the operation may fail. If you need to select another version of the NumPy package, click **Release history** in the **Navigation** section in the upper-left corner of the [PyPI](https://pypi.org/project/numpy/#files) page to view the historical versions.
    
2.  Change the name extension of the downloaded NumPy package to .zip.
    
    Example: numpy-1.19.2-cp37-cp37m-manylinux1\_x86\_64.zip.
    
3.  Use the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to upload the NumPy package to your MaxCompute project. For more information about how to upload the package, see [Resource operations](/help/en/maxcompute/user-guide/resource-operations#concept-pps-h1f-vdb).
    
    Sample commands:
    
    ```
    ADD ARCHIVE D:\Downloads\numpy-1.19.2-cp37-cp37m-manylinux1_x86_64.zip -f;
    ```
    
4.  Write a Python UDF script and save the script as a PY file.
    
    In this example, the saved file is named import\_numpy.py. The following code shows the Python UDF script:
    
    ```
    from odps.udf import annotate
    
    @annotate("->string")
    class TryImport(object): # The class name is TryImport. 
        def __init__(self):
            import sys
            sys.path.insert(0, 'work/numpy-1.19.2-cp37-cp37m-manylinux1_x86_64.zip') # The NumPy package. You need only to change the package name after work/. 
    
        def evaluate(self):
            import numpy
            return "import succeed"
    ```
    
5.  Use the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to upload the import\_numpy.py script to your MaxCompute project as a resource.
    
    Sample commands:
    
    ```
    ADD PY D:\Desktop\import_numpy.py -f;
    ```
    
6.  Use the uploaded import\_numpy.py script and NumPy package to create a UDF on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). For more information about how to create a UDF, see [Function operations](/help/en/maxcompute/user-guide/function-operations#concept-hb1-wdf-vdb).
    
    In this example, the created UDF is named numpy. Sample commands:
    
    ```
    CREATE FUNCTION numpy AS 'import_numpy.TryImport' USING 'doc_test_dev/resources/import_numpy.py,numpy-1.19.2-cp37-cp37m-manylinux1_x86_64.zip';
    ```
    
    **Note**
    
    When you create a UDF, you must add a NumPy package, such as numpy-1.19.2-cp37-cp37m-manylinux1\_x86\_64.zip, to the resource list.
    
7.  After you create the UDF, you can call the UDF in SQL statements. You must make sure that Python 3 is enabled to execute SQL statements. For more information, see [Python 3 UDFs](/help/en/maxcompute/user-guide/python-3-udfs#concept-2417067).
    

## Reference third-party packages that need to be compiled

If a third-party package is a TAR.GZ package that is downloaded from [PyPI](https://pypi.org/project/numpy/#files) or a source code package that is downloaded from GitHub, the setup.py file may be stored in the root directory of the decompressed third-party package. To use this type of third-party package, you must compile the setup.py file and generate a wheel package in an environment that is compatible with MaxCompute. Then, upload the package as a resource and create the UDF. After the UDF is created, you can call third-party packages in Python UDFs. For more information about how to upload a resource and create a UDF, see [Reference NumPy packages in Python 3 UDFs](#section-fvb-vln-9z0).

**Important**

-   Third-party packages run in a Linux operating system. We recommend that you compile third-party packages in a Linux operating system. If you compile third-party packages in a Windows operating system, incompatibility issues may occur.
    
-   If you use a Windows operating system, we recommend that you use Python of the required version to compile the setup.py file and generate a wheel package in the [Docker](https://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/) container created from the quay.io/pypa/manylinux2010\_x86\_64 image. Python of the required version is stored in `/opt/python/cp27-cp27m/bin/python` or `/opt/python/cp37-cp37m/bin/python3`.
    

If you use a Linux operating system, make sure that the following requirements are met:

-   A Python version that is compatible with MaxCompute is used. You can run the following command in the command-line interface (CLI) of your system to check the Python version:
    
    ```
    python -c "import wheel.pep425tags; print(wheel.pep425tags.get_abi_tag())"
    ```
    
    -   If `cp27m` or `cp37m` is returned, the Python version meets the compatibility requirements.
        
    -   If `cp27mu` or `cp37mu` is returned, the Python version does not meet the compatibility requirements. In this case, you must run the `./configure --enable-unicode=ucs2` command to change the Python encoding format to UCS-2.
        
-   If code in C or C++ is required, your Linux operating system must be compatible with the GNU Compiler Collection (GCC) version in use.
    
    **Note**
    
    We recommend that you use GCC 4.9.2 or earlier. If the GCC version is later than 4.9.2, the .so file in the generated wheel package may be incompatible with MaxCompute.
    

If all requirements are met, perform the following steps to compile the setup.py file and generate a wheel package in the Linux operating system:

1.  Decompress a third-party package to your on-premises machine and run the required command in the CLI to go to the path where the setup.py file is stored.
    
    For example, the GDAL-3.2.0.zip package is downloaded. After you decompress the package, the setup.py file is stored in D:\\Downloads\\GDAL-3.2.0. Sample commands:
    
    ```
    cd D:\Downloads\GDAL-3.2.0
    ```
    
    ![解压路径](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2814096061/p181717.png)
    
2.  Run the following command in the CLI to check whether bdist\_wheel is returned:
    
    Sample commands:
    
    ```
    python setup.py --help-command
    ```
    
    -   If bdist\_wheel is returned, go to [Step 3](#step-l89-2b9-mya).
        
    -   If bdist\_wheel is not returned, change `from distutils.core import setup` to `from setuptools import setup` in the setup.py file. Then, go to [Step 3](#step-l89-2b9-mya).
        
3.  Run the following command in the CLI to compile the setup.py file and generate a wheel package:
    
    ```
    python setup.py bdist_wheel 
    ```
    
    **Note**
    
    The wheel package is stored in the dist folder.
    

## Reference third-party packages that are dependent on DLLs

Some third-party packages for Python depend on Python libraries and other DLLs. This section describes how to use the [Docker](https://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/) container to compile the .so library file and generate a wheel package that can be used in MaxCompute. The container is created from the quay.io/pypa/manylinux2010\_x86\_64 image. GDAL 3.0.4 is used in this example. You must upload the generated .so library file and the wheel package or NumPy package as resources and create a UDF. After the UDF is created, you can call third-party packages in Python UDFs. For more information about how to upload resources and create a UDF, see [Reference NumPy packages in Python 3 UDFs](#section-fvb-vln-9z0).

**Note**

You must make sure that Docker is installed before you can reference third-party packages that are dependent on DLLs in Python UDFs. For more information, see [Docker documentation](https://docs.docker.com/engine/reference/commandline/docker/).

To reference third-party packages that are dependent on DLLs in Python UDFs, perform the following steps:

1.  View the dependencies in the **Dependencies** section of the [PyPI](https://pypi.org/project/GDAL/#description) page.
    
    The following figure shows the dependencies of GDAL 3.0.4.![查看依赖项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2814096061/p181816.png)
    
    **Note**
    
    In the preceding figure, the dependencies include libgdal and numpy. To obtain libgdal, compile the GDAL source code in the Docker container. To obtain numpy, download the NumPy package on the [PyPI](https://pypi.org/project/numpy/#files) page or from the Docker container.
    
2.  Obtain the NumPy package.
    
    You can use one of the following methods to obtain the NumPy package:
    
    -   In the **Download files** section of the [PyPI](https://pypi.org/project/numpy/#files) page, click the package whose name ends with cp37-cp37m-manylinux1\_x86\_64.whl to download the package.
        
        **Note**
        
        If Python 2 is used, perform the following operations to download the NumPy package: In the **Navigation** section of the [PyPI](https://pypi.org/project/numpy/#files) page, click **Release history**, select 1.16.6 or an earlier version, and then click the package whose name ends with cp27-cp27m-manylinux1\_x86\_64.whl.
        
    -   Run the `/opt/python/cp37-cp37m/bin/pip download numpy -d ./` command in the container created from the quay.io/pypa/manylinux2010\_x86\_64 image to download the NumPy package to the current directory.
        
3.  Compile the .so library file.
    
    1.  Download the [GDAL 3.0.4 source code](https://gdal.org/download.html) file and decompress the file to your on-premises machine.
        
    2.  Download the Docker container created from the quay.io/pypa/manylinux2010\_x86\_64 image and enter the input mode of the Docker client.
        
        Sample commands:
        
        ```
        docker pull quay.io/pypa/manylinux2010_x86_64
        docker run -it quay.io/pypa/manylinux1_x86_64 /bin/bash
        ```
        
    3.  Upload the GDAL 3.0.4 source code to the Docker container.
        
        Sample commands:
        
        ```
        docker cp ./gdal-3.0.4 <CONTAINER ID>:/opt/source/  
        ```
        
        For more information about how to obtain CONTAINER ID, see [docker ps](https://docs.docker.com/engine/reference/commandline/ps/).
        
4.  Compile GDAL 3.0.4 source code in the container. For more information, see [BuildingOnUnix](http://web.archive.org/web/20240812045636/https://trac.osgeo.org/gdal/wiki/BuildingOnUnix).
    
    Sample commands:
    
    ```
    # Specify the directory to install PROJ 6 in the configure field. 
    ./configure --prefix=/path/to/install/prefix --with-proj=/path/to/install/proj6/prefix
    make
    make install
    export PATH=/path/to/install/prefix/bin:$PATH
    export LD_LIBRARY_PATH=/path/to/install/prefix/lib:$LD_LIBRARY_PATH
    export GDAL_DATA=/path/to/install/prefix/share/gdal
    # Test
    gdalinfo --version
    ```
    
    The following errors may occur during compilation:
    
    -   `configure: error: PROJ 6 symbols not found`: If this error occurs, install PROJ 6 to support GDAL 3.0 or later.
        
    -   `fatal error: zlib.h: No such file or directory`: If this error occurs, use the `yum install zlib-devel` command to compile the code instead.
        
    
5.  Run the Docker download commands to download two .so library files (not symbolic links) to your on-premises machine. Obtain libgdal.so from the lib folder in the installation directory of GDAL and libproj.so from the lib folder in the installation directory of PROJ 6.
    
6.  Generate a GDAL wheel package in the Docker container. For more information, see [BuildingOnUnix](http://web.archive.org/web/20240812045636/https://trac.osgeo.org/gdal/wiki/BuildingOnUnix).
    
    Sample commands:
    
    ```
    # If NumPy is required, install NumPy first. 
    /opt/python/cp37-cp37m/bin/pip install numpy
    # Switch to the directory in which GDAL source code is saved. 
    cd swig/python
    # Generate a wheel package and save it in the dist folder. Example: GDAL-3.0.4-cp37-cp37m-linux_x86_64.whl
    /opt/python/cp37-cp37m/bin/python setup.py bdist_wheel
    ```
    
7.  Upload the generated .so library file, wheel package, or NumPy package as resources and create a UDF. After the UDF is created, you can call third-party packages in Python UDFs. For more information about how to upload a resource and create a UDF, see [Reference NumPy packages in Python 3 UDFs](#section-fvb-vln-9z0).
    
    Take note of the following items when you upload a resource and create a UDF:
    
    -   When you upload resources, you must upload libgdal.so and libproj.so as file resources and numpy-1.19.2-cp37-cp37m-manylinux1\_x86\_64.zip and GDAL-3.0.4-cp37-cp37m-linux\_x86\_64.zip as archive resources.
        
    -   When you create functions, you must add libgdal.so, libproj.so, numpy-1.19.2-cp37-cp37m-manylinux1\_x86\_64.zip, and GDAL-3.0.4-cp37-cp37m-linux\_x86\_64.zip to the resource list of the functions.
        
    
    Sample code for a Python UDF:
    
    **Note**
    
    The following sample code is run in Python 3. If you want to run code in Python 2, take note of the `get_cache_file` parameter. For more information, see [Reference resources](/help/en/maxcompute/user-guide/python-2-udfs#section-bj3-h3f-xdb) in the "Develop a UDF in Python 2" topic.
    
    ```
    # coding: utf-8
    from odps.udf import annotate
    from odps.distcache import get_cache_file
    
    def include_file(file_name):
        import os, sys
        so_file = get_cache_file(file_name, 'b')
        
        with open(so_file.name, 'rb') as fp:
            content=fp.read()
            so = open(file_name, "wb")
            so.write(content)
            so.flush()
            so.close()
    
    @annotate("->string")
    class TryImport(object):
        def __init__(self):
            import sys
            include_file('libgdal.so.26')
            include_file('libproj.so.15')
            sys.path.insert(0, 'work/GDAL-3.0.4-cp37-cp37m-linux_x86_64.zip') # The GDAL package after compilation. You need only to change the package name that follows work/. 
            sys.path.insert(0, 'work/numpy-1.19.2-cp37-cp37m-manylinux1_x86_64.zip') # The NumPy package. You need only to change the package name after work/. 
    
        def evaluate(self):
            from osgeo import gdal
            from osgeo import ogr
            from osgeo import osr
            from osgeo import gdal_array
            from osgeo import gdalconst
            return "import succeed"
    ```
    
    **Note**
    
    If an error that indicates libgdal.so.26 or libproj.so.15 cannot be found occurs, you must change libgdal.so to libgdal.so.26 or libproj.so to libproj.so.15.
