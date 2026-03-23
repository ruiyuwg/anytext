This topic provides answers to some frequently asked questions about NGINX Ingresses, Application Load Balancer (ALB) Ingresses, and Microservices Engine (MSE) Ingresses.

## Nginx Ingress

-   [Which SSL or TLS protocol versions are supported by Ingresses?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-gsi-4n0-lsd)
    
-   [Do Ingresses pass Layer 7 request headers to backend servers by default?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-i3e-5lj-47y)
    
-   [Can ingress-nginx forward requests to backend HTTPS servers?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-ghy-7bv-ute)
    
-   [Do Ingresses pass client IP addresses at Layer 7?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-ril-3ys-j8u)
    
-   [Does the NGINX Ingress controller support HSTS?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-ycn-qs2-rb2)
    
-   [Which rewrite rules are supported by ingress-nginx?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-l15-amm-2ht)
    
-   [Configure an Ingress controller to use an internal-facing SLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-ingress-controller-to-use-an-internal-facing-slb-instance#task-2401024)
    
-   [What gets updated in the system after I update the NGINX Ingress controller on the Add-ons page of the ACK console?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-99r-gia-5ax)
    
-   [How do I change Layer 4 listeners to Layer 7 HTTP or HTTPS listeners for ingress-nginx?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-ian-qic-135)
    
-   [How do I specify an existing SLB instance for ack-ingress-nginx deployed from the Marketplace page of the ACK console?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-pat-gf4-ozj)
    
-   [How do I collect access logs from multiple Ingress controllers?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#a0f0865a64j1c)
    
-   [How do I enable TCP listeners for nginx-ingress-controller?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#4c88ed69fb7g7)
    
-   [What is the match logic of certificates configured for NGINX Ingresses?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#a58cae6384zzo)
    
-   [What do I do if no certificate matches an NGINX Ingress?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#10d56194817s3)
    
-   [What do I do if NGINX pods fail health checks in heavy load scenarios?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#655d5bb0f6ilu)
    
-   [What do I do if certificates fail to be issued due to cert-manager errors?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#f96dad39f3jxl)
    
-   [How do I handle NGINX memory usage spikes during peak hours?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#527018cb396zo)
    
-   [Fix the NGINX Ingress controller upgrade issue](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#e1689c64a0fci)
    
-   [Why does chunked transfer encoding stop working since controller v1.10?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#73342e56ac8ks)
    
-   [How do I configure access control based on IP address whitelists and blacklists in NGINX Ingress?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#74a2b546e5c49)
    

## **ALB Ingress**

-   [Why do ALB Ingress rules fail to take effect?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#section-1x1-aog-uv7)
    
-   [What is the difference between ALB Ingresses and NGINX Ingresses?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#section-t85-jxr-dzk)
    
-   [ALB Ingresses listen to requests sent to the kube-system-fake-svc-80 server group by default. What is the purpose of the server group?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#section-o7h-8u2-grd)
    
-   [Can I enable internal access and external access for ALB Ingresses at the same time?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#section-odn-bm3-o95)
    
-   [Why am I unable to view the ALB Ingress controller pod in the cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#section-aum-xof-qyl)
    
-   [How do I ensure that the ALB domain name used by an ALB Ingress remains unchanged?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#section-8p0-613-hy2)
    
-   [Is an ALB instance automatically created if I use an ALB Ingress when I create an ACK managed cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#section-y7q-ks0-679)
    
-   [Why are the ALB configuration changes that I made in the ALB console lost, the rules that I added deleted, and access logs disabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#section-65f-oxr-qgf)
    
-   [What do I do if the HTTP status code 503 is returned when I delete a forwarding rule of an ALB Ingress immediately after I create the forwarding rule?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#Jbspx)
    
-   [What do I do if no error occurs in an ALB Ingress but changes do not take effect?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#RsJLT)
    
-   [Why are some listeners deleted after I create an ALB instance in the console and run the kubectl apply command to update the network ACL configuration in the AlbConfig?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#F5VJQ)
    
-   [How do I accelerate server reconciliation when pods are scaled for one or more Services?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#48c86d1286g1c)
    
-   [How do I enable the system to automatically assign weights to nodes when a cluster uses the Flannel network plug-in and the Local mode is enabled for the Service?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-faq#4cba2b8203f99)
    

## MSE Ingress

-   [Which Ingress versions are supported by MSE cloud-native gateways?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mse-ingress-faq#d1aab590b8sgz)
    
-   [What is the order of Ingress classes parsed by cloud-native gateways?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mse-ingress-faq#eb90a730b84ke)
    
-   [Do cloud-native gateways support both manual and automatic management of Ingress traffic rules?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mse-ingress-faq#02b41d70b8sah)
    
-   [Why is the domain name or route of a cloud-native gateway unavailable in the console?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mse-ingress-faq#3b2545d0b8sig)
