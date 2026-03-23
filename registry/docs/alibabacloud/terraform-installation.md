Install and configure Terraform in about 10 minutes to prepare for creating your infrastructure.

As mentioned in [Introduction to Terraform](/help/en/terraform/what-is-terraform), Terraform is distributed as a binary package. You can use common package managers to install Terraform.

## **Install Terraform**

## Manual installation

## Use a precompiled package

Go to the [official Terraform website](https://www.terraform.io/downloads.html), find the ZIP package for your operating system, and download it.

After the download is complete, unzip the package to /usr/local/bin. You can delete the other files after the copy is complete. This does not affect the operation of Terraform.

Finally, make sure that the Terraform directory is added to the PATH environment variable. This process varies depending on your operating system.

## Mac or Linux

Display your PATH configuration.

```
echo $PATH
```

Move the Terraform binary file to one of the directories listed in your PATH. This command assumes that the binary file is in your Downloads folder and your `PATH` includes `/usr/local/bin`. You can customize the directory in the command if your location is different.

```
mv ~/Downloads/terraform /usr/local/bin/
```

## Windows

1.  Go to Control Panel > System > System Settings > Environment Variables.
    
2.  In the System variables section, scroll down until you find the PATH variable.
    
3.  Click Edit to make the necessary changes.
    
4.  Add a semicolon (;) to separate the new entry from existing ones. For example, c:\\path;c:\\path2
    
5.  Open a new console for the settings to take effect.
    

## Use the source

If you want to compile the binary from source code, you can clone the [HashiCorp Terraform repository](https://github.com/hashicorp/terraform).

```
git clone https://github.com/hashicorp/terraform.git
```

The following progress message is displayed. Wait for the command to complete.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4152713571/p798367.png)

After the command is complete, a directory named terraform is created in the directory where you ran the command. Use the cd command to go to the directory.

```
cd terraform
```

You can then execute the install instruction to compile the folder and move the compiled package to the $GOPATH/bin/terraform folder.

```
go install
```

The following message indicates that the compilation is in progress. You can perform the next operation after the compilation is complete.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4152713571/p798417.png)

Note: If you receive the zsh: command not found: go message, you must first [install the Go environment](https://go.dev/doc/install).

Finally, ensure the Terraform folder is defined in the PATH and is active. The process for defining the PATH varies by operating system.

## Mac or Linux

Display your PATH configuration.

```
echo $PATH
```

Move the Terraform binary file to a directory in your PATH. The following command assumes that the binary file is in your Downloads folder and your `PATH` includes `/usr/local/bin`. You can customize the command if the file is in a different location.

```
mv ~/Downloads/terraform /usr/local/bin/
```

## Windows

1.  Navigate to Control Panel > System > System Settings > Environment Variables.
    
2.  In the System variables section, scroll down to find the PATH variable.
    
3.  Click Edit to make the required changes.
    
4.  Separate path entries with a semicolon. For example: c:\\path;c:\\path2
    
5.  Open a new console for the settings to take effect.
    

## macOS Homebrew

[Homebrew](https://brew.sh/) is a popular package manager for macOS. You can use Homebrew to install Terraform by running simple commands.

Step 1: Install the HashiCorp tap, which is a repository of Homebrew packages.

```
brew tap hashicorp/tap
```

Step 2: Run the install command to install Terraform.

```
brew install hashicorp/tap/terraform
```

**Important**

The install command downloads and installs the latest version. To update to the latest version later, you can run the upgrade command again.

To update to the latest version of Terraform, you must first update Homebrew.

```
brew update
```

Then, run the upgrade command to update to the latest version.

```
brew upgrade hashicorp/tap/terraform
```

## Windows Chocolatey

[Chocolatey](https://chocolatey.org/) is a popular package manager for Windows. You can use [Chocolatey](https://chocolatey.org/) to install Terraform by running a simple command.

```
choco install terraform
```

## CloudShell

Alibaba Cloud Cloud Shell is a free product that assists with operations and maintenance (O&M). The Terraform component is pre-installed. You can run Terraform commands directly in Cloud Shell.

First, make sure that you have a valid Alibaba Cloud account with the required permissions.

Next, open a browser and access Cloud Shell at or [https://shell.alibabacloud.com/](https://shell.alibabacloud.com/).

After you log on, run the following command.

```
terraform
```

The output shows that the Terraform component is built into Cloud Shell and is ready to use.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4152713571/p798430.png)

For more information about how to use Cloud Shell, see [Use Cloud Shell](/help/en/cloud-shell/using-the-cloud-command-line#task-1958468).

## Linux

## Alibaba Cloud Linux

```
yum install -y dnf-plugin-releasever-adapter
yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
yum install terraform
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4152713571/p821590.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4152713571/p821591.png)

## **Verify the installation**

Run `terraform` to validate the configuration path.

```
terraform
```

After the command is run, a list of available Terraform options is displayed, as shown in the following figure. This indicates that the installation is complete.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4764464371/p737064.png)
