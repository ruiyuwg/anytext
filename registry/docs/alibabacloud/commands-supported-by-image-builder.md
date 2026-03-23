The Image Builder feature customizes image content by using image templates. You can specify image components or directly specify commands to create an image template. An image component is composed of one or more commands. Command is the minimum unit of an image template. This topic provides the syntax and examples of the common commands supported by Image Builder.

## Command syntax

Image Builder supports commands in the YAML Ain't Markup Language (YAML) format for Linux and Windows operating systems and commands in the DockerFile format only for Linux operating systems.

**Note**

Commands in the DockerFile format are not flexible enough and have operating system restrictions. We recommend that you use the YAML format.

Commands in the YAML and DockerFile formats have the following syntax requirements:

-   YAML: You must define the `Parameters` and `Tasks` fields. Syntax:
    
    ```
    Parameters: # (Optional) Define custom parameters.
      param1: # (Required) Specify the parameter name.
        Type: String # (Required) Specify the parameter type. Valid values: String, Number, and Boolean.
        DefaultValue: defaultValue # (Optional) Configure the default value of the parameter. If a parameter does not have a default value, you must explicitly pass in the parameter to the image template that contains the image component in which the parameter is included.
    Tasks: # Define the task list of the image component, which contains at least one task. The tasks in the task list are executed in sequence.
      - Name: taskName1 # (Required) Specify the task name.
        Action: RunShellCommand # (Required) Specify the task action. For more information, see the component commands in the YAML format.
        Properties: # Specify action properties. The properties vary based on the action.
          commandContent: echo {{ param1 }} # Reference a custom parameter.
      - Name: taskName2
        Action: action2
        Properties:
          action2Property1: {{ taskName1.stdout }} # Reference the output of the taskName1 task.
    ```
    
    **Note**
    
    You can reference the preceding parameters as properties in the Tasks field. The following sample code provides the reference syntax:
    
    ```
    {{taskName1.stdout}}           
    ```
    
-   DockerFile
    
    -   Each line contains only one command or part of one command.
        
    -   One command can be split into multiple lines. An escape character (\\) must be added to the end of each line except for the last line.
        

## Commands supported by Image Builder

The following section describes the command syntax supported by image components when you use Image Builder to create image components in the Elastic Compute Service (ECS) console and by calling API operations.

### **Component** commands supported by the ECS console and API operations

#### **(Recommended) YAML format**

**Command**

**Syntax or example**

**Description**

**Output**

RunShellCommand

```
Name: String
Action: RunShellCommand
Properties:
  commandContent: String # Specify the command content.
  workingDir: String,optional # Specify the working directory.
  username: String,optional # Specify the username of the account that is used to run the command.
```

-   This command is used to run shell scripts.
    
-   This command applies only to Linux operating systems.
    

```
stdout: String# Specify the output of the command.
```

RunPowerShellCommand

```
Name: String
Action: RunPowerShellCommand
Properties:
  commandContent: String # Specify the command content.
  workingDir: String,optional # Specify the working directory.
  username: String,optional # Specify the username of the account that is used to run the command.
  windowsPasswordName: String,optional # Specify the password of the account that is used to run the command on a Windows instance.
```

-   This command is used to run PowerShell scripts.
    
-   This command applies only to Windows operating systems.
    

InvokeCommand

```
Name: String
Action: InvokeCommand
Properties:
 commandId: String # Specify the command ID.
 username: String,optional # Specify the username of the account that is used to run the command.
 parameters: Json,optional # Specify the key-value pairs of custom parameters.
```

This command is used to run a common command.

OSSDownload

```
Name: String
Action: OSSDownload
Properties:
 bucketName: String # Specify the name of an Object Storage Service (OSS) bucket.
 destinationDir: String # Specify a folder on an ECS instance.
 objectName: String # Specify the name of an OSS object.
 ossRegion: String,optional # Specify the OSS region.
 validTime: Number,optional # Specify the validity period of the OSS object URL.
```

-   This command is used to download a file from an OSS bucket to an ECS instance.
    
-   The bucket that you use must be added the allowImageBuilderAccess:true tag.
    

None.

OSSUpload

```
Name: String
Action: OSSUpload
Properties:
 bucketName: String # Specify the name of an OSS bucket.
 fileToUpload: String # Specify the path of the file that you want to upload from an ECS instance.
 objectName: String # Specify the name of an OSS object.
 ossRegion: String,optional # Specify the OSS region.
 validTime: Number,optional # Specify the validity period of the OSS object URL.
```

-   This command is used to upload a file from an ECS instance to an OSS bucket.
    
-   The OSS bucket that you use must be added the allowImageBuilderAccess:true tag.
    

WebDownload

```
Name: String
Action: WebDownload
Properties:
 sourcePath: String # Specify the URL of a network file.
 tokenInfo: String,optional # Specify a token used to download the file. This property is required only if you download files from GitHub.
 destinationDir: String # Specify the directory to which the file is downloaded on an ECS instance.
 timeout: Number,option,default=600 # Specify the download timeout time.
```

This command is used to download a file from the network.

Reboot

```
Name: String
Action: Reboot
Properties:
 forceStop: Boolean,optional,default=false # Specify whether to forcefully restart an ECS instance.
```

This command is used to restart an ECS instance.

#### **DockerFile format**

**Command**

**Syntax or example**

**Description**

RESTART

`RESTART`

-   This command is used to restart an ECS instance.
    
-   Do not add content after the command.
    

RUN

```
RUN echo hello;\
echo world;
```

-   This command is used to build an image.
    
-   This command can be split into multiple lines. An escape character (\\) must be added to the end of each line except for the last line.
    

ENV

-   `ENV key value`
    
-   `ENV key1="value1" key2="value2"`
    

-   This command is used to configure system variables.
    
-   This command is in the form of a key-value pair.
    

**Note**

Double quotation marks (") are required before and after the value of each system variable in the command. Example: `ENV key1="value1" key2="value2"`.

WORKDIR

-   `WORKDIR /<path>`
    
-   `WORKDIR <path1>/<path2>`
    

This command is used to specify a working directory.

COPY

-   `COPY <Network file address> <On-premises destination directory>`
    
-   `COPY <On-premises source file path> <On-premises destination directory>`
    

This command is used to copy files.

**Note**

Network files must be downloaded by using the `wget` utility, and `query strings` are not supported in URLs. In addition, intermediate instances must be able to access the Internet.

USER

`USER <username>`

This command is used to specify the username of the account that is used to run commands.

**Note**

Replace the `<username>` variable with an existing username. Otherwise, an error is reported after the command is run.

LABEL

```
LABEL user="username"\
date="2020-11-11" key="value"
```

-   This command is used to define template metadata.
    
-   This command can be split into multiple lines. An escape character (\\) must be added to the end of each line except for the last line.
    

CMD

-   `CMD ["executable","param1","param2"]`
    
-   `CMD command param1 param2`
    

This command is used to enable specific commands and parameters to run on system startup.

ENTRYPOINT

-   `ENTRYPOINT ["executable","param1","param2"]`
    
-   `CMD command param1 param2`
    

This command is used to enable specific commands and parameters to run on system startup.

**Note**

`CMD` and `ENTRYPOINT` commands are used to enable specific commands and parameters to run when a container starts. The commands have different use scenarios and features and can be used separately or in combination to achieve more flexible results. For information about the differences between CMD and ENTRYPOINT commands, see [Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

### **Template commands** in the DockerFile format (supported only by API operations)

**Command**

**Syntax or example**

**Description**

COMPONENT

-   `COMPONENT ic-bp18hy47cqavewsb****`
    
-   `COMPONENT ic-bp18hy47cqavewsb**** --paramName1 paramValue1 --paramName2 paramValue2`
    
-   `COMPONENT acs:ecs:<RegionId>:<AliUid>:imagecomponent/<ComponentName>:<major>.<minor>.<patch>`
    
    **Note**
    
    You can use an asterisk (\*) as a wildcard character to replace the <major>, <minor>, or <patch> variable, which specifies the latest version of an image component.
    

This command is used to specify image components. You can specify system components or custom components.

-   This command applies only to image templates.
    
-   When you create an image template, you can run this command to specify one or more image components in the image template.
    
-   This command can be used to call components in the YAML or DockerFile format.
    

RESTART

`RESTART`

-   This command is used to restart an ECS instance.
    
-   Do not add content after the command.
    

RUN

```
RUN echo hello;\
echo world;
```

-   This command is used to build an image.
    
-   This command can be split into multiple lines. An escape character (\\) must be added to the end of each line except for the last line.
    
-   This command applies only to Linux operating systems.
    

ENV

-   `ENV key value`
    
-   `ENV key1="value1" key2="value2"`
    

-   This command is used to configure system variables.
    
-   This command is in the form of a key-value pair.
    
-   This command applies only to Linux operating systems.
    

**Note**

Double quotation marks (") are required before and after the value of each system variable in the command. Example: `ENV key1="value1" key2="value2"`.

WORKDIR

-   `WORKDIR /<path>`
    
-   `WORKDIR <path1>/<path2>`
    

-   This command is used to specify a working directory.
    
-   This command applies only to Linux operating systems.
    

COPY

-   `COPY <Network file address> <On-premises destination directory>`
    
-   `COPY <On-premises source file path> <On-premises destination directory>`
    

-   This command is used to copy files.
    
-   This command applies only to Linux operating systems.
    

**Note**

Network files must be downloaded by using the `wget` utility, and `query strings` are not supported in URLs. In addition, intermediate instances must be able to access the Internet.

USER

`USER <username>`

-   This command is used to specify the username of the account that is used to run commands.
    
-   This command applies only to Linux operating systems.
    

**Note**

Replace the `<username>` variable with an existing username in the system. Otherwise, an error is reported when the command is run.

LABEL

```
LABEL user="username"\
date="2020-11-11" key="value"
```

-   This command is used to define template metadata.
    
-   This command can be split into multiple lines. An escape character (\\) must be added to the end of each line except for the last line.
    
-   This command applies only to Linux operating systems.
    

CMD

-   `CMD ["executable","param1","param2"]`
    
-   `CMD command param1 param2`
    

-   This command is used to enable specific commands and parameters to run on system startup.
    
-   This command applies only to Linux operating systems.
    

ENTRYPOINT

-   `ENTRYPOINT ["executable","param1","param2"]`
    
-   `CMD command param1 param2`
    

-   This command is used to enable specific commands and parameters to run on system startup.
    
-   This command applies only to Linux operating systems.
    

**Note**

`CMD` and `ENTRYPOINT` commands are used to enable specific commands and parameters to run when a container starts. The commands have different use scenarios and features and can be used separately or in combination to achieve more flexible results. For information about the differences between CMD and ENTRYPOINT commands, see [Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

## **Command examples**

The following section provides examples of component and template commands based on scenarios.

### **Component commands**

#### **Example 1: Use custom input parameters in an image component**

In this example, the (3x+2y+z)+(3x+2y+z) function is added to an image component. Each time the component is used to create an image template, x, y, and z are assigned different sets of values. The following sample code provides a component command example. For information about the corresponding template example, see the [Example 1: Associate an image template with an image component that contains custom input parameters and assign values to the input parameters](#b8a155dd11vky) section of this topic.

```
Parameters:
  x:
    Type: String
  y:
    Type: String
  z:
    Type: String
Tasks:
  - Name: count
    Action: RunShellCommand
    Properties:
      commandContent: echo $((3 * {{x}} + 2 * {{y}} + {{z}}))
  - Name: result
    Action: RunShellCommand
    Properties:
      commandContent: echo $(({{count.stdout}}+{{count.stdout}}))
```

#### **Example 2: Specify a script file stored in an OSS bucket in an image component**

Specify a Linux script file stored in an Object Storage Service (OSS) bucket in an image component for image building. This facilitates the creation of multiple ECS instances that have the same configurations from the same image in an enterprise. The image component contains the OSSDownload and OSSUpload actions. You do not need to specify your AccessKey pair in plaintext in the component code.

```
Tasks:
  - Name: ossdownload
    Action: OSSDownload
    Properties:
      bucketName: <Name of the OSS bucket>
      destinationDir: /home
      objectName: <Script file stored in the OSS bucket>
  - Name: setpermissions
    Action: RunShellCommand
    Properties:
      commandContent: sudo chmod +x /home/<Script file stored in the OSS bucket>
  - Name: createfile
    Action: RunShellCommand
    Properties:
      commandContent: sudo touch /home/output.txt
  - Name: setfilepermissions
    Action: RunShellCommand
    Properties:
      commandContent: sudo chmod 666 /home/output.txt
  - Name: result
    Action: RunShellCommand
    Properties:
      commandContent: sudo bash /home/<Script file stored in the OSS bucket> &> /home/output.txt
  - Name: ossupload
    Action: OSSUpload
    Properties:
      bucketName: <Name of the OSS bucket>
      fileToUpload: /home/output.txt
      objectName: output.txt
```

### **Template commands**

#### **Example 1: Associate an image template with an image component that contains custom input parameters and assign values to the input parameters**

Assign values to x, y, and z in the image component created in [Example 1: Use custom input parameters in an image component](#12f24c4995phe). Each time you run a template command, you can assign different sets of values to x, y, and z.

```
COMPONENT i-xxxxxxxxx --x 1 --y 2 --z 3
```

#### **Example 2: Automatically associate an image template with the latest version of an image component**

If an image component has multiple versions, such as 1.0.1, 1.0.2, and 1.0.3, you can specify a fuzzy version of 1.0.\* in a template command to automatically associate the template with the latest component version 1.0.3.

```
COMPONENT acs:ecs:ap-southeast-1:<ID of the Alibaba Cloud account>:imagecomponent/<Name of the image component that contains custom input parameters>/1.0.*
```
