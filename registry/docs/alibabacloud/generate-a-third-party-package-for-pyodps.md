The `pyodps-pack` command-line interface (CLI) tool is provided in PyODPS V0.11.3 and later. This tool is used to generate a third-party package that complies with the PyODPS standards and DataWorks PyODPS node standards. The operation method is similar to the method of using `pip` commands. You can use this tool to generate a `.tar.gz` file that contains all project dependencies, including the project dependencies compiled and packaged in MaxCompute or DataWorks. You can also use this tool to package custom Python code in your project.

## Prepare the environment

`pyodps-pack` is installed when you install PyODPS and is located in the bin directory for Linux and macOS or the Scripts directory for Windows under the Python installation path. You do not need to install `pyodps-pack` separately.

You can run `pyodps-pack` commands in the Windows CLI, macOS, or Linux Shell. You cannot run these commands in the DataWorks console, on the MaxCompute client (odpscmd), or the Python CLI.

If the bin or Scripts directory is included in the PATH environment variable, which is configured during Python installation or the activation of the Python virtual environment, no additional steps are required to use the directory. If the directory is not included in the environment variable, you must manually navigate to the directory or modify the PATH environment variable.

### Docker mode

To run the `pyodps-pack` tool in Docker mode, you must install Docker. The `pyodps-pack` tool can automatically call Docker that you installed and download images. Therefore, you do not need to manually download images and run Docker commands.

**Note**

You can run `pyodps-pack` commands only in Docker mode. If you run pyodps-pack commands in non-Docker mode, an error is reported.

-   Linux operating system: For more information about how to install Docker in Linux, see [Install Docker Engine](https://docs.docker.com/engine/install/).
    
-   macOS or Windows operating system:
    
    -   If you are an individual developer, you can use [Docker Desktop](https://www.docker.com/products/docker-desktop/).
        
    -   If you are an unauthorized enterprise user, we recommend that you use the open source [Rancher Desktop](https://rancherdesktop.io/).
        

**Note**

The `pyodps-pack` tool is not tested in other Docker environments, such as `minikube`. The availability of the tool in these environments cannot be ensured.

If you use the Windows operating system, Windows Server may be required for your Docker service to start. However, Windows Server is disabled by a large number of enterprises due to security concerns. If issues occur, use the Linux operating system instead or try to start Windows Server. If Rancher Desktop is used, `containerd` may not be used as a container engine in Windows 10. You can try to use `dockerd` instead. For more information about how to configure a container engine, see [Container Engine](https://docs.rancherdesktop.io/ui/preferences/container-engine/general).

### Non-Docker mode

**Note**

If your environment supports Docker, we recommend that you package all PyODPS dependencies, code, and code in a Git repository in Docker mode. You can consider using the non-Docker mode only when your environment does not support Docker. The packages generated in non-Docker mode may not be available.

If you have difficulties in installing Docker, you can try to use the non-Docker mode by adding the `--without-docker` parameter. Before you use the non-Docker mode, you must install pip in your Python environment. If you encounter an error or the package that is generated cannot be used when you run the `pyodps-pack` commands in non-Docker mode, use the Docker mode instead. If Windows users want to use the non-Docker mode, the users need to install Git Bash, which is included in [Git for Windows](https://gitforwindows.org/).

## Generate a package

### Limits

-   We recommend that you generate a package in Python 3 for newly created projects in MaxCompute. If you perform the following steps in Python 2, the packaging operation may fail.
    
-   For existing projects, we recommend that you migrate these projects to Python 3. This helps simplify subsequent maintenance operations.
    
-   When you run the following commands in the Linux operating system, you need to use `sudo` to call the `pyodps-pack` tool. This ensures normal operations of Docker.
    
-   To avoid possible permission errors, do not use sudo to call the pyodps-pack tool when you run commands in the following sections in macOS.
    

### Package all dependencies

**Note**

Specific Python packages may have some optional dependencies. For example, pandas depends on the openpyxl package when you use the to\_excel method. `pyodps-pack` cannot automatically include the optional dependencies. You must manually add these dependencies to the packaging command based on the related description in the third-party package documentation.

After you install PyODPS, you can run the following commands to package pandas and pandas dependencies for Python 3 in the local CLI:

-   Package all dependencies in Docker mode.
    
    ```
    pyodps-pack pandas
    ```
    
-   Package all dependencies in non-Docker mode.
    
    ```
    pyodps-pack --without-docker pandas
    ```
    
-   Specify the pandas version for packaging dependencies.
    
    ```
    pyodps-pack pandas==1.2.5
    ```
    

After you perform the packaging operations, the versions of all dependency packages are displayed in the pyodps-pack tool, as shown in the following code. The `packages.tar.gz` file is generated in the current directory. The file contains the following dependency packages:

```
Package         Version
--------------- -------
numpy           1.21.6
pandas          1.2.5
python-dateutil 2.8.2
pytz            2022.6
six             1.16.0
```

If you want to generate a package in Python 2.7, check whether the generated package is used in MaxCompute or DataWorks. For more information, see [PyODPS DataFrame](/help/en/maxcompute/user-guide/pyodps-dataframe-code-running-environment).

-   If you want to use the generated package in MaxCompute, run the following command:
    
    ```
    pyodps-pack --mcpy27 pandas
    ```
    
-   If you want to use the generated package in DataWorks, run the following command:
    
    ```
    pyodps-pack --dwpy27 pandas
    ```
    

### Package custom code

You can use the `pyodps-pack` tool to package custom Python projects that are created based on the `setup.py` or `pyproject.toml` file. For more information, see [Build System Interface](https://pip.pypa.io/en/stable/reference/build-system/).

In this example, the `pyodps-pack` tool is used to package a project that is created based on the `pyproject.toml` file. The project uses the following directory structure:

```
test_package_root
├── test_package
│   ├── __init__.py
│   ├── mod1.py
│   └── subpackage
│       ├── __init__.py
│       └── mod2.py
└── pyproject.toml 
```

The `pyproject.toml` file may contain the following data:

```
[project]
name = "test_package"
description = "pyodps-pack example package"
version = "0.1.0"
dependencies = [
    "pandas>=1.0.5"
]
```

After the package is generated, run the following command to compress the generated package and all dependency packages into the `packages.tar.gz` file. In the command, replace `path_to_package` with the upper-level directory of `test_package_root`.

```
pyodps-pack /<path_to_package>/test_package_root
```

### Package the code in a Git repository

You can use the `pyodps-pack` tool to package the code in a Git repository such as a GitHub repository. For example, you can run the following command to package PyODPS code:

```
pyodps-pack git+https://github.com/aliyun/aliyun-odps-python-sdk.git
```

If you want to package a branch or tag, you can run the following command:

```
pyodps-pack git+https://github.com/aliyun/aliyun-odps-python-sdk.git@v0.11.2.2
```

To package code, you may need to install the dependencies that are required for packaging, such as `Cython`. You can use the `--install-requires` parameter to specify the dependencies that are required for installation. You can also write a file named `install-requires.txt` that has the same format as the `requirements.txt` file and use the `--install-requires-file` parameter to specify the written file. For example, if you need to install `Cython` before you package PyODPS code, you can run the following command:

```
pyodps-pack \
    --install-requires cython \
    git+https://github.com/aliyun/aliyun-odps-python-sdk.git@v0.11.2.2
```

You can also run the following command to create a file named `install-requires.txt` and write content to the file based on the format of the `requirements.txt` file. Sample file content:

```
cython>0.29
```

Sample packaging command:

```
pyodps-pack \
    --install-requires-file install-requires.txt \
    git+https://github.com/aliyun/aliyun-odps-python-sdk.git@v0.11.2.2
```

### Package binary dependencies

Some packages contain additional binary dependencies, such as dynamic-link libraries that you need to compile or install. The `pyodps-pack` tool provides the `--run-before` parameter to specify the step you need to perform before the packaging operation. In the specified step, you can install the required binary dependencies. The following example describes how to package the [Geospatial Data Abstraction Library (GDAL)](https://gdal.org/).

1.  Determine the binary dependencies that need to be installed during packaging.
    
    Install libgdal in a version later than 3.6.0 based on the documentation of GDAL 3.6.0 on [PyPI](https://pypi.org/project/GDAL/3.6.0/). As mentioned in [libgdal compilation instructions](https://gdal.org/development/building_from_source.html), the package requires the PROJ package of version 6.0 or later. Both the binary packages need to be compressed into a file by using CMake. Write a script file for compilation of these binary dependencies and save the file as `install-gdal.sh`.
    
    ```
    #!/bin/bash
    set -e
    
    cd /tmp
    curl -o proj-6.3.2.tar.gz https://download.osgeo.org/proj/proj-6.3.2.tar.gz
    tar xzf proj-6.3.2.tar.gz
    cd proj-6.3.2
    mkdir build && cd build
    cmake ..
    cmake --build .
    cmake --build . --target install
    
    cd /tmp
    curl -o gdal-3.6.0.tar.gz http://download.osgeo.org/gdal/3.6.0/gdal-3.6.0.tar.gz
    tar xzf gdal-3.6.0.tar.gz
    cd gdal-3.6.0
    mkdir build && cd build
    cmake ..
    cmake --build .
    cmake --build . --target install
    ```
    
2.  Run the following command to generate a package by using the `pyodps-pack` tool:
    
    ```
    pyodps-pack --install-requires oldest-supported-numpy --run-before install-gdal.sh gdal==3.6.0
    ```
    

## Parameters

The following table describes the parameters available for `pyodps-pack` commands. You can use the parameters to control the packaging process.

**Parameter**

**Description**

`-r`, `--requirement <file>`

The dependency file that is required for packaging. You can specify the parameters several times.

`-o`, `--output <file>`

The name of the package that you want to generate. Default value: `packages.tar.gz`.

`--install-requires <item>`

The PyPI dependencies that are required for packaging. You can specify multiple PyPI dependencies. This parameter is used in the CLI. These dependency files are not necessarily included in the generated package.

`--install-requires-file <file>`

The PyPI dependency files that are required for packaging. You can specify multiple files. These dependency files are not necessarily included in the generated package.

`--run-before <script-file>`

The Bash script that you need to execute before packaging. In most cases, the Bash script is used to install binary dependencies.

`-x`, `--exclude <dependency>`

The PyPI dependency that needs to be excluded from the generated package. You can specify the parameters several times.

`--no-deps`

A specific project whose dependencies are not included in the generated package.

`-i`, `--index-url <index-url>`

The PyPI URL required for packaging. By default, the value of `global.index-url` in the output of the `pip config list` command is used. The value of global.index-url is configured in the `pip.conf` configuration file.

`--trusted-host <host>`

The HTTPS domain name whose certificate issues need to be ignored during packaging.

`-l`, `--legacy-image`

After you specify the parameters, you can use the CentOS 5 image for packaging. This way, the generated package can be used in environments such as Apsara Stack of earlier versions.

`--mcpy27`

After you specify this parameter, a third-party package is generated for Python 2.7 in MaxCompute. If you specify this parameter, the image specified by `--legacy-image` is enabled for packaging by default.

`--dwpy27`

After you specify this parameter, a third-party package is generated for Python 2.7 in DataWorks. If you specify this parameter, the image specified by `--legacy-image` is enabled for packaging by default.

`--prefer-binary`

After you specify this parameter, the earlier versions that contain binary dependencies in PyPI are preferentially selected rather than the new versions that contain only the source code package.

`--docker-args <args>`

The additional parameters that are required for running Docker commands. Enclose multiple parameters in double quotation marks ("), such as `--docker-args "--ip 192.168.1.10"`.

`--without-docker`

If you specify this parameter, the `pyodps-pack` tool is run in non-Docker mode. If binary dependencies exist, an error may be reported or the generated package may be unavailable.

`--without-merge`

If you specify this parameter, a `.tar.gz` file is not generated after a .whl file is downloaded or generated. In this case, the `.whl` file is retained.

`--debug`

If you specify this parameter, the command execution details are returned. You can use the returned information for troubleshooting.

For more information about how to use third-party packages, see [Reference a third-party package in a PyODPS node](/help/en/maxcompute/user-guide/reference-a-third-party-package-in-a-pyodps-node-1).
