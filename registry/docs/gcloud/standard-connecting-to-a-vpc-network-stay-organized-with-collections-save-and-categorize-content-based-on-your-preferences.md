-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [App Engine](https://docs.cloud.google.com/appengine/docs)
-   [Standard environment](https://docs.cloud.google.com/appengine/docs/standard)
-   [Guides](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)

Send feedback

# Connecting to a VPC network Stay organized with collections Save and categorize content based on your preferences.

This page shows how to use [Serverless VPC Access](/vpc/docs/serverless-vpc-access) to connect your App Engine services in the standard environment directly to your VPC network, allowing access to Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.

**Note:** Serverless VPC Access connectors incur a monthly charge. For more information, see Serverless VPC Access [pricing](https://cloud.google.com/vpc/pricing#serverless-vpc-pricing).

## Before you begin

-   If you don't already have a VPC network in your project, [create one](/vpc/docs/create-modify-vpc-networks).
    
-   If you use Shared VPC, see [Connecting to a Shared VPC network](/appengine/docs/standard/connecting-shared-vpc).
    
-   In the Google Cloud console, ensure that the Serverless VPC Access API is enabled for your project.
    
    [Enable API](https://console.cloud.google.com/marketplace/details/google/vpcaccess.googleapis.com)
    

## Create a Serverless VPC Access connector

To send requests to your VPC network and receive the corresponding responses without using the public internet, you can use a Serverless VPC Access connector.

If your connector is located in the same project as its VPC network, you can either create a connector using an existing subnet or create a connector and a new subnet.

If your connector is located in a service project and uses a Shared VPC network, the connector and its associated VPC network are in different projects. When a connector and its VPC network are in different projects, a Shared VPC network administrator must create the connector's subnet in the Shared VPC network _before_ you can create the connector, _and_ you must create the connector using an existing subnet.

To learn more about subnet requirements, see [connector subnet requirements](/vpc/docs/configure-serverless-vpc-access#connector_subnet_requirements).

To learn about connector throughput, including machine type and scaling, see [Throughput and scaling](/vpc/docs/serverless-vpc-access#scaling).

You can create a connector by using the Google Cloud console, Google Cloud CLI, or Terraform.

### Console

1.  Go to the Serverless VPC Access overview page.
    
    [Go to Serverless VPC Access](https://console.cloud.google.com/networking/connectors)
    
2.  Click **Create connector**.
    
3.  In the **Name** field, enter a name for your connector, matching Compute Engine [naming conventions](/compute/docs/naming-resources#resource-name-format), with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
    
4.  In the **Region** field, select a region for your connector. This must match the region of your serverless service.
    
5.  In the **Network** field, select the VPC network to attach your connector to.
    
6.  In the **Subnet** field, select one of the following options:
    
    -   **Create a connector using an existing subnet:** Select the existing subnet in the _Subnet_ field.
        
    -   **Create a connector and a new subnet:** Select **Custom IP range** in the _Subnet_ field. Then, enter the first address in an unused `/28` CIDR (for example `10.8.0.0/28`) to use as the primary IPv4 address range of a new subnet that Google Cloud creates in the connector's VPC network. Ensure that the IP range does not conflict with any existing routes in the connector's VPC network. The name of the new subnet begins with the "aet-" prefix.
        
7.  (Optional) To set scaling options for additional control over the connector, click **Show Scaling Settings** to display the scaling form.
    
    1.  Set the minimum and maximum number of instances for your connector, or use the defaults, which are 2 (min) and 10 (max). The connector scales up to the maximum specified if traffic usage requires it, but _the connector does not scale back down when traffic decreases_. You must use values between `2` and `10`.
    2.  In the **Instance Type** menu, choose the machine type to be used for the connector, or use the default `e2-micro`. Notice the cost sidebar on the right when you choose the instance type, which displays bandwidth and cost estimations.
8.  Click **Create**.
    
9.  A green check mark will appear next to the connector's name when it is ready to use.
    

### gcloud

1.  In the Google Cloud console, activate Cloud Shell.
    
    [Activate Cloud Shell](https://console.cloud.google.com/?cloudshell=true)
    
    At the bottom of the Google Cloud console, a [Cloud Shell](/shell/docs/how-cloud-shell-works) session starts and displays a command-line prompt. Cloud Shell is a shell environment with the Google Cloud CLI already installed and with values already set for your current project. It can take a few seconds for the session to initialize.
    
2.  Update `gcloud` components to the latest version:
    
    gcloud components update
    
3.  Ensure that the Serverless VPC Access API is enabled for your project:
    
    gcloud services enable vpcaccess.googleapis.com
    
4.  Create the connector using one of the following options:
    
    For more details and optional arguments, see the [`gcloud` reference](/sdk/gcloud/reference/compute/networks/vpc-access/connectors/create).
    
    -   **Create a connector using an existing subnet**:
        
        gcloud compute networks vpc-access connectors create CONNECTOR\_NAME \\
         \--region REGION \\
         \--subnet SUBNET\_NAME \\
         \--subnet-project HOST\_PROJECT\_ID \\
         \--min-instances MIN \\
         \--max-instances MAX \\
         \--machine-type MACHINE\_TYPE
        
        Replace the following:
        
        -   `CONNECTOR_NAME`: a name for your connector, matching Compute Engine [naming conventions](/compute/docs/naming-resources#resource-name-format), with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
        -   `REGION`: a region for your connector, matching the region of your serverless service or job.
        -   `SUBNET_NAME`: the name of the existing subnet.
        -   `HOST_PROJECT_ID`: the Shared VPC host project ID. If the connector and existing subnet are located the same project, omit the `--subnet-project` flag.
        -   `MIN`: the minimum number of instances to use for the connector. Use an integer between `2`(the default) and `9`.
        -   `MAX`: the maximum number of instances to use for the connector. Use an integer between `3` and `10` (the default). If the connector scales up to the maximum number of instances, _it does not scale back down_.
        -   `MACHINE_TYPE`: must be one of the following: `f1-micro`, `e2-micro`, or `e2-standard-4`.
    -   **Create a connector and a new subnet**:
        
        gcloud compute networks vpc-access connectors create CONNECTOR\_NAME \\
         \--region REGION \\
         \--network VPC\_NETWORK \\
         \--range IP\_RANGE
         \--min-instances MIN \\
         \--max-instances MAX \\
         \--machine-type MACHINE\_TYPE
        
        Replace the following:
        
        -   `CONNECTOR_NAME`: a name for your connector, matching Compute Engine [naming conventions](/compute/docs/naming-resources#resource-name-format), with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
        -   `REGION`: a region for your connector, matching the region of your serverless service or job.
        -   `VPC_NETWORK`: the name of the VPC network to attach your connector to. The connector and VPC network must be located in the same project.
        -   `IP_RANGE`: provide an unused `/28` CIDR (for example `10.8.0.0/28`) to use as the primary IPv4 address range of a new subnet that Google Cloud creates in the connector's VPC network. Ensure that the IP range does not conflict with any existing routes in the connector's VPC network. The name of the new subnet begins with the "aet-" prefix.
        -   `MIN`: the minimum number of instances to use for the connector. Use an integer between `2`(the default) and `9`.
        -   `MAX`: the maximum number of instances to use for the connector. Use an integer between `3` and `10` (the default). If the connector scales up to the maximum number of instances, _it does not scale back down_.
        -   `MACHINE_TYPE`: must be one of the following: `f1-micro`, `e2-micro`, or `e2-standard-4`.
5.  Verify that your connector is in the `READY` state before using it:
    
    gcloud compute networks vpc-access connectors describe CONNECTOR\_NAME \\
    --region REGION
    
    Replace the following:
    
    -   `CONNECTOR_NAME`: the name of your connector; this is the name that you specified in the previous step.
    -   `REGION`: the region of your connector; this is the region that you specified in the previous step.
    
    The output should contain the line `state: READY`.
    

### Terraform

You can use a [Terraform resource](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/google_project_service) to enable the `vpcaccess.googleapis.com` API.

```
resource "google_project_service" "vpcaccess-api" {
  project = var.project_id # Replace this with your project ID in quotes
  service = "vpcaccess.googleapis.com"
}
```

You can use [Terraform modules](https://github.com/terraform-google-modules/terraform-google-network) to create a VPC network and subnet and then create the connector.

```
module "test-vpc-module" {
  source       = "terraform-google-modules/network/google"
  version      = "~> 16.0"
  project_id   = var.project_id # Replace this with your project ID in quotes
  network_name = "my-serverless-network"
  mtu          = 1460

  subnets = [
    {
      subnet_name   = "serverless-subnet"
      subnet_ip     = "10.10.10.0/28"
      subnet_region = "us-central1"
    }
  ]
}

module "serverless-connector" {
  source     = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta"
  version    = "~> 16.0"
  project_id = var.project_id
  vpc_connectors = [{
    name        = "central-serverless"
    region      = "us-central1"
    subnet_name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name
    # host_project_id = var.host_project_id # Specify a host_project_id for shared VPC
    machine_type  = "e2-standard-4"
    min_instances = 2
    max_instances = 7
    }
    # Uncomment to specify an ip_cidr_range
    #   , {
    #     name          = "central-serverless2"
    #     region        = "us-central1"
    #     network       = module.test-vpc-module.network_name
    #     ip_cidr_range = "10.10.11.0/28"
    #     subnet_name   = null
    #     machine_type  = "e2-standard-4"
    #     min_instances = 2
    #   max_instances = 7 }
  ]
  depends_on = [
    google_project_service.vpcaccess-api
  ]
}
```

## Configure your service to use a connector

After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.

**Note:** To deploy a service with a connector, the user or service account doing the deployment needs the [Serverless VPC Access User](https://console.cloud.google.com/iam-admin/roles/details/roles%3Cvpcaccess.user) and [Compute Viewer](https://console.cloud.google.com/iam-admin/roles/details/roles%3Ccompute.viewer) IAM roles.

To specify a connector for a service in your app:

1.  Add the `vpc_access_connector` field to your service's `app.yaml` file:
    
    vpc\_access\_connector:
     name: projects/PROJECT\_ID/locations/REGION/connectors/CONNECTOR\_NAME
    
    Where `PROJECT_ID` is your Google Cloud project ID, `REGION` is the region your connector is in, and `CONNECTOR_NAME` is the name of your connector.
    
2.  Deploy the service:
    
    ```
    gcloud app deploy
    ```
    

After you deploy your service, it is able to send requests to internal IP addresses in order to access resources in your VPC network.

## Access to VPC resources

### Required firewall rules for connectors in service projects

If you create a connector in a standalone VPC network or in the host project of a Shared VPC network, Google Cloud creates all necessary firewall rules for the connector's operation. For more information, see [Firewall rules for connectors in standalone VPC networks or Shared VPC host projects](/vpc/docs/serverless-vpc-access#connector-fw-rules-standalone-vpc-or-host-prj).

However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges:

-   [Serverless infrastructure IP range](/vpc/docs/routes#serverless-vpc-return-path): `35.199.224.0/19`
-   [Health check probe IP ranges](/load-balancing/docs/health-check-concepts#ip-ranges): `35.191.0.0/16`, `35.191.192.0/18`, and `130.211.0.0/22`

These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment. All requests from these IP addresses originate from Google infrastructure to make sure that each serverless resource only communicates with the connector that it's connected to.

You must also allow traffic from the connector's subnet to resources in your VPC network.

To perform these steps, you must have one of the following roles on the host project:

-   [Owner role](/compute/docs/access#basic-iam-roles) (`roles/owner`)
-   [Compute Security Admin role](/compute/docs/access/iam#compute.securityAdmin) (`roles/compute.securityAdmin`)
-   Custom [Identity and Access Management (IAM)](/iam) role with the [`compute.firewalls.create` permission](/compute/docs/reference/rest/v1/firewalls/insert#iam-permissions) enabled

For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.

**Important:** The rules you create using the following process apply to existing and future connectors that target a given Shared VPC network. If you want to scope these rules so they only apply to specified connectors, see [Create firewall rules for specific connectors](#create_firewall_rules_for_specific_connectors).

To apply these rules, run the following commands in the host project:

1.  Create firewall rules that allow requests from Google's serverless infrastructure and health check probes to reach all connectors in the network. In these commands, UDP and TCP ports are used as proxies and for HTTP health checks, respectively. Don't change the specified ports.
    
    gcloud compute firewall-rules create serverless-to-vpc-connector \\
        --allow tcp:667,udp:665-666,icmp \\
        --source-ranges\=35.199.224.0/19 \\
        --direction\=INGRESS \\
        --target-tags vpc-connector \\
        --network\=VPC\_NETWORK
    
    gcloud compute firewall-rules create vpc-connector-to-serverless \\
        --allow tcp:667,udp:665-666,icmp \\
        --destination-ranges\=35.199.224.0/19 \\
        --direction\=EGRESS \\
        --target-tags vpc-connector \\
        --network\=VPC\_NETWORK
    
    gcloud compute firewall-rules create vpc-connector-health-checks \\
        --allow tcp:667 \\
        --source-ranges\=35.191.0.0/16,35.191.192.0/18,130.211.0.0/22 \\
        --direction\=INGRESS \\
        --target-tags vpc-connector \\
        --network\=VPC\_NETWORK
    
    Replace `VPC_NETWORK` with the name of the VPC network to attach your connector to.
    
2.  Create an ingress firewall rule on your VPC network to allow requests from connectors that target this network:
    
    gcloud compute firewall-rules create vpc-connector-requests \\
        --allow tcp,udp,icmp \\
        --direction\=INGRESS \\
        --source-tags vpc-connector \\
        --network\=VPC\_NETWORK
    
    This rule gives the connector access to every resource in the network. To limit the resources that your serverless environment can reach by using Serverless VPC Access, see [Restrict connector VM access to VPC network resources](#connector-to-resource).
    

#### Create firewall rules for specific connectors

Following the procedure in [Required firewall rules for connectors in service projects](#allow-ranges) results in firewall rules that apply to _all_ connectors, both current ones and ones created in the future. If you don't want this, but instead want to create rules for specific connectors only, you can scope the rules so that they apply only to those connectors.

To limit the scope of the rules to specific connectors, you can use one of the following mechanisms:

-   Network tags: Every connector has two network tags: `vpc-connector` and `vpc-connector-REGION-CONNECTOR_NAME`. Use the latter format to limit the scope of your firewall rules to a specific connector.
-   IP ranges: Use this for the egress rules only, because it doesn't work for ingress rules. You can use the IP range of the connector subnet to limit the scope of your firewall rules to a single VPC connector.

### Restrict connector VM access to VPC network resources

You can restrict your connector's access to resources in its target VPC network by using [VPC firewall rules](/vpc/docs/firewalls) or rules in [firewall policies](/firewall/docs/firewall-policies-overview). You can accomplish these restrictions using one of the following strategies:

-   Create ingress rules whose targets represent the resources that you want to limit connector VM access to and whose sources represent the connector VMs.
-   Create egress rules whose targets represent the connector VMs and whose destinations represent the resources that you want to limit connector VM access to.

The following examples illustrate each strategy.

#### Restrict access using ingress rules

Choose either [network tags](/vpc/docs/serverless-vpc-access#network-tags) or CIDR ranges to control the incoming traffic to your VPC network.

### Network tags

The following steps show how to create ingress rules that restrict a connector's access to your VPC network based on the connector network tags.

1.  Ensure that you have the required permissions to insert firewall rules. You must have one of the following [Identity and Access Management (IAM)](/iam) roles:
    
    -   [Compute Security Admin role](/compute/docs/access/iam#compute.securityAdmin)
    -   Custom IAM role with the [`compute.firewalls.create`](/compute/docs/reference/rest/v1/firewalls/insert#iam-permissions) permission enabled
2.  Deny connector traffic across your VPC network.
    
    Create an ingress firewall rule with priority lower than 1000 on your VPC network to deny ingress from the connector network tag. This overrides the implicit firewall rule that Serverless VPC Access creates on your VPC network by default.
    
    gcloud compute firewall-rules create RULE\_NAME \\
    --action\=DENY \\
    --rules\=PROTOCOL \\
    --source-tags\=VPC\_CONNECTOR\_NETWORK\_TAG \\
    --direction\=INGRESS \\
    --network\=VPC\_NETWORK \\
    --priority\=PRIORITY
    
    Replace the following:
    
    -   RULE\_NAME: the name of your new firewall rule. For example, `deny-vpc-connector`.
        
    -   PROTOCOL: one or more protocols that you want to allow from your VPC connector. Supported protocols are `tcp` or `udp`. For example, `tcp:80,udp` allows TCP traffic through port 80 and UDP traffic. For more information, see the documentation for the [`allow`](/sdk/gcloud/reference/compute/firewall-rules/create#--allow) flag.
        
        For security and validation purposes, you can also configure deny rules to block traffic for the following unsupported [protocols](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml): `ah`, `all`, `esp`, `icmp`, `ipip`, and `sctp`.
        
    -   VPC\_CONNECTOR\_NETWORK\_TAG: the universal connector network tag if you want to restrict access for all connectors (including any connectors made in the future), or the unique network tag if you want to restrict access for a specific connector.
        
        -   **Universal network tag:** `vpc-connector`
        -   **Unique network tag:** `vpc-connector-REGION-CONNECTOR_NAME`
            
            Replace:
            
            -   REGION: the region of the connector that you want to restrict
            -   CONNECTOR\_NAME: the name of the connector that you want to restrict
        
        To learn more about connector network tags, see [Network tags](/vpc/docs/serverless-vpc-access#network-tags).
        
    -   VPC\_NETWORK: the name of your VPC network
        
    -   PRIORITY: an integer between 0-65535. For example, 0 sets the highest priority.
        
3.  Allow connector traffic to the resource that should receive connector traffic.
    
    Use the `allow` and `target-tags` flags to create an ingress firewall rule targeting the resource in your VPC network that you want the VPC connector to access. Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step.
    
    gcloud compute firewall-rules create RULE\_NAME \\
    --allow\=PROTOCOL \\
    --source-tags\=VPC\_CONNECTOR\_NETWORK\_TAG \\
    --direction\=INGRESS \\
    --network\=VPC\_NETWORK \\
    --target-tags\=RESOURCE\_TAG \\
    --priority\=PRIORITY
    
    Replace the following:
    
    -   RULE\_NAME: the name of your new firewall rule. For example, `allow-vpc-connector-for-select-resources`.
        
    -   PROTOCOL: one or more protocols that you want to allow from your VPC connector. Supported protocols are `tcp` or `udp`. For example, `tcp:80,udp` allows TCP traffic through port 80 and UDP traffic. For more information, see the documentation for the [`allow`](/sdk/gcloud/reference/compute/firewall-rules/create#--allow) flag.
        
    -   VPC\_CONNECTOR\_NETWORK\_TAG: the universal connector network tag if you want to restrict access for all connectors (including any connectors made in the future), or the unique network tag if you want to restrict access for a specific connector. This must match the network tag that you specified in the previous step.
        
        -   **Universal network tag:** `vpc-connector`
        -   **Unique network tag:** `vpc-connector-REGION-CONNECTOR_NAME`
            
            Replace:
            
            -   REGION: the region of the connector that you want to restrict
            -   CONNECTOR\_NAME: the name of the connector that you want to restrict
        
        To learn more about connector network tags, see [Network tags](/vpc/docs/serverless-vpc-access#network-tags).
        
    -   VPC\_NETWORK: the name of your VPC network
        
    -   RESOURCE\_TAG: the network tag for the VPC resource that you want your VPC connector to access
        
    -   PRIORITY: an integer less than the priority you set in the previous step. For example, if you set the priority for the rule you created in the previous step to 990, try 980.
        

For more information about the required and optional flags for creating firewall rules, refer to the [documentation for `gcloud compute firewall-rules create`](/sdk/gcloud/reference/compute/firewall-rules/create).

### CIDR range

The following steps show how to create ingress rules that restrict a connector's access to your VPC network based on the connector's CIDR range.

1.  Ensure that you have the required permissions to insert firewall rules. You must have one of the following [Identity and Access Management (IAM)](/iam) roles:
    
    -   [Compute Security Admin role](/compute/docs/access/iam#compute.securityAdmin)
    -   Custom IAM role with the [`compute.firewalls.create`](/compute/docs/reference/rest/v1/firewalls/insert#iam-permissions) permission enabled
2.  Deny connector traffic across your VPC network.
    
    Create an ingress firewall rule with priority lower than 1000 on your VPC network to deny ingress from the connector's CIDR range. This overrides the implicit firewall rule that Serverless VPC Access creates on your VPC network by default.
    
    gcloud compute firewall-rules create RULE\_NAME \\
    --action\=DENY \\
    --rules\=PROTOCOL \\
    --source-ranges\=VPC\_CONNECTOR\_CIDR\_RANGE \\
    --direction\=INGRESS \\
    --network\=VPC\_NETWORK \\
    --priority\=PRIORITY
    
    Replace the following:
    
    -   RULE\_NAME: the name of your new firewall rule. For example, `deny-vpc-connector`.
        
    -   PROTOCOL: one or more protocols that you want to allow from your VPC connector. Supported protocols are `tcp` or `udp`. For example, `tcp:80,udp` allows TCP traffic through port 80 and UDP traffic. For more information, see the documentation for the [`allow`](/sdk/gcloud/reference/compute/firewall-rules/create#--allow) flag.
        
        For security and validation purposes, you can also configure deny rules to block traffic for the following unsupported [protocols](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml): `ah`, `all`, `esp`, `icmp`, `ipip`, and `sctp`.
        
    -   VPC\_CONNECTOR\_CIDR\_RANGE: the CIDR range for the connector whose access you are restricting
        
    -   VPC\_NETWORK: the name of your VPC network
        
    -   PRIORITY: an integer between 0-65535. For example, 0 sets the highest priority.
        
3.  Allow connector traffic to the resource that should receive connector traffic.
    
    Use the `allow` and `target-tags` flags to create an ingress firewall rule targeting the resource in your VPC network that you want the VPC connector to access. Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step.
    
    gcloud compute firewall-rules create RULE\_NAME \\
    --allow\=PROTOCOL \\
    --source-ranges\=VPC\_CONNECTOR\_CIDR\_RANGE \\
    --direction\=INGRESS \\
    --network\=VPC\_NETWORK \\
    --target-tags\=RESOURCE\_TAG \\
    --priority\=PRIORITY
    
    Replace the following:
    
    -   RULE\_NAME: the name of your new firewall rule. For example, `allow-vpc-connector-for-select-resources`.
        
    -   PROTOCOL: one or more protocols that you want to allow from your VPC connector. Supported protocols are `tcp` or `udp`. For example, `tcp:80,udp` allows TCP traffic through port 80 and UDP traffic. For more information, see the documentation for the [`allow`](/sdk/gcloud/reference/compute/firewall-rules/create#--allow) flag.
        
    -   VPC\_CONNECTOR\_CIDR\_RANGE: the CIDR range for the connector you whose access you are restricting
        
    -   VPC\_NETWORK: the name of your VPC network
        
    -   RESOURCE\_TAG: the network tag for the VPC resource that you want your VPC connector to access
        
    -   PRIORITY: an integer less than the priority you set in the previous step. For example, if you set the priority for the rule you created in the previous step to 990, try 980.
        

For more information about the required and optional flags for creating firewall rules, see the [documentation for `gcloud compute firewall-rules create`](/sdk/gcloud/reference/compute/firewall-rules/create).

#### Restrict access using egress rules

The following steps show how to create egress rules to restrict connector access.

1.  Ensure that you have the required permissions to insert firewall rules. You must have one of the following [Identity and Access Management (IAM)](/iam) roles:
    
    -   [Compute Security Admin role](/compute/docs/access/iam#compute.securityAdmin)
    -   Custom IAM role with the [`compute.firewalls.create`](/compute/docs/reference/rest/v1/firewalls/insert#iam-permissions) permission enabled
2.  Deny egress traffic from your connector.
    
    Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination.
    
    gcloud compute firewall-rules create RULE\_NAME \\
    --action\=DENY \\
    --rules\=PROTOCOL \\
    --direction\=EGRESS \\
    --target-tags\=VPC\_CONNECTOR\_NETWORK\_TAG \\
    --network\=VPC\_NETWORK \\
    --priority\=PRIORITY
    
    Replace the following:
    
    -   RULE\_NAME: the name of your new firewall rule. For example, `deny-vpc-connector`.
        
    -   PROTOCOL: one or more protocols that you want to allow from your VPC connector. Supported protocols are `tcp` or `udp`. For example, `tcp:80,udp` allows TCP traffic through port 80 and UDP traffic. For more information, see the documentation for the [`allow`](/sdk/gcloud/reference/compute/firewall-rules/create#--allow) flag.
        
        For security and validation purposes, you can also configure deny rules to block traffic for the following unsupported [protocols](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml): `ah`, `all`, `esp`, `icmp`, `ipip`, and `sctp`.
        
    -   VPC\_CONNECTOR\_NETWORK\_TAG: the universal VPC connector network tag if you want the rule to apply to all existing VPC connectors and any VPC connectors made in the future. Or, the unique VPC connector network tag if you want to control a specific connector.
        
    -   VPC\_NETWORK: the name of your VPC network
        
    -   PRIORITY: an integer between 0-65535. For example, 0 sets the highest priority.
        
3.  Allow egress traffic when the destination is in the CIDR range that you want your connector to access.
    
    Use the `allow` and `destination-ranges` flags to create a firewall rule allowing egress traffic from your connector for a specific destination range. Set the destination range to the CIDR range of the resource in your VPC network that you want your connector to be able to access. Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step.
    
    gcloud compute firewall-rules create RULE\_NAME \\
    --allow\=PROTOCOL \\
    --destination-ranges\=RESOURCE\_CIDR\_RANGE \\
    --direction\=EGRESS \\
    --network\=VPC\_NETWORK \\
    --target-tags\=VPC\_CONNECTOR\_NETWORK\_TAG \\
    --priority\=PRIORITY
    
    Replace the following:
    
    -   RULE\_NAME: the name of your new firewall rule. For example, `allow-vpc-connector-for-select-resources`.
        
    -   PROTOCOL: one or more protocols that you want to allow from your VPC connector. Supported protocols are `tcp` or `udp`. For example, `tcp:80,udp` allows TCP traffic through port 80 and UDP traffic. For more information, see the documentation for the [`allow`](/sdk/gcloud/reference/compute/firewall-rules/create#--allow) flag.
        
    -   RESOURCE\_CIDR\_RANGE: the CIDR range for the connector whose access you are restricting
        
    -   VPC\_NETWORK: the name of your VPC network
        
    -   VPC\_CONNECTOR\_NETWORK\_TAG: the universal VPC connector network tag if you want the rule to apply to all existing VPC connectors and any VPC connectors made in the future. Or, the unique VPC connector network tag if you want to control a specific connector. If you used the unique network tag in the previous step, use the unique network tag.
        
    -   PRIORITY: an integer less than the priority you set in the previous step. For example, if you set the priority for the rule you created in the previous step to 990, try 980.
        

For more information about the required and optional flags for creating firewall rules, refer to the [documentation for `gcloud compute firewall-rules create`](/sdk/gcloud/reference/compute/firewall-rules/create).

## Manage your connector

### Controlling egress traffic from a service

By default, only requests to internal IP addresses and internal DNS names are routed through a Serverless VPC Access connector. You can specify the egress setting for your service in your `app.yaml` file.

Egress settings are not compatible with the URL Fetch service. Using the `urlfetch` library ignores egress settings, and requests will not route through a Serverless VPC Access connector.

To configure the egress behavior of your App Engine service:

1.  Add the `egress_setting` attribute to the `vpc_access_connector` field of your service's `app.yaml` file:
    
    vpc\_access\_connector:
      name: projects/PROJECT\_ID/locations/REGION/connectors/CONNECTOR\_NAME
      egress\_setting: EGRESS\_SETTING
    
    Replace:
    
    -   `PROJECT_ID` with your Google Cloud project ID
    -   `REGION` with the region your connector is in
    -   `CONNECTOR_NAME` with the name of your connector
    -   `EGRESS_SETTING` with one of the following:
        -   `private-ranges-only` Default. Only requests to [RFC 1918](https://tools.ietf.org/html/rfc1918#section-3) and [RFC 6598](https://tools.ietf.org/html/rfc6598#section-7) IP address ranges or internal DNS names are routed to your VPC network. All other requests are routed directly to the internet.
        -   `all-traffic` All outbound requests from your service are routed to your VPC network. Requests are then subject to the firewall, DNS, and routing rules of your VPC network. Note that routing all outbound requests to your VPC network increases the amount of egress handled by the Serverless VPC Access connector and can [incur charges](https://cloud.google.com/vpc/pricing#serverless-vpc-pricing).
2.  Deploy the service:
    
    ```
    gcloud app deploy
    ```
    

### Disconnect a service from a VPC network

To disconnect a service from a VPC network, remove the `vpc_access_connector` field from the `app.yaml` file and re-deploy the service.

Connectors continue to incur charges even if they have no traffic and are disconnected. For details, see [pricing](https://cloud.google.com/vpc/pricing#serverless-vpc-pricing). If you no longer need your connector, be sure to [delete](#delete) it to avoid continued billing.

### Update a connector

You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API:

-   Machine (instance) type
-   Minimum and maximum number of instances
-   Recent throughput, number of instances, and CPU utilization

#### Update machine type

**Caution:** Changing machine type can cause some long-running connections to drop.

### Console

1.  Go to the Serverless VPC Access overview page.
    
    [Go to Serverless VPC Access](https://console.cloud.google.com/networking/connectors)
    
2.  Select the connector you want to edit and click **Edit**.
    
3.  In the **Instance type** list, select your preferred machine (instance) type. To learn about available machine types, see the documentation on [Throughput and scaling](/vpc/docs/serverless-vpc-access#scaling).
    

### gcloud

1.  In the Google Cloud console, activate Cloud Shell.
    
    [Activate Cloud Shell](https://console.cloud.google.com/?cloudshell=true)
    
    At the bottom of the Google Cloud console, a [Cloud Shell](/shell/docs/how-cloud-shell-works) session starts and displays a command-line prompt. Cloud Shell is a shell environment with the Google Cloud CLI already installed and with values already set for your current project. It can take a few seconds for the session to initialize.
    
2.  To update the connector machine type, run the following command in your terminal:
    
    gcloud beta compute networks vpc-access connectors update CONNECTOR\_NAME \--region\=REGION \--machine-type\=MACHINE\_TYPE
    
    Replace the following:
    
    -   `CONNECTOR_NAME`: the name of your connector
    -   `REGION`: the name of your connector's region
    -   `MACHINE_TYPE`: your preferred machine type. To learn about available machine types, see the documentation on [Throughput and scaling](/vpc/docs/serverless-vpc-access#scaling).

#### Decrease minimum and maximum number of instances

**Note:** Decreasing the number of instances for existing connectors is not supported.

To decrease the number of minimum and maximum number of instances, you must do the following:

1.  Create a new connector with your preferred values.
2.  Update your service or function to use the new connector.
3.  Delete the old connector when you've moved its traffic.

#### Increase minimum and maximum number of instances

### Console

1.  Go to the Serverless VPC Access overview page.
    
    [Go to Serverless VPC Access](https://console.cloud.google.com/networking/connectors)
    
2.  Select the connector you want to edit and click **Edit**.
    
3.  In the **Minimum instances** field, select your preferred minimum number of instances.
    
    The smallest possible value for this field is the current value. The largest possible value for this field is the current value in the **Maximum instances** field minus 1. For example, if the value in the **Maximum instances** field is 8, then the largest possible value for the **Minimum instances** field is 7.
    
4.  In the **Maximum instances** field, select your preferred maximum number of instances.
    
    The smallest possible value for this field is the current value. The largest possible value for this field is 10.
    

### gcloud

1.  In the Google Cloud console, activate Cloud Shell.
    
    [Activate Cloud Shell](https://console.cloud.google.com/?cloudshell=true)
    
    At the bottom of the Google Cloud console, a [Cloud Shell](/shell/docs/how-cloud-shell-works) session starts and displays a command-line prompt. Cloud Shell is a shell environment with the Google Cloud CLI already installed and with values already set for your current project. It can take a few seconds for the session to initialize.
    
2.  To increase the minimum or maximum number of instances for the connector, run the following command in your terminal:
    
    gcloud beta compute networks vpc-access connectors update CONNECTOR\_NAME \--region\=REGION \--min-instances\=MIN\_INSTANCES \--max-instances\=MAX\_INSTANCES
    
    Replace the following:
    

-   `CONNECTOR_NAME`: the name of your connector
-   `REGION`: the name of your connector's region
-   `MIN_INSTANCES`: your preferred minimum number of instances.
    -   Smallest possible value for this field is the current value of `min_instances`. To find the current value, see [Find the current attribute values](#find-current-values).
    -   Largest possible value for this field is the current `max_instances` value minus 1, because `min_instances` must be less than `max_instances`. For example, if `max_instances` is 8, the largest possible value for this field is 7. If your connector uses the default `max-instances` value of 10, the largest possible value of this field is 9. To find the value of `max-instances`, see [Find the current attribute values](#find-current-values).
-   `MAX_INSTANCES`:
    
    -   Smallest possible value for this field is the current value of `max_instances`. To find the current value, see [Find the current attribute values](#find-current-values).
    -   Largest possible value for this field is 10.
    
    If you only want to increase the minimum number of instances but not the maximum, you must still specify the maximum number of instances. Conversely, if you only want to update the maximum number of instances but not the minimum, you must still specify the minimum number of instances. To keep either the minimum or maximum number of instances at their current value, specify their current value. To find their current value, see [Find the current attribute values](#find-current-values).
    

#### Find the current attribute values

To find the current attribute values for your connector, run the following in your terminal:

gcloud compute networks vpc-access connectors describe CONNECTOR\_NAME \--region\=REGION \--project\=PROJECT

Replace the following:

-   `CONNECTOR_NAME`: the name of your connector
-   `REGION`: the name of your connector's region
-   `PROJECT`: the name of your Google Cloud project

#### Monitor connector usage

Monitoring usage over time can help you determine when to adjust a connector's settings. For example, if CPU utilization spikes, you might try increasing the maximum number of instances for better results. Or if you are maxing out throughput, you might decide to switch to a larger machine type.

To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console:

1.  Go to the Serverless VPC Access overview page.
    
    [Go to Serverless VPC Access](https://console.cloud.google.com/networking/connectors)
    
2.  Click the name of the connector you want to monitor.
    
3.  Select the number of days you want to display between 1 and 90 days.
    
4.  In the **Throughput** chart, hold the pointer over the chart to view the connector's recent throughput.
    
5.  In the **Number of instances** chart, hold the pointer over the chart to view the number of instances recently used by the connector.
    
6.  In the **CPU Utilization** chart, hold the pointer over the chart to view the connector's recent CPU usage. The chart displays the CPU usage distributed across instances for the 50th, 95th, and 99th percentiles.
    

### Delete a connector

Before you delete a connector, you must remove it from any serverless resources that still use it. Deleting a connector before removing it from your serverless resources prohibits you from deleting the VPC network later.

For Shared VPC users who set up connectors in the Shared VPC host project, you can use the command [`gcloud compute networks vpc-access connectors describe`](/sdk/gcloud/reference/compute/networks/vpc-access/connectors/describe) to list the projects in which there are serverless resources that use a given connector.

To delete a connector, use the Google Cloud console or the Google Cloud CLI:

### Console

1.  Go to the Serverless VPC Access overview page in the Google Cloud console:
    
    [Go to Serverless VPC Access](https://console.cloud.google.com/networking/connectors)
    
2.  Select the connector you want to delete.
    
3.  Click **Delete**.
    

### gcloud

1.  In the Google Cloud console, activate Cloud Shell.
    
    [Activate Cloud Shell](https://console.cloud.google.com/?cloudshell=true)
    
    At the bottom of the Google Cloud console, a [Cloud Shell](/shell/docs/how-cloud-shell-works) session starts and displays a command-line prompt. Cloud Shell is a shell environment with the Google Cloud CLI already installed and with values already set for your current project. It can take a few seconds for the session to initialize.
    
2.  Use the following `gcloud` command to delete a connector:
    
    gcloud compute networks vpc-access connectors delete CONNECTOR\_NAME --region=REGION
    
    Replace the following:
    
    -   CONNECTOR\_NAME with the name of the connector you want to delete
    -   REGION with the region where the connector is located

### Manage custom constraints for projects

This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level. For information about custom organization policies, see [Creating and managing custom organization policies](/resource-manager/docs/organization-policy/creating-managing-custom-constraints).

Google Cloud Organization Policy gives you centralized, programmatic control over your organization's resources. As the [organization policy administrator](/resource-manager/docs/organization-policy/using-constraints#add-org-policy-admin), you can define an organization policy, which is a set of restrictions called _constraints_ that apply to Google Cloud resources and descendants of those resources in the [Google Cloud resource hierarchy](/resource-manager/docs/cloud-platform-resource-hierarchy). You can enforce organization policies at the organization, folder, or project level.

Organization Policy provides [predefined constraints](/resource-manager/docs/organization-policy/org-policy-constraints) for various Google Cloud services. However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom organization policies.

#### Benefits

Serverless VPC Access lets you write any number of custom constraints using most user-configured fields in the Serverless VPC Access API. For example, you can create a custom constraint specifying which subnets a Serverless VPC Access connector can use.

Once applied, requests that violate a policy that enforces a custom constraint show an error message in the gcloud CLI and in Serverless VPC Access logs. The error message contains the constraint ID and description of the violated custom constraint.

**Note:** Use the [policy simulator](/policy-intelligence/docs/test-organization-policies) to check whether existing connectors in your organization are in violation of a new custom organization policy.

#### Policy inheritance

By default, organization policies are inherited by the descendants of the resources that you enforce the policy on. For example, if you enforce a policy on a folder, Google Cloud enforces the policy on all projects in the folder. To learn more about this behavior and how to change it, refer to [Hierarchy evaluation rules](/resource-manager/docs/organization-policy/understanding-hierarchy#disallow_inheritance).

#### Limitations

Specifying machine type, minimum instances, or maximum instances is not supported.

#### Before you begin

Ensure that you know your [organization ID](/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).

##### Required roles

To get the permissions that you need to manage organization policies, ask your administrator to grant you the [Organization policy administrator](/iam/docs/roles-permissions/orgpolicy#orgpolicy.policyAdmin) (`roles/orgpolicy.policyAdmin`) IAM role on the organization resource. For more information about granting roles, see [Manage access to projects, folders, and organizations](/iam/docs/granting-changing-revoking-access).

You might also be able to get the required permissions through [custom roles](/iam/docs/creating-custom-roles) or other [predefined roles](/iam/docs/roles-overview#predefined).

#### Create a custom constraint

A custom constraint is defined in a YAML file by the resources, methods, conditions, and actions that are supported by the service that you are enforcing the organization policy on. Conditions for your custom constraints are defined using [Common Expression Language (CEL)](https://github.com/google/cel-spec/blob/master/doc/intro.md). For more information about how to build conditions in custom constraints using CEL, see the CEL section of [Creating and managing custom constraints](/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

To create a YAML file for a Serverless VPC Access custom constraint, refer to the following example:

```
name: organizations/ORGANIZATION_ID/customConstraints/CONSTRAINT_NAME
resourceTypes:
- vpcaccess.googleapis.com/Connector
methodTypes:
- CREATE
condition: "CONDITION"
actionType: ACTION
displayName: DISPLAY_NAME
description: DESCRIPTION
```

Replace the following:

-   `ORGANIZATION_ID`: your organization ID, such as `123456789`.
    
-   `CONSTRAINT_NAME`: the name you want for your new custom constraint. A custom constraint must start with `custom.`, and can only include uppercase letters, lowercase letters, or numbers, for example, custom.defaultNetworkConstraint. The maximum length of this field is 70 characters, not counting the prefix.
    
-   `CONDITION`: a [CEL condition](/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language) that is written against a representation of a supported service resource. This field has a maximum length of 1000 characters. For example, `"resource.network == default"`.
    
-   `ACTION`: the action to take if the `condition` is met. This can be either `ALLOW` or `DENY`.
    
-   `DISPLAY_NAME`: a human-friendly name for the constraint. This field has a maximum length of 200 characters.
    
-   `DESCRIPTION`: a human-friendly description of the constraint to display as an error message when the policy is violated, for example, `"Require network to not be set to default."` This field has a maximum length of 2000 characters.
    

For more information about how to create a custom constraint, see [Defining custom constraints](/resource-manager/docs/organization-policy/creating-managing-custom-constraints#defining_custom_constraints).

#### Set up a custom constraint

### Console

To create a custom constraint, do the following:

1.  In the Google Cloud console, go to the **Organization policies** page.
    
    [Go to Organization policies](https://console.cloud.google.com/iam-admin/orgpolicies)
    
2.  From the project picker, select the project that you want to set the organization policy for.
3.  Click add **Custom constraint**.
4.  In the **Display name** box, enter a human-readable name for the constraint. This name is used in error messages and can be used for identification and debugging. Don't use PII or sensitive data in display names because this name could be exposed in error messages. This field can contain up to 200 characters.
5.  In the **Constraint ID** box, enter the name that you want for your new custom constraint. A custom constraint can only contain letters (including upper and lowercase) or numbers, for example `custom.disableGkeAutoUpgrade`. This field can contain up to 70 characters, not counting the prefix (`custom.`), for example, `organizations/123456789/customConstraints/custom`. Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
6.  In the **Description** box, enter a human-readable description of the constraint. This description is used as an error message when the policy is violated. Include details about why the policy violation occurred and how to resolve the policy violation. Don't include PII or sensitive data in your description, because it could be exposed in error messages. This field can contain up to 2000 characters.
7.  In the **Resource type** box, select the name of the Google Cloud REST resource containing the object and field that you want to restrict—for example, `container.googleapis.com/NodePool`. Most resource types support up to 20 custom constraints. If you attempt to create more custom constraints, the operation fails.
8.  Under **Enforcement method**, select whether to enforce the constraint on a REST **CREATE** method or on both **CREATE** and **UPDATE** methods. If you enforce the constraint with the **UPDATE** method on a resource that violates the constraint, changes to that resource are blocked by the organization policy unless the change resolves the violation.

Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Services that support custom constraints](/organization-policy/reference/custom-constraint-supported-services).

10.  To define a condition, click edit **Edit condition**.

1.  In the **Add condition** panel, create a CEL condition that refers to a supported service resource, for example, `resource.management.autoUpgrade == false`. This field can contain up to 1000 characters. For details about CEL usage, see [Common Expression Language](/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). For more information about the service resources you can use in your custom constraints, see [Custom constraint supported services](/resource-manager/docs/organization-policy/custom-constraint-supported-services).
2.  Click **Save**.

12.  Under **Action**, select whether to allow or deny the evaluated method if the condition is met.

The deny action means that the operation to create or update the resource is blocked if the condition evaluates to true.

The allow action means that the operation to create or update the resource is permitted only if the condition evaluates to true. Every other case except ones explicitly listed in the condition is blocked.

15.  Click **Create constraint**.

When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right.

### gcloud

1.  To create a custom constraint, create a YAML file using the following format:

name: organizations/ORGANIZATION\_ID/customConstraints/CONSTRAINT\_NAME
resourceTypes: RESOURCE\_NAME
methodTypes:
  \- CREATE
condition: "CONDITION"
actionType: ACTION
displayName: DISPLAY\_NAME
description: DESCRIPTION

Replace the following:

-   `ORGANIZATION_ID`: your organization ID, such as `123456789`.
-   `CONSTRAINT_NAME`: the name that you want for your new custom constraint. A custom constraint can only contain letters (including upper and lowercase) or numbers, for example, `custom.defaultNetworkConstraint`. This field can contain up to 70 characters.
-   `RESOURCE_NAME`: the fully qualified name of the Google Cloud resource containing the object and field that you want to restrict. For example, `vpcaccess.googleapis.com/Connector`.
-   `CONDITION`: a [CEL condition](/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language) that is written against a representation of a supported service resource. This field can contain up to 1000 characters. For example, `"resource.network == default"`.

For more information about the resources available to write conditions against, see [Supported resources](#supported_resources).

-   `ACTION`: the action to take if the `condition` is met. Can only be `ALLOW`.

The allow action means that if the condition evaluates to true, the operation to create or update the resource is permitted. This also means that every other case except the one explicitly listed in the condition is blocked.

-   `DISPLAY_NAME`: a human-friendly name for the constraint. This field can contain up to 200 characters.
-   `DESCRIPTION`: a human-friendly description of the constraint to display as an error message when the policy is violated. This field can contain up to 2000 characters.

6.  After you have created the YAML file for a new custom constraint, you must set it up to make it available for organization policies in your organization. To set up a custom constraint, use the [`gcloud org-policies set-custom-constraint`](/sdk/gcloud/reference/org-policies/set-custom-constraint) command:

gcloud org-policies set-custom-constraint CONSTRAINT\_PATH

Replace `CONSTRAINT_PATH` with the full path to your custom constraint file. For example, `/home/user/customconstraint.yaml`.

After this operation is complete, your custom constraints are available as organization policies in your list of Google Cloud organization policies.

11.  To verify that the custom constraint exists, use the [`gcloud org-policies list-custom-constraints`](/sdk/gcloud/reference/org-policies/list-custom-constraints) command:

gcloud org-policies list-custom-constraints \--organization\=ORGANIZATION\_ID

Replace `ORGANIZATION_ID` with the ID of your organization resource.

For more information, see [Viewing organization policies](/resource-manager/docs/organization-policy/creating-managing-policies#viewing_organization_policies).

#### Enforce a custom constraint

You can enforce a constraint by creating an organization policy that references it, and then applying that organization policy to a Google Cloud resource.

### Console

1.  In the Google Cloud console, go to the **Organization policies** page.
    
    [Go to Organization policies](https://console.cloud.google.com/iam-admin/orgpolicies)
    
2.  From the project picker, select the project that you want to set the organization policy for.
3.  From the list on the **Organization policies** page, select your constraint to view the **Policy details** page for that constraint.
4.  To configure the organization policy for this resource, click **Manage policy**.
5.  On the **Edit policy** page, select **Override parent's policy**.
6.  Click **Add a rule**.
7.  In the **Enforcement** section, select whether this organization policy is enforced or not.
8.  Optional: To make the organization policy conditional on a tag, click **Add condition**. Note that if you add a conditional rule to an organization policy, you must add at least one unconditional rule or the policy cannot be saved. For more information, see [Scope organization policies with tags](/organization-policy/scope-policies).
9.  Click **Test changes** to simulate the effect of the organization policy. For more information, see [Test organization policy changes with Policy Simulator](/policy-intelligence/docs/test-organization-policies).
10.  To enforce the organization policy in dry-run mode, click **Set dry run policy**. For more information, see [Test organization policies](/organization-policy/test-policies).
11.  After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking **Set policy**.

### gcloud

1.  To create an organization policy with boolean rules, create a policy YAML file that references the constraint:

name: projects/PROJECT\_ID/policies/CONSTRAINT\_NAME
spec:
  rules:
  \- enforce: true

dryRunSpec:
  rules:
  \- enforce: true

Replace the following:

-   `PROJECT_ID`: the project that you want to enforce your constraint on.
-   `CONSTRAINT_NAME`: the name you defined for your custom constraint. For example, `custom.defaultNetworkConstraint`.

6.  To enforce the organization policy in [dry-run mode](/organization-policy/test-policies), run the following command with the `dryRunSpec` flag:

gcloud org-policies set-policy POLICY\_PATH \--update-mask\=dryRunSpec

Replace `POLICY_PATH` with the full path to your organization policy YAML file. The policy requires up to 15 minutes to take effect.

10.  After you verify that the organization policy in dry-run mode works as intended, set the live policy with the `org-policies set-policy` command and the `spec` flag:

gcloud org-policies set-policy POLICY\_PATH \--update-mask\=spec

Replace `POLICY_PATH` with the full path to your organization policy YAML file. The policy requires up to 15 minutes to take effect.

#### Test the custom constraint

To test the example that restricts ingress settings, deploy a connector in the project with network set to `default`:

```
gcloud compute networks vpc-access connectors create org-policy-test \
    --project=PROJECT_ID \
    --region=REGION_ID \
    --network=default
```

The output is the following:

```
Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."]
```

#### Example custom organization policies for common use cases

The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors:

Description

Constraint syntax

Require that Serverless VPC Access connectors can only use a specific network.

    name: organizations/ORGANIZATION\_ID/customConstraints/custom.allowlistNetworks
    resourceTypes:
    \- vpcaccess.googleapis.com/Connector
    methodTypes:
    \- CREATE
    condition: "resource.network \== 'allowlisted-network'"
    actionType: ALLOW
    displayName: allowlistNetworks
    description: Require connectors to use a specific network.

Description

Constraint syntax

Require that Serverless VPC Access connectors have access to only a specific subnet.

    name: organizations/ORGANIZATION\_ID/customConstraints/custom.restrictSubnetForProject
    resourceTypes:
    \- vpcaccess.googleapis.com/Connector
    methodTypes:
    \- CREATE
    condition: "resource.subnet.name \== 'allocated-subnet'"
    actionType: ALLOW
    displayName: restrictSubnetForProject
    description: This project is only allowed to use the subnet "allocated-subnet".

## Troubleshooting

### Service account permissions

To perform operations in your Google Cloud project, Serverless VPC Access uses the **Serverless VPC Access Service Agent** service account. This service account's email address has the following form:

service-PROJECT\_NUMBER@gcp-sa-vpcaccess.iam.gserviceaccount.com

By default, this service account has the **Serverless VPC Access Service Agent** role (`roles/vpcaccess.serviceAgent`). Serverless VPC Access operations may fail if you change this account's permissions.

### Poor network performance or high idle CPU utilization

Using a single connector for thousands of instances can cause performance degradation and elevated idle CPU utilization. To fix this, shard your services between multiple connectors.

### Issues with custom MTU

If you experience issues with a custom MTU, ensure that you [use the default MTU setting for Cloud Run](/run/docs/configuring/networking-best-practices#mtu).

### Errors

#### Service account needs Service Agent role error

If you use the **Restrict Resource Service Usage** [organization policy constraint](/resource-manager/docs/organization-policy/org-policy-constraints) to block Cloud Deployment Manager (`deploymentmanager.googleapis.com`), you might see the following error message:

`Serverless VPC Access service account (service-<PROJECT_NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.`

[Set the organization policy](/resource-manager/docs/organization-policy/restricting-resources#setting_the_organization_policy) to either remove Deployment Manager from the denylist or add it to the allowlist.

#### Connector creation error

If creating a connector results in an error, try the following:

-   Specify an [RFC 1918](https://tools.ietf.org/html/rfc1918) internal IP range that does not overlap with any existing IP address reservations in the VPC network.
-   Grant your project permission to use Compute Engine VM images from the project with ID `serverless-vpc-access-images`. For more information about how to update your organization policy accordingly, see [Set image access constraints](/compute/docs/images/restricting-image-access#trusted_images).

#### Unable to access resources

If you specified a connector but still cannot access resources in your VPC network, make sure that there are no firewall rules on your VPC network with a priority lower than 1000 that deny ingress from your connector's IP address range.

If you [configure a connector in a Shared VPC service project](/run/docs/configuring/shared-vpc-service-projects), make sure that your firewall rules [allow ingress from your serverless infrastructure to the connector](/vpc/docs/configure-serverless-vpc-access#allow-ranges).

#### Connection refused error

If you receive `connection refused` or `connection timeout` errors that degrade network performance, your connections could be growing without limit across invocations of your serverless application. To limit the maximum number of connections used per instance, use a client library that supports connection pools. For detailed examples of how to use connection pools, see [Manage database connections](/sql/docs/mysql/manage-connections#pools).

#### Resource not found error

When deleting a VPC network or a firewall rule, you might see a message that is similar to the following: `The resource "aet-uscentral1-subnet--1-egrfw" was not found.`

For information about this error and its solution, see [Resource not found error](/vpc/docs/using-firewalls#resource-not-found) in the VPC firewall rules documentation.

## Next steps

-   Monitor admin activity with [Serverless VPC Access audit logging](/vpc/docs/serverless-vpc-access-audit-logging).
-   Protect resources and data by [creating a service perimeter](/vpc-service-controls/docs/create-service-perimeters) with VPC Service Controls.
-   Learn about the [Identity and Access Management (IAM)](/iam) roles associated with Serverless VPC Access. See [Serverless VPC Access roles](/iam/docs/roles-permissions/vpcaccess) in the IAM documentation for a list of permissions associated with each role.
-   Learn how to [connect to Memorystore](/memorystore/docs/redis/connect-redis-instance-standard) from the App Engine standard environment.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
