Function Compute provides built-in runtimes that include common dependencies for your functions to reference. However, if these built-in dependencies cannot meet your business requirements, you can install third-party dependencies. This topic describes how to install third-party dependencies for a function.

## Background

For more information about built-in common dependencies in Function Compute, see the following topics:

-   [Built-in modules for Node.js runtimes](/help/en/functioncompute/fc-3-0/user-guide/runtime-overview-1#section-72g-u4c-26d)
    
-   [Built-in modules for Python runtimes](/help/en/functioncompute/fc-3-0/user-guide/runtime-overview-2#section-kiq-3ri-pzj)
    
-   [Built-in packages for PHP runtimes](/help/en/functioncompute/fc-3-0/user-guide/overview-php#section-uet-o0g-h85)
    
-   [Overview of Java runtimes](/help/en/functioncompute/runtime-overview-3)
    
-   [Overview of C# runtimes](/help/en/functioncompute/overview-31)
    
-   [Overview of Go runtimes](/help/en/functioncompute/fc-3-0/user-guide/overview-of-runtimes-1)
    
-   [Overview of custom runtimes](/help/en/functioncompute/fc-3-0/user-guide/overview-10-2)
    

## Install dependencies by using layers

The official public layers of Function Compute are pre-installed with common dependency libraries and can be directly used. If you want to get more public layers, see [awesome-layers](https://github.com/awesome-fc/awesome-layers). You can also build a custom layer to install required dependencies.

### Use a public layer

-   **Official public layers**
    
    Log on to the [Function Compute console](https://fc.console.alibabacloud.com), locate the function that you want to manage and click on it. On the Function Details page, choose the **Configurations** tab, and click **Modify** on the right side of the **Advanced Settings** section. In the Layers section of the **Advanced Settings** panel, choose **\+ Add Layer** > **Add Public Layer**. Section ① in the following figure shows an example. For more information, see [Configure a public layer](/help/en/functioncompute/fc/user-guide/configure-common-layers-for-a-function-1).
    
-   **Non-official public layers**
    
    Find the layer you want to use from [awesome-layers](https://github.com/awesome-fc/awesome-layers) and obtain the Alibaba Cloud Resource Name (ARN) of the layer. On the Function Details page, choose the **Configurations** tab, and click **Modify** on the right side of the **Advanced Settings** section. In the Layers section of the **Advanced Settings** panel, choose **\+ Add Layer** > **Add Layer by ARN**. Section ② in the following figure shows an example.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2056011471/p822488.png)

### Build a custom layer

-   **In the Function Compute console**
    
    Log on to the [Function Compute console](https://fc.console.alibabacloud.com). In the left-side navigation pane, choose **Advanced Features** > **Layers**. For more information, see [Create a custom layer](/help/en/functioncompute/fc/user-guide/create-a-custom-layer-1).
    
    **Note**
    
    This method does not support dependencies that contain dynamic-link libraries (.so files), such as the Puppeteer dependency library for Node.js. If you want to install such a dependency, we recommend that you use a Dockerfile to build the layer.
    
-   **On an on-premises machine**
    
    You can build a custom layer on an on-premises machine, but it's essential to ensure that the on-premises operating system (OS) and processor architecture are completely consistent with the Function Compute runtime. This means you must use an x86-64 Linux OS or make sure that the installed dependency library does not depend on the underlying environment or processor architecture. For more information about how to build a custom layer, see [Build a .ZIP file for a layer](/help/en/functioncompute/fc/user-guide/create-a-custom-layer-1#section-jos-h78-3xb).
    
    Some dependencies, such as the Python [NumPy](https://numpy.org/?spm=a2c4g.11186623.0.0.56e5417cDTnWes) library, are environment-dependent. For example, if your on-premises machine runs macOS with M1 chips, you cannot install such dependencies on that machine.
    
-   **By using a Dockerfile**
    
    If a dependency contains underlying dynamic-link libraries or fails to be installed on your on-premises machine, you can use a Dockerfile to build a layer and install the dependency. For more information, see [Use a Dockerfile to build a layer](/help/en/functioncompute/fc/user-guide/use-a-dockerfile-to-build-a-layer-1).
    

## Install dependencies in the Function Compute console

### Package and upload dependencies

1.  Bundle third-party dependencies with your code files into a package.
    
    **Important**
    
    -   You must package all files in the code directory. Make sure the function handler file is in the root directory of the package.
        
    -   The packaging method differs depending on the OS. Select a method that best fits your OS.
        
    
2.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com) and upload the package to deploy your function by using one of the following methods: a ZIP file, a folder, or a package from OSS.
    

### Install dependencies in WebIDE

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com) and find the function you want to manage.
    
2.  On the Function Details page, click the **Code** tab. On the WebIDE UI, click **Terminal** > **New Terminal**. In Terminal, run the `pip install -t . <PackageName>` command to install dependencies.
    
    ```
    pip install -t . <PackageName>   # PackageName indicates the name of the dependency package. -t indicates the installation path. . indicates to install in the current directory.
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9309263271/p822501.png)
    
3.  Click **Deploy**.
    

## Install dependencies by using Serverless Devs

You can also create and deploy a function to Function Compute by using Serverless Devs. For more information, see [Common commands of Serverless Devs](/help/en/functioncompute/fc/developer-reference/serverless-devs-commands-1).
