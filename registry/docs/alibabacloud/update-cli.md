This topic describes how to update Alibaba Cloud CLI and provides important notes for the process.

## **Precautions**

-   To avoid version conflicts and potential compatibility issues, always use the same method for updating that you used for the initial installation. For example:
    
    -   If you installed Alibaba Cloud CLI by using Homebrew, continue to use Homebrew for updates. Do not use an installation package or script to update it.
        
    -   If you installed Alibaba Cloud CLI in a custom directory on Linux or macOS, we recommend manually updating it with a TGZ file to ensure proper file replacement.
        
-   If you used a custom path to install Alibaba Cloud CLI, specify the same path when you update to ensure consistency.
    
-   If you encounter any of the following situations, [uninstall the CLI](/help/en/cli/uninstall-cli) completely and then perform a fresh installation:
    
    -   You are unsure of the original installation method or directory.
        
    -   You need to switch to an incompatible installation method, such as from a script-based installation to Homebrew.
        
    -   You need to change the installation directory.
        

## **Procedure**

**Note**

In the following steps, `<script_path>` and `<install_path>` are placeholders. Replace them with your actual script file path and Alibaba Cloud CLI installation directory before running the commands.

### **Linux**

## Update by using a Bash script

Run the following command to install the latest version of Alibaba Cloud CLI.

```
/bin/bash -c "$(curl -fsSL https://aliyuncli.alicdn.com/install.sh)"
```

## **Update by using a TGZ file**

1.  Download the installation package that suits your system architecture.
    
    **Note**
    
    Run the `uname -m` command to check your Linux system architecture. If the output is `arm64` or `aarch64`, your system architecture is ARM64. Otherwise, it is AMD64.
    
    -   Run the following command to download the latest installation package for Linux AMD64 systems.
        
        ```
        curl https://aliyuncli.alicdn.com/aliyun-cli-linux-latest-amd64.tgz -o aliyun-cli-linux-latest.tgz
        ```
        
    -   Run the following command to download the latest installation package for Linux ARM64 systems.
        
        ```
        curl https://aliyuncli.alicdn.com/aliyun-cli-linux-latest-arm64.tgz -o aliyun-cli-linux-latest.tgz
        ```
        
2.  Decompress the installation package to the installation directory to overwrite the old files.
    
    ```
    tar xzvf aliyun-cli-latest.tgz -C <install_path>
    ```
    

### **macOS**

## Update by using a PKG file

1.  Download the latest PKG file for macOS from the following link: `[https://aliyuncli.alicdn.com/aliyun-cli-latest.pkg](https://aliyuncli.alicdn.com/aliyun-cli-latest.pkg)`.
    
2.  Double-click the downloaded package and follow the on-screen instructions to complete the update.
    

## **Update by using Homebrew**

Run the following command to update Alibaba Cloud CLI by using Homebrew.

```
brew update && brew upgrade aliyun-cli && brew cleanup aliyun-cli
```

## Update by using a Bash script

Run the following command to install the latest version of Alibaba Cloud CLI.

```
/bin/bash -c "$(curl -fsSL https://aliyuncli.alicdn.com/install.sh)"
```

## **Update by using a TGZ package**

1.  Run the following command to download the latest installation package for macOS systems.
    
    ```
    curl https://aliyuncli.alicdn.com/aliyun-cli-macosx-latest-universal.tgz -o aliyun-cli-macosx-latest-universal.tgz
    ```
    
2.  Decompress the installation package to the installation directory to overwrite the old files.
    
    ```
    tar xzvf aliyun-cli-macosx-latest-universal.tgz -C <install_path>
    ```
    

### **Windows**

## **Update by using a ZIP package**

1.  Download the latest package for Windows from the following link: `[https://aliyuncli.alicdn.com/aliyun-cli-windows-latest-amd64.zip](https://aliyuncli.alicdn.com/aliyun-cli-windows-latest-amd64.zip)`.
    
2.  Decompress the `aliyun.exe` executable file in the installation package to the installation directory of Alibaba Cloud CLI, overwriting the existing file to complete the update.
    
    **Note**
    
    This file must be run from a CLI. It will not work if double-clicked.
    

## Update by using a PowerShell script

1.  Create a script file named `Install-CLI-Windows.ps1` and save the following code to the file. If you already have this script, skip this step.
    
    **Sample script**
    
    ```
    # Install-CLI-Windows.ps1
    # Purpose: Install Alibaba Cloud CLI on Windows AMD64 systems.
    # Supports custom version and install directory. Only modifies User-level and Process-level PATH.
    
    [CmdletBinding()]
    param (
        [string]$Version = "latest",
        [string]$InstallDir = "$env:LOCALAPPDATA",
        [switch]$Help
    )
    
    function Show-Usage {
        Write-Output @"
    
          Alibaba Cloud Command Line Interface Installer
    
        -Help                 Display this help and exit
    
        -Version VERSION      Custom CLI version. Default is 'latest'
    
        -InstallDir PATH      Custom installation directory. Default is:
                              $InstallDir\AliyunCLI
    
    "@
    }
    
    function Write-ErrorExit {
        param([string]$Message)
        Write-Error $Message
        exit 1
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
    
    $OSArchitecture = (Get-WmiObject -Class Win32_OperatingSystem).OSArchitecture
    
    $ProcessorArchitecture = [int](Get-WmiObject -Class Win32_Processor).Architecture
    
    if (-not ($OSArchitecture -match "64") -or $ProcessorArchitecture -ne 9) {
        Write-ErrorExit "Alibaba Cloud CLI only supports Windows AMD64 systems. Please run on a compatible system."
    }
    
    $DownloadUrl = "https://aliyuncli.alicdn.com/aliyun-cli-windows-$Version-amd64.zip"
    
    $tempPath = $env:TEMP
    $randomName = -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 8)
    $DownloadDir = Join-Path -Path $tempPath -ChildPath $randomName
    New-Item -ItemType Directory -Path $DownloadDir | Out-Null
    
    try {
        $InstallDir = Join-Path $InstallDir "AliyunCLI"
        if (-not (Test-Path $InstallDir)) {
            New-Item -ItemType Directory -Path $InstallDir -Force | Out-Null
        }
    
        $ZipPath = Join-Path $DownloadDir "aliyun-cli.zip"
        Start-BitsTransfer -Source $DownloadUrl -Destination $ZipPath
    
        Expand-Archive -Path $ZipPath -DestinationPath $DownloadDir -Force
    
        Move-Item -Path "$DownloadDir\aliyun.exe" -Destination "$InstallDir\" -Force
    
        $Key = 'HKCU:\Environment'
        $CurrentPath = (Get-ItemProperty -Path $Key -Name PATH).PATH
    
        if ([string]::IsNullOrEmpty($CurrentPath)) {
            $NewPath = $InstallDir
        } else {
            if ($CurrentPath -notlike "*$InstallDir*") {
                $NewPath = "$CurrentPath;$InstallDir"
            } else {
                $NewPath = $CurrentPath
            }
        }
    
        if ($NewPath -ne $CurrentPath) {
            Set-ItemProperty -Path $Key -Name PATH -Value $NewPath
            $env:PATH += ";$InstallDir"
        }
    } catch {
        Write-ErrorExit "Failed to install Alibaba Cloud CLI: $_"
    } finally {
        Remove-Item -Path $DownloadDir -Recurse -Force | Out-Null
    }
    ```
    
2.  Run the following command to run the script file to update Alibaba Cloud CLI.
    
    ```
    powershell.exe -ExecutionPolicy Bypass -File <script_path> [-InstallDir <install_path>]
    ```
