A Server Load Balancer (SLB) topology displays the connections between listeners and backend server groups of an SLB instance. You can view the basic information about the network instances in an SLB topology and analyze these instances to check whether traffic is routed as expected.

## **Limits**

-   Backend server groups must be bound to listeners. If a backend server group is not bound to a listener, the backend server group is not displayed in an SLB topology.
    
-   Only the resource topologies of Classic Load Balancer (CLB) instances are displayed on the SLB Topology page.
    

## **Resource topology**

1.  Log on to the [Network Intelligence Service (NIS) console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Network Topology** > **SLB Topology**.
    
3.  On the **SLB Topology** page, select CLB from the **SLB Type** drop-down list, and select a region and an instance ID for which you want to view the SLB topology. Then, click **Generate Topology**.
    

### **Related operations**

**Operation**

**Description**

Specify the display format of an SLB topology

In the **Configure** section, perform the following operations:

-   Select **Color Inversion** to change the colors of the entity icons.
    
-   Select **Show Instance ID** to display the instance IDs below the entity icons.
    

Filter a listener

1.  In the **Filter** section, click **Edit**.
    
2.  In the dialog box that appears, set the **Filter Mode** parameter to **Listener**.
    
3.  Select a desired listener ID for the **Listener ID** parameter.
    

Filter a server group

1.  In the **Filter** section, click **Edit**.
    
2.  In the dialog box that appears, set the **Filter Mode** parameter to **Server Group**.
    
3.  Select **Default Server Group**, **Primary/Secondary Server Group**, or **Virtual Server Group** for the **Server Group Type** parameter.
    

## **Use the entity toolbar**

On the SLB Topology page, you can analyze or view the basic information about an entity by using the entity toolbar.

### **View the basic information about an entity**

On the **SLB Topology** page, click an entity for which you want to view the basic information and click **View Basic Information** in the entity toolbar. Then, view the **name**, **status**, **network type**, and **type** of the instance.

### **Analyze an entity**

On the **SLB Topology** page, click a CLB instance that you want to analyze and click **Instance Diagnostics** in the entity toolbar. You are automatically redirected to the **Diagnostic Details** panel of the CLB instance. You can view the diagnostic details of the CLB instance in the panel.

## **References**

-   [CLB listener overview](/help/en/slb/classic-load-balancer/user-guide/listener-overview/)
    
-   [Backend server overview](/help/en/slb/classic-load-balancer/user-guide/backend-server-overview)
