-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Load Balancing](https://docs.cloud.google.com/load-balancing/docs)
-   [Guides](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview)

Send feedback

# Request routing to a multi-region classic Application Load Balancer Stay organized with collections Save and categorize content based on your preferences.

This guide demonstrates how to create a Google Cloud HTTPS load balancer that:

-   Selects backend services based on the request URL paths.
-   Routes requests to backends that are close to the clients (multi-region load balancing).

Before you start, make sure that you are familiar with [External Application Load Balancer](/load-balancing/docs/https) concepts.

For a simplified example, see [Setting up an external Application Load Balancer with a Compute Engine backend](/load-balancing/docs/https/ext-https-lb-simple). For advanced routing, such as HTTP rewrites and redirects, see [Traffic management for external Application Load Balancers](/load-balancing/docs/https/traffic-management).

## Overview

This guide provides instructions for creating a load balancer that directs traffic based on the path in the request URL and balances traffic across multiple regions. You create eight total Compute Engine instances in US (in zone us-central1-b) and EU (in zone eu-west1-b) regions. You then create a load balancer that routes traffic to these instances.

After you complete the instructions, your load balancer is configured as follows:

-   Traffic containing a URL path that starts with `/video` is routed to one backend service.
-   Traffic with a URL path that doesn't match this pattern is routed to another backend service.

In this how-to document, you create the configuration that is illustrated in the following diagram:

[![Multi-regional HTTPS Load Balancing](/static/load-balancing/images/https-load-balancer-diagram.svg)](/static/load-balancing/images/https-load-balancer-diagram.svg)

Multi-regional HTTPS Load Balancing (click to enlarge)

The sequence of events in the diagram is:

1.  A client accesses the `https://www.example.com/video/concert` URL, sending a content request to the external IP address defined in the forwarding rule. The request can use IPv4 or IPv6; there are forwarding rules for both protocols.
2.  A forwarding rule directs the request to the target HTTPS proxy.
3.  The target proxy uses the rules set out in the URL map to determine which backend service receives the request. A request that contains `/video`, like `https://www.example.com/video/concert`, is sent to `video-backend-service`. Any other URL path is sent to the default service, `web-backend-service`.
4.  The load balancer determines which of the backend service's instance groups should serve the request, based on their loading and proximity to the client, and directs the request to an instance in that group.
5.  The instance serves the content requested by each user. The `video` instances serve video content, while the `www` instances serve all other content.

In this example, the load balancer accepts HTTPS requests from clients and proxies these requests as HTTP to the backends. You can also configure a load balancer to accept HTTP requests, as well as to use HTTPS when proxying requests to backends.

## Before you begin

These instructions require a [project](/docs/overview#projects). If you do not already have a project, set one up now. These instructions guide you through creating a [custom mode Virtual Private Cloud (VPC) network](/vpc/docs/vpc). You must also set up custom firewall rules to allow traffic to reach the instances.

If you prefer to work from the command line, install the `gcloud` command-line tool. See [gcloud Overview](/sdk/gcloud) for conceptual and installation information about the tool.

**Note:** If you haven't run the Google Cloud CLI previously, first run [`gcloud init`](/sdk/gcloud/reference/init) to initialize your gcloud directory.

## Permissions

To complete the steps in this guide, you must have permission to create Compute Engine instances in a project. You must have either a project [owner or editor role](/iam/docs/roles-overview#basic), or you must have the following [Compute Engine IAM roles](/compute/docs/access/iam):

Task

Required Role

Create instances

[Compute Instance Admin](/compute/docs/access/iam#compute.instanceAdmin)

Add and remove firewall rules

[Security Admin](/compute/docs/access/iam#compute.securityAdmin)

Create load balancer components

[Network Admin](/compute/docs/access/iam#compute.networkAdmin)

Create a project (Optional)

[Project Creator](/resource-manager/docs/creating-managing-projects#creating_a_project)

For more information, see the following guides:

-   [Access control](/load-balancing/docs/access-control)
-   [IAM Conditions](/load-balancing/docs/access-control/iam-conditions)

## Setup

### Optional: Creating a new project

We recommend that users with the `resourcemanager.projects.create` permission create a new project before following the rest of this how-to. This simplifies cleanup at the end of the guide.

### Configuring a network and subnets

In this example, use the following VPC network, regions, and subnets:

-   Network: The network is a [custom mode VPC network](/vpc/docs/vpc#subnet-ranges) named `lb-network`.
    
-   Subnets in two different regions:
    
    -   `us-subnet` uses `10.1.10.0/24` for its primary IP range and is located in the `us-central1` region.
    -   `eu-subnet` uses `10.1.11.0/24` for its primary IP range and is located in the `europe-west1` region.

To create the example network and subnet, follow these steps:

### Console

1.  In the Google Cloud console, go to the **VPC networks** page.
    
    [Go to VPC networks](https://console.cloud.google.com/networking/networks/list)
    
2.  Click **Create VPC network**.
    
3.  Enter a **Name** of `lb-network`.
    
4.  In the **Subnets** section, create the first subnet:
    
    -   Set the **Subnet creation mode** to **Custom**.
    -   In the **New subnet** section, enter the following information:
        -   **Name**: `us-subnet`
        -   **Region**: `us-central1`
        -   **IP address range**: `10.1.10.0/24`
        -   Click **Done**.
5.  Still in the **Subnets** section, click **Add subnet** and create the second subnet:
    
    -   In the **New subnet** section, enter the following information:
        -   **Name**: `eu-subnet`
        -   **Region**: `europe-west1`
        -   **IP address range**: `10.1.11.0/24`
        -   Click **Done**.
6.  Click **Create**.
    

### gcloud

1.  Create the custom VPC network:
    
    gcloud compute networks create lb-network --subnet-mode=custom
    
2.  Create the `us-subnet`:
    
    gcloud compute networks subnets create us-subnet \\
      --network=lb-network \\
      --range=10.1.10.0/24 \\
      --region=us-central1
    
3.  Create the `eu-subnet`:
    
    gcloud compute networks subnets create eu-subnet \\
      --network=lb-network \\
      --range=10.1.11.0/24 \\
      --region=europe-west1
    

### Configuring firewall rules

The [default deny ingress](/vpc/docs/firewalls#default_firewall_rules) rule blocks incoming traffic to the backend instances, including traffic from the load balancer and Google Cloud health checking systems. You must create new firewall rules to override the default rule and allow traffic to reach your instances.

In this example, you create the following firewall rules:

-   `fw-allow-ssh`: An ingress rule, applicable to the instances being load balanced, that allows incoming SSH connectivity on TCP port 22 from any address. You can choose a more restrictive source IP range for this rule; for example, you can specify just the IP ranges of the system from which you will initiating SSH sessions. This example uses the target tag `allow-ssh` to identify the backend VMs to which it should apply.
    
-   `fw-allow-health-check-and-proxy`: An ingress rule, applicable to the instances being load balanced, that allows traffic from the load balancer and Google Cloud health checking systems (`130.211.0.0/22` and `35.191.0.0/16`). This example uses the target tag `allow-health-check` to identify the backend VMs to which it should apply.
    

### Console

1.  In the Google Cloud console, go to the **Firewall policies** page.
    
    [Go to Firewall policies](https://console.cloud.google.com/net-security/firewall-manager/firewall-policies/list)
    
2.  Click **Create firewall rule** to create the first firewall rule:
    
    1.  Enter a **Name** of `fw-allow-ssh`.
    2.  Under **Network**, select `lb-network`.
    3.  Under **Targets**, select **Specified target tags**.
    4.  Populate the **Target tags** field with `allow-ssh`.
    5.  Set **Source filter** to **IPv4 ranges**.
    6.  Set **Source IPv4 ranges** to `0.0.0.0/0`.
    7.  Under **Protocols and ports**, select **Specified protocols and ports**.
    8.  Select the **TCP** checkbox and enter `22` for the port number.
    9.  Click **Create**.
3.  Click **Create firewall rule** to create the second firewall rule:
    
    1.  Enter a **Name** of `fw-allow-health-check-and-proxy`.
    2.  Under **Network**, select `lb-network`.
    3.  Under **Targets**, select **Specified target tags**.
    4.  Populate the **Target tags** field with `allow-health-check`.
    5.  Set **Source filter** to **IPv4 ranges**.
    6.  Set **Source IPv4 ranges** to `130.211.0.0/22` and `35.191.0.0/16`.
    7.  Under **Protocols and ports**, select **Specified protocols and ports**.
    8.  Select the **TCP** checkbox and enter `80,443` for the port numbers.
    9.  Click **Create**.

### gcloud

1.  Create the `fw-allow-ssh` firewall rule to allow SSH connectivity to VMs with the network tag `allow-ssh`. When you omit `source-ranges`, Google Cloud [interprets the rule to mean any source](/vpc/docs/firewalls#gcp_firewall_use_cases).
    
    gcloud compute firewall-rules create fw-allow-ssh \\
        --network=lb-network \\
        --action=allow \\
        --direction=ingress \\
        --target-tags=allow-ssh \\
        --rules=tcp:22
    
2.  Create the `fw-allow-health-check-and-proxy` rule to allow the load balancer and Google Cloud health checks to communicate with backend instances on TCP port `80` and `443`:
    
    gcloud compute firewall-rules create fw-allow-health-check-and-proxy \\
        --network=lb-network \\
        --action=allow \\
        --direction=ingress \\
        --target-tags=allow-health-check \\
        --source-ranges=130.211.0.0/22,35.191.0.0/16 \\
        --rules=tcp:80,tcp:443
    

### Creating instances

To set up a load balancer with a Compute Engine backend, your VMs need to be in instance groups. This guide describes how to create a managed instance group with Linux VMs that have Apache running.

The managed instance group provides VMs running the backend servers of an external HTTPS load balancer. For demonstration purposes, backends serve their own hostnames.

In this example, you create eight virtual machine instances (VMs): four to serve video content and four to serve all other content. You use a [startup script](/compute/docs/startupscript) to install Apache web server software with a unique home page for each instance. Note that you can use any web server on your VMs; Apache is installed in this example as a convenience.

### Console

Create an instance template.

1.  In the Google Cloud console, go to the **Instance templates** page.
    
    [Go to Instance templates](https://console.cloud.google.com/compute/instanceTemplates/list)
    
    1.  Click **Create instance template**.
    2.  For **Name**, enter `video-us-template`.
    3.  Ensure that the **Boot disk** is set to a Debian image, such as **Debian GNU/Linux 12 (bookworm)**. These instructions use commands that are only available on Debian, such as `apt-get`.
    4.  Click **Advanced options**.
    5.  Click **Networking** and configure the following fields:
        1.  For **Network tags**, enter `allow-health-check` and `allow-ssh`.
        2.  For **Network interfaces**, select the following:
            -   **Network**: `lb-network`
            -   **Subnet**: `us-subnet`
    6.  Click **Management**. Enter the following script into the **Startup script** field.
        
        #! /bin/bash
        apt-get update
        apt-get install apache2 -y
        a2ensite default-ssl
        a2enmod ssl
        vm\_hostname="$(curl -H "Metadata-Flavor:Google" \\
        http://metadata.google.internal/computeMetadata/v1/instance/name)"
        mkdir -p /var/www/html/video
        echo "Page served from: $vm\_hostname" | \\
        tee /var/www/html/index.html /var/www/html/video/index.html
        systemctl restart apache2
        
    7.  Click **Create**.
        
2.  Create a managed instance group. In the Google Cloud console, go to the **Instance groups** page.
    
    [Go to Instance groups](https://console.cloud.google.com/compute/instanceGroups)
    
    1.  Click **Create instance group**.
    2.  Select **New managed instance group (stateless)**. For more information, see [Stateless or stateful MIGs](/compute/docs/instance-groups/creating-groups-of-managed-instances#stateless_or_stateful_migs).
    3.  For **Name**, enter `ig-video-us`.
    4.  Under **Location**, select **Single zone**.
    5.  For **Region**, select your preferred region. This example uses `us-central1`.
    6.  For **Zone**, select **us-central1-b**.
    7.  Under **Instance template**, select `video-us-template`.
    8.  Under **Autoscaling mode**, select `Off:do not autoscale`.
    9.  Under **Maximum number of instances**, enter `2`.
    10.  Click **Create**.

**Note:** Because the external Application Load Balancer is a proxy, you _don't_ need to select **Allow HTTPS traffic** under **Firewall**.

### gcloud

1.  Create an instance template.
    
    gcloud compute instance-templates create video-us-template \\
       --region=us-central1 \\
       --network=lb-network \\
       --subnet=us-subnet \\
       --tags=allow-health-check,allow-ssh \\
       --image-family=debian-12 \\
       --image-project=debian-cloud \\
       --metadata=startup-script='#! /bin/bash
         apt-get update
         apt-get install apache2 -y
         a2ensite default-ssl
         a2enmod ssl
         vm\_hostname="$(curl -H "Metadata-Flavor:Google" \\
         http://metadata.google.internal/computeMetadata/v1/instance/name)"
         mkdir -p /var/www/html/video
         echo "Page served from: $vm\_hostname" | \\
         tee /var/www/html/index.html /var/www/html/video/index.html
         systemctl restart apache2'
    
2.  Create a managed instance group based on the template.
    
    gcloud compute instance-groups managed create ig-video-us \\
       --template=video-us-template --size=2 --zone=us-central1-b
    

Repeat this procedure four times for the four instance groups. Make sure to change the instance group name, template name, region, and zone for each instance group, as follows:

-   `ig-video-us`, `video-us-template`, `us-central1-b` (as shown in the example)
-   `ig-video-eu`, `video-eu-template`, `europe-west1-b`
-   `ig-www-us`, `www-us-template`, `us-central1-b`
-   `ig-www-eu`, `www-europe-template`, `europe-west1-b`

## Adding a named port to the instance group

For each instance group, define an HTTP service and map a port name to the relevant port. Once configured, the load balancing service forwards traffic to the named port.

### Console

1.  In the Google Cloud console, go to the **Instance groups** page.
    
    [Go to Instance groups](https://console.cloud.google.com/compute/instanceGroups)
    
2.  Click the name of your instance group (for example `ig-video-us`) and click **Edit Group**.
    
3.  Click **Specify port name mapping**.
    
4.  Click **Add item**.
    
5.  For the port name, enter `http`. For the port number, enter `80`.
    
6.  Click **Save**.
    

Repeat this step for each instance group.

### gcloud

gcloud compute instance-groups unmanaged set-named-ports ig-video-us \\
    --named-ports http:80 \\
    --zone us-central1-b

gcloud compute instance-groups unmanaged set-named-ports ig-www-us \\
    --named-ports http:80 \\
    --zone us-central1-b

gcloud compute instance-groups unmanaged set-named-ports ig-video-eu \\
    --named-ports http:80 \\
    --zone europe-west1-b

gcloud compute instance-groups unmanaged set-named-ports ig-www-eu \\
    --named-ports http:80 \\
    --zone europe-west1-b

## Reserving external IP addresses

Now that your instances are up and running, set up the services needed for load balancing. In this section, you create two [global static external IP addresses](/compute/docs/ip-addresses#externaladdresses) that your customers use to reach your load balancer.

### Console

1.  In the Google Cloud console, go to the **External IP addresses** page.
    
    [Go to External IP addresses](https://console.cloud.google.com/addresses/list)
    
2.  Click **Reserve static address** to reserve an IPv4 address.
    
3.  Assign a **Name** of `lb-ipv4-1`.
    
4.  Set the Network tier to **Premium**.
    
5.  Set **IP version** to **IPv4**.
    
6.  Set the **Type** to **Global**.
    
7.  Click **Reserve**.
    
8.  Click **Reserve static address** again to reserve an IPv6 address.
    
9.  Assign a **Name** of `lb-ipv6-1`.
    
10.  Set the Network Tier to **Premium**.
     
11.  Set **IP version** to **IPv6**.
     
12.  Ensure that the **Type** is set to **Global**.
     
     In this example, the load balancer uses [Premium Tier networking](/network-tiers/docs/overview#premium_tier). A load balancer using Standard Tier networking would instead use regional IP addresses. IPv6 addresses are not available with Standard Tier.
     
13.  Click **Reserve**.
     

### gcloud

1.  Reserve an IPv4 address:
    
    gcloud compute addresses create lb-ipv4-1 \\
      --ip-version=IPV4 \\
      --network-tier=PREMIUM \\
      --global
    
2.  Reserve an IPv6 address:
    
    gcloud compute addresses create lb-ipv6-1 \\
      --ip-version=IPV6 \\
      --network-tier=PREMIUM \\
      --global
    

## Configuring the load balancing resources

Load balancer functionality involves several connected resources. In this section, you set up and connect the resources. They are as follows:

-   [Named ports](/compute/docs/instance-groups/creating-groups-of-unmanaged-instances#assign_named_ports), which the load balancer uses to direct traffic to your instance groups.
-   A [Health check](/load-balancing/docs/health-check-concepts), which polls your instances to see if they are healthy. The load balancer only sends traffic to healthy instances.
-   [Backend services](/load-balancing/docs/backend-service), which keep track of capacity, session affinity, and health check status. Backend services direct requests to backend VMs or endpoints based on capacity and instance health.
-   A [URL map](/load-balancing/docs/https/url-map), which the load balancer uses to to direct requests to specific backend services based on the host and path of the request URL.
-   An [SSL certificate resource](/load-balancing/docs/ssl-certificates). SSL certificate resources contain SSL certificate information that the load balancer uses to terminate TLS when HTTPS clients connect to it. You can use [multiple SSL certificates](/load-balancing/docs/ssl-certificates#multiplessl), which can be any combination of [managed or self-managed SSL certificates](/load-balancing/docs/ssl-certificates). You must create an SSL certificate resource for each certificate you use.
-   A [target HTTPS proxy](/load-balancing/docs/target-proxies), which the load balancer uses to associate your URL map and SSL certificates with your global forwarding rules.
-   Two [global forwarding rules](/load-balancing/docs/forwarding-rule-concepts), one each for IPv4 and IPv6, which hold the global external IP address resources. Global forwarding rules forward the incoming request to the target proxy.
    

### Console

#### Select the load balancer type

1.  In the Google Cloud console, go to the **Load balancing** page.
    
    [Go to Load balancing](https://console.cloud.google.com/net-services/loadbalancing/list)
    
2.  Click **Create load balancer**.
3.  For **Type of load balancer**, select **Application Load Balancer (HTTP/HTTPS)** and click **Next**.
4.  For **Public facing or internal**, select **Public facing (external)** and click **Next**.
5.  For **Global or single region deployment**, select **Best for global workloads** and click **Next**.
6.  For **Load balancer generation**, select **Classic Application Load Balancer** and click **Next**.
7.  Click **Configure**.

#### Basic configuration

1.  For the **Name** of the load balancer, enter `web-map`.
2.  Keep the window open to continue.

#### Configure the backend service and health check for the `www` instances

The load balancer requires two backend services and a health check to service both of them. In this example, the load balancer terminates HTTPS requests from the client and uses HTTP to communicate with the backends. To do this, you specify HTTP for the backend protocols and health checks.

1.  Click **Backend configuration**.
2.  In the **Create or select a backend service** drop-down menu, hold the mouse pointer over **Backend services**, and then select **Create a backend service**.
3.  Set the **Name** of the backend service to `web-backend-service`.
4.  Ensure that the **Backend type** is set to **Instance group**.
5.  In the **Protocol** drop-down menu, select **HTTP**.
6.  In the **Named port** field, enter `http`.
7.  Configure the health check for the `www` instances:
    1.  In the **Health check** list, click **Create a health check**.
    2.  In the **Name** field, enter `http-basic-check-www`.
    3.  In the **Protocol** list, select **HTTP**.
    4.  In the **Port** field, enter `80`.
    5.  Click **Create**.
8.  Under **Backends**, set **Instance group** to `ig-www-us`.
9.  For traffic between the load balancer and the instances, set **Port numbers** to `80`.
10.  Leave the default values for the remaining fields.
11.  Click **Done** at the bottom of the **New backend** window.
12.  Click **Add backend** and repeat steps, but select instance group `ig-www-eu`.
13.  Keep the window open to continue.

#### Configure the backend service and health check for the `video` instances

1.  Repeat the earlier steps to configure the backend service and health check, but name the second backend service `video-backend-service` and assign the `ig-video-us` and `ig-video-eu` instance groups to it.
2.  Follow the same steps to create a health check, but name the health check `http-basic-check-video`. Health check names must be unique.

#### Configure host and path rules

The host and path rules configure the load balancer's URL map resource.

1.  In the left column of the screen, click **Host and path rules**.
2.  The first row has `web-backend-service` in the right-hand column and is already populated with the default rule `Any unmatched (default)` for **Hosts** and **Paths**.
3.  Ensure that there is a second row with `video-backend-service` in the right-hand column. If it does not exist, click **Add host and path rule**, and then select `video-backend-service` from the drop-down menu in the right column. Populate the other columns as follows:
    1.  Set **Hosts** to `*`.
    2.  In the **Paths** field:
        1.  Enter `/video`, and then press the Tab key.
        2.  Enter `/video/*`, and then press the Tab key.

#### Configure the frontend

The frontend configuration section configures several resources for the load balancer, including the forwarding rules and SSL certificates. In addition, it allows you to select the protocol used between the client and the load balancer.

In this example, you are using HTTPS between the client and the load balancer, so you need one or more SSL certificate resources to configure the proxy. See [SSL Certificates](/load-balancing/docs/ssl-certificates) for information on how to create SSL certificate resources. We recommend using a Google-managed certificate.

**Warning:** Do _not_ use a self-signed certificate for production purposes.

1.  In the left panel of the **Create global external Application Load Balancer** page, click **Frontend configuration**.
2.  In the **Name** field, enter `https-content-rule`.
3.  In the **Protocol** field, select `HTTPS`.
4.  Keep the window open to continue.

### Configure the IPv4 forwarding rule

1.  Set **IP version** to `IPv4`.
2.  In **IP address**, select `lb-ipv4-1`, which you created earlier.
3.  Ensure that the **Port** is set to `443`, to allow HTTPS traffic.
4.  Click the **Certificate** drop-down list.
    1.  If you already have a [self-managed SSL certificate resource](/load-balancing/docs/ssl-certificates#certificate-types) and you want to use it as the primary SSL certificate, select it from the drop-down menu.
    2.  Otherwise, select **Create a new certificate**.
    3.  Fill in a **Name** of `www-ssl-cert`.
    4.  Select **Upload my certificate** or **Create Google managed certificate**. To create a Google-managed certificate, you must have a domain. If you do not have a domain, you can upload your own certificate for testing purposes.
    5.  If you selected **Upload my certificate**, complete these steps.
        1.  In the **Public key certificate** field, do one of the following:
            -   Click the **Upload** button and select your PEM-formatted certificate file.
            -   Copy and paste the contents of a PEM-formatted certificate. The contents must start with `-----BEGIN CERTIFICATE-----` and end with `-----END CERTIFICATE-----`.
        2.  For the **Certificate chain** field, do one of the following:
            -   Click the **Upload** button and select your CA's certificate file. This file should include intermediate CA certificates as well as the root CA certificate.
            -   Copy and paste the contents of a certificate chain. Each certificate in the chain must be PEM-formatted, starting with `-----BEGIN CERTIFICATE-----` and terminating with `-----END CERTIFICATE-----`. Google Cloud does not validate the certificate chain for you — validation is your responsibility.
            -   If you omit the Certificate chain, your certificate should be signed by a publicly trusted CA that your clients would automatically trust.
        3.  For the **Private key certificate** field, do one of the following:
            -   Click the **Upload** button and select your private key. Your private key must be PEM-formatted and not protected with a passphrase.
            -   Copy and paste the contents of a PEM-formatted private key. RSA private keys must start with `-----BEGIN RSA PRIVATE KEY-----` and end with `-----END RSA PRIVATE KEY-----`. ECDSA private keys must start with `-----BEGIN EC PRIVATE KEY-----` and end with `-----END EC PRIVATE KEY-----`.
        4.  Click **Create**.
    6.  If you selected **Create Google managed certificate**, enter a **Domain**.
5.  To add certificate resources in addition to the primary SSL certificate resource:
    1.  Click **Add certificate**.
    2.  Select a certificate from the **Certificates** list or click **Create a new certificate** and follow the instructions above.
6.  Under **QUIC negotiation**, select one of the following options:
    -   **Automatic (Default)** Allows Google to control when QUIC is negotiated. Currently, when you select **Automatic**, QUIC is disabled. By selecting this option, you are allowing Google to automatically enable QUIC negotiations and HTTP/3 in the future for this load balancer. In `gcloud` and the API, this option is called `NONE`.
    -   **Enabled** Allows the load balancer to negotiate QUIC with clients.
    -   **Disabled** Prevents the load balancer from negotiating QUIC with clients.
7.  Click **Done**.
8.  Keep the window open to continue.

### Configure the IPv6 forwarding rule

1.  Click **Add frontend IP and port**.
2.  Enter a **Name** of `https-content-ipv6-rule`.
3.  In the **Protocol** field, select `HTTPS` if you want to use HTTPS between the client and the load balancer. Select `HTTP` if you want HTTP between the client and the load balancer.
4.  Set **IP version** to `IPv6`.
5.  In **IP**, select `lb-ipv6-1`, which you created earlier.
6.  The default **Port** of `443` is required.
7.  If you already have an SSL certificate resource you want to use, select it from the **Certificate** drop-down menu. If not, select **Create a new certificate**.
    1.  Fill in a **Name** of `www-ssl-cert`.
    2.  In the appropriate fields upload your **Public key certificate** (.crt file), **Certificate chain** (.csr file), and **Private key** (.key file).
    3.  Click **Create**.
8.  To add certificate resources in addition to the primary SSL certificate resource:
    1.  Click **Add certificate**.
    2.  Select a certificate from the **Certificates** list or click **Create a new certificate** and follow the instructions above.
9.  Under **QUIC negotiation**, select one of the following options:
    -   **Automatic (Default)** Allows Google to control when QUIC is negotiated. Currently, when you select **Automatic**, QUIC is disabled. By selecting this option, you are allowing Google to automatically enable QUIC negotiations and HTTP/3 in the future for this load balancer. In `gcloud` and the API, this option is called `NONE`.
    -   **Enabled** Allows load balancer to negotiate QUIC with clients.
    -   **Disabled** Prevents load balancer from negotiating QUIC with clients.
10.  Click **Done**.

### Reviewing and finalizing

1.  In the left panel of the **Create global external Application Load Balancer** page, click **Review and finalize**.
2.  Compare your settings to what you intended to create.
3.  If everything looks correct, click **Create** to create your external Application Load Balancer.

### gcloud

1.  Create a [health check](/load-balancing/docs/health-checks). Use the `gcloud` command for HTTP if you are using HTTP between the load balancer and the backends.
    
    gcloud compute health-checks create http http-basic-check \\
        --port 80
    
2.  Create a [backend service](/compute/docs/reference/latest/backendServices) for each content provider.
    
    Set the `--protocol` field to `HTTP` because we are using HTTP to go to the instances. Use the `http-basic-check` health check we created earlier as the health check.
    
    -   For a global external Application Load Balancer, use the gcloud CLI command with `load-balancing-scheme=EXTERNAL_MANAGED`. This setting offers [advanced traffic management capability](/load-balancing/docs/https/traffic-management-global).
    -   For an classic Application Load Balancer, use `load-balancing-scheme=EXTERNAL`.
    
    gcloud compute backend-services create video-backend-service \\
        --load-balancing-scheme=LOAD\_BALANCING\_SCHEME \\
        --global-health-checks \\
        --protocol=HTTP \\
        --port-name=http \\
        --health-checks=http-basic-check \\
        --global
    
    gcloud compute backend-services create web-backend-service \\
        --load-balancing-scheme=LOAD\_BALANCING\_SCHEME \\
        --global-health-checks \\
        --protocol=HTTP \\
        --port-name=http \\
        --health-checks=http-basic-check \\
        --global
    
3.  Add your instance groups as backends to the backend services. A backend defines the capacity (maximum backend utilization or maximum queries per second) of the instance groups it contains. In this example, set `balancing-mode` to the value `UTILIZATION`, `max-utilization` to `0.8`, and `capacity-scaler` to `1`. Set `capacity-scaler` to `0` if you wish to drain a backend service.
    
    Add the `ig-video-us` instance group:
    
    gcloud compute backend-services add-backend video-backend-service \\
        --balancing-mode=UTILIZATION \\
        --max-utilization=0.8 \\
        --capacity-scaler=1 \\
        --instance-group=ig-video-us \\
        --instance-group-zone=us-central1-b \\
        --global
    
    Add the `ig-video-eu` instance group:
    
    gcloud compute backend-services add-backend video-backend-service \\
        --balancing-mode=UTILIZATION \\
        --max-utilization=0.8 \\
        --capacity-scaler=1 \\
        --instance-group=ig-video-eu \\
        --instance-group-zone=europe-west1-b \\
        --global
    
    Add the `ig-www-us` instance group:
    
    gcloud compute backend-services add-backend web-backend-service \\
        --balancing-mode=UTILIZATION \\
        --max-utilization=0.8 \\
        --capacity-scaler=1 \\
        --instance-group=ig-www-us \\
        --instance-group-zone=us-central1-b \\
        --global
    
    Add the `ig-www-eu` instance group:
    
    gcloud compute backend-services add-backend web-backend-service \\
        --balancing-mode=UTILIZATION \\
        --max-utilization=0.8 \\
        --capacity-scaler=1 \\
        --instance-group=ig-www-eu \\
        --instance-group-zone=europe-west1-b \\
        --global
    
4.  Create a URL map to route the incoming requests to the appropriate backend services. In this case, the request path mappings defined via the `--path-rules` flag split traffic according to the URL path in each request to your site. Traffic that does not match an entry in the `--path-rules` list is sent to the entry in the `--default-service flag`.
    
    1.  Create a URL map:
        
        gcloud compute url-maps create web-map \\
            --default-service web-backend-service
        
    2.  Add a path matcher to your URL map and define your request path mappings:
        
        gcloud compute url-maps add-path-matcher web-map \\
            --default-service web-backend-service \\
            --path-matcher-name pathmap \\
            --path-rules="/video=video-backend-service,/video/\*=video-backend-service"
        
5.  Create an SSL certificate resource to use in the HTTPS proxy. To create a Google-managed certificate, you must have a domain. If you do not have a domain, you can use a [self-signed SSL certificate](/load-balancing/docs/ssl-certificates/self-managed-certs#create-key-and-cert) for testing. For more information, see [Types of SSL certificates](/load-balancing/docs/ssl-certificates).
    
    If you are using multiple SSL certificates, you must create an SSL certificate resource for each certificate.
    
    **Warning:** Do _not_ use a self-signed certificate for production purposes.
    
    To create a self-managed SSL certificate resource:
    
    gcloud compute ssl-certificates create www-ssl-cert \\
        --certificate \[CRT\_FILE\_PATH\] \\
        --private-key \[KEY\_FILE\_PATH\]
    
    To create a Google-managed SSL certificate resource:
    
    gcloud compute ssl-certificates create www-ssl-cert \\
      --domains \[DOMAIN\]
    
6.  Create a target HTTPS proxy to route requests to your URL map. The proxy is the portion of the load balancer that holds the SSL certificate for HTTPS Load Balancing, so you also load your certificate in this step.
    
    gcloud compute target-https-proxies create https-lb-proxy \\
        --url-map web-map --ssl-certificates www-ssl-cert
    
7.  Create two global forwarding rules to route incoming requests to the proxy, one for each of the IP addresses you created.
    
    -   For a global external Application Load Balancer, use the gcloud CLI command with `load-balancing-scheme=EXTERNAL_MANAGED`. This setting offers [advanced traffic management capability](/load-balancing/docs/https/traffic-management-global).
    -   For an classic Application Load Balancer, use `load-balancing-scheme=EXTERNAL`.
    
    gcloud compute forwarding-rules create https-content-rule \\
        --load-balancing-scheme=LOAD\_BALANCING\_SCHEME \\
        --network-tier=PREMIUM \\
        --address=lb-ipv4-1 \\
        --global \\
        --target-https-proxy=https-lb-proxy \\
        --ports=443
    
    gcloud compute forwarding-rules create https-content-ipv6-rule \\
        --load-balancing-scheme=LOAD\_BALANCING\_SCHEME \\
        --network-tier=PREMIUM \\
        --address=lb-ipv6-1 \\
        --global \\
        --target-https-proxy=https-lb-proxy \\
        --ports=443
    

After creating the global forwarding rule, it can take several minutes for your configuration to propagate worldwide.

## Connect your domain to your load balancer

After the load balancer is created, note the IP address that is associated with the load balancer—for example, `30.90.80.100`. To point your domain to your load balancer, create an `A` record by using your domain registration service. If you added multiple domains to your SSL certificate, you must add an `A` record for each one, all pointing to the load balancer's IP address. For example, to create `A` records for `www.example.com` and `example.com`, use the following:

NAME                  TYPE     DATA
www                   A        30.90.80.100
@                     A        30.90.80.100

If you use Cloud DNS as your DNS provider, see [Add, modify, and delete records](/dns/docs/records).

## Sending traffic to your instances

Now that you have configured your load balancing service, you can start sending traffic to the forwarding rule and watch the traffic go to different instances.

### Console and Web Browser

1.  In the Google Cloud console, go to the **Load balancing** page.
    
    [Go to Load balancing](https://console.cloud.google.com/networking/loadbalancing/list)
    
2.  Click `web-map` to expand the load balancer you just created.
    
3.  In the **Backend** section, confirm that the instances are healthy. The **Healthy** column should be populated indicating that both instances in each of the four instance groups are healthy. If you see otherwise, first try reloading the page. It can take a few moments for the Google Cloud console to indicate that the instances are healthy. If the backends do not appear healthy after a few minutes, review the firewall configuration and the set of network tags assigned to your backend instances.
    
4.  Record the IPv4 and IPv6 addresses of your load balancer:
    
    1.  In the Google Cloud console, go to the **External IP addresses** page.
        
        [Go to External IP addresses](https://console.cloud.google.com/addresses/list)
        
    2.  Under **Name**, find the addresses named `lb-ipv4-1` and `lb-ipv6-1`, and then record the associated values from the **External Addresses** column.
        
5.  If you are using a Google-managed certificate:
    
    1.  Create the following DNS records:
        
        -   A CAA record. For more information, see [Specifying the CAs that are allowed to sign your Google-managed certificate](/load-balancing/docs/ssl-certificates/google-managed-certs#caa).
        -   An A record. For more information, see [Create Updating the DNS A record to point to the load balancer's IP address](/load-balancing/docs/ssl-certificates/google-managed-certs#update-dns).
        -   An AAAA record. This is similar to the A record, but is for your load balancer's IPv6 address.
    2.  Confirm that your certificate resource's status is ACTIVE. For more information, see [Google-managed SSL certificate resource status](/load-balancing/docs/ssl-certificates/google-managed-certs#certificate-resource-status).
        
6.  Test your load balancer using a web browser by going to one of the following:
    
    -   `https://IP_ADDRESS`, where IP\_ADDRESS is the load balancer's IPv4 address. If your browser displays a certificate warning, you must explicitly instruct your browser to trust the certificate. The warning occurs because certificates are typically configured with domains, not IP addresses.
        
    -   `https://FQDN`, where FQDN is the fully qualified domain name (FQDN) for which you configured DNS to point to the load balancer's IP address. If you used a self-managed, self-signed SSL certificate or a self-managed SSL certificate signed by a custom certificate authority (CA), your browser displays a certificate warning unless you have explicitly configured it to trust the certificate or its CA. For more details about self-managed certificates, see [Creating a private key and certificate](/load-balancing/docs/ssl-certificates/self-managed-certs#create-key-and-cert).
        
    
    Your browser should render a page with content showing the name of the instance that served the page, along with its zone (for example, `Page on ig-www-us-02 in us-central1-b`).
    
7.  In your browser, go to one of the following:
    
    -   `https://IP_ADDRESS/video`, where IP\_ADDRESS is the load balancer's IPv4 address.
        
    -   `https://FQDN/video`, where FQDN is the FQDN for which you configured DNS to point to the load balancer's IP address.
        
    
    Your browser should render a page with content showing the name of the _video_ instance that served the page, along with its zone (for example, `Page on ig-video-us-02 in us-central1-b`).
    

### gcloud and using curl

**Note:** This example uses `-k` with curl to suppress its warnings about self-signed certificates. Web applications normally use certificates signed by a certificate authority in order to demonstrate their authenticity to clients. You can use your own CA-signed certificate with a load balancer, or you can configure your load balancer to issue a Google-managed certificate for a domain that you control.

1.  Record the IPv4 and IPv6 addresses of your load balancer:
    
    gcloud compute addresses describe lb-ipv4-1 \\
    --format="get(address)" \\
    --global
    
    gcloud compute addresses describe lb-ipv6-1 \\
    --format="get(address)" \\
    --global
    
2.  If you are using a Google-managed certificate:
    
    1.  Create the following DNS records:
        
        -   A CAA record. For more information, see [Specifying the CAs that are allowed to sign your Google-managed certificate](/load-balancing/docs/ssl-certificates/google-managed-certs#caa).
        -   An A record. For more information, see [Create Updating the DNS A record to point to the load balancer's IP address](/load-balancing/docs/ssl-certificates/google-managed-certs#update-dns).
        -   An AAAA record. This is similar to the A record, but is for your load balancer's IPv6 address.
    2.  Confirm that your certificate resource's status is ACTIVE. For more information, see [Google-managed SSL certificate resource status](/load-balancing/docs/ssl-certificates/google-managed-certs#certificate-resource-status).
        
        gcloud compute ssl-certificates list
        
3.  Use the `curl` command to test the response from these URLs. Replace IP\_ADDRESS with the load balancer's IPv4 address:
    
    curl -k https://IP\_ADDRESS
    
    curl -k https://IP\_ADDRESS/video/
    
4.  Use the `curl` command to test the response from these URLs. Replace IP\_ADDRESS with the load balancer's IPv6 address. For IPv6, you must put brackets (`[]`) around the address and disable globbing with the `-g` flag (for example, `curl -g -6 "https://[2001:DB8::]/"`).
    
    curl -k -g -6 https://\[IP\_ADDRESS\]
    
    curl -k -g -6 https://\[IP\_ADDRESS\]/video/
    

### Testing multi-region functionality

To simulate a user in a different geography, you can connect to one of your virtual machine instances in a different region, and then run a `curl` command from that instance to see the request go to an instance in the region closest to it.

If you connect to `ig-www-us-01`, running a `curl` command shows that the request goes to an instance in `us-central1`. You see output such as the following: `Page on ig-www-us-02 in us-central1-b`.

If you connect to `ig-www-eu-01`, running a `curl` command shows that the request goes to an instance in `europe-west1`. You see output such as the following: `Page on ig-www-eu-02 in europe-west1-b`.

You can perform tests from a client system located anywhere in the world. If backends in one region become unhealthy or reach capacity, the HTTPS load balancer automatically sends traffic to [the next-closest region](/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb).

## Additional configuration options

This section expands on the configuration example to provide alternative and additional configuration options. All of the tasks are optional. You can perform them in any order.

### Enabling session affinity

These procedures demonstrate how to configure a different type of session affinity for each backend service:

-   Client IP address session affinity for `web-backend-service`
-   HTTP cookie session affinity for `video-backend-service`

When client IP affinity is enabled, the load balancer directs a particular client's requests to the same backend VM based on a hash created from the client's IP address.

When generated cookie affinity is enabled, the load balancer issues a cookie on the first request. For each subsequent request with the same cookie, the load balancer directs the request to the same backend VM or endpoint. For external Application Load Balancers, the cookie is named `GCLB`.

### Console

To enable client IP session affinity for `web-backend-service`:

1.  In the Google Cloud console, go to the **Load balancing** page.
    
    [Go to Load balancing](https://console.cloud.google.com/net-services/loadbalancing/loadBalancers/list)
    
2.  Click **Backends**.
    
3.  Click **web-backend-service** (the name of one of the backend services you created for this example) and click **Edit**.
    
4.  On the **Backend service details** page, click **Advanced configuration**.
    
5.  Under **Session affinity**, select **Client IP** from the menu.
    
6.  Click **Save**.
    

To enable generated cookie session affinity for `video-backend-service`:

1.  In the Google Cloud console, go to the **Load balancing** page.
    
    [Go to Load balancing](https://console.cloud.google.com/net-services/loadbalancing/loadBalancers/list)
    
2.  Click **Backends**.
    
3.  Click **video-backend-service** (the name of one of the backend services you created for this example) and click **Edit**.
    
4.  On the **Backend service details** page, click **Advanced configuration**.
    
5.  Under **Session affinity**, select **Generated cookie** from the menu.
    
6.  Click **Update**.
    

### gcloud

Use the following `gcloud` command to update the `web-backend-service` backend service, specifying client IP session affinity:

gcloud compute backend-services update web-backend-service \\
    --session-affinity=CLIENT\_IP \\
    --global

Use the following `gcloud` command to update the `video-backend-service` backend service, specifying generated cookie session affinity:

gcloud compute backend-services update video-backend-service \\
    --session-affinity=GENERATED\_COOKIE \\
    --global

### API

To set client IP session affinity, make a `PATCH` request to the [`backendServices/patch`](/compute/docs/reference/rest/v1/backendServices/patch) method.

```
PATCH https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/global/backendServices/web-backend-service
{
  "sessionAffinity": "CLIENT_IP"
}
```

To set generated cookie session affinity, make a `PATCH` request to the [`backendServices/patch`](/compute/docs/reference/rest/v1/backendServices/patch) method.

```
PATCH https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/global/backendServices/video-backend-service
{
  "sessionAffinity": "GENERATED_COOKIE"
}
```

### Removing external IP addresses from backend VMs

External Application Load Balancers communicate with backends using their _internal_ IP addresses and special [load balancer routes](/vpc/docs/routes#special-lb-paths). The backend instances do not need external IP addresses to communicate with the load balancer. You can increase security by removing the external IP addresses from your backend instances.

To remove external IP addresses from backend instances, follow [these directions](/compute/docs/ip-addresses/configure-static-external-ip-address#unassign_ip).

If you need to connect using SSH to a backend instance that does not have an external IP address, refer to [Connecting to an instance that doesn't have an external IP address](/compute/docs/instances/connecting-advanced#sshbetweeninstances).

## Cleaning up

After you have finished this tutorial you can delete the resources you've made, so that you won't continue to be billed for them in the future. If these resources were created within their own project, you can delete the entire project. Otherwise, you can delete the resources individually.

### Deleting the project

**Caution**: Deleting a project has the following effects:

-   **Everything in the project is deleted.** If you used an existing project for this tutorial, when you delete it, you also delete any other work you've done in the project.
-   **Custom project IDs are lost.** When you created this project, you might have created a custom project ID that you want to use in the future. To preserve the URLs that use the project ID, such as an `YOUR_PROJECT_ID.REGION_ID.r.appspot.com` URL, delete selected resources inside the project instead of deleting the project.

### Console

1.  In the Google Cloud console, go to the **Projects** page.
    
    [Go to Projects](https://console.cloud.google.com/cloud-resource-manager)
    
2.  In the project list, select the project you want to delete and click delete**Delete**.
    
3.  In the dialog, type the `PROJECT_ID`, and then click **Shut down** to delete the project.
    

### gcloud

Run the following command, replacing `PROJECT_ID` with your project ID:

gcloud projects delete PROJECT\_ID

### Deleting individual resources

### Console

### Deleting the load balancer

1.  In the Google Cloud console, go to the **Load balancing** page.
    
    [Go to Load balancing](https://console.cloud.google.com/networking/loadbalancing/add)
    
2.  Select the checkbox next to `web-map`.
    
3.  Click the **Delete** button at the top of the page.
    
4.  Select the checkboxes next to all of the additional resources, including backend services, health checks, and SSL certificates.
    
5.  Click **Delete load balancer and the selected resources**.
    

### Deleting the instance groups

1.  In the Google Cloud console, go to the **Instance groups** page.
    
    [Go to Instance groups](https://console.cloud.google.com/compute/instanceGroups/list)
    
2.  Select the checkbox at the top next to **Name**, to select all instance groups.
    
3.  Click delete**Delete**.
    
4.  In the confirmation window, click delete**Delete**.
    

### Releasing external IP addresses

1.  In the Google Cloud console, go to the **External IP addresses** page.
    
    [Go to External IP addresses](https://console.cloud.google.com/addresses/list)
    
2.  Select the checkboxes next to `lb-ipv4-1` and `lb-ipv6-1`.
    
3.  Click **Release static addresses**.
    
4.  In the confirmation window, click delete**Delete**.
    

### Deleting the firewall rules

1.  In the Google Cloud console, go to the **Firewall policies** page.
    
    [Go to Firewall policies](https://console.cloud.google.com/net-security/firewall-manager/firewall-policies/list)
    
2.  Select the checkboxes next to `fw-allow-health-check-and-proxy` and `fw-allow-ssh`.
    
3.  Click delete**Delete**.
    
4.  In the confirmation window, click delete**Delete**.
    

### Deleting the VM instances

1.  In the Google Cloud console, go to the **VM instances** page.
    
    [Go to VM instances](https://console.cloud.google.com/compute/instances)
    
2.  Select the checkbox at the top next to **Name** to select all instances.
    
3.  Click delete**Delete**.
    
4.  In the confirmation window, click delete**Delete**.
    

### Deleting the VPC network

1.  In the Google Cloud console, go to the **VPC networks** page.
    
    [Go to VPC networks](https://console.cloud.google.com/networking/networks/list)
    
2.  Click `lb-network`.
    
3.  On the network details page, click **Delete VPC network**.
    
4.  In the confirmation window, click delete**Delete**.
    

### gcloud

**Note:** You must enter `y` after each command to confirm deletion.

### Deleting the load balancer

To delete the load balancer, you'll need to delete each of its components.

1.  Delete the forwarding rules:
    
    gcloud compute forwarding-rules delete https-content-rule \\
        --global
    
    gcloud compute forwarding-rules delete https-content-ipv6-rule \\
        --global
    
2.  Delete the global external IP addresses:
    
    gcloud compute addresses delete lb-ipv4-1 \\
        --global
    
    gcloud compute addresses delete lb-ipv6-1 \\
        --global
    
3.  Delete the target proxy:
    
    gcloud compute target-https-proxies delete https-lb-proxy
    
4.  Delete the SSL certificate:
    
    gcloud compute ssl-certificates delete www-ssl-cert
    
5.  Delete the URL map:
    
    gcloud compute url-maps delete web-map
    
6.  Delete the backend services:
    
    gcloud compute backend-services delete web-backend-service \\
        --global
    
    gcloud compute backend-services delete video-backend-service \\
        --global
    
7.  Delete the health checks:
    
    gcloud compute health-checks delete http-basic-check
    

You have deleted all of the load balancer resources.

### Deleting the instance groups

Repeat the following command to delete four unmanaged instance groups, using the following name and zone combinations. Replace `INSTANCE_GROUP_NAME` and `ZONE` accordingly:

-   Name: `ig-www-us`, zone: `us-central1-b`
-   Name: `ig-video-us`, zone: `us-central1-b`
-   Name: `ig-www-eu`, zone: `europe-west1-b`
-   Name: `ig-video-eu`, zone: `europe-west1-b`

gcloud compute instance-groups unmanaged delete INSTANCE\_GROUP\_NAME \\
   --zone=ZONE

### Deleting the VM instances

Repeat the following command to delete eight VMs, using the following name and zone combinations. Replace `VM_NAME` and `ZONE` accordingly:

-   Name: `ig-www-us-01`, zone: `us-central1-b`
-   Name: `ig-www-us-02`, zone: `us-central1-b`
-   Name: `ig-video-us-01`, zone: `us-central1-b`
-   Name: `ig-video-us-02`, zone: `us-central1-b`
-   Name: `ig-www-eu-01`, zone: `europe-west1-b`
-   Name: `ig-www-eu-02`, zone: `europe-west1-b`
-   Name: `ig-video-eu-01`, zone: `europe-west1-b`
-   Name: `ig-video-eu-02`, zone: `europe-west1-b`

gcloud compute instances delete VM\_NAME \\
   --zone=ZONE

### Deleting the firewall rules

Delete both firewall rules:

gcloud compute firewall-rules delete fw-allow-health-check-and-proxy

gcloud compute firewall-rules delete fw-allow-ssh

### Deleting the VPC network

1.  Delete the `us-subnet`:
    
    gcloud compute networks subnets delete us-subnet \\
    --region=us-central1
    
2.  Delete the `eu-subnet`:
    
    gcloud compute networks subnets delete eu-subnet \\
    --region=europe-west1
    
3.  Delete the VPC network:
    
    gcloud compute networks delete lb-network
    

You have deleted all of the resources that you set up in this project.

## What's next

-   [Using logging and monitoring](/load-balancing/docs/https/https-logging-monitoring)
-   [Troubleshooting load balancing](/load-balancing/docs/https/troubleshooting-ext-https-lbs)
-   To enable IAP, see [Enabling IAP on the external Application Load Balancer](/iap/docs/load-balancer-howto#enable-iap).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
