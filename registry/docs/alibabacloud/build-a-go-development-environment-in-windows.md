This topic describes how to build a Go development environment on Windows. In this example, Visual Studio (VS) Code is used.

1.  Visit the official website of [VS Code](https://code.visualstudio.com/) and click Download for Windows to download the installation file.
    
    ![222.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3461698171/p803130.png)
    
2.  Double-click the downloaded file such as VSCodeUserSetup-x64-1.89.1.exe and use the installation wizard to install VS Code.
    
    **Important**
    
    In the Select Additional Tasks step, you must select Add to PATH (requires shell restart).
    
3.  Open VS Code, click the Extensions icon in the left-side navigation bar or press `Ctrl+Shift+X` to search for and install the following extensions:
    
    -   Go: an official extension that provides features such as code editing, intelligent completion, and debugging.
        
    -   Code Runner: runs code for multiple programming languages such as Node.js, Python, C++, Java, PHP, and Go. You can directly run code in the editor.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3461698171/p803142.png)
    
4.  Create a Go project.
    
    In the top navigation bar of the VS Code console, choose File > Open Folder and create and select a project folder. In this example, a folder named goProjects is created and selected.
    
5.  Initialize a Go module.
    
    In the top navigation bar of the VS Code console, choose Terminal > New Terminal. In the TERMINAL window, run the `go mod init goprojects` command to initialize a Go module. After the module is initialized, a go.mod file is generated in the current project directory. A go.mod file is a module file in a Go project and is used to manage the dependencies and version information of the project.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3461698171/p803170.png)
    
6.  Create a .go file. Click the New File... icon to the right of the project name and enter a file name such as helloaliyun.go. Copy the following code to the editor.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3461698171/p803187.png)
    
    ```
    package main
    
    import (
    	"fmt"
    )
    
    func main() {
    	fmt.Println("hello aliyun")
    }
    ```
    
7.  Run the code.
    
    -   If you have installed the Code Runner extension, right-click anywhere in the editor and select Run Code.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3461698171/p803694.png)
        
    -   In the terminal, run the `go run` command to run the code.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3461698171/p803685.png)
        
    -   Select the file that you want to run such as helloaliyun.go. Click the Run and Debug icon in the left-side navigation bar or press `Ctrl+Shift+D`. Then, click Run and Debug to run the code.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3461698171/p803690.png)
        
8.  Check whether the development environment is built.
    
    In the terminal, if `hello aliyun!` is returned, the Go development environment is built.
