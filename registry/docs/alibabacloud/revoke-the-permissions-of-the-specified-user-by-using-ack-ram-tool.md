ack-ram-tool is a command-line interface (CLI) provided by Container Service for Kubernetes to help you manage Resource Access Management (RAM) and Role-Based Access Control (RBAC) permissions for your clusters. When users leave your organization or their permissions change, use ack-ram-tool to promptly clean up the permissions of deleted users in your cluster and prevent security risks.

## **Step 1: Install ack-ram-tool**

1.  [Download the ack-ram-tool client](https://github.com/AliyunContainerService/ack-ram-tool/releases) for your environment's architecture.
    
2.  Run the following command to grant execute permission to the client program.
    
    ```
    chmod +x ./ack-ram-tool
    ```
    
3.  Run the following command to copy the ack-ram-tool file to a directory in your system's PATH.
    
    ```
    mkdir -p $HOME/bin && cp ./ack-ram-tool $HOME/bin/ack-ram-tool && export PATH=$HOME/bin:$PATH
    ```
    
4.  (Optional) Run the following command to make the PATH configuration in `$HOME/bin` persistent.
    
    ```
    echo 'export PATH=$HOME/bin:$PATH' >> ~/.bash_profile
    ```
    
5.  Run the following command to check the client version. This verifies that the ack-ram-tool client is installed.
    
    ```
    ack-ram-tool version
    ```
    

## **Step 2: Configure Alibaba Cloud credentials**

Alibaba Cloud RAM users and Cloud Single Sign-On (CloudSSO) users can configure access credentials for cloud resources in the following ways.

**Note**

If access credential-related environment variables exist in the current environment, ack-ram-tool prioritizes the access credentials configured in the environment variables. You can ignore these environment variables by adding the parameter `--ignore-env-credentials` when executing the ack-ram-tool command. For access credential-related environment variables supported by ack-ram-tool, see [Credentials](https://aliyuncontainerservice.github.io/ack-ram-tool/#credentials).

### RAM users

The ack-ram-tool client uses locally configured Alibaba Cloud key credentials to access RAM for identity authentication.

For more information about how to configure access credentials, see [Cloud Assistant CLI](/help/en/cli/overview).

### CloudSSO users

For Alibaba Cloud CloudSSO users, you can use the acs-sso CLI tool provided by the CloudSSO service to log on and obtain access credentials for cloud resources. For more information about acs-sso, see [Use the CLI to log on to CloudSSO and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/use-alibaba-cloud-cli-to-access-cloudsso-and-alibaba-cloud-resources). The Cloud Assistant CLI supports the [external](https://github.com/aliyun/aliyun-cli#use-an-external-program-to-get-credentials) mode, which lets you dynamically obtain resource credentials by running an external command-line tool. Run the following command to complete the CloudSSO logon and automate credential configuration on your local machine.

```
aliyun configure --mode External --profile sso

Configuring profile 'sso' in 'External' authenticate mode...
Process Command [acs-sso login --profile sso]:
Default Region Id [cn-shanghai]:
Default Output Format [json]: json (Only support json)
Default Language [zh|en] en:
Saving profile[sso] ...Done.


Configure Done!!!
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
```

## **Step 3: Configure required permissions for the ack-ram-tool access credentials**

The access credentials used by ack-ram-tool require RAM permissions and the cluster's RBAC permissions.

1.  Grant the following permissions to the RAM user. For more information, see [Manage the permissions of a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "cs:*"
          ],
          "Resource": "*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "ram:ListUsers",
            "ram:ListRoles"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
    
2.  Grant the RAM user the RBAC administrative permissions for the cluster.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, choose **Authorizations**.
        
    2.  On the Authorization page, click the **RAM Users** tab. Find the RAM user that you want to add, click **Manage Permissions** in the right-side column, and go to the **Permission Management** page.
        
    3.  Click **Add Permissions**. Select a **Cluster** and a **Namespace**. Set **Permission Management** to **Administrator**, and then click **Submit Authorization**.
        

## **Step 4: Query the RBAC bindings of a specified RAM user in the cluster**

You can run the `ack-ram-tool rbac scan-user-permissions` command to query the RBAC binding information of a specified RAM user in the destination cluster.

### **Query only the RBAC bindings of deleted RAM users and roles**

Run the following command to view the RBAC binding information of deleted RAM users and roles in the cluster.

```
ack-ram-tool rbac scan-user-permissions -c <cluster_ID>
```

Expected output:

```
2023-12-12T15:34:37+08:00 INFO start to scan users and bindings for cluster c401890df511a4362bf24bece4da****
2023-12-12T15:34:43+08:00 WARN by default, only deleted users are included. Use the --all-users flag to include all users
UID                           UserType  UserName  Binding                                                    
30086537005566**** (deleted)  RamRole             ClusterRoleBinding/-/30086537005566****-clusterrolebinding  
24320678733226**** (deleted)  RamUser             ClusterRoleBinding/-/24320678733226****-clusterrolebinding  
```

The following table describes the `UserType` parameter.

**Value of UserType**

**Description**

RamRole

RAM role

RamUser

RAM user

Root

Alibaba Cloud account

#### **Query the RBAC bindings of all RAM users and roles**

Run the following command to view the RBAC binding information of all RAM users and roles.

```
ack-ram-tool rbac scan-user-permissions --all-users -c <cluster_ID>
```

Expected output:

```
2023-12-12T15:36:00+08:00 INFO Start to scan users and bindings for cluster c401890df511a4362bf24bece4da6****
UID                           UserType  UserName                   Binding                                                                
30032484611590**** (deleted)  RamRole                              ClusterRoleBinding/-/30032484611590****-clusterrolebinding              
20492499986425**** (deleted)  RamUser                              ClusterRoleBinding/-/20492499986425****-clusterrolebinding              
27203272572548****            RamUser   scan                       ClusterRoleBinding/-/27203272572548****-clusterrolebinding        
113802571552****              Root                                 ClusterRoleBinding/-/113802571552****-cluster-admin-clusterrolebinding  
29068913515444****            RamUser   test-ack-ram-check         ClusterRoleBinding/-/29068913515444****-clusterrolebinding  
```

### Query the RBAC bindings for all clusters under the current Alibaba Cloud account

Run the following command to view the RBAC binding information for all clusters under the current Alibaba Cloud account.

```
ack-ram-tool rbac scan-user-permissions -c all
```

Expected output:

```
2023-12-12T16:44:55+08:00 INFO start to scan users and bindings for all clusters
2023-12-12T16:44:55+08:00 INFO start to get all clusters, users and roles
2023-12-12T16:44:58+08:00 INFO ---- c401890df511a4362bf24bece4da6**** (test-pro111323223) ----
2023-12-12T16:44:58+08:00 INFO [c401890df511a4362bf24bece4da6****] start to scan bindings for cluster c401890df511a4362bf24bece4da6****
2023-12-12T16:45:00+08:00 WARN [c401890df511a4362bf24bece4da6****] by default, only deleted users are included. Use the --all-users flag to include all users
ClusterId: c401890df511a4362bf24bece4da6****
UID                           UserType  UserName  Binding                                                    
30086537005566**** (deleted)  RamRole             ClusterRoleBinding/-/30086537005566****-clusterrolebinding  
20492499986425**** (deleted)  RamUser             ClusterRoleBinding/-/20492499986425****-clusterrolebinding  
2023-12-12T16:45:00+08:00 INFO ---- c137a979dec21472c8279c903cfc**** (test-pro) ----
2023-12-12T16:45:00+08:00 INFO [c137a979dec21472c8279c903cfce****] start to scan bindings for cluster c137a979dec21472c8279c903cfce****
2023-12-12T16:45:01+08:00 WARN [c137a979dec21472c8279c903cfce****] by default, only deleted users are included. Use the --all-users flag to include all users
ClusterId: c137a979dec21472c8279c903cfce****
UID                           UserType  UserName  Binding                                                    
30086537005566**** (deleted)  RamRole             ClusterRoleBinding/-/30086537005566****-clusterrolebinding  
24320678733226**** (deleted)  RamUser             ClusterRoleBinding/-/24320678733226****-clusterrolebinding  

```

## Step 5: Clean up the RBAC bindings of a specified RAM user or RAM role and purge kubeconfig permissions

You can run the `ack-ram-tool rbac cleanup-user-permissions` command to clean up the RBAC bindings of a specified RAM user or RAM role in the destination cluster and purge the user's kubeconfig.

**Important**

-   If the log contains `this user has been active in the past 7 days`, the destination RAM user or RAM role has cluster access records within the last 7 days. Proceed with caution.
    
-   Before the cleanup operation, ack-ram-tool backs up the original JSON files of the bindings to be deleted to a folder named after the cluster ID in the current directory.
    

### **Clean up the permissions of a RAM user or RAM role in a single cluster**

Run the following command to clean up the permissions of a specified RAM user or RAM role in a single cluster.

To obtain the `<UID>` in the following command, run the `ack-ram-tool rbac scan-user-permissions -c <cluster_ID>` command.

```
ack-ram-tool rbac cleanup-user-permissions -c <cluster_ID> -u <UID>
```

Expected output:

**Expand to view the expected output**

```
2023-12-12T18:17:10+08:00 INFO start to scan users and bindings
2023-12-12T18:17:15+08:00 WARN we will clean up RBAC bindings as follows:
UID                 UserType  UserName   Binding                                                    
25908395708943****  RamUser   ack-admin  ClusterRoleBinding/-/25908395708943****-clusterrolebinding  
2023-12-12T18:17:15+08:00 WARN we will clean up kubeconfig permissions for users as follows:
UID: 25908395708943****
2023-12-12T18:17:15+08:00 INFO start to check cluster audit log for user 25908395708943****
2023-12-12T18:17:16+08:00 WARN this user has been active in the past 7 days, and the last activity time was: 2023-12-12T10:27:56+08:00. You will find the relevant audit log details below:
sls project: k8s-log-c137a979dec21472c8279c903cfce****
sls logstore: audit-c137a979dec21472c8279c903cfce****
last activity: 2023-12-12T10:27:56+08:00 (auditID: 8f6f1483-77f3-44b3-85cb-f23d1a76e****)
? Are you sure you want to clean up these bindings and permissions? Yes
2023-12-12T18:17:37+08:00 INFO start to backup binding ClusterRoleBinding/-/25908395708943****-clusterrolebinding
2023-12-12T18:17:38+08:00 INFO the origin binding ClusterRoleBinding/-/25908395708943****-clusterrolebinding have been backed up to file c137a979dec21472c8279c903cfce****/ClusterRoleBinding--25908395708943****-clusterrolebinding.json
2023-12-12T18:17:38+08:00 INFO start to clean up kubeconfig permissions for uid 25908395708943****
2023-12-12T18:17:38+08:00 INFO finished clean up kubeconfig permissions for uid 25908395708943****
2023-12-12T18:17:38+08:00 INFO all bindings and permissions have been cleaned up
```

### **Clean up the permissions of a RAM user or RAM role in all clusters**

Run the following command to clean up the RBAC bindings of a specified RAM user or role in all clusters under the current Alibaba Cloud account and purge their kubeconfig.

```
ack-ram-tool rbac cleanup-user-permissions -c all -u <UID>
```

Expected output:

**Expand to view the expected output**

```
2023-12-12T19:28:23+08:00 INFO start to scan users and bindings for all clusters
2023-12-12T19:28:23+08:00 INFO start to get all clusters, users and roles
2023-12-12T19:28:24+08:00 INFO ---- c401890df511a4362bf24bece4da6**** (test-pro111323223) ----
2023-12-12T19:28:24+08:00 INFO [c401890df511a4362bf24bece4da6****] start to clean up bindings and permissions for cluster c401890df511a4362bf24bece4da6**** 
2023-12-12T19:28:24+08:00 INFO [c401890df511a4362bf24bece4da6****] start to scan users and bindings
2023-12-12T19:28:25+08:00 WARN [c401890df511a4362bf24bece4da6****] we will clean up RBAC bindings as follows:
UID                 UserType  UserName   Binding                                                    
25908395708943****  RamUser   ack-admin  ClusterRoleBinding/-/25908395708943****-clusterrolebinding  
2023-12-12T19:28:25+08:00 WARN [c401890df511a4362bf24bece4da6****] we will clean up kubeconfig permissions for users as follows:
UID: 259083957089437690
2023-12-12T19:28:25+08:00 INFO [c401890df511a4362bf24bece4da6****] start to check cluster audit log for user 25908395708943**** 
2023-12-12T19:28:25+08:00 WARN [c401890df511a4362bf24bece4da6****] this user has been active in the past 7 days, and the last activity time was: 2023-12-12T10:27:56+08:00. You will find the relevant audit log details below:
sls project: k8s-log-c401890df511a4362bf24bece4da****  
sls logstore: audit-c401890df511a4362bf24bece4da6**** 
last activity: 2023-12-12T10:27:56+08:00 (auditID: 8f6f1483-77f3-44b3-85cb-f23d1a76****)
? Are you sure you want to clean up these bindings and permissions? Yes
2023-12-12T19:28:49+08:00 INFO [c401890df511a4362bf24bece4da6****] start to backup binding ClusterRoleBinding/-/25908395708943**** -clusterrolebinding
2023-12-12T19:28:49+08:00 INFO [c401890df511a4362bf24bece4da6****] the origin binding ClusterRoleBinding/-/25908395708943****-clusterrolebinding have been backed up to file c401890df511a4362bf24bece4da6**** /ClusterRoleBinding--259083957089437XXX-clusterrolebinding.json
2023-12-12T19:28:49+08:00 INFO [c401890df511a4362bf24bece4da6****] start to clean up kubeconfig permissions for uid 25908395708943**** 
2023-12-12T19:28:49+08:00 INFO [c401890df511a4362bf24bece4da6****] finished clean up kubeconfig permissions for uid 25908395708943**** 
2023-12-12T19:28:49+08:00 INFO [c401890df511a4362bf24bece4da6****] all bindings and permissions have been cleaned up
2023-12-12T19:28:49+08:00 INFO ---- c137a979dec21472c8279c903cfce****  (test-pro) ----
2023-12-12T19:28:49+08:00 INFO [c137a979dec21472c8279c903cfce****] start to clean up bindings and permissions for cluster c137a979dec21472c8279c903cfce**** 
2023-12-12T19:28:49+08:00 INFO [c137a979dec21472c8279c903cfce****] start to scan users and bindings
2023-12-12T19:28:51+08:00 WARN [c137a979dec21472c8279c903cfce****] we will clean up RBAC bindings as follows:
UID                 UserType  UserName   Binding                                                    
25908395708943****   RamUser   ack-admin  ClusterRoleBinding/-/25908395708943**** -clusterrolebinding  
2023-12-12T19:28:51+08:00 WARN [c137a979dec21472c8279c903cfce****] we will clean up kubeconfig permissions for users as follows:
UID: 25908395708943**** 
2023-12-12T19:28:51+08:00 INFO [c137a979dec21472c8279c903cfce****] start to check cluster audit log for user 25908395708943**** 
2023-12-12T19:28:51+08:00 WARN [c137a979dec21472c8279c903cfce****] this user has been active in the past 7 days, and the last activity time was: 2023-12-12T17:55:50+08:00. You will find the relevant audit log details below:
sls project: k8s-log-c137a979dec21472c8279c903cfce**** 
sls logstore: audit-c137a979dec21472c8279c903cfce**** 
last activity: 2023-12-12T17:55:50+08:00 (auditID: 8f6f1483-77f3-44b3-85cb-f23d1a76****)
? Are you sure you want to clean up these bindings and permissions? Yes
2023-12-12T19:28:52+08:00 INFO [c137a979dec21472c8279c903cfce****] start to backup binding ClusterRoleBinding/-/25908395708943****-clusterrolebinding
2023-12-12T19:28:52+08:00 INFO [c137a979dec21472c8279c903cfce****] the origin binding ClusterRoleBinding/-/25908395708943****-clusterrolebinding have been backed up to file c137a979dec21472c8279c903cfce**** /ClusterRoleBinding--25908395708943**** -clusterrolebinding.json
2023-12-12T19:28:52+08:00 INFO [c137a979dec21472c8279c903cfce****] start to clean up kubeconfig permissions for uid 25908395708943**** 
2023-12-12T19:28:52+08:00 INFO [c137a979dec21472c8279c903cfce****] finished clean up kubeconfig permissions for uid 25908395708943**** 
2023-12-12T19:28:52+08:00 INFO [c137a979dec21472c8279c903cfce****] all bindings and permissions have been cleaned up
```

## **References**

For more information about how to manage a kubeconfig, see [Purge a kubeconfig](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/clear-kubeconfig).
