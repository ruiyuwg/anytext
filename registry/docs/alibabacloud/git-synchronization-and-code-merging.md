DataWorks integrates with Git to provide a new model for data development. The Code Synchronization and Merge features seamlessly connect the DataWorks platform to your Git repository. When you save or publish code, changes are automatically synchronized to a specified Git branch. You can also merge code changes from a Git branch back into DataWorks.

**Important**

This feature is available only in DataWorks Enterprise Edition and is in a private preview. To use this feature, submit a ticket to technical support to be added to the whitelist.

## Overview

The DataWorks integration with Git includes two workflows: managing code within a workspace and merging code across workspaces.

-   **Synchronize from DataWorks to Git**: When you save or publish code in DataWorks, the changes are automatically committed to a protected branch in the Git repository. This commit is performed by a dedicated Git account and a Serverless Resource Group with network access.
    
-   **Merge from Git to DataWorks**: Merge code changes from the main branch or a feature branch of the Git repository back into DataWorks.
    

DataWorks automatically creates and manages the following three branches in your Git repository and uses branch protection rules to prevent manual changes:

-   `dataworks_${region}_${projectId}_save`: Corresponds to the code after a save operation in DataWorks.
    
-   `dataworks_${region}_${projectId}_release_dev`: Corresponds to the code that is successfully published to the development environment.
    
-   `dataworks_${region}_${projectId}_release_prod`: Corresponds to the code that is successfully published to the production environment.
    

## **Configuration and initialization**

### **Step 1: Prepare cloud resources and network**

Code synchronization tasks run using a Serverless Resource Group and require network access to the Git repository and Object Storage Service (OSS).

1.  **Prepare a Serverless Resource Group and configure the network.**
    
    -   Prepare a DataWorks [Serverless Resource Group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and bind it to the target workspace.
        
    -   Ensure that the resource group can access the SSH port of the Git server. Only port 22 is supported.
        
        -   **Public Git repository** (for example, Apsara DevOps or GitHub.com): Configure an [Internet NAT Gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) and an Elastic IP Address (EIP) for the Virtual Private Cloud (VPC) where the resource group resides to enable public network access.
            
        -   **Private Git repository**: Ensure network connectivity between the resource group's VPC and the Git server. For details, see [VPC Peering Connection](/help/en/vpc/vpc-peer-to-peer-connection).
            
2.  **Prepare an OSS data source.** The code synchronization feature uses OSS for temporary storage.
    
    -   In the same region as the DataWorks workspace, create an [OSS Bucket](/help/en/oss/user-guide/create-a-bucket-4).
        
    -   On the **Data Sources** page of the DataWorks workspace, create an [OSS data source](/help/en/dataworks/user-guide/oss-data-source) for the bucket.
        
        **Note**
        
        Only data sources that use an Access Key for authentication are supported. Ensure that the key has the following permissions: `oss:GetObject`, `oss:ListObjects`, `oss:PutObject`, and `oss:DeleteObject`.
        

### **Step 2: Prepare the Git environment**

In your Git platform, create a dedicated account, configure an SSH key, and set up a branch protection rule.

1.  **Create a dedicated Git account and generate an SSH key.**
    
    1.  In your Git platform, such as Apsara DevOps or GitLab, create a dedicated account for automatic code commits, such as `dataworks_pusher`. Configure a valid email for this account.
        
    2.  Generate an SSH key pair using the **RSA algorithm** for this account. Do not set a passphrase during the generation process.
        
        -   **Purpose**: Generate an SSH public key and private key for authentication.
            
        -   **Command**:
            
            ```
            # Replace "your_user_email@example.com" with the account email you configured in the previous step.
            ssh-keygen -t rsa -C "your_user_email@example.com"
            
            # When prompted for a passphrase, press Enter to skip.
            # Enter passphrase (empty for no passphrase): [Enter]
            # Enter same passphrase again: [Enter]
            ```
            
        -   **Result**: After the command runs successfully, the `id_rsa` (private key) and `id_rsa.pub` (public key) files are generated in the `~/.ssh/` directory. You will need the contents of these files in subsequent steps.
            
            ```
            # Copy and save the public and private key content. You will need it in later steps.
            cat ~/.ssh/id_rsa.pub
            cat ~/.ssh/id_rsa
            ```
            
2.  **Add the public key to the Git platform.**
    
    Log in to your Git platform. On the SSH key management page for the `dataworks_pusher` account, add the public key that you generated in the previous step (the contents of the `id_rsa.pub` file).
    
3.  **Create a code repository and configure a branch protection rule.**
    
    1.  Create a Git code repository dedicated to DataWorks code management, for example, `DataWorks_code`.
        
    2.  In the repository, set a branch protection rule to ensure that the branches automatically managed by DataWorks are not modified directly. A repository administrator must perform this operation.
        
        **Important**
        
        Incorrectly configured branch protection rules may lead to unexpected modifications of the DataWorks-managed branches, disrupting synchronization.
        
        -   **Branch name pattern**: `dataworks_*`
            
        -   **Allowed to push**: Select specific members and add the `dataworks_pusher` account.
            
        -   **Allowed to merge**: Select **No one**.
            

### **Step 3: Configure and initialize code synchronization**

**Important**

Only Tenant Administrators and Workspace Administrators can configure code synchronization for a workspace.

Connect the DataWorks workspace to the Git repository and then initialize the connection.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7210800771/p1027272.png)

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  **(Optional) Test connectivity.** Before you complete the configuration, you can create a temporary Shell node in DataStudio and use the prepared Serverless Resource Group to verify network connectivity and SSH private key validity.
    
    1.  Test network connectivity: Run the `telnet` command. If the log shows "Connected to ...", connectivity is successful. You can then stop the task.
        
        ```
        # Replace your_git_server_domain with your Git server's domain name or IP address, for example, codeup.aliyun.com for Apsara DevOps.
        telnet your_git_server_domain 22
        ```
        
        For Apsara DevOps, if the following content appears in the log, the network is connected. You can stop the task. Otherwise, you must **check your network configuration**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6099643671/p1022862.png)
        
    2.  Test SSH key validity: Run the following script. If the log shows a success message such as "Welcome to ...", the private key is configured correctly.
        
        ```
        # Check if the SSH private key is correct. The expected output is "Welcome to xxx,..."
        # This script writes your private key content to the standard SSH key file (~/.ssh/id_rsa) in a temporary runtime environment.
        # It then tests the connection to the Git server to validate the private key.
        # Encode the private key content to Base64.
        id_rsa_base64=$(cat <<'EOF' | base64 -w 0
        # [Paste the full content of the private key (id_rsa file) here.]
        -----BEGIN OPENSSH PRIVATE KEY-----
        ...
        -----END OPENSSH PRIVATE KEY-----
        EOF
        )
        # Recreate the SSH key file in the runtime environment.
        id_rsa=$(base64 -d <<< "$id_rsa_base64")
        mkdir ~/.ssh
        echo "$id_rsa" > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa
        ssh-keygen -y -f ~/.ssh/id_rsa > ~/.ssh/id_rsa.pub
        chmod 644 ~/.ssh/id_rsa.pub
        
        # Test the SSH connection. Replace your_git_server_domain with your Git SSH address, for example, codeup.aliyun.com.
        ssh -T git@your_git_server_domain
        ```
        
        Click Run. For Apsara DevOps, if the following content appears in the run log, the private key for the account is correct.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6099643671/p1022870.png)
        
3.  In the left navigation bar, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7086793771/p1051577.png)Code Management** to go to the **Code Synchronization** configuration page. Configure the following parameters:
    
    > Note: The DataStudio Settings tab is visible only after you are added to the whitelist.
    
    **Parameter**
    
    **Description**
    
    **Git Repository Address**
    
    The **SSH** address of the target Git code repository.
    
    **Private Key**
    
    Paste the full content of the private key (the `id_rsa` file) that you generated in Step 2.
    
    **Important**
    
    The private key content must include `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`.
    
    **DataWorks OSS Data Source**
    
    Select the prepared OSS data source.
    
    **Note**
    
    If the UI prompts "The current resource group is not authorized to access the OSS data source. Go to authorize," click Go to authorize.
    
    **OSS Storage Path**
    
    Specify an OSS path to store code metadata, for example, `dataworks-workspace-code`.
    
    **DataWorks OSS Universal Resource Group**
    
    Select the Serverless Resource Group you prepared earlier.
    
4.  After you complete the configuration, click **Enable Synchronization**. Then, click **Initialization** to initialize the Git code repository. The system automatically creates the required DataWorks branches in the Git repository and synchronizes the code from the current workspace. This process may take several minutes. During this time, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7086793771/p1051588.png) button in the upper-right corner to view the initialization log.
    
    **Note**
    
    If you disable and then re-enable synchronization, you must perform the initialization again. Cleanup is required before re-initialization.
    
    After the configuration takes effect, DataWorks automatically creates and manages the following three branches in your Git repository. Do not create or modify them manually.
    
    -   `dataworks_${region}_${projectId}_save`: Corresponds to the code from a save operation in DataWorks.
        
    -   `dataworks_${region}_${projectId}_release_dev`: Corresponds to code that is successfully published to the development environment. If the workspace is in simple mode, the dev branch is not generated.
        
    -   `dataworks_${region}_${projectId}_release_prod`: Corresponds to code that is successfully published to the production environment.
        
    
    From this point forward, every save and publish operation in DataWorks automatically synchronizes the corresponding code and configuration changes to the respective Git branch.
    
    Click the default save branch to view the saved node code, workflows, folders, and other information in the current workspace.
    

### **Step 4: Verify code synchronization**

1.  Create a new Shell node in DataStudio and name it `shell_test`.
    
2.  In the code editor, enter the following code and click the save button in the toolbar.
    
    ```
    echo 'Code push test.'
    ```
    
3.  Log in to Git, go to the target repository, and select the save branch. Find the shell\_test folder. You can see that the folder contains three files: `shell_test.sh (code file)`, `shell_test.spec.json (scheduling configuration file)`, and `dataworks.properties (variable file)`. Click `shell_test.sh` to view the shell\_test node and its code content. This indicates that the synchronization was successful.
    
4.  To verify synchronization for the other two branches, publish the node to the corresponding environments. For more information about publishing, see [Publish tasks](/help/en/dataworks/user-guide/publish-with-workspace).
    

## **Use cases and features**

### **Reverse merge**

DataWorks not only supports synchronizing code to Git but also provides a powerful reverse merge capability. You can easily merge the latest changes from a remote Git branch back into the DataWorks platform.

This feature is compatible with both the main synchronization branch and the feature branches created from it. Developers can create feature branches from the main synchronization branch to work independently on development, testing, and code review. They can then safely merge the mature code back into DataWorks. This process enables professional and efficient team collaboration.

**Important**

This feature requires synchronization to be enabled and is available for roles with developer permissions or higher.

1.  **Merge entry point**
    
    In the **DataStudio** > **DataStudio Settings** interface, expand the **Code Merge** section.
    
2.  **Merge preview**
    
    After you enter the name of the branch that you want to merge and click Merge Preview, the system compares the added, modified, and deleted content between the source branch and the default `save` branch of DataWorks.
    
    -   **No conflicts**: The interface displays a diff of the changes, which clearly lists the nodes and code modifications that will be added, modified, or deleted.
        
    -   **Conflicts**: The interface alerts you to the conflict and displays specific details. You must return to your local environment, resolve the conflict in Git, and then try the merge again.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7210800771/p1023082.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6099643671/p1023084.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7210800771/p1023098.png)
    
3.  **Confirm merge**
    
    1.  After you confirm the preview is correct, click **Confirm Merge**.
        
    2.  The system starts the merge task. You can see the merge progress in real time.
        
    3.  All merge records are displayed in the **Code Merge History** area below. You can view the initiator, merge status, and branch details for each record.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6099643671/p1023148.png)
        

### **Cross-workspace merge**

The Git synchronization feature enables you to reuse and distribute a standardized set of code, or a "template", across multiple workspaces, even in different regions. For example, you can quickly deploy a universal user analysis model to independent workspaces for different business lines, allowing each to run on its **own dedicated compute resources and data sources**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4939793771/CAEQVBiBgICHif.k6BkiIDQ5YTdjZDVjOTllZjQ0YjA4NDc5YTA2ZDcwYTFkOTJl6431477_20260202173458.035.svg)

1.  **Initial setup**
    
    1.  Create two separate projects: `git_cross_project_1` and `git_cross_project_2`. They can be in different regions.
        
    2.  Follow the instructions in [Step 1](#7f07d2c516pks) to configure a resource group and an OSS data source for each workspace. The two data sources can be the same. Also configure the network connectivity.
        
    3.  Follow the instructions in [Step 2](#d233758227wla) to prepare **a single Git code repository** that will be **shared** by both workspaces.
        
    4.  Follow the instructions in [Step 3](#acba919038phz) to configure Git synchronization for each workspace, using the same SSH address and private key for both. Ensure that the initialization is successful for both. At this point, branches for both workspaces, `270256` (project1) and `270257` (project2), will appear in the Git code repository.
        
2.  **Cross-project merge strategy**
    
    1.  When merging code branches across workspaces, only the node code, basic properties, and scheduling configuration are merged. The run configurations are not merged into the target workspace.
        
    2.  Because the two workspaces do not necessarily have the same configurations for compute resources, resource groups, and data sources, you must configure the resource mapping `merge_mapping`.
        
        1.  On your local machine, open a terminal, clone the repository, and then switch to the save branch of the source workspace (project1), for example, `dataworks_cn_shenzhen_270256_save`.
            
            ```
            # Clone the remote Git repository to your local machine.
            git clone git@your_git_server_domain:64dc86a16800a4a57137536/cross_project_shenzhen.git
            
            # Switch to the save branch of project1.
            git checkout <your_branch_name>
            ```
            
        2.  Create the `merge_mapping` file.
            
            ```
            # `cross_project_shenzhen` is the name of the code repository.
            cd cross_project_shenzhen 
            
            # Create the directory.
            mkdir -p DATAWORKS_SYSTEM_CONFIG/merge_mapping
            
            # Create the mapping file. The file name format is: <region>_<projectId>_to_<region>_<projectId>.properties
            vi DATAWORKS_SYSTEM_CONFIG/merge_mapping/cn_shenzhen_270256_to_cn_shenzhen_270257.properties
            ```
            
            Configure the file content based on your requirements, and modify the values of the parameters on both sides of the `=` sign. You can specify multiple parameters for each type.
            
            ```
            # Data Source
            # spec.datasource.name.<project1_data_source_name>=<project2_data_source_name>
            spec.datasource.name.mysql_01=mysql_02
            
            # Resource Group
            # spec.runtimeResource.resourceGroup.<project1_resource_group_ID>=<project2_resource_group_ID>
            spec.runtimeResource.resourceGroup.group_524257424564736=Serverless_res_group_524257424564736_764027070300961
            
            # Node output name prefix
            # spec.output-prefix.<project1_name>=<project2_name>
            spec.output-prefix.git_cross_project_1=git_cross_project_2
            
            # Project prefix for tables in MaxCompute SQL
            # script.project-identifier.<project1_name>=<project2_name>
            script.project-identifier.git_cross_project_1=git_cross_project_2
            
            # Image
            # spec.script.runtime.container.imageId.<image_ID_used_in_project1>=<image_ID_used_in_project2>
            spec.script.runtime.container.imageId.Default=System_python311_ubuntu2204_20251201
            
            # RAM Role
            # spec.script.runtime.linkedRoleArn.<ram_role_ARN_used_in_project1>=<ram_role_ARN_used_in_project2>
            spec.script.runtime.linkedRoleArn.acs:ram::1107550004253538:role/aliyundataworksaccessingenirole=acs:ram::1107550004253538:role/aliyundataworksaccessingossrole
            ```
            
            Push the code to the Git repository.
            
            ```
            # Add the changes in the current directory to Git.
            git add .
            # Commit the mapping file.
            git commit -m "add mapping files"
            # Push the branch content to the remote Git repository.
            git push
            ```
            
    3.  Merge code across projects
        
        1.  Go to **DataStudio** in the target workspace `git_cross_project_2`. In the left-side navigation pane, click **DataStudio Settings**, and find the **Code Merge** tab.
            
        2.  In the branch input box, enter the name of the source workspace's save branch, for example, `dataworks_cn_shenzhen_270256_save`.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7086793771/p1051802.png)
            
        3.  Click Merge Preview. After confirming that the changes are correct, merge the code from workspace `git_cross_project_1` into workspace `git_cross_project_2`. For details about the merge operation, see [Reverse merge](#fa8b1ffb2383n).
            

## **Billing**

This feature incurs costs for the following resources:

-   Serverless Resource Group: The synchronization task uses a resource specification of 1 CU. The fees vary depending on the billing method of the purchased resource group. For details, see [Billing of Serverless Resource Groups](/help/en/dataworks/new-resource-group-overview).
    
-   Internet NAT Gateway and EIP: If the Git repository is on the public internet, corresponding traffic fees are incurred. For details, see [NAT Gateway billing](/help/en/nat-gateway/nat-gateway-billing).
    
-   OSS storage: This is used to store code synchronization data. It is billed based on storage capacity and the number of requests. For details, see [OSS billing overview](/help/en/oss/billing-overview).
    

## FAQ

-   **Q: Initialization shows as successful, but no branch is created in the Git repository. What should I do?**
    
    **A:** Follow the instructions in the [Test connectivity](#6f0a188a933kr) section to check whether the telnet and SSH connections are successful. Pay close attention to whether the network configuration (Internet NAT Gateway/VPC) of the Serverless Resource Group is correct.
    
-   **Q: A conflict is reported when merging code. How do I handle it?**
    
    **A:** In your local development environment, fetch the latest changes from the remote repository. Merge the DataWorks save branch (`dataworks_${region}_${projectId}_save`) with your development branch by using `git merge` or `git rebase`. After you resolve the conflicts, push your development branch to the remote repository. Finally, return to the DataWorks page and try the merge again.
