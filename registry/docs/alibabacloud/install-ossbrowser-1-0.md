Use ossbrowser 1.0, a graphical tool, to upload, download, or delete files, and to configure permission policies. This tool supports various logon methods.

**Important**

-   This topic uses ossbrowser 1.18.0, which is the latest version of ossbrowser. For more information about all versions of ossbrowser 1.0, visit [all-releases.md](https://github.com/aliyun/oss-browser/blob/develop/all-releases.md).
    
-   To avoid failures caused by unstable network conditions, use [ossutil command line interface 2.0](/help/en/oss/developer-reference/ossutil-overview/#2a4b2fbc2f0a3) for uploading or downloading objects of 10 GB or larger over the Internet.
    

## **Windows**

1.  Download [ossbrowser package for 32-bit Windows](https://gosspublic.alicdn.com/ossbrowser/1.18.0/oss-browser-win32-ia32.zip) or [ossbrowser package for 64-bit Windows](https://gosspublic.alicdn.com/ossbrowser/1.18.0/oss-browser-win32-x64.zip) for your Windows architecture.
    
2.  Decompress the package.
    
3.  In the decompressed folder, double-click oss-browser.exe to run ossbrowser 1.0.
    

## **macOS**

1.  Download the [ossbrowser package for macOS](https://gosspublic.alicdn.com/ossbrowser/1.18.0/oss-browser-darwin-x64.zip).
    
2.  Decompress the package.
    
3.  In the oss-browser-darwin-x64 directory, right-click oss-browser.app and select **Open**.
    
4.  In the dialog box that appears, click **Open**.
    
5.  In the dialog box that appears, click **Allow**.
    

## **Linux**

### **CentOS 7/CentOS 8/Ubuntu 14**

### CentOS 7

1.  Install a graphical desktop environment.
    
    For more information about how to install a graphical desktop environment for CentOS 7, see [Install a graphical interface on a Linux instance](/help/en/ecs/user-guide/installing-a-graphical-desktop-environment-for-a-linux-instance#4556985065pzj).
    
2.  Install dependency files.
    
    1.  Update the YUM repository:
        
        ```
        sudo yum update
        ```
        
    2.  Install the dependency file named libgtk-x11-2.0.so.0:
        
        ```
        sudo yum install gtk2-2.24.31-1.el7.x86_64
        ```
        
    3.  Install the dependency file named libXtst.so.6:
        
        ```
        sudo yum install libXtst-1.2.3-1.el7.x86_64
        ```
        
    4.  Install the dependency file named libXss.so.1:
        
        ```
        sudo yum install libXScrnSaver-1.2.2-6.1.el7.x86_64
        ```
        
    5.  Install the dependency file named libgconf-2.so.4:
        
        ```
        sudo yum install GConf2-3.2.6-8.el7.x86_64
        ```
        
3.  Install ossbrowser 1.0.
    
    1.  Download the ossbrowser package for CentOS 7:
        
        ```
        sudo wget https://gosspublic.alicdn.com/ossbrowser/1.18.0/oss-browser-linux-x64.zip
        ```
        
    2.  Decompress the package:
        
        ```
        sudo unzip oss-browser-linux-x64.zip
        ```
        
    3.  Go to the oss-browser-linux-x64 directory:
        
        ```
        sudo cd oss-browser-linux-x64/
        ```
        
    4.  Run ossbrowser 1.0:
        
        ```
        sudo ./oss-browser
        ```
        

### CentOS 8

1.  Install a graphical desktop environment.
    
    For more information about how to install a graphical desktop environment for CentOS 8, see [Install a graphical interface on a Linux instance](/help/en/ecs/user-guide/installing-a-graphical-desktop-environment-for-a-linux-instance#4556985065pzj).
    
2.  Install dependency files.
    
    1.  Update the YUM repository:
        
        ```
        sudo yum update
        ```
        
    2.  Install the dependency file named libgtk-x11-2.0.so.0:
        
        ```
        sudo yum install gtk2-2.24.32-5.el8.x86_64
        ```
        
    3.  Install the dependency file named libX11-xcb.so.1:
        
        ```
        sudo yum install libX11-xcb-1.6.8-5.el8.x86_64
        ```
        
    4.  Install the dependency file named libXtst.so.6:
        
        ```
        sudo yum install libXtst-1.2.3-7.el8.x86_64
        ```
        
    5.  Install the dependency file named libXss.so.1:
        
        ```
        sudo yum install libXScrnSaver-1.2.3-1.el8.x86_64
        ```
        
    6.  Install the dependency file named libgconf-2.so.4:
        
        ```
        sudo yum install GConf2-3.2.6-22.el8.x86_64
        ```
        
    7.  Install the dependency file named libasound.so.2:
        
        ```
        sudo yum install alsa-lib-1.2.5-4.el8.x86_64
        ```
        
3.  Install ossbrowser 1.0.
    
    1.  Download the ossbrowser package for CentOS 8:
        
        ```
        sudo wget https://gosspublic.alicdn.com/ossbrowser/1.18.0/oss-browser-linux-x64.zip
        ```
        
    2.  Decompress the package:
        
        ```
        sudo unzip oss-browser-linux-x64.zip
        ```
        
    3.  Go to the oss-browser-linux-x64 directory:
        
        ```
        sudo cd oss-browser-linux-x64/
        ```
        
    4.  Run ossbrowser 1.0:
        
        ```
        sudo ./oss-browser
        ```
        

### Ubuntu 14

1.  Install a graphical desktop environment.
    
    For more information about how to install a graphical desktop environment for Ubuntu 14, see [Install a graphical interface on a Linux instance](/help/en/ecs/user-guide/installing-a-graphical-desktop-environment-for-a-linux-instance#4556985065pzj).
    
2.  Install dependency files.
    
    1.  Update the APT repository:
        
        ```
        sudo apt update
        ```
        
    2.  Install the dependency file named libgtk-x11-2.0.so.0:
        
        ```
        sudo apt install libgtk2.0-0
        ```
        
    3.  Install the dependency file named libX11-xcb.so.1:
        
        ```
        sudo apt install libx11-xcb-dev
        ```
        
    4.  Install the dependency file named libXtst.so.6:
        
        ```
        sudo apt install libxtst6
        ```
        
    5.  Install the dependency file named libXss.so.1:
        
        ```
        sudo apt install libxss1
        ```
        
    6.  Install the dependency file named libgconf-2.so.4:
        
        ```
        sudo apt install libgconf-2-4
        ```
        
3.  Install ossbrowser 1.0.
    
    1.  Download the ossbrowser package for Ubuntu:
        
        ```
        sudo wget https://gosspublic.alicdn.com/ossbrowser/1.18.0/oss-browser-linux-x64.zip
        ```
        
    2.  Decompress the package:
        
        ```
        sudo unzip oss-browser-linux-x64.zip
        ```
        
    3.  Go to the oss-browser-linux-x64 directory:
        
        ```
        sudo cd oss-browser-linux-x64/
        ```
        
    4.  Run ossbrowser 1.0:
        
        ```
        sudo ./oss-browser
        ```
        

## What to do next

You can [Log on to ossbrowser 1.0](/help/en/oss/developer-reference/logon-to-ossbrowser-1-0#9ba38e7d178j4) after installation.
