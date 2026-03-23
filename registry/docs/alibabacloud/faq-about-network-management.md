This topic provides answers to some frequently asked questions about container networks, Services, Ingresses, and DNS.

## **Table of contents**

-   [Container network FAQ](#title-b99-m4x-mhq)
    
-   [Service FAQ](#title-iqr-0j6-ld6)
    
-   [Ingress FAQ](#title-twh-g5a-uko)
    
-   [DNS FAQ](#title-dq4-ijy-d8m)
    
-   [FAQ about network configuration](#title-l6p-rp5-0pd)
    

## Container network FAQ

### Terway FAQ

-   [What's the difference between Terway's Shared ENI and Exclusive ENI network modes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#1202fa6b63n16)
    
-   [How can I tell if my ACK cluster is using Terway in Shared ENI or Exclusive ENI mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#e15ae47c6bmfs)
    
-   [How do I check if my Terway Shared ENI mode is using DataPathv2 or the legacy IPvlan+eBPF for network acceleration?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#dc0f9801bdkzy)
    
-   [Does traffic bypass IPVS when using Terway's network acceleration modes (DataPathv2 or IPvlan+eBPF)?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#3d34fd3434m4e)
    
-   [Is it possible to switch the CNI network plugin on an existing ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#1c068bd245jcx)
    
-   [Why can't my Pods access the Internet after adding a new vSwitch for Terway in my ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-7hi-dnx-552)
    
-   [My Pods are stuck in ContainerCreating with "InvalidVSwitchId.IpNotEnough" errors. How do I add more IP addresses?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#398bf3d07c8e2)
    
-   [Why are my Pods getting IPs from an old vSwitch CIDR block even after I updated the Terway configuration?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-t4a-ene-hcq)
    
-   [I added a new vSwitch to my Terway configuration, but my Pods are still failing to get an IP. Why is this happening?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-a8o-p0p-qod)
    
-   [What's the difference between the Terway and Flannel network plugins for an ACK Kubernetes cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-ylr-ln7-pfe)
    
-   [How do I enable in-cluster load balancing for ExternalIP and LoadBalancer Services in an existing Terway IPvlan cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-75m-g9d-3w4)
    
-   [How can I assign Pods to a specific vSwitch/CIDR block in a Terway cluster for IP-based allowlisting?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-4un-o1u-r7h)
    
-   [What determines the maximum number of Pods per node in a Terway cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#6c3a27adf9gwe)
    
-   [What do the different Pod statuses like Pending and ContainerCreating mean in a Terway network context?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#cc1c9a9b24jwi)
    
-   [What is Terway's DataPath V2 mode, and how is it different from the original IPvlan mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#8d795cd6096zy)
    
-   [Why did my Terway component upgrade fail with the error `eip pool is not supported`?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#929cd5d1bbkc1)
    
-   [Why do my Pods sometimes fail to create in a Terway cluster with the error `can't found dev by mac`?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#c7718eb235kej)
    

### Flannel FAQ

-   [My nodes are NotReady after upgrading my cluster to Kubernetes 1.16+. How do I fix a Flannel incompatibility?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-z0i-qcj-rz7)
    
-   [What's the difference between the Terway and Flannel network plugins for an ACK Kubernetes cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-ylr-ln7-pfe)
    
-   [In a Flannel cluster, why can my Pods ping some ECS instances but not others?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-b72-fy0-vvp)
    
-   [Why are newly added nodes in my Flannel cluster getting a NodeNetworkUnavailable taint?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-3zu-99s-d8q)
    
-   [When do I need to configure the cloud-controller-manager (CCM) for multiple route tables in a Flannel cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#30bda7d5fa0ob)
    
-   [Why are my Pods failing to start with the error failed to allocate for range 0: no IP addresses available in range set?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-iiz-3h3-xyl)
    
-   [How can I change the Pod CIDR, Service CIDR, or IPs per node for an existing ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-cg6-hkg-8w0)
    

### kube-proxy FAQ

-   [What is the correct way to modify the kube-proxy configuration in an ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-816-94g-skp)
    
-   [How do I change the IPVS load balancing algorithm in kube-proxy?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-elo-tp0-pay)
    
-   [How do I reduce the UDP session timeout in kube-proxy IPVS mode to fix DNS delays?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-vkv-808-6wc)
    

### IPv6 FAQ

[How do I troubleshoot common issues in an IPv6 dual-stack cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-bir-732-rem)

### Other issues

-   [How do I fix network latency issues immediately after a Pod starts?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-g60-wqh-qtq)
    
-   [Why do my Pods get connection errors when trying to access a Service they expose themselves (hairpinning)?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-w3o-3as-8lq)
    
-   [What is the correct way to plan the network for an ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-8td-x8b-qez)
    
-   [Does ACK support hostPort for Pods?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-hlo-gm1-u0l)
    
-   [How do I identify the network plugin and vSwitches used by my cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-bgi-kgm-etw)
    
-   [How do I view the cloud resources used by my ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-8b1-slo-xiu)
    
-   [How can I increase the Linux connection tracking (conntrack) limit on my nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-jbl-6zq-9b5)
    
-   [Is it possible to install a third-party CNI network plugin on an ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#0e27ee075atv6)
    
-   [Why do I get a no IP addresses available in range set error in my Flannel cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#6b08c3a77d87r)
    
-   [What should I consider when configuring a custom Cluster Domain for my ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#52430cbfb6ddj)
    

## Service FAQ

### Server Load Balancer (SLB) FAQ

-   [How can I use SLB instances in an ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#KWSsF)
    
-   [Which external traffic policy should I use when I create a Service, Local or Cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-yv3-jel-jtb)
    
-   [Why are no events collected during the synchronization between a Service and an SLB instance?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-690-vh0-1lt)
    
-   [How do I handle an SLB instance that remains in the Pending state?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-og0-e8q-4am)
    
-   [What do I do if the vServer groups of an SLB instance are not updated?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-nmr-gvy-po3)
    
-   [What do I do if the annotations of a Service do not take effect?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-slc-3sk-7vf)
    
-   [Why are the configurations of an SLB instance modified?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-g0s-3ac-8p8)
    
-   [Why does the cluster fail to access the IP address of an SLB instance?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-bp8-26q-o83)
    
-   [When is an SLB instance automatically deleted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-nff-cbv-3de)
    
-   [What do I do if I accidentally delete an SLB instance?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-s2u-6bx-q0b)
    
-   [If I delete a Service, is the SLB instance associated with the Service automatically deleted?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-apr-koj-k8v)
    
-   [How do I rename an SLB instance if the CCM version is V1.9.3.10 or earlier?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-61e-9ty-sgk)
    
-   [How does the CCM calculate node weights in Local mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-7xa-hpn-yfw)
    
-   [How do I query the IP addresses, names, and address types of all SLB instances in a cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#6076130989xqd)
    
-   [How do I ensure that the LoadBalancer gracefully disconnects existing connections when I change the backend of the LoadBalancer Service?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#16d5dcbb44sdi)
    

### CCM update FAQ

-   [How do I troubleshoot failures to update the CCM?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-xyq-0k8-8ea)
    

### Existing SLB instances FAQ

-   [Why does the system fail to use an existing SLB instance for more than one Service?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#title-cqd-n38-p1d)
    
-   [Why is no listener created when I reuse an existing SLB instance?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-a33-ozj-j1k)
    

### Other issues

-   [What do I do if errors occur in Services?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-kr4-89m-2dh)
    
-   [How do I troubleshoot CCM update failures?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-xyq-0k8-8ea)
    
-   [How is session persistence implemented in Kubernetes Services?](/help/en/kb-articles/latest/how-do-i-perform-session-persistence-for-a-kubernetes-service)
    
-   [How do I configure listeners for a NodePort Service?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-znw-fjm-zni)
    
-   [How do I access a NodePort Service?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-z2f-5gp-efu)
    
-   [How do I configure a proper node port range?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#023c3ce009sv0)
    
-   [How do I add required permissions for CCM updated in ACK dedicated clusters with Flannel?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#1e3cfec99d6iv)
    

## Ingress FAQ

### Ingress configurations FAQ

-   [Which SSL/TLS versions does Ingress support?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-gsi-4n0-lsd)
    
-   [Are Layer 7 request headers passed through by default in Ingress?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-i3e-5lj-47y)
    
-   [Can Ingress-Nginx forward traffic to HTTPS backend services?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-ghy-7bv-ute)
    
-   [Does Ingress L7 pass through the originating IP address?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-ril-3ys-j8u)
    
-   [Does the Nginx Ingress Controller component support HSTS?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-ycn-qs2-rb2)
    
-   [Which rewrite configurations does Ingress-Nginx support?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-l15-amm-2ht)
    
-   [Configure the network type of an NGINX Ingress Controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-ingress-controller-to-use-an-internal-facing-slb-instance#task-2401024)
    
-   [What resources change when upgrading the Nginx Ingress Controller component in ACK Component Management?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-99r-gia-5ax)
    
-   [How do I specify an existing SLB instance for ack-ingress-nginx deployed from the Marketplace page?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-pat-gf4-ozj)
    
-   [How do I change Ingress-nginx listeners from Layer 4 to Layer 7 (HTTPS/HTTP)?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-ian-qic-135)
    
-   [Nginx Ingress FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-yyh-hio-lot)
    

### Connectivity FAQ

-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-1c5-3w9-foo)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-cad-ev7-ytq)
    
-   [Why is the default TLS certificate or previous TLS certificate used after I add a TLS certificate to the cluster or change the TLS certificate?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-9uy-v20-1ww)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-2a8-2f0-40c)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-j0m-re0-40n)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-0mr-6wm-66q)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-11w-k21-9o1)
    

### Canary releases FAQ

-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-fpl-5t4-6io)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-2i3-awe-7xu)
    

### Errors FAQ

-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-vty-u0f-xho)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-0vr-51x-5f8)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-ga9-7ji-zfb)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-r3s-60w-bxj)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-ulm-om7-m6r)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-w23-c78-0pv)
    

### Other issues

-   [Why does the Ingress controller pod restart after it fails the health check?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-m7d-3no-npb)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-owf-2z6-mvs)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-qt9-1aw-seu)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-30z-u5s-8jd)
    
-   [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#section-own-8ah-7b9)
    

## DNS FAQ

[What do I do if I cannot access a CoreDNS pod by running the exec command?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-faq#section-ink-vkk-3xr)

[Why does CoreDNS use deprecated APIs?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-faq#9437d1601aytt)

[What do I do if the error message dns: buffer size too small appears in CoreDNS logs?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-faq#0faabefb008w2)

## Network configurations FAQ

### How do I access cluster workloads over the Internet?

ACK allows you to use the following methods to access workloads over the Internet:

-   [Use NodePort Services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#task-1779995)
    
-   [Use SLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-existing-slb-instance-to-expose-an-application#task-1942045)
    
-   [Nginx Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1#task-1796525)
    
-   [Use external-dns](https://developer.aliyun.com/article/633412).
    
-   [Use NAT gateways for which DNAT rules are configured](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#task-491095)
    

### How do I configure the pods to obtain the real IP addresses of clients?

-   If Web Application Firewall (WAF) is used and your cluster uses SLB instances to provide external services, set `externaltrafficpolicy` to `Local` for the Services that are used to expose the pods. This way, you can obtain the real IP addresses of clients. If your cluster uses Ingresses to provide external services, set `externaltrafficpolicy` to `Local` for the nginx-ingress-lb Service.
    
-   For more information about WAF, see [Use WAF](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-the-nginx-ingress-controller#9).
    

### **How do I throttle traffic for an ACK cluster?**

You can use Service Mesh (ASM) to throttle traffic for an ACK cluster. ASM helps you cope with issues such as traffic spikes, service overloading, resource exhaustion, and attacks. This ensures the stability of backend services, reduces costs, and improves user experience. For more information, see [Throttling](/help/en/asm/sidecar/current-limiting-protection/#9ef5c8a357p4g).
