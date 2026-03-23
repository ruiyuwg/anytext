-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [App Engine](https://docs.cloud.google.com/appengine/docs)
-   [Standard environment](https://docs.cloud.google.com/appengine/docs/standard)
-   [Guides](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)

Send feedback

# Configure connectors in the Shared VPC host project Stay organized with collections Save and categorize content based on your preferences.

If your organization uses Shared VPC, you can set up a Serverless VPC Access connector in either the service project or the host project. This guide shows how to set up a connector in the host project.

If you need to set up a connector in a service project, see [Configure connectors in service projects](/appengine/docs/standard/shared-vpc-service-projects). To learn about the advantages of each method, see [Connecting to a Shared VPC network](/appengine/docs/standard/connecting-shared-vpc).

## Before you begin

1.  Check the [Identity and Access Management (IAM)](/iam/docs/overview) roles for the account you are currently using. The active account must have the following roles on the host project:
    
    -   [Compute Network Viewer (`compute.networkViewer`)](https://cloud.google.com/iam/docs/roles-permissions/compute#compute.networkViewer)
    -   [Project IAM Admin (`resourcemanager.projectIamAdmin`)](https://cloud.google.com/iam/docs/roles-permissions/resourcemanager#resourcemanager.projectIamAdmin)
    -   [Service Usage Admin (`serviceuseage.serviceUsageAdmin`)](https://cloud.google.com/iam/docs/roles-permissions/serviceusage#serviceusage.serviceUsageAdmin)
    -   [Serverless VPC Access Admin (`vpcaccess.admin`)](https://cloud.google.com/iam/docs/roles-permissions/vpcaccess#vpcaccess.admin)
2.  Select the host project in your preferred environment.
    

### Console

1.  Go to the Google Cloud console dashboard.
    
    [Go to Google Cloud console dashboard](https://console.cloud.google.com/)
    
2.  In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project.
    

### gcloud

Set the default project in the gcloud CLI to the host project by running the following in your terminal:

gcloud config set project HOST\_PROJECT\_ID

Replace the following:

-   `HOST_PROJECT_ID`: the ID of the Shared VPC host project

## Create a Serverless VPC Access connector

To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector. You can create a connector by using the Google Cloud console, Google Cloud CLI, or Terraform:

### Console

1.  Enable the Serverless VPC Access API for your project.
    
    [Enable API](https://console.cloud.google.com/marketplace/details/google/vpcaccess.googleapis.com)
    
2.  Go to the Serverless VPC Access overview page.
    
    [Go to Serverless VPC Access](https://console.cloud.google.com/networking/connectors)
    
3.  Click **Create connector**.
    
4.  In the **Name** field, enter a name for your connector. The name must follow the Compute Engine [naming convention](/compute/docs/naming-resources#resource-name-format) and be less than 21 characters. Hyphens (`-`) count as two characters.
    
5.  In the **Region** field, select a region for your connector. This must match the region of your serverless service.
    
    If your service is in the region `us-central` or `europe-west`, use `us-central1` or `europe-west1`.
    
6.  In the **Network** field, select the VPC network to attach your connector to.
    
7.  Click the **Subnetwork** pulldown menu:
    
    Select an unused `/28` subnet.
    
    -   Subnets must be used exclusively by the connector. They cannot be used by other resources such as VMs, Private Service Connect, or load balancers.
    -   To confirm that your subnet is not used for Private Service Connect or Cloud Load Balancing, check that the subnet [`purpose`](https://cloud.google.com/sdk/gcloud/reference/compute/networks/subnets/create#--purpose) is `PRIVATE` by running the following command in the gcloud CLI:
        
        gcloud compute networks subnets describe SUBNET\_NAME
        Replace `SUBNET_NAME` with the name of your subnet.
8.  (Optional) To set scaling options for additional control over the connector, click **Show Scaling Settings** to display the scaling form.
    
    1.  Set the minimum and maximum number of instances for your connector, or use the defaults, which are 2 (min) and 10 (max). The connector scales out to the maximum specified as traffic increases, but _the connector does not scale back in when traffic decreases_. You must use values between `2` and `10`, and the `MIN` value must be less than the `MAX` value.
    2.  In the **Instance Type** pulldown menu, choose the machine type to be used for the connector, or use the default `e2-micro`. Notice the cost sidebar on the right when you choose the instance type, which displays bandwidth and cost estimations.
9.  Click **Create**.
    
10.  A green check mark will appear next to the connector's name when it is ready to use.
     

### gcloud

1.  Update `gcloud` components to the latest version:
    
    gcloud components update
    
2.  Enable the Serverless VPC Access API for your project:
    
    gcloud services enable vpcaccess.googleapis.com
    
3.  Create a Serverless VPC Access connector:
    
    gcloud compute networks vpc-access connectors create CONNECTOR\_NAME \\
    --region\=REGION \\
    --subnet\=SUBNET \\
    --subnet-project\=HOST\_PROJECT\_ID \\
    \# Optional: specify minimum and maximum instance values between 2 and 10, default is 2 min, 10 max.
    --min-instances\=MIN \\
    --max-instances\=MAX \\
    \# Optional: specify machine type, default is e2-micro
    --machine-type\=MACHINE\_TYPE
    
    Replace the following:
    
    -   `CONNECTOR_NAME`: a name for your connector. The name must follow the Compute Engine [naming convention](/compute/docs/naming-resources#resource-name-format) and be less than 21 characters. Hyphens (`-`) count as two characters.
    -   `REGION`: a region for your connector; this must match the region of your serverless service. If your service is in the region `us-central` or `europe-west`, use `us-central1` or `europe-west1`.
    -   `SUBNET`: the name of an unused `/28` subnet.
        -   Subnets must be used exclusively by the connector. They cannot be used by other resources such as VMs, Private Service Connect, or load balancers.
        -   To confirm that your subnet is not used for Private Service Connect or Cloud Load Balancing, check that the subnet [`purpose`](https://cloud.google.com/sdk/gcloud/reference/compute/networks/subnets/create#--purpose) is `PRIVATE` by running the following command in the gcloud CLI:
            
            gcloud compute networks subnets describe SUBNET\_NAME
            Replace the following:
            -   `SUBNET_NAME`: the name of your subnet
    -   `HOST_PROJECT_ID`: the ID of the host project
    -   `MIN`: the minimum number of instances to use for the connector. Use an integer between `2` and `9`. Default is `2`. To learn about connector scaling, see [Throughput and scaling](/vpc/docs/serverless-vpc-access#scaling).
    -   `MAX`: the maximum number of instances to use for the connector. Use an integer between `3` and `10`. Default is `10`. If traffic requires it, the connector scales out to `[MAX]` instances, _but does not scale back in_. To learn about connector scaling, see [Throughput and scaling](/vpc/docs/serverless-vpc-access#scaling).
    -   `MACHINE_TYPE`: `f1-micro`, `e2-micro`, or `e2-standard-4`. To learn about connector throughput, including machine type and scaling, see [Throughput and scaling](/vpc/docs/serverless-vpc-access#scaling).
    
    For more details and optional arguments, see the [`gcloud` reference](/sdk/gcloud/reference/beta/compute/networks/vpc-access/connectors/create).
    
4.  Verify that your connector is in the `READY` state before using it:
    
    gcloud compute networks vpc-access connectors describe CONNECTOR\_NAME \\
    --region\=REGION
    
    Replace the following:
    
    -   `CONNECTOR_NAME`: the name of your connector; this is the name that you specified in the previous step
    -   `REGION`: the region of your connector; this is the region that you specified in the previous step
    
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

## Provide access to the connector

Provide access to the connector by granting the **Serverless VPC Access User** IAM role on the host project to the principal that deploys your App Engine service.

### Console

1.  Open the IAM page.
    
    [Go to IAM](https://console.cloud.google.com/iam-admin/iam)
    
2.  Click the project dropdown menu and select the host project.
    
3.  Click **Add**.
    
4.  In the **New principals** field, add the principal that deploys your App Engine service.
    
5.  In the **Role** field, select **Serverless VPC Access User**.
    
6.  Click **Save**.
    

### gcloud

Run the following in your terminal:

gcloud projects add-iam-policy-binding HOST\_PROJECT\_ID \\
--member=PRINCIPAL \\
--role=roles/vpcaccess.user

Replace the following:

-   `HOST_PROJECT_ID`: the ID of the Shared VPC host project
-   `PRINCIPAL`: the principal that deploys your App Engine service. Learn more about the [`--member` flag](https://cloud.google.com/sdk/gcloud/reference/projects/add-iam-policy-binding#--member).

## Make the connector discoverable

To see the connector, principals need certain viewing roles on both the host project and the service project. To make your connector appear when principals view available connectors in the Google Cloud console or from their terminal, add IAM roles for principals who deploy App Engine services.

### Grant IAM roles on the host project

On the host project, grant principals who deploy App Engine services the [Serverless VPC Access Viewer (`vpcaccess.viewer`)](https://cloud.google.com/iam/docs/roles-permissions/vpcaccess#vpcaccess.viewer) role.

### Console

1.  Open the IAM page.
    
    [Go to IAM](https://console.cloud.google.com/iam-admin/iam)
    
2.  Click the project dropdown menu and select the host project.
    
3.  Click **Add**.
    
4.  In the **New principals** field, enter the email address of the principal that should be able to see the connector from the service project. You can enter multiple emails in this field.
    
5.  In the **Role** field, select **Serverless VPC Access Viewer**.
    
6.  Click **Save**.
    

### gcloud

Run the following in your terminal:

gcloud projects add-iam-policy-binding HOST\_PROJECT\_ID \\
--member=PRINCIPAL \\
--role=roles/vpcaccess.viewer

Replace the following:

-   `HOST_PROJECT_ID`: the ID of the Shared VPC host project
-   `PRINCIPAL`: the principal who deploys App Engine services. Learn more about the [`--member` flag](https://cloud.google.com/sdk/gcloud/reference/projects/add-iam-policy-binding#--member).

### Grant IAM roles on the service project

On the service project, grant principals who deploy App Engine services the [Compute Network Viewer (`compute.networkViewer`)](https://cloud.google.com/iam/docs/roles-permissions/compute#compute.networkViewer) role.

### Console

1.  Open the IAM page.
    
    [Go to IAM](https://console.cloud.google.com/iam-admin/iam)
    
2.  Click the project dropdown menu and select the service project.
    
3.  Click **Add**.
    
4.  In the **New principals** field, enter the email address of the principal that should be able to see the connector from the service project. You can enter multiple emails in this field.
    
5.  In the **Role** field, select **Compute Network Viewer**.
    
6.  Click **Save**.
    

### gcloud

Run the following in your terminal:

gcloud projects add-iam-policy-binding SERVICE\_PROJECT\_ID \\
--member=PRINCIPAL \\
--role=roles/compute.networkViewer

Replace the following:

-   `SERVICE_PROJECT_ID`: the ID of the service project
-   `PRINCIPAL`: the principal who deploys App Engine services. Learn more about the [`--member` flag](https://cloud.google.com/sdk/gcloud/reference/projects/add-iam-policy-binding#--member).

## Configure your service to use a connector

For each App Engine service that requires access to your Shared VPC, you must specify the connector for the service. The following steps show how to configure your service to use a connector.

1.  Add the `vpc_access_connector` to your service's `app.yaml` file:
    
    vpc\_access\_connector:
    name: projects/HOST\_PROJECT\_ID/locations/REGION/connectors/CONNECTOR\_NAME
    
    Replace the following:
    
    -   `HOST_PROJECT_ID`: the ID of the Shared VPC host project
    -   `REGION`: the region of your connector
    -   `CONNECTOR_NAME`: the name of your connector
2.  Deploy the service:
    
    gcloud app deploy
    

After deploying, your service is able to send requests to your Shared VPC network and receive the corresponding responses.

## Next steps

-   Monitor admin activity with [Serverless VPC Access audit logging](/vpc/docs/serverless-vpc-access-audit-logging).
-   Protect resources and data by [creating a service perimeter](/vpc-service-controls/docs/create-service-perimeters) with VPC Service Controls.
-   Learn about the [Identity and Access Management (IAM)](/iam) roles associated with Serverless VPC Access. See [Serverless VPC Access roles](/iam/docs/roles-permissions/vpcaccess) in the IAM documentation for a list of permissions associated with each role.
-   Learn how to [connect to Memorystore](/memorystore/docs/redis/connect-redis-instance-standard) from the App Engine standard environment.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
