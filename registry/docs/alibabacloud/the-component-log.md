This topic outlines the impact, details, and solutions for ServiceAccount token expiration in Kubernetes 1.22+ clusters. In Kubernetes 1.22 and later, ServiceAccount tokens have a one-year validity period, and the kubelet component periodically refreshes them. However, if an application uses a `client-go` version earlier than v11.0.0 or v0.15.0, the client does not automatically reload the refreshed token. This can lead to authentication errors when the token expires.

To improve security, Kubernetes 1.21 enabled the [BoundServiceAccountTokenVolume](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.21.md#api-change-6) feature by default, which enforces a token expiration time, implements an automatic refresh mechanism, and invalidates tokens after the associated Pod is deleted. When an application uses `client-go` v11.0.0, v0.15.0, or later, the kubelet periodically refreshes the token, and the client reloads it from the mounted volume. For backward compatibility, Kubernetes provides a [one-year](https://github.com/kubernetes/kubernetes/blob/ea0764452222146c47ec826977f49d7001b0ea8c/pkg/serviceaccount/claims.go#L33-L38) grace period during which expired tokens can still be used. However, after this grace period, clients using a `client-go` version earlier than v11.0.0 or v0.15.0 will not automatically reload the token. When the token expires, it results in the following errors:

```
# The component log.
Error listing resources error=Unauthorized
# The access log of the Kubernetes API server of the cluster.
"Unable to authenticate the request" err="[invalid bearer token, Token has expired.]"
```

Restart the component's Pod to force `client-go` to read the new token.

## **Scope of impact**

This issue affects applications that use a `client-go` version earlier than v11.0.0 or v0.15.0 in Kubernetes 1.22+ clusters.

## **Impact of expiration**

-   In Kubernetes 1.22+ clusters, applications using a `client-go` version earlier than v11.0.0 or v0.15.0 will experience authentication failures after the one-year grace period expires because they cannot automatically reload the token.
    
-   When you upgrade a cluster to Kubernetes 1.22 or later, existing applications with `client-go` versions earlier than v11.0.0 or v0.15.0 fail to authenticate after one year without a restart.
    

## **Solutions**

### For applications using ACK add-ons

Container Service for Kubernetes (ACK) add-ons bundle newer versions of `client-go`. If your application uses an ACK add-on, you can upgrade the add-on to resolve this issue.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, find the component that you want to update and click **Upgrade**.
    

### For other applications

As a short-term solution, restart the application Pod to quickly restore service. For a long-term one, upgrade your application's `client-go` library to v11.0.0, v0.15.0, or later. This allows the application to automatically reload the ServiceAccount token.
