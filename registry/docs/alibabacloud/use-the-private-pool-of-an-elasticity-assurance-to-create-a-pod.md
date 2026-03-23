Elasticity assurances provide guaranteed access to resources that you can use to create pay-as-you-go instances. For example, you want to use a specific number of Elastic Container Instance pods of a specific Elastic Compute Service (ECS) instance type during a period of time. In this case, we recommend that you purchase an elasticity assurance to obtain reserved resources. This prevents instance creation failures due to insufficient resources and negative impacts on your business.

## **Introduction to elasticity assurances**

### **Feature description**

Elasticity assurances allow you to obtain guaranteed access to resources for a period of one month to five years by paying only a small assurance fee. When you purchase an elasticity assurance, you must specify attributes, such as the region, the zone, and the ECS instance type. The system generates a private pool for the created elasticity assurance to reserve resources that match the attributes. For example, you can purchase an elasticity assurance to reserve resources of the ecs.c6.large instance type in Hangzhou Zone I. This way, you can access the reserved resources in the private pool during the guarantee period to create a pod of the ecs.c6.large instance type in Hangzhou Zone I. For more information, see [Overview of Elasticity Assurance](/help/en/ecs/user-guide/overview-of-elasticity-assurance).

**Note**

Elasticity assurances do not provide guaranteed access to resources for creating preemptible instances.

### **Billing rules**

Elasticity assurances cannot be manually released. If you use an elasticity assurance, you are charged the following fees:

-   A one-time assurance fee that is generated when you purchase the elasticity assurance.
    
-   Hourly fees of the pods that are created by using the elasticity assurance.
    
    **Important**
    
    If you purchased applicable savings plans or regional reserved instances, you can apply them to the pods that are created by using the elasticity assurance. You cannot use zonal reserved instances to offset the bills of the pods.
    

## **Purchase of an elasticity assurance**

-   #### **Before purchase**
    
    You can use the reserved resources in the private pool of an elasticity assurance to create pods of only a specific ECS instance type. Before you purchase an elasticity assurance, make sure that the region, zone, and ECS instance type that you want to use support elasticity assurances.
    
    -   You can use only specific ECS instance types to create pods. Make sure that the ECS instance types that you select are supported by Elastic Container Instance. For more information, see [Specify ECS instance types to create a pod](/help/en/eci/user-guide/specify-ecs-instance-types-to-create-a-pod-1/#011fa1e121058).
        
    -   Only specific regions, zones, and ECS instance types support elasticity assurances. For more information, visit the [Buy page of elasticity assurances](https://ecs.console.alibabacloud.com/#/resourceAssuranceV2/createResourceReserve/cn-beijing).
        
-   #### **During purchase**
    
    On the [Resource Reservations](https://ecs.console.alibabacloud.com/#/resourceAssuranceV2/region/cn-beijing?tabKey=RESOURCE_RESERVATION) page in the ECS console, create a resource reservation. Set the Reservation Type parameter to Immediate or Scheduled Elasticity Assurance. For more information, see [Purchase a resource reservation](/help/en/ecs/user-guide/purchase-a-resource-reservation).
    
-   #### **After purchase**
    
    After you purchase an elasticity assurance, you can view information about the elasticity assurance and the associated private pool on the **Resource Reservations** or **Private Pools** tab of the Resource Reservations page.
    

## **Use of elasticity assurances**

### **Configuration description**

During the guarantee period, you can use the reserved resources in the private pool of the elasticity assurance to create pods.

-   Before you create a pod, make sure that the zones that are provided by the cluster vSwitch include the zone of the elasticity assurance. For information about how to specify zones, see [Configure multiple zones to create a pod](/help/en/eci/user-guide/create-pods-in-multiple-zones).
    
-   The private pool and ECS instance type that you specify when you create a pod must be the same as the private pool and ECS instance type that correspond to the purchased elasticity assurance. The following table describes the annotations that you can add when you use the private pool of an elasticity assurance to create a pod.
    
    **Annotation**
    
    **Example**
    
    **Required**
    
    **Description**
    
    k8s.aliyun.com/eci-use-specs
    
    ecs.c6.large
    
    Yes
    
    Specifies an ECS instance type. The ECS instance type must be the same as the ECS instance type that corresponds to the elasticity assurance.
    
    **Note**
    
    If you want to create pods based on special ECS instance types, such as GPU-accelerated ECS instance types or ECS instance types that use local disks, you must configure other relevant parameters. For more information, see [Specify ECS instance types to create a pod](/help/en/eci/user-guide/specify-ecs-instance-types-to-create-a-pod-1/).
    
    k8s.aliyun.com/eci-privatepool-matchcriteria
    
    "Open"
    
    Yes
    
    Specifies the matching mode in which the system matches private pools. Valid values:
    
    -   Open: The system matches the instance with open private pools.
        
    -   Target: If you use this matching mode, you must specify a private pool ID. If you use targeted private pools to create pods, you must use this matching mode.
        
    
    **Important**
    
    -   If an open private pool is used and has insufficient resources, resources in the public pool are automatically used to supplement the resources in the private pool. If a targeted private pool is used and has insufficient resources, pod creation fails.
        
    -   In Open matching mode, Elastic Container Instance does not support matching private pools with tags. When creating pods using Open pattern private pools, you can remove the tags from the private pool to prevent matching failures.
        
    
    k8s.aliyun.com/eci-privatepool-id
    
    eap-2ze1g68k2melxkkl\*\*\*\*
    
    No
    
    Specifies a private pool ID (the elasticity assurance ID). You can obtain the private pool ID on the **Resource Reservations** or **Private Pools** tab of the [Resource Reservations](https://ecs.console.alibabacloud.com/#/resourceAssuranceV2/region/cn-beijing?tabKey=RESOURCE_RESERVATION) page in the ECS console.
    
    -   If you set k8s.aliyun.com/eci-privatepool-matchcriteria to Target, you must configure this annotation.
        
    -   If you set k8s.aliyun.com/eci-privatepool-matchcriteria to Open, this annotation is invalid.
        
    
    **Important**
    
    -   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
        
    -   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
        
    
-   After you create the pod, you can view the usage of the private pool of the elasticity assurance on the **Resource Reservations** or **Private Pools** tab of the [Resource Reservations](https://ecs.console.alibabacloud.com/#/resourceAssuranceV2/region/cn-beijing?tabKey=RESOURCE_RESERVATION) page in the ECS console.
    
    ![资源预订..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5001573171/p671704.png)
    
    **Note**
    
    After a pod that is created by using an elasticity assurance is released, the capacity of the corresponding private pool is also released.
    

### **Configuration examples**

-   **Example 1: If you do not specify an elasticity assurance ID, the system automatically matches open private pools.**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx-test
          labels:
            app: nginx
            alibabacloud.com/eci: "true" 
          annotations:
            k8s.aliyun.com/eci-use-specs: ecs.c6.large  # Specifies the ECS instance type that corresponds to the elasticity assurance.
            k8s.aliyun.com/eci-privatepool-matchcriteria: open  # Sets the matching mode in which the system matches private pools to open. The system automatically matches open private pools.
        spec:
          containers:
          - name: nginx
            image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
    ```
    
-   **Example 2: If you use a targeted private pool to create a pod, you must specify an elasticity assurance ID.**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx-test
          labels:
            app: nginx
            alibabacloud.com/eci: "true" 
          annotations:
            k8s.aliyun.com/eci-use-specs: ecs.c6.large  # Specifies the ECS instance type that corresponds to the elasticity assurance.
            k8s.aliyun.com/eci-privatepool-matchcriteria: target  # Sets the matching mode in which the system matches private pools to target.
            k8s.aliyun.com/eci-privatepool-id: eap-2ze1g68k2melxkkl**** # Specifies a private pool ID (elasticity assurance ID).
        spec:
          containers:
          - name: nginx
            image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
    ```
