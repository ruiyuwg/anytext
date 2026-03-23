Python is an interpreted, interactive, and object-oriented programming language that is easy to use. Python is widely used in AI, website development, and scientific computing, and is an indispensable tool for modern technology development. This topic describes how to deploy a Python environment on an Elastic Compute Service (ECS) instance.

## **Use a package manager to install Python**

You can use a package manager to install Python in an efficient and easy manner. However, the Python version may be outdated.

## Alibaba Cloud Linux and CentOS

1.  Update the software packages in the operating system.
    
    ```
    sudo yum update -y
    ```
    
2.  List all Python software packages that are available but not yet installed.
    
    ```
    sudo yum list available | grep '^python3\([0-9]\|\.[0-3]\+\)\.\(x86_64|aarch64\)*'
    ```
    
    The following figure shows that the package manager provides Python 3.8 and Python 3.11, which can be installed on the instance.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p881076.png)
    
3.  Select a Python version that you want to install based on your business requirements. In this example, Python 3.8 is installed. If no version meets your business requirements, you can [manually install Python](#8188b23d185mt).
    
    -   x86 architecture
        
        ```
        sudo yum install python38.x86_64 -y
        ```
        
    -   Arm architecture
        
        ```
        sudo yum install python38.aarch64 -y
        ```
        
4.  You can run the `python3.8 -V` command to check whether the Python version is installed as expected.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p880305.png)
    

## Ubuntu

1.  Update the software packages in the operating system.
    
    ```
    sudo apt update
    ```
    
2.  List all available Python packages.
    
    ```
    apt-cache search python | grep '^python3\.[0-9]\+ '
    ```
    
    The following figure shows that the package manager provides Python 3.8 and Python 3.9, which can be installed on the instance. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p881651.png)
    
3.  Select a Python version that you want to install based on your business requirements. In this example, Python 3.8 is installed. If no version meets your business requirements, you can [manually install Python](#fd707c8a66g9s).
    
    ```
    sudo apt install -y python3.8
    ```
    
4.  You can run the `python3.8 -V` command to check whether the Python version is installed as expected.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p881823.png)
    

## **Manually install Python**

The following procedure is suitable for scenarios in which you want to install a specific Python version or configure custom settings.

## Alibaba Cloud Linux and CentOS

1.  Go to the [Python website](https://www.python.org/). In the top navigation bar, choose **Downloads** > **Source code**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p881856.png)
    
2.  Select a Python version that you want to install, copy the download link, and then run the following commands to download and decompress the software package. In this example, Python 3.8.10 is installed.
    
    ```
    # Replace https://www.python.org/ftp/python/3.8.10/Python-3.8.10.tgz with the actual URL.
    wget https://www.python.org/ftp/python/3.8.10/Python-3.8.10.tgz
    tar xzf Python-3.8.10.tgz
    cd Python-3.8.10
    ```
    
3.  Install the required dependencies.
    
    ```
    sudo yum groupinstall -y "Development Tools"
    sudo yum install -y python3-devel
    ```
    
4.  Compile and install the source code.
    
    ```
    ./configure --enable-optimizations
    make -j $(nproc)
    sudo make altinstall
    ```
    
5.  Check the installation result.
    
    ```
    python3.8 --version
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p879451.png)
    

## Ubuntu

1.  Go to the [Python website](https://www.python.org/). In the top navigation bar, choose **Downloads** > **Source code**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p881857.png)
    
2.  Select a Python version that you want to install, copy the download link, and then run the following commands to download and decompress the software package. In this example, Python 3.8.10 is installed.
    
    ```
    wget https://www.python.org/ftp/python/3.8.10/Python-3.8.10.tgz
    tar -xzf Python-3.8.10.tgz
    ```
    
3.  Install the required dependencies.
    
    ```
    sudo apt update
    sudo apt install -y build-essential checkinstall libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libbz2-dev libffi-dev zlib1g-dev
    ```
    
4.  Compile and install the source code.
    
    ```
    cd Python-3.8.10
    ./configure --enable-optimizations
    make -j $(nproc)
    sudo make altinstall
    ```
    
5.  Check the installation result.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p881767.png)
    

## Windows

1.  Go to the [Python website](https://www.python.org/). In the top navigation bar, choose **Downloads** > **Windows**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p881859.png)
    
2.  Select a Python version that you want to install. In this example, select Python 3.8.10 and click Download Windows installer (64-bit) to download the installation file. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p881870.png)
    
3.  Double-click the downloaded installation file to install Python. In this example, the downloaded installation file is python-3.12.3-amd64.exe.
    
4.  Select **Customize installation** and **Add Python 3.8 to PATH**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p882063.png)
    
5.  Click Next.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p882065.png)
    
6.  Modify the installation path and click Install.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p882067.png)
    
7.  Open the Command Prompt, enter `python`, and then press the Enter key. If the command output shown in the following figure is returned, Python is installed as expected.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p882076.png)
    

## **Install Python by using a multi-version management tool**

This method is suitable for scenarios in which you want to manage multiple Python versions on the same machine or switch between different versions for testing and development. In this example, Python is installed by using the Pyenv tool.

### **Install Pyenv**

## Alibaba Cloud Linux and CentOS

1.  Run the following commands to install the compiler:
    
    ```
    sudo yum groupinstall -y "Development Tools"
    sudo yum install -y openssl-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel libffi-devel xz-devel
    ```
    
2.  Run the following command to install Pyenv:
    
    ```
    git clone https://gitee.com/mirrors/pyenv.git ~/.pyenv
    ```
    
3.  Run the following command to configure the environment variables.
    
    **Note**
    
    The temporary environment variables configured by using the export command are valid only for the current session. After you exit the session, the configured environment variables are no longer valid. To configure permanent environment variables, add the export command to the startup configuration file of your operating system.
    
    ```
    export PATH="$HOME/.pyenv/bin:$PATH"
    eval "$(pyenv init --path)"
    eval "$(pyenv init -)"
    ```
    
4.  Run the following command for the new environment variables to take effect:
    
    ```
    source ~/.bashrc
    ```
    
5.  Run the following command to check whether Pyenv is installed:
    
    ```
    pyenv --version
    ```
    

## Ubuntu

1.  Run the following commands to install the compiler:
    
    ```
    sudo apt update
    sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev
    ```
    
2.  Run the following command to install Pyenv:
    
    ```
    git clone https://gitee.com/mirrors/pyenv.git ~/.pyenv
    ```
    
3.  Run the following command to configure the environment variables.
    
    **Note**
    
    The temporary environment variables configured by using the export command are valid only for the current session. After you exit the session, the configured environment variables become invalid. To configure permanent environment variables, you can add the export command to the startup configuration file of your operating system.
    
    ```
    echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
    echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
    echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bashrc
    ```
    
4.  Run the following command for the new environment variables to take effect:
    
    ```
    exec $SHELL
    ```
    
5.  Run the following command to check whether Pyenv is installed:
    
    ```
    pyenv --version
    ```
    

## Windows

1.  In the taskbar search box, search for Windows PowerShell and click Open.
    
2.  Install Chocolatey in the Windows PowerShell.
    
    ```
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```
    
3.  Use Chocolatey to install pyenv-win.
    
    ```
    choco install pyenv-win
    ```
    
4.  Configure the environment variables.
    
    After the installation is complete, you must add pyenv as a system environment variable. Right-click This PC, choose **Properties** > **Advanced system settings** > **Environment Variables**, select the Path variable in the System variables section, and then click **New**. Then, add `%USERPROFILE%\.pyenv\pyenv-win\bin` to the path list. Click **OK** to save the environment variable configuration.
    
5.  Close and reopen the Windows PowerShell window.
    
6.  Run the following command to check whether Pyenv is installed:
    
    ```
    pyenv --version
    ```
    

### **Install Python**

After Pyenv is installed, you can use Pyenv to install multiple versions of Python to meet the requirements of different environments.

1.  Query the versions of Python that can be installed.
    
    ```
    pyenv install -l | grep -E '^[^a-zA-Z]+$'
    ```
    
2.  Install Python. In this example, Python 3.8.10 and Python 3.12.1 are installed.
    
    **Note**
    
    By default, `pyenv` uses a single-thread compilation method, which results in a longer installation time for Python. To speed up, you can increase the number of concurrent compilation threads by setting `export MAKE_OPTS="-j$(nproc)"`.
    
    ```
    pyenv install 3.8.10
    ```
    
    ```
    pyenv install 3.12.1
    ```
    
3.  View all available Python versions.
    
    ```
    pyenv versions
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p889737.png)
    
4.  Specify a global default Python version.
    
    ```
    pyenv global 3.8.10
    ```
    
5.  View the current Python version.
    
    ```
    pyenv version
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235305371/p889739.png)
    
6.  Specify a Python version for a specific project.
    
    ```
    pyenv local 3.12.1
    ```
    

## **References**

-   For information about how to use Alibaba Cloud SDK for Python, see [Python SDK call examples](/help/en/ecs/developer-reference/example-on-how-to-use-ecs-sdk-for-python).
    
-   For information about how to resolve issues when you use SDK for Python, see [Alibaba Cloud SDK for Python: Installation FAQ for Linux](/help/en/ecs/developer-reference/faq-about-installing-alibaba-cloud-sdk-for-python-on-a-linux-ecs-instance).
    
-   Cloud Assistant allows you to batch run Shell, PowerShell, and batch commands on ECS instances, without the need to log on to the instances. This way, you can use Cloud Assistant to install Python on the ECS instances. For more information about Cloud Assistant, see [Cloud Assistant overview](/help/en/ecs/user-guide/overview-10).
