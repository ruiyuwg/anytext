This topic describes how to select a suitable certificate deployment plan based on your business needs to enable secure HTTPS access for your websites and applications.

-   [Deploy an SSL certificate on the server](#a547bd5d6fm25) (Required): To enable HTTPS for a website, API, or application, you must deploy an SSL certificate on the server.
    
-   [Install a root certificate on a client](#f7ded24c34vcp): A client requires a pre-installed root certificate to ensure secure communication and verify the server's identity. Most client operating systems and browsers have root certificates pre-installed. You need to install a root certificate on a client only if you access a system that uses a self-signed certificate, the client device cannot recognize the certification authority, or the root certificate is missing or has expired.
    

## **Deploy an SSL certificate on the server**

### **Scope**

Before you begin, make sure that the following conditions are met:

-   **Certificate status**: You have an SSL certificate that is issued by a trusted certification authority (CA). The **Certificate Status** is **Issued**. For more information about purchasing and requesting a certificate, see [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate) and [Submit a certificate request to a CA](/help/en/ssl-certificate/apply-for-a-certificate).
    
-   **Domain name matching**: Make sure that the certificate matches all domain names that you want to secure. To add or modify domain names, you can [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate) or [Append and replace domain names](/help/en/ssl-certificate/change-a-domain-name).
    
    -   Exact-match domain name: Applies only to the specified domain.
        
        -   `example.com` protects only `example.com`.
            
        -   `www.example.com` protects only `www.example.com`.
            
    -   Wildcard domain name: Applies only to its first-level subdomains.
        
        -   `*.example.com` applies to first-level subdomains such as `www.example.com` and `a.example.com`.
            
        -   `*.example.com` does not protect the root domain `example.com` or multi-level subdomains such as `a.b.example.com`.
            
    
    **Note**
    
    To match multi-level subdomains, the **Bound Domains** field must contain the exact domain, such as `a.b.example.com`, or a corresponding wildcard domain, such as `*.b.example.com`.
    
-   **Domain name resolution**: The domain's DNS record is configured and resolves to the server's public IP address.
    

### Determine the certificate deployment location

When processing HTTPS traffic, you must deploy SSL certificates on all relevant network nodes. These nodes include web servers such as Nginx, Apache, and IIS, Application Load Balancer (ALB), a content delivery network (CDN), Web Application Firewall (WAF), and API Gateway. Deploying SSL certificates on these nodes provides end-to-end encryption from the client to the server, which prevents plaintext transmission across intermediate links and ensures secure communication.

-   **Traffic directly reaches the server**: When a user accesses a website using the public IP address of a server, the traffic directly reaches the server without passing through other intermediate nodes.
    
-   **Traffic passes through multiple network nodes**: When a user accesses a website using a domain name, the traffic usually passes through multiple network nodes, such as a content delivery network (CDN) and an Application Load Balancer (ALB), before it is forwarded to the origin server for processing.
    

### **Traffic directly reaches the server**

When Internet traffic directly accesses the origin web server without any intermediate network proxies, you need to deploy the SSL certificate only on that web server.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0389793771/CAEQVBiBgMC0udCl6BkiIGIxODFkN2RkNTJjOTRiOTZhNWNkMjA5Y2U5ZDMzMmY55564435_20250827161904.631.svg)

### **Traffic passes through multiple network nodes**

If traffic passes through multiple intermediate nodes, such as CDN and WAF, before it reaches the origin server, you must deploy a certificate on each node that processes HTTPS traffic.

**Important**

This topic uses the complex architecture "**User → CDN → WAF → Application Load Balancer (ALB) → Origin server**" as an example. This architecture is used only to demonstrate the certificate deployment method in a multi-node scenario. You must deploy certificates on the appropriate nodes based on your actual network architecture.

The following table describes the certificate deployment nodes and the scope of transmission encryption in different scenarios.

**Scenario**

**Encrypted link (HTTPS)**

**Plaintext link (HTTP)**

**Nodes that require a certificate**

**Description**

Scenario 1

User ↔ CDN

CDN → WAF → ALB → Origin server

CDN

Encrypts only the traffic from the client to CDN. This is the most cost-effective option, but it poses a risk of plaintext transmission on the private network.

Scenario 2

User ↔ WAF

WAF → ALB → Origin server

CDN, WAF

The encryption scope now includes WAF for improved security.

Scenario 3

User ↔ ALB

ALB → Origin server

CDN, WAF, ALB

Only the hop before the origin server uses plaintext transmission. This provides high security.

Scenario 4

User ↔ Origin server

None

CDN, WAF, ALB, origin server

Implements end-to-end encryption to provide the highest level of security.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0389793771/CAEQThiBgMCMx.KX0RkiIGViN2U5NTA1NzA5ZjRhY2Q4NDM5MjQxMTNkYjExOGZh5564435_20250827165700.399.svg)

### **Select a certificate deployment plan**

**Note**

If you need assistance during the certificate deployment process, contact your account manager for assistance.

Before you select an SSL certificate deployment plan, you must identify the deployment target (a server or a cloud product) and select a plan based on the following rules:

-   **Deploy to a server**: This applies to Alibaba Cloud ECS instances, Simple Application Server instances, non-Alibaba Cloud servers, and self-managed servers.
    
-   **Deploy to a cloud product**: This applies to Alibaba Cloud products such as SLB, CDN, and WAF (excluding ECS and Simple Application Server), and to cloud products on third-party platforms such as Tencent Cloud, Huawei Cloud, and AWS, including CDN, WAF, and CLB.
    

#### **Deploy to a server**

Select a suitable plan to deploy the certificate to your server.

#### **Alibaba Cloud ECS and Simple Application Server**

Select a certificate deployment tutorial based on your web server and operating system. For information about how to determine your web server type, see [How do I find my web server type](#83118d769fw0w).

##### Deploy automatically from the console

You can deploy a certificate to a specified trusted ECS instance with one click, or automatically update the certificate on an ECS or Simple Application Server instance that already has a certificate configured. This method improves deployment efficiency and reduces configuration risks. For more information, see [Deploy an SSL certificate to an ECS or Simple Application Server instance](/help/en/ssl-certificate/manually-deploy-certificates-to-alibaba-cloud-lightweight-application-servers-or-ecs-instances).

##### Logon server deployment

**Server operating system**

**Deployment tutorials**

Linux

[Install an SSL certificate on an Nginx or Tengine server (Linux)](/help/en/ssl-certificate/install-ssl-certificates-on-nginx-servers-or-tengine-servers)

[Install an SSL certificate on a Tomcat server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-tomcat-server-that-runs-linux)

[Install an SSL certificate on an Apache server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-apache-server-that-runs-linux)

[Install an SSL certificate on a Jetty server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-jetty-server-that-runs-linux)

[Install an SSL certificate on a JBoss server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-jboss-server-that-runs-linux)

[Install an SSL certificate on a GlassFish server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-glassfish-server-that-runs-linux)

[Install an SSL certificate in a Spring Boot application (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-spring-boot-application-that-runs-linux)

[Install an SSL certificate in a Python Flask application (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-python-flask-application-that-runs-linux)

Windows

[在IIS服务器安装SSL证书（Windows）](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-iis-server-that-runs-windows)

[Deploy an SSL certificate on an Nginx server (Windows)](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-nginx-server-that-runs-windows)

[Install an SSL certificate on an Apache server (Windows)](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-apache-server-that-runs-windows)

[Install an SSL certificate on a Tomcat server (Windows)](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-tomcat-server-that-runs-windows)

[在WebLogic服务器安装SSL证书（Windows）](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-weblogic-server-that-runs-windows)

#### Non-Alibaba Cloud servers

Select a certificate deployment tutorial based on your web server and operating system. For information about how to determine your web server type, see [How do I find my web server type](#83118d769fw0w).

**Server operating system**

**Deployment tutorials**

Linux

[Install an SSL certificate on an Nginx or Tengine server (Linux)](/help/en/ssl-certificate/install-ssl-certificates-on-nginx-servers-or-tengine-servers)

[Install an SSL certificate on a Tomcat server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-tomcat-server-that-runs-linux)

[Install an SSL certificate on an Apache server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-apache-server-that-runs-linux)

[Install an SSL certificate on a Jetty server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-jetty-server-that-runs-linux)

[Install an SSL certificate on a JBoss server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-jboss-server-that-runs-linux)

[Install an SSL certificate on a GlassFish server (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-glassfish-server-that-runs-linux)

[Install an SSL certificate in a Spring Boot application (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-spring-boot-application-that-runs-linux)

[Install an SSL certificate in a Python Flask application (Linux)](/help/en/ssl-certificate/install-an-ssl-certificate-on-a-python-flask-application-that-runs-linux)

Windows

[在IIS服务器安装SSL证书（Windows）](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-iis-server-that-runs-windows)

[Deploy an SSL certificate on an Nginx server (Windows)](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-nginx-server-that-runs-windows)

[Install an SSL certificate on an Apache server (Windows)](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-apache-server-that-runs-windows)

[Install an SSL certificate on a Tomcat server (Windows)](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-tomcat-server-that-runs-windows)

[在WebLogic服务器安装SSL证书（Windows）](/help/en/ssl-certificate/install-an-ssl-certificate-on-an-weblogic-server-that-runs-windows)

#### **Deploy to a cloud product**

#### **Alibaba Cloud**

-   **Deploy a certificate that uses an internationally accepted algorithm (RSA/ECC)**
    
    #### Deploy from the Certificate Management Service console
    
    In the following scenarios, you can use the cloud product deployment feature in the Certificate Management Service console. This feature lets you push certificates to other cloud products with a single click and eliminates the need to manually upload SSL certificates. For more information, see [Deploy an SSL certificate to cloud products such as SLB, CDN, and WAF](/help/en/ssl-certificate/deploy-ssl-certificates-to-alibaba-cloud-services).
    
    **Note**
    
    -   If your product is not supported by the Cloud Product Deployment feature, refer to the product's documentation for deployment.
        
    -   In the following table, "Update existing certificate" indicates a scenario in which a certificate has already been deployed to the cloud product and needs to be replaced.
        
    
    **Cloud product**
    
    **Deployment task scenarios**
    
    **Certificate configuration scenario**
    
    Container Service for Kubernetes (ACK)
    
    Update existing certificate
    
    ACK managed and dedicated clusters: Update AlbConfig certificate configuration, update Secret certificate
    
    **Important**
    
    When deploying to a Secret, do not manually modify it in the ACK console.
    
    Serverless App Engine - Gateway routing
    
    Update existing certificate
    
    Gateway routing with HTTPS forwarding protocol (ALB and CLB)
    
    Function Compute (FC)
    
    Update existing certificate
    
    HTTP-triggered function
    
    Microservices Engine - cloud-native gateway
    
    Update existing certificate
    
    Cloud-native gateway routing
    
    API Gateway
    
    Update existing certificate
    
    API access via HTTPS domain name
    
    Global Accelerator (GA)
    
    Update existing certificate
    
    HTTPS domain name with secure acceleration
    
    -   Application Load Balancer (ALB)
        
    -   Network Load Balancer (NLB)
        
    
    Update existing certificate
    
    HTTPS listener forwarding requests from HTTPS protocol scenario (server certificate)
    
    **Note**
    
    To deploy a client certificate, see [Configure end-to-end HTTPS to encrypt communication](/help/en/slb/application-load-balancer/use-cases/end-to-end-data-transfer-over-https).
    
    Content Delivery Network (CDN)
    
    -   Initial deployment
        
    -   Update existing certificate
        
    
    HTTPS secure acceleration
    
    Dynamic Content Delivery Network (DCDN)
    
    -   Initial deployment
        
    -   Update existing certificate
        
    
    HTTPS secure acceleration
    
    Edge Security Acceleration (ESA)
    
    Update existing certificate
    
    HTTPS secure acceleration
    
    Object Storage Service (OSS)
    
    Update existing certificate
    
    Accessing OSS service via HTTPS
    
    **Note**
    
    If a CDN-accelerated domain name is bound, you must replace the certificate in the CDN console.
    
    Web Application Firewall (WAF)
    
    Update existing certificate
    
    Onboarding via proxy mode
    
    Anti-DDoS Proxy
    
    Update existing certificate
    
    Anti-DDoS Proxy domain name access
    
    Platform for AI (PAI)
    
    Update existing certificate
    
    Elastic Algorithm Service (EAS) for online model services: dedicated gateway using a custom domain name
    
    #### Deploy from the cloud product console
    
    Find the corresponding cloud product in the following table, go to the console of the product, and follow the instructions in the document listed in the **References** column to complete the certificate deployment.
    
    **Cloud product**
    
    **Certificate configuration scenario**
    
    **References**
    
    Container Service for Kubernetes (ACK)
    
    ACK managed and dedicated clusters: Update AlbConfig certificate configuration, Update Secret certificate
    
    **Important**
    
    When deploying to a Secret, do not manually modify it in Container Service for Kubernetes (ACK).
    
    -   [Nginx Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1)
        
    -   [ALB Ingress-Configure an HTTPS certificate to encrypt communication](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-alb-ingress-to-configure-certificates-for-an-https-listener)
        
    -   [MSE Ingress-Configure an HTTPS certificate](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-https-certificate)
        
    
    Serverless App Engine - Gateway routing
    
    Gateway routing: HTTPS forwarding protocol configuration (ALB and CLB)
    
    -   [Configure gateway routing for an application (ALB)](/help/en/sae/serverless-app-engine-classic/user-guide/configure-gateway-routing-for-an-application-alb)
        
    -   [Configure gateway routing for an application (CLB)](/help/en/sae/serverless-app-engine-classic/user-guide/configure-gateway-routing-for-an-application-by-using-a-clb-instance)
        
    
    Function Compute (FC)
    
    HTTP function scenario
    
    [Configure a custom domain name](/help/en/functioncompute/fc-2-0/user-guide/configure-a-custom-domain-name)
    
    Microservices Engine - cloud-native gateway
    
    Cloud-native gateway routing scenarios
    
    [Create a domain name](/help/en/mse/user-guide/associated-domain-name)
    
    API Gateway
    
    Accessing an API over HTTPS using a domain name
    
    [Use a domain name to access an API over HTTPS](/help/en/api-gateway/traditional-api-gateway/getting-started/access-a-domain-name-over-https#topic-1867605)
    
    Global Accelerator (GA)
    
    Securely accelerating access to an HTTPS domain name
    
    -   [Use HTTPS secure acceleration to access an HTTP website](/help/en/ga/use-cases/accelerate-http-websites-over-https#DAS)
        
    -   [Use a single Global Accelerator instance to accelerate access to multiple HTTPS domain names](/help/en/ga/use-cases/use-one-ga-instance-to-accelerate-access-to-multiple-https-capable-domain-names#DAS)
        
    
    -   Application Load Balancer (ALB)
        
    -   Network Load Balancer (NLB)
        
    
    Using an HTTPS listener to forward requests over the HTTPS protocol (server certificate)
    
    **Note**
    
    To deploy a client certificate, see [Configure end-to-end HTTPS to encrypt communication](/help/en/slb/application-load-balancer/use-cases/end-to-end-data-transfer-over-https).
    
    -   **ALB**: [Add an HTTPS listener](/help/en/slb/application-load-balancer/user-guide/add-an-https-listener#task-2020924)
        
    -   **NLB**: [Add a TCP/SSL listener](/help/en/slb/network-load-balancer/user-guide/create-a-listener-that-uses-ssl-over-tcp#task-2224872)
        
    
    Content Delivery Network (CDN)
    
    HTTPS secure acceleration scenario
    
    [Configure an HTTPS certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate)
    
    Dynamic Content Delivery Network (DCDN)
    
    HTTPS secure acceleration scenario
    
    [Configure an HTTPS certificate](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-ssl-certificate)
    
    Edge Security Acceleration (ESA)
    
    HTTPS secure acceleration scenario
    
    [Configure Edge certificates](/help/en/edge-security-acceleration/esa/user-guide/configure-edge-certificates/)
    
    Object Storage Service
    
    Accessing OSS over HTTPS
    
    **Note**
    
    If a CDN-accelerated domain name is attached, you must replace the certificate in the CDN console.
    
    [Enable HTTPS access](/help/en/oss/user-guide/access-oss-by-https-protocol#title-0tx-anv-hvl)
    
    Web Application Firewall (WAF)
    
    CNAME access scenario
    
    -   WAF 3.0: [Add a domain name and configure an HTTPS certificate](/help/en/waf/web-application-firewall-3-0/user-guide/add-a-domain-name-to-waf-in-cname-record-mode)
        
    -   WAF 2.0: [Add a domain name and configure an HTTPS certificate](/help/en/waf/web-application-firewall-2-0/user-guide/add-a-domain-name-to-waf)
        
    
    Anti-DDoS Pro and Anti-DDoS Premium
    
    Website Config for Anti-DDoS Pro and Anti-DDoS Premium
    
    [Replace an HTTPS server certificate](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/upload-an-ssl-certificate)
    
    Platform for AI (PAI)
    
    Elastic Algorithm Service (EAS): Use a custom domain name with a dedicated gateway
    
    [Use a custom domain name for a dedicated gateway](/help/en/pai/user-guide/dedicated-service-gateway/#30cd572d0cj85)
    

#### Tencent Cloud, Huawei Cloud, and AWS

-   Deploy from the Certificate Management Service console
    
    Use the Alibaba Cloud Certificate Management Service console to deploy certificates to third-party cloud platforms. For more information, see [Deploy a certificate to a third-party cloud platform](/help/en/ssl-certificate/deploy-ssl-certificates-to-multi-cloud-services). The following cloud platforms and services are supported:
    
    -   **Tencent Cloud**: Content Delivery Network (CDN), Web Application Firewall (WAF), and Classic Load Balancer (CLB)
        
    -   **AWS**: Amazon CloudFront (CDN) and Load Balancer (ALB, NLB, and CLB)
        
    -   **Huawei Cloud**: Content Delivery Network (CDN) and Elastic Load Balancing (ELB)
        
-   Deploy by referring to the cloud vendor's official documentation
    
    Refer to the official documentation of the relevant cloud vendor to deploy the certificate.
    

## **Install a root certificate on a client**

Some clients, such as IoT devices, embedded systems, internal enterprise systems, offline apps, older browsers, and Java clients, do not have pre-installed CA root certificates. After you deploy an SSL certificate, these clients may not trust the certificate. To resolve this issue, you must manually download and install the root certificate on the client. For more information, see [Download and install root certificates](/help/en/ssl-certificate/download-a-root-certificate-and-an-intermediate-certificate).

## **FAQ**

### **How do I download a root certificate?**

Refer to [Download and install root certificates](/help/en/ssl-certificate/download-a-root-certificate-and-an-intermediate-certificate) to download the root certificates of the corresponding certificate brands.

### **What do I do if the certificate chain is incomplete or an intermediate certificate is missing?**

If a root or intermediate certificate on the client is missing or expired, refer to [Resolve an incomplete SSL certificate chain](/help/en/ssl-certificate/the-certificate-chain-is-incomplete). You can download and install the missing certificate, and then try to access the website again.

### **Why do I receive the "One or more intermediate certificates in the certificate chain are missing" error during certificate deployment?**

This error can occur when you deploy an SSL certificate on certain server systems, such as Internet Information Services (IIS) on Windows Server 2008 R2. To resolve this issue, you must install the missing root or intermediate certificate on the server.

### **How do I find my web server type?**

## **Use browser developer tools**

1.  Use a browser to access your domain name.
    
2.  Press F12 to open the developer tools and find the server type, as shown in the following figure.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3131643961/p697952.png)
    

## **View using commands**

1.  Log on to your server.
    
2.  On your server, run the following command to find the web server type.
    
    ```
    curl -i yourdomain
    ```
    
    **Note**
    
    `yourdomain` is a required parameter. Replace it with your actual website domain name. For example, `curl -i www.aliyundoc.com`.
    
    The following figure shows an example of the command output.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7950436761/p556122.png)
    

## **Consult a website setup engineer**

If you still cannot determine the web server type, contact your web developer. If you encounter other issues, contact your account manager for assistance.
