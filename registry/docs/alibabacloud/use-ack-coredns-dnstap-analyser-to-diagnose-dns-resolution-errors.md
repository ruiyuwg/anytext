Container Service for Kubernetes (ACK) provides the ACK CoreDNS DNSTAP Analyser component that can be used to identify and classify DNS messages that are exchanged between a client and CoreDNS, or between CoreDNS and an upstream DNS server. You can use this component to identify the causes of DNS resolution errors in an efficient manner.

## Prerequisites

-   An ACK Pro cluster is created. For more information, see [Create an ACK Pro cluster](/help/en/doc-detail/176833.html#task-skz-qwk-qfb).
    
-   The kubeconfig file of the ACK Pro cluster is obtained and the cluster is connected by using kubectl. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    

## Background Information

dnstap is a log format for DNS messages. You can use dnstap to diagnose DNS resolution errors on DNS servers. For more information, see [dnstap](https://dnstap.info/).

## Step 1: Install ACK CoreDNS DNSTAP Analyser

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane of the cluster details page, choose **Applications** > **Helm**.
    
3.  On the **Helm** page, click **Deploy**. In the **Basic Information** step, configure the parameters based on the following table.
    
    **Parameter**
    
    **Example**
    
    **Application Name**
    
    ack-coredns-dnstap-analyser
    
    **Namespace**
    
    kube-system
    
    **Source**
    
    Default value: **Marketplace**.
    
    **Chart**
    
    -   Select **All** for the Use Scenarios parameter.
        
    -   Select **amd64** for the Supported Architecture parameter.
        
    -   Enter ack-coredns-dnstap-analyser in the search box.
        
    
    Select **ack-coredns-dnstap-analyser** and click **Next**.
    
4.  In the **Parameters** step, configure the **Chart Version** parameter and click **OK**.
    

## Step 2: Configure the DNSTAP plug-in in CoreDNS

CoreDNS is pre-installed with the DNSTAP plug-in to send DNSTAP messages. The DNS messages that are sent and received by the DNSTAP plug-in can be forwarded to ACK CoreDNS DNSTAP Analyser. Before you can use ACK CoreDNS DNSTAP Analyser to diagnose CoreDNS resolution errors, you must configure and enable the DNSTAP plug-in in CoreDNS. After the DNSTAP plug-in is configured, CoreDNS forwards the DNS messages that are sent and received by the DNSTAP plug-in to ACK CoreDNS DNSTAP Analyser for automated diagnostics.

1.  Run the following command to query and record the cluster IP address of ACK CoreDNS DNSTAP Analyser in the kube-system namespace. This IP address is used to configure the DNSTAP plug-in. In this example, the IP address is 172.21.0.10.
    
    ```
    kubectl -n kube-system get svc dnstap-analyser
    ```
    
2.  Run the following command to modify the ConfigMap of CoreDNS:
    
    ```
    kubectl -n kube-system edit cm coredns -o yaml
    ```
    
3.  Modify the default settings of CoreDNS based on the comments in the following snippet.
    
    In the ConfigMap, you must enable the DNSTAP plug-in and set its destination address to the cluster IP address of ACK CoreDNS DNSTAP Analyser. This way, the DNS messages that are sent and received by the DNSTAP plug-in can be forwarded to ACK CoreDNS DNSTAP Analyser.
    
    ```
    Corefile: |
            .:53 {
                #Details are omitted.
                ready
    
                # Add the code. Replace 172.21.0.10 with the actual cluster IP address of CoreDNS DNSTAP Analyser. 
                dnstap tcp://172.21.0.10:6000 full
    
                kubernetes cluster.local in-addr.arpa ip6.arpa {
                #Details are omitted.
                }
                #Details are omitted.
                reload
                loadbalance
            }
    ```
    
4.  Run the following command to query all pods that run CoreDNS:
    
    ```
    kubectl -n kube-system get pod | grep coredns
    ```
    
    Expected output:
    
    ```
    coredns-7d56l         1/1     Running   0          30m
    coredns-s7m2t         1/1     Running   0          30m
    ```
    
5.  Run the following command to query the CoreDNS log:
    
    ```
    kubectl -n kube-system logs -f --tail=500 coredns-7d56l
    ```
    
    **Note**
    
    Replace coredns-7d56l with the name of a pod that is returned in Substep 4 of this step.
    
    Wait for 1 minute. If the following output is returned and no exceptions occur, the configuration is modified.
    
    ```
    [INFO] Reloading complete
    ```
    

## Step 3: View the log of ACK CoreDNS DNSTAP Analyser

1.  Run the following command to query all pods that run ACK CoreDNS DNSTAP Analyser:
    
    ```
    kubectl -n kube-system get pod | grep dnstap-analyser
    ```
    
    Expected output:
    
    ```
    dnstap-analyser-bbdf879-g****         1/1     Running   0          30m
    ```
    
2.  Run the following command to show the log of ACK CoreDNS DNSTAP Analyser:
    
    ```
    kubectl -n kube-system logs -f dnstap-analyser-bbdf879-g****
    ```
    
    **Note**
    
    Replace dnstap-analyser-bbdf879-gpfkm with the name of a pod that is returned in Substep 1 of this step.
    

## Step 4: Analyze the log of ACK CoreDNS DNSTAP Analyser

In the log of ACK CoreDNS DNSTAP Analyser, each line includes the aggregated information about a DNS session. A DNS session contains all requests and responses that are exchanged among a client, CoreDNS, and an upstream DNS server. A DNS session includes the following fields:

-   Status: The value of the Status field varies based on the scenario.
    
    **Status**
    
    **Description**
    
    Succeeded
    
    The domain name was resolved. The response carries the NXDOMAIN or NOERROR status code.
    
    Failed
    
    The domain name failed to be resolved. The response carries an error status code, or the connection to the upstream DNS server timed out.
    
    SampleLoss
    
    CoreDNS or ACK CoreDNS DNSTAP Analyser is overloaded and drops DNSTAP messages. In this case, you must increase the number of pods that run CoreDNS or ACK CoreDNS DNSTAP Analyser to reduce the load on each pod. This improves the accuracy of diagnostic results.
    
-   BitMap: indicates the type of the DNSTAP message that is captured from the session. You can identify possible causes of DNS resolution errors based on message types.
    
    **BitMap**
    
    **Description**
    
    1
    
    CoreDNS received a DNS query from the client but did not return a response to the client.
    
    3
    
    The internal domain name was resolved. The DNS query sent from a client hit the local DNS cache of CoreDNS or a DNS record in the Kubernetes cluster. The result was returned to the client.
    
    5
    
    The upstream DNS server failed to be connected. CoreDNS forwarded the DNS query sent from a client to the upstream DNS server. The upstream DNS server did not return a result.
    
    15
    
    The external domain name was resolved. CoreDNS forwarded the DNS query sent from a client to the upstream DNS server. The upstream DNS server resolved the domain name and returned the result to CoreDNS. Then, CoreDNS returned the result to the client.
    
-   Messages: This field records the content of the original DNS query and response in JSON format. You can analyze the message content based on [dns-parameters-6](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6).
    

## (Optional) Step 5: Uninstall ACK CoreDNS DNSTAP Analyser

After you identify the cause, we recommend that you uninstall ACK CoreDNS DNSTAP Analyser to avoid unnecessary costs. To uninstall ACK CoreDNS DNSTAP Analyser, perform the following steps:

1.  Delete the line of code that contains `dnstap` from the ConfigMap of CoreDNS:
    
    1.  Run the following command to modify the ConfigMap of CoreDNS:
        
        ```
        kubectl -n kube-system edit cm coredns -o yaml
        ```
        
    2.  Delete the line of code that contains `dnstap` from the ConfigMap of CoreDNS based on the following content:
        
        ```
        Corefile: |
                .:53 {
                    #Details are omitted.
                    ready
        
                    # Delete the following line that you added.
                    dnstap tcp://10.10.10.10:6000 full
        
                    kubernetes cluster.local in-addr.arpa ip6.arpa {
                    #Details are omitted.
                    }
                    #Details are omitted.
                    reload
                    loadbalance
                }
        ```
        
    3.  Run the following command to query all pods that run CoreDNS:
        
        ```
        kubectl -n kube-system get pod | grep coredns
        ```
        
        Expected output:
        
        ```
        coredns-7d56l         1/1     Running   0          30m
        coredns-s7m2t         1/1     Running   0          30m
        ```
        
    4.  Run the following command to query the CoreDNS log:
        
        ```
        kubectl -n kube-system logs -f --tail=500 coredns-7d56l
        ```
        
        **Note**
        
        Replace coredns-7d56l with the name of a pod that is returned in preceding Substep c.
        
        Wait for 1 minute. If the following output is returned and no exceptions occur, the configuration is modified.
        
        ```
        [INFO] Reloading complete
        ```
        
2.  Uninstall ACK CoreDNS DNSTAP Analyser.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Applications** > **Helm**.
        
    3.  In the left-side pane of the cluster details page, choose **Applications** > **Helm**.
        
    4.  On the **Helm** page, find **ack-coredns-dnstap-analyser** and click **Delete** in the Actions column. Follow the on-screen instructions to delete ack-coredns-dnstap-analyser:
        

## References

-   [DNS overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/#task-2038513)
    
-   [DNS policies and domain name resolution](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778)
    
-   [DNS troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-troubleshooting-1)
