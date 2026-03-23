In many scenarios, you use an image in a private image repository to deploy an application. This topic describes how to create a private image repository in the Container Registry console and use an image in this repository to create an application.

## Create a private image repository

If this is the first time you use the Container Registry console, the Tips message appears, prompting you to set a password for logging on to the console. Click Activate Now and set a password.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
2.  In the top navigation bar, select a region.
3.  In the left-side navigation pane, click Instances.
4.  On the Instances page, click the default instance.
5.  In the left-side navigation pane of the management page of the Container Registry Personal Edition instance, choose Repository > Repositories.
6.  In the upper-left corner of the Repositories page, click Create Repositories.
7.  In the Repository Info step, set Namespace, Repository Name, Summary, and Repository Type. In this example, the private type is selected. Click Next.
8.  In the Code Source step, select Local Repository for Code Source and click Create Repositories.
    
    **Note** In the repository list, click the name of the created repository. On the Guide tab of the Details page, you can view information about how to use the private image repository.
    
9.  Run the following command to log on to the image repository:
    
    **Note**
    
    -   If you use an Alibaba Cloud account, the name of the Alibaba Cloud account is the username for logging on to the repository.
    -   If you use a Resource Access Management (RAM) user, the string before .onaliyun.com is the username for logging on to the repository. For example, if the name of your RAM user is 123@1880770869021234.onaliyun.com, the username for logging on to the repository is 123@1880770869021234.
    
    ```
    sudo docker login --username=<Repository username> registry.cn-<The region where the instance of Container Registry Personal Edition is deployed>.aliyuncs.com
    ```
    
    In the output, enter the password. If `login succeeded` is displayed, the logon is successful.
    
10.  Run the following command to query the IDs of images in the repository:
     
     ```
     docker images     
     ```
     
11.  Run the following command to add a tag to an image:
     
     ```
     sudo docker tag <Image ID> registry.cn-hangzhou.aliyuncs.com/<Namespace>/<Repository name>:[Image version]
     ```
     
12.  Run the following command to push the image to the repository:
     
     ```
     sudo docker push registry.cn-hangzhou.aliyuncs.com/<Namespace>/<Repository name>:[Image version]
     ```
     
     Expected output:
     
     ```
     The push refers to a repository [registry.cn-hangzhou.aliyuncs.com/XXX/tomcat-private]
     9072c7b03a1b: Pushed
     f9701cf47c58: Pushed
     365c8156ff79: Pushed
     2de08d97c2ed: Pushed
     6b09c39b2b33: Pushed
     4172ffa172a6: Pushed
     1dccf0da88f3: Pushed
     d2070b14033b: Pushed
     63dcf81c7ca7: Pushed
     ce6466f43b11: Pushed
     719d45669b35: Pushed
     3b10514a95be: Pushed
     V1: digest: sha256:cded14cf64697961078aedfdf870e704a52270188c8194b6f70c778a8289**** size: 2836
     ```
     
     Go to the repository details page. In the left-side navigation pane, click Tags. Verify that the image is uploaded to the repository. You can also view the image version.
     

## Create a private repository logon Secret

To pull private images, you must use a private repository logon Secret.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
2.  In the left-side navigation pane of the ACK console, click Clusters.
3.  On the Clusters page, find the cluster that you want to manage and click the name of the cluster or click Details in the Actions column. The details page of the cluster appears.
4.  In the left-side navigation pane of the details page, choose Configurations > Secrets.
5.  In the upper-right corner of the Secrets page, click Create.
6.  In the Create panel, set the parameters and click OK.
    
     
    
    Parameter
    
    Description
    
    Name
    
    The name of the Secret.
    
    Type
    
    The following types of Secret are supported:
    
    -   Opaque: a regular Secret. Enter a key and a value. The value must be encoded in Base64.
    -   Private Repository Logon Secret: This type of Secret stores the credentials that are required to pull images from a private image repository. Enter the address, username, and password of the image repository.
        
        **Note** The username is the full name of your Alibaba Cloud account. The password is the one specified when you activated Container Registry. You can go to the Access Credential page to change the password.
        
    -   TLS Certificate: Use a Transport Layer Security (TLS) certificate to verify user identities.
        -   Cert: Enter the content of the TLS certificate.
        -   Key: Enter the private key of the TLS certificate.
    
    After the Secret is created, you are redirected to the Secrets page. You can find the newly created Secret in the list.
    

**Note**

You can also create a private repository logon Secret by using a CLI. For more information, see [Connect to ACK clusters by using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb).

## Create an application by using a private image repository

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
2.  In the left-side navigation pane of the ACK console, click Clusters.
3.  On the Clusters page, find the cluster that you want to manage and click the name of the cluster or click Details in the Actions column. The details page of the cluster appears.
4.  In the left-side navigation pane of the details page, choose Workloads > Deployments.
5.  On the Deployments page, click Create from YAML in the upper-right corner.
    
    **Note** You can also click Create from Image to create an application. For more information, see [Create an application by using an image pull Secret](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment#section-frc-gez-jd5).
    
6.  Set Sample Template to Custom and copy the following content to the Template section.
    
    ```
    apiVersion: apps/v1 
    kind: Deployment 
    metadata: 
      name: private-image
      nameSpace: default  
      labels:  
        app: private-image  
    spec:   
      replicas: 1
      selector:
        matchLabels:
          app: private-image
      template:
        metadata:
          labels:
            app: private-image
        spec:
          containers:
          - name: private-image
            image: registry.cn-hangzhou.aliyuncs.com/The name of the namespace/tomcat-private:latest
            ports:
            - containerPort: 8080
          imagePullSecrets:
          - name: regsecret
    ```
    
7.  Click Create.
    
    Go to the Deployments page. You can view the newly created application.
    

For more information, see [Use a private image repository](https://kubernetes.io/docs/concepts/containers/images/?spm=a2c4g.11186623.2.1.XVyfik#using-a-private-registry).
