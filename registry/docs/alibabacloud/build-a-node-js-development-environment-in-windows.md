This topic describes how to build a Node.js development environment on Windows. In this example, Visual Studio Code (VS Code) is used.

1.  Visit the official website of [VS Code](https://code.visualstudio.com/) and click Download for Windows to download the installation file.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8841698171/p802218.png)
    
2.  Double-click the downloaded file such as VSCodeUserSetup-x64-1.89.1.exe and use the installation wizard to install VS Code.
    
    **Important**
    
    In the Select Additional Tasks step, you must select Add to PATH (requires shell restart).
    
3.  Open VS Code, click the Extensions icon in the left-side navigation bar or press `Ctrl+Shift+X` to search for the following extensions:
    
    1.  Node.js Extension Pack: contains a set of common tools for Node.js development.
        
    2.  JavaScript (ES6) code snippets: provides snippets for ES6.
        
    3.  Code Runner: runs code for programming languages such as Node.js, Python, C++, Java, PHP, and Go. You can directly run code in the editor.
        
    4.  Alibaba Cloud API Toolkit: an optional extension. It is a powerful tool designed by Alibaba Cloud for developers. It is mainly used to improve the efficiency of application development, debugging, and deployment between the local development environment and Alibaba Cloud services. For more information, see [Use Alibaba Cloud API Toolkit in VS Code](/help/en/openapi/developer-reference/install-and-configure-alibaba-cloud-cli-tools-in-visual-studio).
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8841698171/p802238.png)
    
4.  Create a Node.js project.
    
    In the top navigation bar of the VS Code console, choose File > Open Folder and create and select a project folder. In this example, a folder named javascriptProjects is created and selected.
    
5.  Click the New File... icon to the right of the project name and enter a file name such as helloaliyun.js. Enter `console.log('hello aliyun!')` in the right-side editor.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8841698171/p802363.png)
    
6.  Run the code.
    
    1.  Select the file that you want to execute, such as helloaliyun.js. Click the Run and Debug icon in the left-side navigation bar or press `Ctrl+Shift+D`. Click Run and Debug. Then, select Node.js from the Select debugger drop-down list.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8841698171/p802341.png)
        
    2.  If you have installed the Code Runner extension, right-click anywhere in the editor and select Run Code.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8841698171/p803699.png)
        
    3.  Run the code by using the node command on the TERMINAL tab. In this example, run `node .\helloaliyun.js`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8841698171/p803702.png)
        
7.  Check whether the development environment is built.
    
    On the DEBUG CONSOLE tab, check whether `hello aliyun!` is returned. If yes, the Node.js development environment is built.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8841698171/p802369.png)
