CoreDNS is the default Domain Name System (DNS) server of Container Service for Kubernetes (ACK) clusters. This topic introduces the plug-ins provided by CoreDNS and how to configure the plug-ins in various scenarios.

## Prerequisites

-   An ACK managed cluster or ACK Serverless cluster is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) and [ACK Serverless quick start](/help/en/ack/serverless-kubernetes/getting-started/ask-quick-start#task-e3c-311-ydb).
    
-   [The kubeconfig file of your cluster is obtained and a kubectl client is connected to your cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    

## Use scenarios

In this topic, a pod that uses CoreDNS for DNS resolution is used as an example. `dnsPolicy: ClusterFirst` is specified in the DNS policy configuration of the pod. Example:

```
apiVersion: v1
kind: Pod
metadata:
  name: alpine
  namespace: default
spec:
  containers:
  - image: alpine
    command:
      - sleep
      - "10000"
    imagePullPolicy: Always
    name: alpine
  dnsPolicy: ClusterFirst
```

For more information about how to set the dnsPolicy parameter in various scenarios, see [Configure DNS resolution](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778).

## Default configurations of CoreDNS

In the kube-system namespace, you can find a CoreDNS [ConfigMap](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-configmaps). CoreDNS configures and enables plug-ins that are specified in the ConfigMap. The ConfigMaps of different CoreDNS versions are slightly different. Read the [CoreDNS official documentation](https://coredns.io/plugins/) before you modify the configurations. The following code block shows the content of the default configuration file used by CoreDNS 1.6.2:

```
  Corefile: |
    .:53 {
        errors
        log
        health {
           lameduck 15s
        }
        ready
        kubernetes {{.ClusterDomain}} in-addr.arpa ip6.arpa {
          pods verified
          fallthrough in-addr.arpa ip6.arpa
        }
        prometheus :9153
        forward . /etc/resolv.conf {
              prefer_udp
        }
        cache 30
        loop
        reload
        loadbalance
    }
```

**Note**

Replace `ClusterDomain` with the cluster domain name that you specify when you create the cluster. The default cluster domain name is `cluster.local`.

**Parameter**

**Description**

errors

Prints errors to standard output (stdout).

health

Generates health check reports for CoreDNS. The default listening port is 8080. This plug-in is used to evaluate the health status of CoreDNS. You can visit `http://localhost:8080/health` to view the health check report of CoreDNS.

ready

Reports the status of CoreDNS plug-ins. The default listening port is 8181. This plug-in is used to evaluate the readiness of CoreDNS plug-ins. You can visit `http://localhost:8181/ready` to view the readiness of the CoreDNS plug-ins. After all plug-ins are in the running state, a 200 response code is returned for the readiness of CoreDNS plug-ins.

kubernetes

The kubernetes plug-in of CoreDNS is used to provide DNS resolution for services in an ACK cluster.

prometheus

Exports CoreDNS metrics. You can visit `http://localhost:9153/metrics` to view CoreDNS metrics in Prometheus format.

forward or proxy

Forwards DNS queries to the predefined DNS server. By default, DNS queries of domain names beyond the cluster domain of Kubernetes are forwarded to the predefined DNS resolver (/etc/resolv.conf). The default configurations are based on the /etc/resolv.conf file on the host.

cache

Enables DNS caching.

loop

Performs loop detection. If a loop is detected, CoreDNS is suspended.

reload

Allows automatic reload of a changed Corefile. After you edit the ConfigMap, wait 2 minutes for the changes to take effect.

loadbalance

Works as a round-robin DNS load balancer to randomize the order of A, AAAA, and MX records in the answer.

`multisocket`

CoreDNS v1.12.1 introduces the multisocket plugin to enhance performance in high-CPU environments. When enabled, this plugin allows CoreDNS to listen on the same port using multiple sockets simultaneously. For detailed instructions, see [Best practices for DNS services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice).

## Configure extended features based on CoreDNS

You can configure extended features based on CoreDNS in the following scenarios:

-   ### **Scenario 1: Enable log collection**
    
    To collect the log of all DNS resolution records performed by CoreDNS, you can enable the log plug-in by adding the log parameter to Corefile. Example:
    
    ```
      Corefile: |
        .:53 {
            errors
            log
            health {
               lameduck 15s
            }
            ready
            kubernetes cluster.local in-addr.arpa ip6.arpa {
              pods insecure
              fallthrough in-addr.arpa ip6.arpa
              ttl 30
            }
            prometheus :9153
            forward . /etc/resolv.conf {
                  prefer_udp
            }
            cache 30
            loop
            reload
            loadbalance
        }
    ```
    
-   ### **Scenario 2: Customize DNS servers for specified domain names**
    
    If domain names with a suffix of example.com need to be resolved by a user-defined DNS server (for example, DNS server 10.10.0.10), you must add a custom resolution setting for the domain names. Example:
    
    ```
    example.com:53 {
      errors
      cache 30
      forward . 10.10.0.10 {
      prefer_udp
      }
    }
    ```
    
    The following code block shows the complete Corefile configuration:
    
    ```
      Corefile: |
        .:53 {
            errors
            health {
               lameduck 15s
            }
            ready
            kubernetes cluster.local in-addr.arpa ip6.arpa {
              pods insecure
              fallthrough in-addr.arpa ip6.arpa
              ttl 30
            }
            prometheus :9153
            forward . /etc/resolv.conf {
              prefer_udp
            }
            cache 30
            loop
            reload
            loadbalance
        }
        example.com:53 {
            errors
            cache 30
            forward . 10.10.0.10 {
            prefer_udp
            }
        }
    ```
    
-   ### **Scenario 3: Customize DNS servers for external domain names**
    
    If the domain names that need to be resolved by user-defined DNS servers do not contain the same suffix, you can use user-defined DNS servers to perform DNS resolution for all external domain names. In this scenario, you must forward the domain names that cannot be resolved by the user-defined DNS servers to Alibaba Cloud DNS. Do not modify the /etc/resolv.conf files on Elastic Compute Service (ECS) instances of the ACK cluster. For example, if the IP addresses of the user-defined DNS servers are 10.10.0.10 and 10.10.0.20, you can modify the forward parameter. Example:
    
    ```
      Corefile: |
        .:53 {
            errors
            health {
               lameduck 15s
            }
            ready
            kubernetes cluster.local in-addr.arpa ip6.arpa {
              pods insecure
              fallthrough in-addr.arpa ip6.arpa
              ttl 30
            }
            prometheus :9153
            forward . 10.10.0.10 10.10.0.20 {
              prefer_udp
            }
            cache 30
            loop
            reload
            loadbalance
        }
    ```
    
-   ### **Scenario 4: Customize hosts for specified domain names**
    
    You can configure the hosts plug-in if you want to customize hosts for specified domain names, for example, you may need to point www.example.com to 127.0.0.1. Example:
    
    ```
      Corefile: |
        .:53 {
            errors
            health {
               lameduck 15s
            }
            ready
            
            hosts {
              127.0.0.1 www.example.com
              fallthrough
            }
          
            kubernetes cluster.local in-addr.arpa ip6.arpa {
              pods insecure
              fallthrough in-addr.arpa ip6.arpa
              ttl 30
            }
            prometheus :9153
            forward . /etc/resolv.conf {
              prefer_udp
            }
            cache 30
            loop
            reload
            loadbalance
        }
    ```
    
    **Important**
    
    You must specify fallthrough. Otherwise, domain names other than the specified one may fail to be resolved.
    
-   ### **Scenario 5: Enable external access to services in an ACK cluster**
    
    If you want to enable a process on an ECS instance in an ACK cluster to access services in the cluster, you can specify the cluster IP address of kube-dns in the cluster as the value of the `nameserver` parameter in the /etc/resolv.conf file on the ECS instance. Do not modify other settings in the /etc/resolv.conf file.
    
    In an internal network, you can use an internal-facing Server Load Balancer (SLB) instance to allow internal access to services in the ACK cluster. Then, log on to the [Alibaba Cloud DNS PrivateZone console](https://dnsnext.console.alibabacloud.com/#/dns/domainList) and add an A record that points to the private IP address of the SLB instance.
    
-   ### **Scenario 6: Use a domain name to allow access to your service in an ACK cluster or enable CNAME resolution for an ACK cluster**
    
    You can use foo.example.com to allow all access to your service in an ACK cluster from the Internet, internal networks, and inside an ACK cluster. The following section describes how to enable this feature:
    
    -   Your service `foo.default.svc.cluster.local` is exposed to external access through an Internet-facing SLB instance. The domain name `foo.example.com` is resolved to the IP address of the Internet-facing SLB instance.
        
    -   Your service `foo.default.svc.cluster.local` is exposed to internal access through an internal-facing SLB instance. Log on to the [Alibaba Cloud DNS PrivateZone console](https://dnsnext.console.alibabacloud.com/#/dns/domainList) to point `foo.example.com` to the IP address of the internal-facing SLB instance in the virtual private cloud (VPC) where the ACK cluster is deployed. For more information about the procedure, see [Scenario 4: Customize hosts for specified domain names](#section-6jf-fgj-j2f).
        
    -   Inside the ACK cluster, you can use the rewrite plug-in to add a CNAME record to point `foo.example.com` to `foo.default.svc.cluster.local`. Example:
        
        ```
          Corefile: |
            .:53 {
                errors
                health {
                   lameduck 15s
                }
                ready
                
                rewrite stop {
                  name exact foo.example.com foo.default.svc.cluster.local
                  answer name foo.default.svc.cluster.local foo.example.com 
                }
        
                kubernetes cluster.local in-addr.arpa ip6.arpa {
                  pods insecure
                  fallthrough in-addr.arpa ip6.arpa
                  ttl 30
                }
                prometheus :9153
                forward . /etc/resolv.conf {
                  prefer_udp
                }
                cache 30
                loop
                reload
                loadbalance
            }
        ```
        
    
-   ### **Scenario 7: Configure CoreDNS not to return IPv6 addresses that are resolved based on AAAA records**
    
    If your application pods do not need resolution results that are based on AAAA records, you can configure CoreDNS to intercept resolution results that are based on AAAA records and return a NODATA code. This minimizes data transfer. Example:
    
    ```
      Corefile: |
        .:53 {
            errors
            health {
               lameduck 15s
            }
            # Add the following line to enable the template plug-in. Do not modify other settings. 
            template IN AAAA .
        
        }
    ```
    
-   ### **Scenario 8: Enable the MCS feature of ACK One**
    
    **Note**
    
    CoreDNS 1.9.3 or later supports the multi-cluster Services (MCS) feature of Distributed Cloud Container Platform for Kubernetes (ACK One). To enable this feature, make sure that you have updated CoreDNS to 1.9.3 or later. For more information, see [Configure ACK to automatically update CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#task-2093043) and [Manually update CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-update-coredns#task-2166246).
    
    1.  Run the following command to update the ConfigMap of CoreDNS:
        
        ```
        kubectl edit configmap/coredns -n kube-system
        ```
        
    2.  Add a line above the line that starts with `kubernetes` and specify `multicluster clusterset.local` in the new line to enable the multicluster plug-in, which is used to enable the MCS feature of ACK One. This configuration sets the suffixes of the domain names of multi-cluster Services to `clusterset.local`.
        
        ```
        Corefile: |
            .:53 {
                # Irrelevant lines are not shown. 
                # Add the following line. 
                multicluster clusterset.local
                kubernetes cluster.local in-addr.arpa ip6.arpa {
                  pods insecure
                  fallthrough in-addr.arpa ip6.arpa
                  ttl 30
                }
                # Irrelevant lines are not shown. 
            }
        ```
        
    3.  Press **Esc**, enter :wq!, and then press **Enter** to save the file and exit the edit mode.
        
-   ### **Scenario 9: Specify different upstream DNS servers for external domains**
    
    **Prerequisites**
    
    CoreDNS version 1.11.3 or later.
    
    **Configuration**
    
    Define multiple `forward` directives within a single server block. Each directive can specify a different upstream DNS server for a specific domain. For a complete list of parameters, see the official [forward plugin documentation](https://coredns.io/plugins/forward/).
    
    **Example**
    
    ```
    Corefile: |
        .:53 {
            # ... other configurations ...
            kubernetes cluster.local in-addr.arpa ip6.arpa {
              pods insecure
              fallthrough in-addr.arpa ip6.arpa
              ttl 30
            }
            # Forward queries for foo.com to DNS server 10.20.0.1
            forward foo.com 10.20.0.1
            # Forward queries for bar.com to DNS server 10.30.0.1
            forward bar.com 10.30.0.1
            # Forward all other queries to the DNS servers specified in the node's /etc/resolv.conf
            forward . /etc/resolv.conf
            # ... other configurations ...
        }
    ```
    

## References

[Configure DNS resolution](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778)
