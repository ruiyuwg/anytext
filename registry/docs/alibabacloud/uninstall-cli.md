This topic describes how to uninstall Alibaba Cloud CLI and provides important notes for the process.

## **Precautions**

-   To avoid version conflicts and potential compatibility issues, always use the uninstallation method that matches your installation method. For example:
    
    -   If you installed Alibaba Cloud CLI by using Homebrew, uninstall it by using Homebrew. We do not recommend using other methods for uninstallation.
        
    -   If you installed Alibaba Cloud CLI in a custom directory on Linux or macOS, we recommend that you uninstall it from the CLI.
        
-   If you are not sure how or where Alibaba Cloud CLI was installed, try all the following methods to ensure a complete uninstallation.
    

## **Procedure**

**Note**

In the following steps, `<script_path>` is a placeholder. Before you run a command, replace it with the actual path to your script file.

### **Linux/macOS**

## Uninstall by using Homebrew

On macOS, run the following command to uninstall Alibaba Cloud CLI:

```
brew uninstall aliyun-cli
```

## Uninstall from the CLI

1.  Run the following command to delete the executable file of Alibaba Cloud CLI. You can also perform this action in the graphical user interface (GUI).
    
    ```
    sudo sh -c "which aliyun | xargs -r rm -v"
    ```
    
2.  Remove the installation directory from the PATH environment variable.
    
    **Note**
    
    If you did not use a custom installation directory when you installed Alibaba Cloud CLI, you can skip this step.
    
    The following table lists common environment variable configuration files on Linux and macOS.
    
    Shell type
    
    Configuration file
    
    Bash
    
    -   `~/.bashrc`
        
    -   `~/.bash_profile`
        
    -   `~/.profile`
        
    -   `/etc/profile`
        
    
    Zsh
    
    -   `~/.zshrc`
        
    -   `~/.zprofile`
        
    -   `/etc/zshenv`
        
    -   `/etc/zprofile`
        
    -   `/etc/zshrc`
        
    
    You can use a text editor or a CLI such as `grep` to search for changes related to the Alibaba Cloud CLI installation directory and delete or comment out the relevant lines in the configuration file. For example, to search in `~/.bashrc`:
    
    ```
    grep "PATH" ~/.bashrc
    ```
    

## Uninstall by using a Bash script

1.  Create a script file and copy the following content into it.
    
    **Sample script**
    
    ```
    #!/usr/bin/env bash
    
    set -euo pipefail
    
    show_help() {
    cat << EOF
    
          Alibaba Cloud Command Line Interface Uninstaller
    
        -h          Display this help and exit
    
        -C          Remove user config file
    
    EOF
    }
    
    abort() {
      printf "%s\n" "$@" >&2
      exit 1
    }
    
    CLEAN_CONFIG=false
    
    while getopts ":hC" opt; do
      case "$opt" in
        "h")
          show_help
          exit 0
          ;;
        "C")
          CLEAN_CONFIG=true
          ;;
        *)
          echo "Unexpected flag not supported"
          exit 1
          ;;
      esac
    done
    
    echo -e "
    ..............888888888888888888888 ........=8888888888888888888D=..............
    ...........88888888888888888888888 ..........D8888888888888888888888I...........
    .........,8888888888888ZI: ...........................=Z88D8888888888D..........
    .........+88888888 ..........................................88888888D..........
    .........+88888888 .......Welcome to use Alibaba Cloud.......O8888888D..........
    .........+88888888 ............. ************* ..............O8888888D..........
    .........+88888888 .... Command Line Interface(Reloaded) ....O8888888D..........
    .........+88888888...........................................88888888D..........
    ..........D888888888888DO+. ..........................?ND888888888888D..........
    ...........O8888888888888888888888...........D8888888888888888888888=...........
    ............ .:D8888888888888888888.........78888888888888888888O ..............
    "
    
    USER_CONFIG_DIR="${HOME}/.aliyun"
    CONFIG_FILE_PATH="${USER_CONFIG_DIR}/config.json"
    
    remove_aliyun_binary() {
      local binary
      binary=$(which aliyun)
    
      if [ -n "$binary" ]; then
        rm -vf "$binary"
        rmdir --ignore-fail-on-non-empty "$(dirname "$binary")" 2>/dev/null || true
      fi
    }
    
    remove_user_config() {
      if $CLEAN_CONFIG; then
        rm -f "${CONFIG_FILE_PATH}" || abort "Failed to remove config file: ${CONFIG_FILE_PATH}"
    
        if [ -d "${USER_CONFIG_DIR}" ]; then
          rmdir --ignore-fail-on-non-empty "${USER_CONFIG_DIR}" 2>/dev/null || true
        fi
      fi
    }
    
    remove_aliyun_binary
    remove_user_config
    
    echo "Aliyun CLI has been uninstalled."
    ```
    
2.  Refer to the following examples to run the script and uninstall Alibaba Cloud CLI.
    
    ```
    # Uninstall only the executable file.
    bash <script_path>
    
    # Uninstall the executable file and delete the configuration file.
    bash <script_path> -C
    
    # View help information for the script.
    bash <script_path> -h
    ```
    

### **Windows**

Windows users can uninstall Alibaba Cloud CLI by using the following methods.

## Uninstall from the GUI

1.  In File Explorer, go to the Alibaba Cloud CLI installation directory and delete the executable file.
    
2.  Press the `Windows` key and enter environment variables in the search box.
    
3.  In the search results, click **Edit environment variables for your account** to open the **Environment Variables** window.
    
4.  In the **User variables** section, select the `Path` environment variable and click **Edit**.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6846397471/p49127.png)
    
5.  In the **Edit environment variable** window, select the path to the Alibaba Cloud CLI installation directory and click **Delete**. This removes the path from the `Path` environment variable. Example directory: `C:\ExampleDir`. Replace this with the actual path.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4316631571/p960409.png)
    
6.  Click **OK** in all related dialog boxes to save the changes.
    

## Uninstall by using a PowerShell script

1.  Create a script file and copy the following content into it.
    
    **Sample script**
    
    ```
    # Uninstall-CLI-Windows.ps1
    # Purpose: Automatically detect and uninstall Aliyun CLI, and delete configuration files in user directory
    
    [CmdletBinding()]
    param (
        [switch]$Clean,
        [switch]$Help
    )
    
    function Show-Usage {
        Write-Output @"
    
          Alibaba Cloud Command Line Interface Uninstaller
    
        -Help                 Display this help and exit
    
        -Clean                Remove user config file
    
    "@
    }
    
    function Remove-DirectoryIfEmpty {
        param([string]$Path)
        if ((Get-ChildItem -Path $Path -Force).Count -eq 0) {
            Remove-Item -Path $Path -Force
        }
    }
    
    function Remove-AliyunCLIFromPath {
        param([string]$PathToRemove)
        $Key = 'HKCU:\Environment'
        $CurrentPath = (Get-ItemProperty -Path $Key -Name PATH).PATH
        if ($CurrentPath -like "*$PathToRemove*") {
            $newPath = ($CurrentPath -split ';' | Where-Object { $_ -ne $PathToRemove }) -join ';'
            Set-ItemProperty -Path $Key -Name PATH -Value $newPath
            $env:PATH = $newPath
        }
    }
    
    function Remove-AliyunCLI {
        $AliyunBinary = (Get-Command aliyun -ErrorAction SilentlyContinue).Source
        if ($AliyunBinary -and (Test-Path $AliyunBinary)) {
            Remove-Item -Path $AliyunBinary -Force
            $AliyunInstallDir = Split-Path -Parent $AliyunBinary
            Remove-DirectoryIfEmpty -Path $AliyunInstallDir
            Remove-AliyunCLIFromPath -PathToRemove $AliyunInstallDir
            Write-Output "Aliyun CLI binary has been removed."
        }
    }
    
    function Remove-ConfigFile {
        $ConfigDir = Join-Path $HOME ".aliyun"
        $ConfigFile = Join-Path $ConfigDir "config.json"
        if (Test-Path $ConfigFile) {
            Remove-Item -Path $ConfigFile -Force
            Remove-DirectoryIfEmpty -Path $ConfigDir
            Write-Output "Aliyun CLI config file has been removed."
        }
    }
    
    if ($PSBoundParameters['Help']) {
        Show-Usage
        exit 0
    }
    
    Write-Output @"
    ..............888888888888888888888 ........=8888888888888888888D=..............
    ...........88888888888888888888888 ..........D8888888888888888888888I...........
    .........,8888888888888ZI: ...........................=Z88D8888888888D..........
    .........+88888888 ..........................................88888888D..........
    .........+88888888 .......Welcome to use Alibaba Cloud.......O8888888D..........
    .........+88888888 ............. ************* ..............O8888888D..........
    .........+88888888 .... Command Line Interface(Reloaded) ....O8888888D..........
    .........+88888888...........................................88888888D..........
    ..........D888888888888DO+. ..........................?ND888888888888D..........
    ...........O8888888888888888888888...........D8888888888888888888888=...........
    ............ .:D8888888888888888888.........78888888888888888888O ..............
    "@
    
    try {
        Remove-AliyunCLI
        if ($PSBoundParameters['Clean']) { Remove-ConfigFile }
        Write-Output "Aliyun CLI has been uninstalled."
    } catch {
        Write-Output "Failed to uninstall Aliyun CLI: $_"
    }
    ```
    
2.  Refer to the following examples to run the script and uninstall Alibaba Cloud CLI.
    
    ```
    # Uninstall only the executable file.
    powershell.exe -ExecutionPolicy Bypass -File <script_path>
    
    # Uninstall the executable file and delete the configuration file.
    powershell.exe -ExecutionPolicy Bypass -File <script_path> -Clean
    
    # View help information for the script.
    powershell.exe -ExecutionPolicy Bypass -File <script_path> -Help
    ```
    

## **Delete the configuration file (Optional)**

The configuration file for Alibaba Cloud CLI is located in the `.aliyun` folder within your user home directory. The location of the user home directory varies by operating system.

-   Windows: `C:\Users\**<**_USERNAME>_\.aliyun`
    
-   Linux or macOS: `~/.aliyun`
