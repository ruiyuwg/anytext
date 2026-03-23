## [](#问题描述)Problem description

The session persistence of a Kubernetes service is configured based on the client IP address at Layer 4. When a Server Load Balancer (SLB) listener is used at Layer 7, session persistence can be performed only between a client and the backend Elastic Compute Service (ECS) instance of the SLB instance. Session persistence cannot be performed between the ECS instance and a pod. This document describes how to perform session persistence between an ECS instance and a pod.

## [](#解决方案)Solution

In this example, session persistence is configured for a service where an SLB instance is deployed. The image address and IP address in this example are configured in the test environment. Configure the image address and IP address based on your actual environment.

### Test whether session persistence is normal

1.  Use two pods that return different results to clarify the results. In addition, add labels for two deployments so that one service can be associated with the two pods. The following sample code provides an example. To test session persistence, request a resource path. To this end, an NGINX application is deployed in one pod. This pod returns an NGINX page when a request is received. The other pod returns a 404 error message when a request is received.  
    
    apiVersion: apps/v1  
    kind: Deployment  
    metadata:  
      labels:  
        app: nginx  
      name: nginx  
    spec:  
      progressDeadlineSeconds: 600  
      replicas: 1  
      revisionHistoryLimit: 10  
      selector:  
        matchLabels:  
          app: nginx  
      strategy:  
        rollingUpdate:  
          maxSurge: 25%  
          maxUnavailable: 25%  
        type: RollingUpdate  
      template:  
        metadata:  
          labels:  
            app: nginx  
        spec:  
          affinity: {}  
          containers:  
            - env:  
                - name: aliyun\_logs\_catalina  
              image: 'nginx:latest'  
              imagePullPolicy: Always  
              name: nginx  
              resources:  
                requests:  
                  cpu: 250m  
                  memory: 512Mi  
              terminationMessagePath: /dev/termination-log  
              terminationMessagePolicy: File  
          dnsPolicy: ClusterFirst  
          restartPolicy: Always  
          schedulerName: default-scheduler  
          securityContext: {}  
    \---  
    apiVersion: apps/v1  
    kind: Deployment  
    metadata:  
      labels:  
        app: nginx  
      name: web  
    spec:  
      progressDeadlineSeconds: 600  
      replicas: 1  
      revisionHistoryLimit: 10  
      selector:  
        matchLabels:  
          app: nginx  
      strategy:  
        rollingUpdate:  
          maxSurge: 25%  
          maxUnavailable: 25%  
        type: RollingUpdate  
      template:  
        metadata:  
          labels:  
            app: nginx  
        spec:  
          containers:  
            - image: 'registry-XXX/go-web:latest'  
              imagePullPolicy: Always  
              name: web  
              resources:  
                requests:  
                  cpu: 250m  
                  memory: 512Mi  
              terminationMessagePath: /dev/termination-log  
              terminationMessagePolicy: File  
          dnsPolicy: ClusterFirst  
          restartPolicy: Always  
          schedulerName: default-scheduler  
          securityContext: {}
    
2.  Create a service based on the following configurations:
    
    apiVersion: v1  
    kind: Service  
    metadata:  
      name: session1  
      namespace: default  
    spec:  
      clusterIP: 10.XX.XX.217  
      ports:  
      - port: 80  
        protocol: TCP  
        targetPort: 80  
      selector:  
        app: nginx  
      type: ClusterIP
    
3.  [Connect to a Container Service for Kubernetes (ACK) cluster](/help/en/ack/serverless-kubernetes/user-guide/connect-to-an-ack-cluster-by-using-kubectl). Run the following command on the same client multiple times to confirm that different results are returned. Different results indicate that no session persistence is performed.
    
    curl http://\[$Cluster\_IP\]
    
    > Note: \[$Cluster\_IP\] is the value of the clusterIP parameter in Step 2.
    
    The following figure shows the returned results.  
    ![](https://onekb.oss-cn-zhangjiakou.aliyuncs.com/51548568/639cde84-bdb9-46de-9338-592bec2ceb3c.png)

### Configure session persistence

1.  To perform session persistence for a service where an SLB instance is deployed, you must add the following configurations:
    
    apiVersion: v1  
    kind: Service  
    metadata:  
      annotations:  
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: slb.s1.small # allow SLB to listen for http or https. It must be TCP. By default, it is TCP.  
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-persistence-timeout: '1800' # TCP session persistence must be enabled for the SLB instance.  
      name: session1  
      namespace: default  
    spec:  
      clusterIP: 10.68.121.217  
      externalTrafficPolicy: Local  # Local.  
      healthCheckNodePort: 30595  
      ports:  
      - nodePort: 30389  
        port: 80  
        protocol: TCP  
        targetPort: 80  
      selector:  
        app: nginx  
        sessionAffinity: ClientIP   # this field must be set to ClientIP.  
        sessionAffinityConfig:  
        clientIP:  
        timeoutSeconds: 10800  
      type: ClusterIP
    
2.  Check whether the same results are returned by performing Step 3 in the [Test whether session persistence is normal](#HJfbs) section. The following figure shows the returned results.  
    ![](https://onekb.oss-cn-zhangjiakou.aliyuncs.com/51548568/4d676e14-08d7-4342-b2ce-9897b620b5af.png)

## [](#适用于)Application scope

-   Clusters of ACK Proprietary Edition
-   Clusters of ACK Managed Edition
