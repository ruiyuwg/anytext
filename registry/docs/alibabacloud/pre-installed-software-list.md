Cloud Shell is pre-installed with a variety of mainstream programming languages and commonly used command-line tools to help you quickly and easily complete various tasks in your daily work. This topic lists the pre-installed languages and tools of Cloud Shell.

## Pre-installed software

**Note**

Cloud Shell regularly updates the versions of the pre-installed software. Therefore, the specific version numbers are not provided in this topic. We recommend that you use the version query command provided by the software to obtain relevant information.

### **Pre-installed languages**

**Language**

**Version**

Java

`java -version`

Go

`go version`

Python

`python --version`

Node.js

`node --version`

PHP

`php --version`

Ruby

`ruby --version`

### **Pre-installed command-line tools**

**Note**

For security purposes, Cloud Shell does not grant users the `sudo` privileges. Therefore, operations involving the `sudo` privileges cannot be performed.

**Type**

**Tool**

**Version**

Linux utilities

[Bash](https://www.gnu.org/software/bash/)

`bash --version`

ping

N/A

telnet

N/A

tmux

N/A

ssh

N/A

curl

N/A

Standard Debian system utilities

N/A

Alibaba Cloud tools

[Alibaba Cloud CLI](/help/en/cli/what-is-alibaba-cloud-cli)

`aliyun --version`

[Funcraft](/help/en/functioncompute/fc-2-0/features-2)

`fun --version`

[fcli](/help/en/functioncompute/fc-2-0/use-fcli-for-the-first-time)

`fcli version`

[Simple Log Service CLI](/help/en/sls/developer-reference/overview-of-log-service-cli)

`aliyunlog --version`

[FastGPU](/help/en/egs/command-reference)

N/A

Online editors

[Vim](https://www.vim.org/docs.php)

`vim --version`

[nano](https://www.nano-editor.org/docs.php)

`nano --version`

[Emacs](https://www.gnu.org/software/emacs/emacs.html)

`emacs --version`

Source code management

[Git](https://git-scm.com/doc)

`git --version`

Build and packaging tools

[Make](https://www.gnu.org/software/make/)

`make --version`

[npm](https://www.npmjs.com)

`npm version`

[pip](https://pypi.org/)

`pip --version`

[GitHub - nvm](https://github.com/nvm-sh/nvm)

`nvm version`

[Maven](https://maven.apache.org/)

`mvn --version`

Orchestration tools

[Terraform](https://www.terraform.io/)

`terraform version`

[Ansible](https://www.ansible.com/)

`ansible --version`

[Pulumi](https://www.pulumi.com/)

`pulumi version`

Container tools

[kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)

`kubectl version`

[helm3](https://helm.sh/)

`helm version`

[GitHub - Docker Machine](https://github.com/docker/machine)

`docker-machine --version`

Database tools

[MySQL](https://www.mysql.com/)

`mysql --version`

## **Install third-party software**

**Important**

After a Cloud Shell instance is destroyed, third-party software installed in the temporary storage space is not retained. If you want to retain the installed software, you can install the software in the `$HOME` directory after you mount a File Storage NAS (NAS) file system to the Cloud Shell instance. For more information, see [Persistent storage](/help/en/cloud-shell/user-guide/persistent-storage).

For security purposes, Cloud Shell does not grant users the `sudo` privileges. Therefore, operations involving the `sudo` privileges cannot be performed. You can install third-party software in user directories by compiling source code for a Cloud Shell instance.
