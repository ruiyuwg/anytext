This example shows how to use an orchestration template to create a web application that contains a Deployment and a Service, and schedule it to run on a Windows node.

## Prerequisites

Your cluster has a Windows node. For more information, see [Create and manage a Windows node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-windows-node-pool#task-2481800).

## Step 1: Deploy the sample application

Follow these steps to deploy a sample ASP.NET application to a Windows node in your cluster. A Service automatically creates a Server Load Balancer instance to expose port 80 of the application, which makes the web application accessible from the Internet.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want to manage and click its name. In the left navigation pane, choose **Workloads** > **Deployments**.
    
3.  Click **Create From YAML** and set **Sample Template** to **Custom**. Then, enter the YAML content and click **Submit**.
    
    **View sample YAML**
    
    The following YAML code defines an ASP.NET web application. The application is scheduled to run on a Windows node and is exposed by a Service of the LoadBalancer type.
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: web-windows
      name: web-windows
    spec:
      type: LoadBalancer
      ports:
        - port: 80
          protocol: TCP
          targetPort: 8080
      selector:
        app: web-windows
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: web-windows
      name: web-windows
    spec:
      selector:
        matchLabels:
          app: web-windows
      template:
        metadata:
          labels:
            app: web-windows
        spec:
          restartPolicy: Always
          terminationGracePeriodSeconds: 30
          tolerations:
          - key: os
            value: windows
          affinity:
            nodeAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
                nodeSelectorTerms:
                - matchExpressions:
                  - key: kubernetes.io/os
                    operator: In
                    values:
                    - windows
          containers:
      # Replace <cn-hangzhou> in the image address with the actual region of your cluster.
            - image: registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/dotnet-samples:aspnetapp
              name: windows
              ports:
              - containerPort: 8080
                protocol: TCP
    ```
    
    After submission, you are returned to the **Deployments** page, where the new web application appears in the list.
    

## **Step 2: Access the application**

1.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Services**.
    
2.  Click the name of the target Service (web-windows). Then, in the **Basic Information** section, click **External IP** to access the web application.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8461654571/p995002.png)
