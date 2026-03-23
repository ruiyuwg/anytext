MaxCompute Studio allows you to develop Python programs, such as user-defined functions (UDFs) and MaxCompute SDK for Python (PyODPS) scripts, in IntelliJ IDEA. This topic describes how to configure a Python development environment.

## Install PyODPS

1.  Install PyODPS on your on-premises machine. For more information, see [Install PyODPS](/help/en/maxcompute/user-guide/install-pyodps#concept-e14-gjf-cfb).
2.  Start IntelliJ IDEA. In the top navigation bar, choose File > Settings.
3.  On the Settings page, click MaxCompute Studio in the left-side navigation pane.
4.  Set the Python path to resolve UDF parameter to the local path of the Python.exe file.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7144130061/p34672.png)
    

## Install the Python plug-in

In the plug-in repository of IntelliJ IDEA, search for Python Community Edition and install the Python plug-in.

1.  In the top navigation bar of IntelliJ IDEA, choose File > Settings.
2.  On the Settings page, click Plugins in the left-side navigation pane.
3.  In the search box, enter Python Community Edition to search for the Python plug-in. Then, install the Python plug-in.
    
    ![**](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7144130061/p95688.png)
    

## Configure the Python dependency

After you configure the Python dependency for the MaxCompute script module, you can develop Python programs by using MaxCompute Studio.

1.  In the top navigation bar, choose File > Project Structure.
2.  Add the Python SDK.
    1.  In the left-side navigation pane, click SDKs under Platform Settings.
    2.  Click the ![Plus icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7417953861/p633562.png) icon at the top, select Python SDK, select System Interpreter, and then select an Interpreter as prompted.
        
        The following figure shows an example of the configuration. ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7144130061/p3391.png)
        
    3.  Click Apply.
3.  Configure the Python dependency for the MaxCompute script module.
    1.  In the left-side navigation pane, click Modules under Project Settings.
    2.  Click the plus sign (+) at the top and add the dependency on the Python SDK for the MaxCompute script module.
        
        ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7144130061/p3393.png)
        
    3.  Click Apply.
