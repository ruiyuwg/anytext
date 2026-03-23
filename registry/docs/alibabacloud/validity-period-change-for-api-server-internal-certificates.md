The API server is the key control plane component of a Container Service for Kubernetes (ACK) cluster. The API server is installed with the internal [LoopbackClient](https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apiserver/pkg/server/options/serving_with_loopback.go#L52-L61) server certificate. The validity period of the certificate provided by the community is [one year](https://github.com/kubernetes/kubernetes/blob/69c3b23abdbda53d14e14afc2af2bdfef23ac7b0/staging/src/k8s.io/client-go/util/cert/cert.go#L40C7-L40C19). The certificate is automatically rotated only when the API server pod restarts. The community currently has no plan for increasing the validity period of the certificate. For more information, see [#86552](https://github.com/kubernetes/kubernetes/issues/86552#issuecomment-568492075).

To meet different O&M requirements, ACK has increased the validity period of the internal certificate to **10 years**.

## **Scope of impacts**

The validity period of the internal LoopbackClient certificate of the API server in an ACK managed cluster or ACK dedicated cluster is **one year**.

-   For ACK clusters that are created before March 15, 2023, the validity period of the internal LoopbackClient certificate of the API server is **one year**.
    
-   For ACK clusters that are created or update (to **Kubernetes 1.20.11 or later**) on March 15, 2023 or later, the validity period of the internal LoopbackClient certificate of the AP server is **10 years**. These clusters are not affected.
    

## **Solution**

### ACK managed clusters

Check whether your ACK managed clusters are affected based on their creation time. For ACK managed clusters whose LoopbackClient certificates are valid for one year, ACK will complete checking and restarting the API server before November 1, 2023. If you do not want Alibaba Cloud to restart the API server for you, update your ACK cluster to Kubernetes 1.24 or a later [major version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#492376712bpmv). For more information, see [Update an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

### ACK dedicated clusters

Log on to a master node and run the following command to query the expiration date of the LoopbackClient certificate.

Replace `XX.XX.XX.XX` with the local IP address of the master node.

```
curl --resolve apiserver-loopback-client:6443:xx.xx.xx.xx -k -v https://apiserver-loopback-client:6443/healthz 2>&1 |grep expire
```

For ACK clusters whose LoopbackClient certificates are about to expire or expired (one-year validity period), pay attention to the [release notes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#492376712bpmv) and update the clusters to Kubernetes 1.24 or a later major version. We recommend that you upgrade the clusters to ACK Pro. For more information, see [Update an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster) and [Hot migration from ACK dedicated clusters to ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters).

**Important**

For ACK dedicated clusters that cannot be upgraded, log on to all master nodes and manually restart the API server.
