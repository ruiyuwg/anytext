Version 2.3

Available versions

[2.11 - Latest version](/migrate/kf/docs/2.11)  
[2.10](/migrate/kf/docs/2.10)  
[2.9](/migrate/kf/docs/2.9)  
[2.8 - EOL/Unsupported](/migrate/kf/docs/2.8)  
[2.7 - EOL/Unsupported](/migrate/kf/docs/2.7)  
[2.6 - EOL/Unsupported](/migrate/kf/docs/2.6)  
[2.5 - EOL/Unsupported](/migrate/kf/docs/2.5)  
[2.4 - EOL/Unsupported](/migrate/kf/docs/2.4)  
[2.3 - EOL/Unsupported](/migrate/kf/docs/2.3)  
[2.2 - EOL/Unsupported](/migrate/kf/docs/2.2)  
[2.1 - EOL/Unsupported](/migrate/kf/docs/2.1)  

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Migration](https://docs.cloud.google.com/docs/migration)
-   [Kf](https://docs.cloud.google.com/migrate/kf/docs)
-   [2.3](https://docs.cloud.google.com/migrate/kf/docs/2.3)
-   [Reference](https://docs.cloud.google.com/migrate/kf/docs/2.3/reference)

Send feedback

# Troubleshoot Kf Stay organized with collections Save and categorize content based on your preferences.

Use these steps to troubleshoot various issues that can occur when running Kf.

## Failures when installing Kf

### Istio's IP is not ready

This can happen if Istio is taking too long to get an external IP. Wait a few minutes, and re-run the Cloud Build submit step. However, it's possible that there is something else going on.

### Error from server (Bad Request): Invalid character

If you see this error when setting config defaults, it is likely the value of the `${DOMAIN}` env var used in the command includes an escaped '$'. Use single quotes to define a domain with a space name or other substitution:

```
Error from server (BadRequest): invalid character '$' in string escape code
```

## Errors with Kf Kubernetes objects

Follow these instructions to troubleshoot Kf Kubernetes objects.

1.  Find the name of the Kubernetes resource type you want to troubleshoot by listing all Kf resources:
    
    ```
    kubectl api-resources --api-group=kf.dev
    ```
    
    Example output:
    
    ```
    NAME                      SHORTNAMES   APIGROUP   NAMESPACED   KIND
    apps                                   kf.dev     true         App
    builds                                 kf.dev     true         Build
    clusterservicebrokers                  kf.dev     false        ClusterServiceBroker
    routes                                 kf.dev     true         Route
    servicebrokers                         kf.dev     true         ServiceBroker
    serviceinstancebindings                kf.dev     true         ServiceInstanceBinding
    serviceinstances                       kf.dev     true         ServiceInstance
    spaces                                 kf.dev     false        Space
    ```
    
2.  Get the instance of the resource you want to troubleshoot using `kubectl`. If the object isn't in a namespace, omit the `-n` flag:
    
    ```
    kubectl get api-resource-name.kf.dev object-name -n space-name -o yaml
    ```
    
    For example:
    
    ```
    kubectl get apps.kf.dev my-app -n my-space -o yaml
    ```
    
3.  Select your problem from the tabs below:
    
    ### Object isn't reconciling
    
    1.  Check the value of `metadata.generation`. This number is incremented each time the object is updated. If the number is extremely high it's likely two Kubernetes controllers are fighting over the object. Check your cluster to see if any policies are being applied to the object which might be changing it from the desired state.
    2.  Check to see if the namespace the object belongs to is deleting. If it is, the object may not be reconciled.
    3.  Check that the `status.observedGeneration` field exists. If it doesn't, the controller might not have executed against the object yet. Validate that the cluster and controllers are healthy using `kf doctor`.
    4.  Check that the `metadata.generation` field matches the `status.observedGeneration` field. If it doesn't, validate that the cluster and controllers are healthy using `kf doctor`.
    5.  Check for failures in the `status.conditions` list against this list of common error reasons:
    
    -   `NotOwned`: There is another resource that exists in the cluster or namespace as the one this object is trying to create. Read the message to find the duplicate name and either rename the conflicting resource or the Kf object.
    -   `TemplateError`: There is a misconfiguration in the Kf resource spec or Kf configuration causing the child resource to be incorrectly reconciled. Validate the settings of the Kf object and the Kf space.
    -   `CacheOutdated`: The Kf controller isn't receiving updates from Kubernetes fast enough. Check the health of the Kubernetes cluster.
    -   `ReconciliationError`: The Kf controller can't create the necessary child resource. Check to make sure your cluster is healthy, Kf is running, and that there are no policies being enforced that are preventing Kf from creating the object referenced in the message.
    
    ### Object isn't deleting
    
    1.  Check that the `metadata.deletionTimestamp` of the object was set. If it wasn't set, then the requested deletion didn't work.
    2.  Check that the `metadata.deletionTimestamp` of the object is in the past. If it's in the future, the object may not delete.
    3.  Check if a `metadata.finalizers` list exists on the object. If finalizers are present, the object must wait for them to be removed before it is deleted. If you want to force a deletion without waiting for the finalizers, edit the object to remove them.
    4.  Child objects may exist that are preventing the object from being deleted. Have an administrator check all objects in the namespace and cluster to see if one of them needs to be manually deleted first.
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
