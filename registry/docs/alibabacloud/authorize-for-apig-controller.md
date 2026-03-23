To use an APIG Ingress, you must grant the APIG Controller component the required access permissions to the cloud-native API Gateway service.

## **Grant permissions to the APIG Controller**

## **Grant permissions in an existing cluster**

Permission verification runs automatically when you install the APIG Controller component from the Add-ons page.

1.  If permissions are not granted, a dialog box appears. Click **Copy Authorization Link**.
    
2.  Open the authorization link in your browser. On the **Resource Access Management Quick Authorization** page, click **Confirm Authorization**.
    
3.  Continue to install the component in the console.
    

## **Grant permissions when you create a new cluster**

1.  When you install the APIG Controller during cluster creation, go to the **Confirm Configuration** step. In the **Dependency Check** section, check the **Status** of the **APIG Ingress Role Authorization Check**. If the **Status** is **Failed**, click **Authorize**.
    
2.  On the **Resource Access Management Quick Authorization** page, click **Confirm Authorization**.
    
3.  After granting the permissions, return to the **Confirm Configuration** page and click **Recheck**. After the check passes, click **Create Cluster**.
    

## What to do next

For more information about how to configure an APIG Ingress in a cluster, see [Create and use an APIG Ingress to expose services](/help/en/api-gateway/cloud-native-api-gateway/user-guide/access-container-service-and-container-computing-through-apig-ingress).
