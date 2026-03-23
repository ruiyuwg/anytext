Export your API key as an environment variable to avoid hardcoding it in code and reduce leak risk. This topic describes the export methods.

## **Prerequisites**

You have activated Model Studio and [created an API key](/help/en/model-studio/get-api-key).

## Procedure

## Linux

### **Permanent environment variable**

To make the API key available in all future sessions, export it permanently.

1.  Run the following command to add the environment variable to the `~/.bashrc` file:
    
    ```
    # Replace YOUR_DASHSCOPE_API_KEY with your API key.
    echo "export DASHSCOPE_API_KEY='YOUR_DASHSCOPE_API_KEY'" >> ~/.bashrc
    ```
    
    You can also edit the `~/.bashrc` file manually.
    
    **Edit manually**
    
    Run the following command to open the `~/.bashrc` file.
    
    ```
    nano ~/.bashrc
    ```
    
    Add the following content to the file.
    
    ```
    # Replace YOUR_DASHSCOPE_API_KEY with your API key.
    export DASHSCOPE_API_KEY="YOUR_DASHSCOPE_API_KEY"
    ```
    
    In the nano editor, press Ctrl+X and then Y. Press Enter to save and close the file.
    
2.  Run the following command to make the change take effect:
    
    ```
    source ~/.bashrc
    ```
    
3.  Create a session and run the following command to check whether the environment variable takes effect:
    
    ```
    echo $DASHSCOPE_API_KEY
    ```
    

### Temporary environment variable

To use the API key only in the current session, export it temporarily.

1.  Run the following command:
    
    ```
    # Replace YOUR_DASHSCOPE_API_KEY with your API key.
    export DASHSCOPE_API_KEY="YOUR_DASHSCOPE_API_KEY"
    ```
    
2.  Run the following command to check whether the environment variable takes effect:
    
    ```
    echo $DASHSCOPE_API_KEY
    ```
    

## macOS

### Permanent environment variable

To make the API key available in all future sessions, export it permanently.

1.  Run the following command to check the default Shell type.
    
    ```
    echo $SHELL
    ```
    
2.  Perform the following operation based on your Shell type.
    
    #### **Zsh**
    
    1.  Run the following command to add the environment variable to the `~/.zshrc` file.
        
        ```
        # Replace YOUR_DASHSCOPE_API_KEY with your API key.
        echo "export DASHSCOPE_API_KEY='YOUR_DASHSCOPE_API_KEY'" >> ~/.zshrc
        ```
        
        You can also edit the `~/.zshrc` file manually.
        
        **Edit manually**
        
        Run the following command to open the configuration file.
        
        ```
        nano ~/.zshrc
        ```
        
        Add the following content to the file.
        
        ```
        # Replace YOUR_DASHSCOPE_API_KEY with your API key.
        export DASHSCOPE_API_KEY="YOUR_DASHSCOPE_API_KEY"
        ```
        
        In the nano editor, press Ctrl+X and then Y. Press Enter to save and close the file.
        
    2.  Run the following command to make the change take effect:
        
        ```
        source ~/.zshrc
        ```
        
    3.  Create a session and run the following command to check whether the environment variable takes effect:
        
        ```
        echo $DASHSCOPE_API_KEY
        ```
        
    
    #### **Bash**
    
    1.  Run the following command to add the environment variable to the `~/.bash_profile` file.
        
        ```
        # Replace YOUR_DASHSCOPE_API_KEY with your API key.
        echo "export DASHSCOPE_API_KEY='YOUR_DASHSCOPE_API_KEY'" >> ~/.bash_profile
        ```
        
        You can also edit the `~/.bash_profile` file manually.
        
        **Edit manually**
        
        Run the following command to open the file.
        
        ```
        nano ~/.bash_profile
        ```
        
        Add the following content to the file.
        
        ```
        # Replace YOUR_DASHSCOPE_API_KEY with your API key.
        export DASHSCOPE_API_KEY="YOUR_DASHSCOPE_API_KEY"
        ```
        
        In the nano editor, press Ctrl+X and then Y. Press Enter to save and close the file.
        
    2.  Run the following command to make the change take effect:
        
        ```
        source ~/.bash_profile
        ```
        
    3.  Create a session and run the following command to check whether the environment variable takes effect:
        
        ```
        echo $DASHSCOPE_API_KEY
        ```
        
    

### Temporary environment variable

To use the API key only in the current session, export it temporarily.

> The following commands work only for Zsh and Bash.

1.  Run the following command:
    
    ```
    # Replace YOUR_DASHSCOPE_API_KEY with your API key.
    export DASHSCOPE_API_KEY="YOUR_DASHSCOPE_API_KEY"
    ```
    
2.  Run the following command to check whether the environment variable takes effect:
    
    ```
    echo $DASHSCOPE_API_KEY
    ```
    

## Windows

In Windows, you can export environment variables using System Properties, Command Line, or PowerShell.

### System Properties

**Note**

-   The environment variable configured in this way is permanently effective.
    
-   Modifying system environment variable requires administrative permissions.
    
-   After configuring the environment variable, it will not affect already-running programs. Restart IDEs and command windows, or open a new command line, to load the new variable.
    

1.  Press `Win+Q` on your desktop. Enter "**Edit the system environment variables**" in the search box, and click to open the **System Properties** window.
    
2.  In the **System Properties** window, click **Environment Variables**. In the **System Variables** section, click **New**, enter `DASHSCOPE_API_KEY` as the variable name, and `your actual API Key` as the variable value.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0439247371/p894015.png)
    
3.  Click **OK** on all three dialog boxes.
    
4.  Open CMD or Windows PowerShell and run the following command to check whether the environment variable takes effect.
    
    -   CMD:
        
        ```
        echo %DASHSCOPE_API_KEY%
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9623589371/p912522.png)
        
    -   Windows PowerShell:
        
        ```
        echo $env:DASHSCOPE_API_KEY
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9623589371/p912525.png)
        

## CMD

### Permanent environment variable

To make the API key available in all future sessions, export it permanently.

1.  Run the following command:
    
    ```
    # Replace YOUR_DASHSCOPE_API_KEY with your API key.
    setx DASHSCOPE_API_KEY "YOUR_DASHSCOPE_API_KEY"
    ```
    
2.  Create a new session.
    
3.  Run the following command to check whether the environment variable takes effect:
    
    ```
    echo %DASHSCOPE_API_KEY%
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9623589371/p912522.png)
    

### Temporary environment variable

To use the API key only in the current session, export it temporarily.

1.  Run the following command:
    
    ```
    # Replace YOUR_DASHSCOPE_API_KEY with your API key.
    set DASHSCOPE_API_KEY="YOUR_DASHSCOPE_API_KEY"
    ```
    
2.  Run the following command in the current session to check whether the environment variable takes effect:
    
    ```
    echo %DASHSCOPE_API_KEY%
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9623589371/p912522.png)
    

## PowerShell

### Permanent environment variable

To make the API key available in all future sessions, export it permanently.

1.  Run the following command:
    
    ```
    # Replace YOUR_DASHSCOPE_API_KEY with your API key.
    [Environment]::SetEnvironmentVariable("DASHSCOPE_API_KEY", "YOUR_DASHSCOPE_API_KEY", [EnvironmentVariableTarget]::User)
    ```
    
2.  Create a session.
    
3.  Run the following command to check whether the environment variable takes effect:
    
    ```
    echo $env:DASHSCOPE_API_KEY
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9623589371/p912525.png)
    

### Temporary environment variable

To use the API key only in the current session, export it temporarily.

1.  Run the following command:
    
    ```
    # Replace YOUR_DASHSCOPE_API_KEY with your API key.
    $env:DASHSCOPE_API_KEY = "YOUR_DASHSCOPE_API_KEY"
    ```
    
2.  Run the following command in the current session to check whether the environment variable takes effect:
    
    ```
    echo $env:DASHSCOPE_API_KEY
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9623589371/p912525.png)
    

## FAQ

Q: I have run the echo command to confirm the environment variable. But when I run my code, it still says no API key found or invalid API key?

A: The reason may be:

-   Scenario 1: **The environment variable is temporary.** Temporary variables only apply to the current terminal session, not already-running IDEs or applications. Refer to the permanent environment variable methods in this topic.
    
-   Scenario 2: **You have not restarted your IDE, command-line tool, or application.**
    
    -   Restart IDEs (like VS Code) or command-line tools to load the latest environment variables.
        
    -   If you exported the environment variable after deploying your application, restart the application service to reload the variable.
        
-   Scenario 3: **Add the environment variable to the configuration file.** If your application uses a service manager (like systemd or supervisord), add the variable to its configuration file.
    
-   Scenario 4: **You used the sudo command.** Running `sudo python xx.py` may miss user environment variables because `sudo` does not inherit all environment variables by default. Use `sudo -E python xx.py` instead (the `-E` option ensures environment variables are passed through), or run `python xx.py` directly if you have permission.
    
-   Scenario 5: You may need to configure the base URL of Model Studio. Use one of the following methods:
    
    -   Add the base URL to your code:
        
        ```
        dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
        ```
        
    -   Export the base URL as an environment variable:
        
        ```
        DASHSCOPE_HTTP_BASE_URL='https://dashscope-intl.aliyuncs.com/api/v1'
        ```
