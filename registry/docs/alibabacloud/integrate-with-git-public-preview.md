Integrating Realtime Compute for Apache Flink with a remote Git repository (GitHub, GitLab, or Gitee) enables you to push job code and project assets to these repositories or pull them for console-based development and deployment. This feature is useful across various use cases, such as cloud migration, collaborative development, code management, quality assurance, risk governance, disaster recovery, and compliance management. This topic describes how to integrate Realtime Compute for Apache Flink with a Git repository, push your code, and pull code from it in the development console.

## **Use cases**

**Use case**

**Description**

**Recommended actions or notes**

**Cloud migration**

Supports pushing local Flink SQL code directly to cloud Flink clusters (such as Realtime Compute for Apache Flink) via Git, eliminating manual export, import, and configuration.

-   Once code is pulled, continue your development directly in the console.
    
-   Pulling code does not modify the Git repository.
    

**Collaborative development and code management**

-   **Team collaboration and sharing**: Job drafts and configurations are shared and version-controlled via Git, promoting consistency among team members.
    
-   **Branch management and feature iteration**: Supports creating independent branches (such as `feature/topic`) for parallel development and bug fixes. These branches can be merged into the main branch once tests pass.
    

-   Commit all changes to SQL code via Git and use the development console for code pulling and verification.
    
-   Use Git branch management for feature iterations, ensuring the stability of the main branch.
    

**Quality assurance and risk governance**

-   **Code review and verification**: Supports leveraging pull requests in Git for streamlined code review and merging. Collaborators can directly pull code into Realtime Compute for Apache Flink's development console for efficient testing and verification.
    
-   **History tracking and problem locating**: Supports using the commit history to track code changes and pinpoint the root cause of issues that arise.
    

-   Commit all changes to SQL code via Git and use the development console for code pulling and verification.
    
-   Regularly check the commit history to ensure changes are traceable.
    

**Disaster recovery and compliance management**

-   **Disaster recovery and backup**: As a remote repository, Git provides distributed backup, safeguarding against accidental file deletion in the development console and preventing business interruption.
    
-   **Audit compliance**: Git logs maintain a verifiable record of all modifications to job logic, such as the rules for processing sensitive data, ensuring audit compliance.
    

-   Regularly push updates to SQL code via Git and recover code from the Git repository in abnormal situations.
    
-   Use Git logs to track all essential operations for audit compliance.
    

## **Prerequisites**

-   You have [created a Flink workspace](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink#task-2506778).
    
-   You have created or have access to a remote Git repository (e.g., GitHub, GitLab, Gitee, Alibaba Cloud DevOps).
    
-   Your Flink workspace [can access the Internet](/help/en/flink/realtime-flink/user-guide/network-connections#9f713c7283rns).
    
-   For a Git repository with IP whitelisting enabled, add the IP address of your Flink workspace to the Git repository's whitelist.
    

## **Usage notes**

-   **Supported job type:** SQL
    
-   **Binding limits**:
    
    -   To configure Git integration or edit the integrated Git repository configurations, you must be the namespace owner or a member with equivalent permissions.
        
    -   Each namespace can be associated with only one Git repository and a single branch. To manage multiple Git repositories or multiple branches of a Git repository, [create more namespaces](/help/en/flink/realtime-flink/user-guide/create-and-manage-a-namespace#section-jrb-b1u-10v).
        
-   **Supported folder hierarchy**: Limit your folder hierarchy to seven levels. Level-eight or deeper files cannot be pulled to Realtime Compute for Apache Flink.
    
-   **Merge conflicts**: Do not edit the same file in Git and the development console simultaneously. In case concurrent edits occur, Flink will conduct a conflict check during code pushing or pulling, and you need to manually resolve any conflict that arises. The system's conflict resolution mechanism is as follows:
    
    **Operation type**
    
    **Conflict resolution mechanism**
    
    Pull
    
    The system automatically applies non-conflicting updates to SQL drafts and identifies conflicting files. You must manually resolve these merge conflicts before proceeding.
    
    Push
    
    1.  After you push changes, the system will prompt you to first pull updates from the remote repository and try again.
        
    2.  During the pull process, if merge conflicts are detected, manually resolve them and complete the pull.
        
    3.  After merge conflicts are resolved, push again.
        
    
-   When changes in your Git repository are limited to `.json` files (which contain job configurations), the pull behavior is as follows:
    
    -   Adding or deleting JSON files: These operations are not replicated in the development console.
        
    -   Modifying JSON files: Updates are applied to the configurations of the SQL draft with the same name.
        

## **Step 1: Associate a Git repository with a namespace**

1.  [Create an internet connection](/help/en/flink/realtime-flink/user-guide/network-connections#9f713c7283rns) and [test connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#c1e56cf164v5v).
    
    If you have created an internet connection, skip this step.
    
2.  Go to the development console.
    
    1.  Log on to the [Realtime Compute for Apache Flink's management console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Click **Console** in the **Actions** column of the target workspace.
        
3.  Configure a Git repository for the namespace.
    
    1.  In the upper-right corner of the page, click the profile picture and then click **User Profile**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p954855.png)
        
    2.  Click **Git Config** in the **Actions** column of your namespace.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p958342.png)
        
    3.  Configure the Git repository.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p954798.png)
        
        **Configuration item**
        
        **Description**
        
        **Provider**
        
        Valid values: GitHub, GitLab, and Gitee.
        
        **Repository URL**
        
        Your Git repository URL, starting with `HTTP` or `HTTPS` and ending with `.git`. Maximum characters: 64.
        
        **Username**
        
        The username of your Git account, which must have relevant permissions on the target repository.
        
        **Personal Access Token**
        
        The personal access token for authentication.
        
        For information about how to obtain a personal access token, see [Managing personal access tokens in GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) or [Managing personal access tokens in GitLab](https://docs.gitlab.com/user/profile/personal_access_tokens/).
        
        **Branch**
        
        An independent line of code development, used to isolate the development of different features or versions.
        
        A namespace permits binding to a single branch.
        
    4.  Click **OK**.
        
        The Git repository and branch have been associated with your namespace.
        
        To switch to another repository or branch, first click **Git Config** to perform unbinding, and then bind a new one.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p955343.png)
        

## **Step 2: Push or pull updates**

### **Push changes**

You can push job code and configuration changes to the remote Git repository in the development console. You can view differences before pushing.

1.  On the **Development** > **ETL** page**,** click the **Git - Push** button.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p957174.png)
    
2.  In the dialog, configure **Commit Message**, and click **Commit And Push**.
    
    In the **Changes** field, additions (A), modifications (M), or deletions (D) are displayed. Click the corresponding letter to view the changes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p958339.png)
    
3.  Check the results in Git.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p957022.png)
    
    The details of files pushed to Git are as follows.
    
    **Change type**
    
    **Description**
    
    **Illustration**
    
    Addition
    
    When a new SQL draft is pushed to Git, there will be two files with the same name but different extensions:
    
    -   `filename.sql`: SQL code.
        
    -   `filename.json`: the SQL job's configurations, including the draft name, draft ID, execution mode, and engine version.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p956995.png)
    
    Update
    
    Updates are made to the relevant SQL draft or `.json` file.
    
    -   Modify the SQL code:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p958333.png)
        
    -   Modify the engine version:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p958335.png)
        
    

### **Pull changes**

Pull SQL code or job configurations from your Git repository to the development console.

1.  On the **Development** > **ETL** page, click the **Git - Synchronize Changes** icon.
    
    The time of the last synchronization is displayed to the right of this icon. If it is not a recent time point, click the **Git - Synchronize Changes** icon.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p957176.png)
    
    If your Git has updates, **Update Available** is displayed next to the pull icon. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p957668.png)
    
2.  On the **Development** > **ETL** page, click the **Git - Pull** icon.
    
    -   If no conflicts exist, jump to [Step 4](#7523d375ffzj6) to view the pulled results.
        
    -   If conflicting files exist, go to [Step 3](#6c3e911d7er6d) to resolve conflicts.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p957674.png)
        
3.  (Optional) Manually resolve merge conflicts.
    
    **Important**
    
    Realtime Compute for Apache Flink does not support overall rollback. Therefore, before manually resolving conflicts, always back up critical data (such as by duplicating the `example.sql` file locally) and evaluate the operational impact. Proceed with caution, as mishandling conflicts can lead to irreversible consequences.
    
    1.  Click **Resolve**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p962535.png)
        
        The conflict resolution page appears.
        
    2.  Resolve the conflicts.
        
        Select the conflicting code snippet, and choose **Accept Current Change**, **Accept Incoming Change**, and **Accept Both Changes** as needed.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p957877.png)
        
        **Button**
        
        **Meaning**
        
        **Accept Current Change**
        
        Keeps the original version of code.
        
        **Accept Incoming Change**
        
        Accepts the change from the remote Git repository.
        
        **Accept Both Changes**
        
        Applies both changes.
        
    3.  After conflict resolution, click **Resolved**
        
    4.  Click **Continue**.
        
4.  View and modify the pulled results.
    
    When the page prompts **Successfully pulled from the remote repository**, the **ETL** page will automatically refresh the draft to display the pulled SQL drafts.
    
    After pulling is complete, the current draft will be locked by Git. To modify or delete it, use **Click To Unlock**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6451519471/p959046.png)
    

## **References**

-   For information about common Git operations, such as cloning repositories, committing code, creating pull requests, see [Using GitHub](https://docs.github.com/zh/get-started/using-git) or [Use GitLab](https://docs.gitlab.com/topics/git/).
    
-   For information about using Git with CI/CD to build applications, see [GitLab CI/CD Quick Start](https://docs.gitlab.com/ci/) or [GitHub Actions Quick Start](https://docs.github.com/actions/writing-workflows/quickstart).
