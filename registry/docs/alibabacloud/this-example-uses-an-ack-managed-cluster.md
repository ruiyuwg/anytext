Container Service for Kubernetes (ACK) provides a variety of add-ons to extend cluster capabilities. This topic describes how to configure add-ons by using Terraform to meet the requirements of different scenarios.

## Add-on types

Cluster add-ons in ACK are categorized into two types: **system add-ons** and **optional add-ons**. For details, see [Add-ons](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview#task-2094293).

### System add-ons

System add-ons are the foundational services required for an ACK cluster to operate. They are installed by default during cluster creation.

Examples include:

-   kube-apiserver
    
-   kube-controller-manager
    
-   cloud-controller-manager
    
-   kube-proxy
    
-   CoreDNS
    

### Optional add-ons

Optional add-ons provided by ACK are not required for the cluster to function but can be installed as needed to extend its capabilities. These add-ons are grouped into several categories, including:

-   Application management
    
-   Logging and monitoring
    
-   Storage
    
-   Networking
    
-   Security
    

## **Generate Terraform c****onfiguration** **parameters from the console**

You can use the ACK console to automatically generate the Terraform configuration required to manage cluster add-ons. This helps you manage add-ons more efficiently and easily.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, find the add-on you want to manage and click **Install** or **Configuration** as needed.
    
4.  In the dialog box that appears, click **Console-to-Code**. In the panel on the right, click the **Terraform** tab. The corresponding Terraform configuration for installing or configuring the add-on will be displayed. You can now copy this code to use in your setup.
    

## Best practices for add-on management

You can use Terraform to specify the add-ons to be installed when you create a cluster. After the cluster is created, you can manage the lifecycle of the add-ons in the cluster. The following sections describe how to manage the lifecycle of add-ons installed in a cluster and provide best practices that apply to different scenarios.

## Specify the add-ons to be installed when you create a cluster

You can specify the add-ons to be installed when you create a cluster. The following Resources are involved when you create different types of clusters:

-   ACK managed cluster: alicloud\_cs\_managed\_kubernetes
    
-   ACK dedicated cluster: alicloud\_cs\_kubernetes
    
-   ACK Edge cluster: alicloud\_cs\_edge\_kubernetes
    
-   ACK Serverless cluster: alicloud\_cs\_serverless\_kubernetes
    

You can set the `addons` object to specify the add-ons to be installed when you create one of the preceding Resources. The following code block shows the attributes of the `addons` object:

```
# This example uses an ACK managed cluster. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  # The addons object is a list. You can set the addons object in a Resource to specify the add-ons to be installed when the system creates the cluster. 
  addons {
    # The name of the add-on. You can query the name of an add-on by using alicloud_cs_kubernetes_addons of Data Source. 
    # The add-ons that are already installed and can be installed in the cluster and the versions of the add-ons. 
    name = "XXX"

    # Custom add-on parameters. You can set this attribute for cluster add-ons that support custom parameters. For more information, see the Modify the custom parameters of a cluster add-on section. 
    config = jsonencode(
      {
        ....
      }
    )

    # The value is of Boolean type and the default is false. By default, ACK automatically installs specific add-ons for you to manage the cluster. If you do not want ACK to install add-ons when ACK creates the cluster, set disabled=true. 
    disabled = XXX
  }
}
```

**Important**

You can set the addons object in a Resource to specify the add-ons to be installed only when you create a cluster. You cannot modify the addons object to manage the lifecycle of add-ons after the cluster is created. For example, you cannot use this method to update, uninstall, or modify add-ons. For more information about how to manage the lifecycle of add-ons after the cluster is created, see [Manage the lifecycle of add-ons after the cluster is created](#section-8qe-oya-9cw).

The following table describes how to configure add-ons by using Terraform in ACK clusters.

**Add-on**

**Add-on type**

**Description**

**How to configure by using Terraform**

appcenter

Application management

Allows you to manage the deployments and lifecycles of applications in different clusters in a centralized manner.

`addon { name = "appcenter" }`

progressive-delivery-tool

Application management

Allows phased releases of applications.

`addon { name = "progressive-delivery-tool" }`

alicloud-monitor-controller

Logging and monitoring

Enables integration with CloudMonitor.

`addon { name = "alicloud-monitor-controller" }`

metrics-server

Logging and monitoring

This add-on is developed based on the open source add-on Metrics Server and can collect resource metrics. This add-on also provides the Metrics API for data consumption and supports Horizontal Pod Autoscaler (HPA).

`addon { name = "metrics-server" }`

ack-node-problem-detector

Logging and monitoring

This add-on is developed based on the open source add-on Node Problem Detector (NPD), and can monitor the health status of nodes and connect to third-party monitoring platforms.

`addons { name = "ack-node-problem-detector" }`

ags-metrics-collector

Logging and monitoring

Allows Alibaba Cloud Genomics Service (AGS) users to monitor the resources that are used by each node in AGS workflows.

`addons { name = "ags-metrics-collector" }`

ack-arms-prometheus

Logging and monitoring

Monitors ACK clusters by using Managed Service for Prometheus.

`addons { name = "arms-prometheus" }`

loongcollector

Logging and monitoring

Collects container logs by using Log Service.

​`addons { name = "loongcollector" }`

csi-plugin

Volumes

Allows you to mount and unmount volumes. This add-on is automatically installed if you select the CSI add-on when you create ACK clusters.

`addons { name = "csi-plugin" }`

csi-provisioner

Volumes

Allows you to automate the provisioning of volumes. This add-on is automatically installed if you select the CSI add-on when you create ACK clusters.

`addons { name = "csi-plugin" }`

storage-operator

Volumes

Manages the lifecycle of volume add-ons.

`addons { name = "storage-operator" }`

alicloud-disk-controller

Volumes

Allows you to automate the provisioning of disk volumes.

`addons { name = "alicloud-disk-controller" }`

flexvolume

Volumes

An open source add-on that is developed at an early stage to enable volume expansion. The FlexVolume add-on is used to mount and unmount volumes. This add-on is automatically installed if you select the FlexVolume add-on when you create ACK clusters.

`addons { name = "flexvolume" }`

nginx-ingress-controller

Networks

Parses the routing rules of the Ingresses in ACK clusters. After an Ingress controller receives a request that matches a forwarding rule, the request is routed to the backend Service.

​`addons { name = "nginx-ingress-controller" }`

terway-eniip

Networks

An open source Container Network Interface (CNI) add-on that is developed by Alibaba Cloud. This add-on is used together with Virtual Private Cloud (VPC) and allows you to use standard Kubernetes network policies to regulate how containers communicate with each other. You can use Terway to set up network connectivity within a Kubernetes cluster. This add-on is automatically installed if you select the Terway add-on when you create ACK clusters.

`addons { name = "terway-eniip" }`

ack-node-local-dns

Networks

A local DNS caching solution developed based on the open source NodeLocal DNSCache project.

​`addons { name = "ack-node-local-dns" }`

aliyun-acr-credential-helper

Security

Allows you to pull private images without passwords from instances of Container Registry Enterprise Edition and Personal Edition.

`addons { name = "aliyun-acr-credential-helper" }`

gatekeeper

Security

Helps you manage and enforce the policies executed by Open Policy Agent (OPA) in ACK clusters, and allows you to manage the labels of namespaces.

`addons { name = "gatekeeper" }`

kritis-validation-hook

Security

A key add-on that is used to verify image signatures.

`addons { name = "kritis-validation-hook" }`​

security-inspector

Security

A key add-on that is used to perform security inspections.

`addons { name = "security-inspector" }`

ack-kubernetes-webhook-injector

Security

Allows you to dynamically add pod IP addresses to or remove pod IP addresses from the whitelists of various Alibaba Cloud services. This frees you from manual operations.

`addons { name = "ack-kubernetes-webhook-injector" }`

ack-arena

Others

Allows you to install open source Arena in the ACK console in an efficient manner.

`addons { name = "ack-arena" }`

ack-cost-exporter

Others

Allows you to process data by using the cost analysis feature.

`addons { name = "ack-cost-exporter" }`

ack-kubernetes-cronhpa-controller

Others

Allows you to scale workloads based on a schedule.

`addons { name = "ack-kubernetes-cronhpa-controller" }`

ack-virtual-node

Others

This add-on is developed based on the open source Virtual Kubelet project and adds support for Aliyun Provider. Improvements are made to this add-on to enable seamless integration between Kubernetes and Elastic Container Instance.

`addons { name = "ack-virtual-node" }`

aesm

Others

Intel (R) Software Guard Extensions (SGX) Architectural Enclave Service Manager (AESM) is a system add-on of Intel SGX. This add-on provides launch support for SGX Enclave, and provides services such as key provisioning and remote attestation.

`addons { name = "aesm" }`

aliyun-acr-acceleration-suite

Others

A client add-on that enables on-demand image loading. This add-on is deployed as a DaemonSet on worker nodes.

`addons { name = "aliyun-acr-acceleration-suite" }`

migrate-controller

Others

This add-on is developed based on the open source Velero project and allows you to migrate Kubernetes applications.

`addons { name = "migrate-controller" }`

resource-controller

Others

A key add-on that is used to dynamically schedule pods. If you want to enable topology-aware CPU scheduling for ACK Pro clusters, this add-on is required.

`addons { name = "resource-controller" }`

sandboxed-container-controller

Others

A controller add-on that is provided by the Sandboxed-Container runtime to enhance and extend the basic features of sandboxed containers.

`addons { name = "sandboxed-container-controller" }`

sandboxed-container-helper

Others

Allows you to perform health checks and O&M operations on sandboxed containers.

`addons { name = "sandboxed-container-helper" }`

sgx-device-plugin

Others

A Kubernetes device add-on that is developed by the ACK team and Ant Group. This add-on simplifies the use of Intel (R) Software Guard Extensions (SGX) in containers.

`addons { name = "sgx-device-plugin" }`

## Manage the lifecycle of add-ons after the cluster is created

To manage the lifecycle of add-ons, make sure that you have an ACK cluster. If you do not have an ACK cluster, create one first.

You can set the `alicloud_cs_kubernetes_addon` object in the cluster Resource to manage the lifecycle of the add-ons installed in the cluster. You can install, update, and uninstall add-ons and customize the configuration of the add-ons. The following code block shows the attributes of the `alicloud_cs_kubernetes_addon` object:

```
resource "alicloud_cs_kubernetes_addon" "addon-example" {
  # The ID of the cluster. 
  cluster_id = "XXXX"

  # The name of the add-on. You can query the add-ons that are already installed and can be installed and their versions by using alicloud_cs_kubernetes_addons of Data Source. 
  name = "XXXX"

  # The version of the add-on. 
  version = "XXXX"

  # Custom add-on parameters in a JSON string. You can use the jsonencode method of Terraform to specify the parameters or directly specify the parameters in a JSON string. Pay attention to character escaping if you directly specify the parameters in a JSON string. You can set this attribute for cluster add-ons that support custom parameters. For more information, see the Modify the custom parameters of a cluster add-on section. 
  config = jsonencode(
    {
      ....
    }
  )
}
```

You can directly specify custom parameters in a JSON string. Pay attention to character escaping when you use this method. For example, you can use one of the following methods to configure nginx-ingress-controller:

-   Use `jsonencode` to configure custom parameters:
    
    ```
    config = jsonencode(   
      {       
        IngressSlbNetworkType="internet"       
        IngressSlbSpec="slb.s2.small"     
      }  
    )
    ```
    
-   Directly specify custom parameters in a JSON string:
    
    ```
    config = "{\"IngressSlbNetworkType\":\"internet\",\"IngressSlbSpec\":\"slb.s2.small\"}"
    ```
    

### Import the installed add-ons to Terraform for management

You can use the `terraform import` method to import the add-ons that are installed in the cluster to Terraform and then manage these add-ons by using Terraform. This section uses nginx-ingress-controller as an example to demonstrate how to import the installed add-ons to Terraform.

1.  Create a file whose suffix is .tf and define a Resource. If you already have a file whose suffix is .tf, define a Resource in the file.
    
    The `alicloud_cs_kubernetes_addon` object in the Resource is used to manage the add-ons in the cluster. You do not need to add content to the object.
    
    ```
    resource "alicloud_cs_kubernetes_addon" "nginx-ingress-controller" {
    }
    ```
    
2.  Run the following command to import nginx-ingress-controller:
    
    Terraform automatically pulls the configuration of nginx-ingress-controller from the cluster and adds the configuration to the file whose suffix is .state.
    
    ```
    terraform import alicloud_cs_kubernetes_addon.nginx-ingress-controller <cluster_id>:nginx-ingress-controller
    ```
    
3.  Run the `terraform plan` command. The command output shows the difference between the configurations of nginx-ingress-controller and Resource.
    
    Modify the Resource defined in [Step 1](#step-nvx-zcr-bc1) based on the configuration difference and the content of the file whose suffix is .state. If the output of the `terraform plan` command shows no difference between the configurations of nginx-ingress-controller and Resource, the add-on is imported to Terraform.
    
    ```
    resource "alicloud_cs_kubernetes_addon" "nginx-ingress-controller" {
      cluster_id = "XXXXX"
      name = "nginx-ingress-controller"
      version = "v1.2.1-aliyun.1"
      config = jsonencode(
        {
          IngressSlbNetworkType = "internet"
          IngressSlbSpec        = "slb.s2.small"
        }
      )
    }
    ```
    

### Install cluster add-ons

You can use the `alicloud_cs_kubernetes_addon` object in the Resource to install add-ons in the cluster. This section uses the Gatekeeper add-on as an example.

1.  Specify the following information about the add-on to be installed in the file whose suffix is .tf:
    
    -   The ID of the cluster.
        
    -   The name and version of the add-on:
        
        You can query the names and versions of the add-ons that can be installed by using `alicloud_cs_kubernetes_addons` of Data Source. The result displays only the latest version of each add-on available for installation. If you want to install an earlier version, check the release notes of the add-on and specify the corresponding version number.
        
    -   (Optional) Custom add-on configuration:
        
        You can modify the `config` field to customize the add-on configuration by using the `jsonencode` method of Terraform. You can query the custom parameters of an add-on by using `alicloud_cs_kubernetes_addon_metadata` of Data Source. For more information, see [Modify the custom parameters of a cluster add-on](#custom).
        
    
    **Click to view details**
    
    ```
    resource "alicloud_cs_kubernetes_addon" "gatekeeper" {
      cluster_id = "ce36b7c61e126430b8b245730ca6d****"
      name = "gatekeeper"
      version = "v3.8.1.113-geb7947ef-aliyun"
      config = jsonencode(
        {
          AdmissionPodCpuLimit      = "1000m"
          AdmissionPodCpuRequest    = "100m"
          AdmissionPodMemoryLimit   = "512Mi"
          AdmissionPodMemoryRequest = "256Mi"
          AdmissionPodNumber        = 3
          AuditInterval             = 1800
          AuditPodCpuLimit          = "1000m"
          AuditPodCpuRequest        = "100m"
          AuditPodMemoryLimit       = "512Mi"
          AuditPodMemoryRequest     = "256Mi"
          EnableAuditPod            = false
          EnableMutatingWebhook     = false
        }
      )
    }
    ```
    
2.  un the following command to install the add-on in the cluster:
    
    ```
    terraform apply
    ```
    
    Expected output:
    
    ```
    Plan: 1 to add, 0 to change, 0 to destroy.
    
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    
      Enter a value: yes
    
    alicloud_cs_kubernetes_addon.gatekeeper: Creating...
    alicloud_cs_kubernetes_addon.gatekeeper: Still creating... [10s elapsed]
    alicloud_cs_kubernetes_addon.gatekeeper: Creation complete after 16s [id=XXXXX:gatekeeper]
    
    Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    ```
    
    If `Apply complete!` is displayed, the add-on is installed.
    

### Update cluster add-ons

You can query the versions of an add-on that are available for updating by using `alicloud_cs_kubernetes_addons` of Data Source. If a new version is available, you can change the version number to update the add-on. This section uses the Gatekeeper add-on as an example.

**Click to view details**

```
resource "alicloud_cs_kubernetes_addon" "gatekeeper" {
  cluster_id = "ce36b7c61e126430b8b245730ca6d****"
  name = "gatekeeper"

  # Change version to the version number that you want to use. 
  version = "XXXXXXXXX"
  config = jsonencode(
    {
      AdmissionPodCpuLimit      = "1000m"
      AdmissionPodCpuRequest    = "100m"
      AdmissionPodMemoryLimit   = "512Mi"
      AdmissionPodMemoryRequest = "256Mi"
      AdmissionPodNumber        = 3
      AuditInterval             = 1800
      AuditPodCpuLimit          = "1000m"
      AuditPodCpuRequest        = "100m"
      AuditPodMemoryLimit       = "512Mi"
      AuditPodMemoryRequest     = "256Mi"
      EnableAuditPod            = false
      EnableMutatingWebhook     = false
    }
  )
}
```

Run the `terraform apply` command to update the add-on. If Apply complete! is displayed, the add-on is updated.

### Modify the custom parameters of a cluster add-on

You can use `alicloud_cs_kubernetes_addons` in the Resource to modify the configuration of an add-on if the add-on supports custom parameters. This section uses the Gatekeeper add-on as an example to demonstrate how to modify the `config` field to customize the add-on configuration.

**Click to view details**

```
resource "alicloud_cs_kubernetes_addon" "gatekeeper" {
  cluster_id = "ce36b7c61e126430b8b245730ca6d****"
  name = "gatekeeper"
  version = "v3.8.1.113-geb7947ef-aliyun"

  # You can modify and apply the attributes in Config to customize the configuration of a cluster add-on. 

}
```

To query the custom parameters supported by an add-on, use `alicloud_cs_kubernetes_addon_metadata` of Data Source. The result is returned in a JSON schema. For example, to customize the configuration of the Gatekeeper add-on, add the following content to the file whose suffix is .tf.

```
# Define Data Source to obtain the schema that includes the custom parameters supported by the Gatekeeper add-on. 
data "alicloud_cs_kubernetes_addon_metadata" "default" {
  cluster_id = "ce36b7c61e126430b8b245730ca6d****"
  name       = "gatekeeper"
  version    = "v3.8.1.113-geb7947ef-aliyun"
}

# Output the schema. 
output "addon_config_schema" {
  value = data.alicloud_cs_kubernetes_addon_metadata.default.config_schema
}
```

Run the `terraform apply` command. The result is returned in a JSON schema. The `properties` attribute indicates all custom parameters supported by the add-on. You can specify the custom parameters that are returned in the schema. The following list describes the custom parameters:

-   default: the default value of the parameter.
    
-   Description: the description of the parameter.
    
-   pattern: a regular expression that specifies all valid values.
    
-   type: the data type of the parameter.
    

**Click to view details**

```
addon_config_schema = <<EOT
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "AdmissionPodCpuLimit": {
      "default": "1000m",
      "description": "cpu limit for gatekeeper",
      "pattern": "^(|[1-9][0-9]*(m|\\.\\d+)?)$",
      "type": "string"
    },
    "AdmissionPodCpuRequest": {
      "default": "100m",
      "description": "cpu request for gatekeeper",
      "pattern": "^[1-9][0-9]*(m|\\.\\d+)?$",
      "type": "string"
    },
    "AdmissionPodMemoryLimit": {
      "default": "512Mi",
      "description": "memory limit for gatekeeper",
      "pattern": "^(|[1-9][0-9]*(\\.\\d+)?(K|Ki|M|Mi|G|Gi|T|Ti)?)$",
      "type": "string"
    },

    ......
  },
  "title": "Config",
  "type": "object"
}
EOT
```

## Configure network add-ons

In ACK clusters, you can use Terway to implement the preceding container network features. For more information, see [Overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network/#concept-tfy-3kq-wfb).

The following example shows how to use Terraform to configure a network add-on:

**Click to view details**

```
# Configure the Terway network add-on and enable the Assign One ENI to Each Pod mode. This is the default mode. 
# In this mode, the number of pods on a node is limited by the elastic network interface (ENI) quota of Elastic Compute Service (ECS) instances. 

resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name = "terway-eniip"
  }
}

# Configure the Terway network add-on and enable the IPVLAN mode. 
# You can use only the Alibaba Cloud Linux 2 operating system because the One ENI for Multi-Pod mode uses the IPVLAN + eBPF virtualization technology. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name   =  "terway-eniip"
    config = "{\"IPVlan\":\"true\",\"NetworkPolicy\":\"false\"}"
  }
}

# Configure the Terway network add-on and enable Kubernetes network policies in IPVLAN mode. 
# You can use only the Alibaba Cloud Linux 2 operating system because the One ENI for Multi-Pod mode uses the IPVLAN + eBPF virtualization technology. 
# The IPVLAN mode provides network access control based on Kubernetes network policies. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name   =  "terway-eniip"
    config = "{\"IPVlan\":\"true\",\"NetworkPolicy\":\"true\"}"
  }
}
```

## Configure volume add-ons

ACK provides the FlexVolume and CSI volume add-ons. FlexVolume is discontinued. The ACK team will continuously update CSI. If you do not specify a volume add-on when you use Terraform to create a cluster, FlexVolume is installed. The following example shows how to configure a volume add-on by using Terraform:

**Click to view details**

```
# The CSI volume add-on consists of csi-plugin and csi-provisioner. If you use the CSI add-on and want ACK to create a default NAS file system and CNFS file system for dynamically provisioned volumes, you must also install the storage-operator add-on. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name = "csi-plugin"
  }
  addons {
    name = "csi-provisioner"
  }
  addons {
    name   = "storage-operator"
    config = "{\"CnfsOssEnable\":\"false\",\"CnfsNasEnable\":\"true\"}"
  }
}
```

## Configure logging add-ons

The log collection add-on in ACK stores all collected logs in Simple Log Service (SLS). The add-on supports the following two storage methods:

-   Specify an existing SLS project to store events.
    
-   Configure ACK to automatically create an SLS project to store events when ACK creates a cluster.
    

The following example shows how to configure logtail-ds by using Terraform based on the Log Service project that you choose:

**Click to view details**

```
# Use the automatically created SLS project. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name = "loongcollector"
  }
}

# Use the automatically created SLS project. Enable the automatically created Ingress dashboard. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name = "loongcollector"
    config = "{\"IngressDashboardEnabled\":\"true\"}"
  }
}


# Use an existing SLS project. Enable the automatically created Ingress dashboard. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name = "loongcollector"
    config = "{\"IngressDashboardEnabled\":\"true\",\"sls_project_name\":\"k8s-log-c55c35ff493df47b88783bea48827****\"}"
  }
}

# Install and configure node-problem-detector. 
# Configure node-problem-detector to use the automatically created SLS project to store events. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name   = "ack-node-problem-detector"
    config = "{\"sls_project_name\":\"\"}"
  }
}

# Install and configure node-problem-detector. 
# Configure node-problem-detector to use an existing SLS project to store events. node-problem-detector can share the Logstore used by loongcollector. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name   = "ack-node-problem-detector"
    config = "{\"sls_project_name\":\"k8s-log-c55c35ff493df47b88783bea48827****\"}"
  }
}
```

## Configure monitoring add-ons

ACK provides the CloudMonitor agent that runs on ECS instances and the Managed Service for Prometheus add-on. You can configure the install\_cloud\_monitor parameter by using Terraform to install the CloudMonitor agent on ECS nodes.

**Click to view details**

```
# Install the Managed Service for Prometheus. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters.
  # ...
  addons {
    name = "arms-prometheus"
  }
}
# Install the CloudMonitor agent on ECS nodes. 
resource "alicloud_cs_kubernetes_node_pool" "default" {
  # Other parameters.
  # ...
  install_cloud_monitor = true
}
```

## Configure Ingress add-ons

ACK provides the nginx-ingress-controller and alb-ingress-controller add-ons that can be used to route traffic to applications.

-   nginx-ingress-controller: This add-on is developed based on the open source ingress-nginx add-on and provides flexible and reliable routing services. For more information, see [Overview of NGINX Ingresses](/help/en/ack/serverless-kubernetes/user-guide/overview-2#concept-2043703).
    
-   alb-ingress-controller: This add-on is managed by ACK and provides flexible and reliable routing services. For more information, see [Access Services by using an ALB Ingress](/help/en/ack/serverless-kubernetes/user-guide/access-services-by-using-an-alb-ingress-2#task-2098039).
    

The following example shows how to use Terraform to configure the Ingress add-ons:

**Click to view details**

```
# Configure nginx-ingress-controller. 
# If you use an Internet-facing Server Load Balancer (SLB) instance, you must set the IngressSlbNetworkType parameter to internet in the Config. 
# If you use an internal-facing SLB instance, you must set the IngressSlbNetworkType parameter to intranet in the Config. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name   =  "nginx-ingress-controller"
    config = "{\"IngressSlbNetworkType\":\"internet\",\"IngressSlbSpec\":\"slb.s2.small\"}"
  }
}

# Configure alb-ingress-controller. 
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name   = "alb-ingress-controller"
    config = "{\"albIngress\":{\"CreateDefaultALBConfig\":false}}"  # Not created right now.
#   config = "{\"albIngress\":{\"LoadBalancerId\":\"alb-vl8uiXXXXXxdr\",\"CreateDefaultALBConfig\":true}}" # Specify an existing ALB instance.
#   config = "{\"albIngress\":{\"AddressType\":\"Internet\",\"ZoneMappings\":{\"cn-hangzhou-l\":[\"vsw-uf6XXXXXoyb4qe\"],\"cn-hangzhou-m\":[\"vsw-uf6XXXX0rlkiq\"]},\"CreateDefaultALBConfig\":true}}" # Create a new ALB instance. You must specify at least two available zones.
 
  }
}
```

## Disable the system to install default add-ons

ACK automatically installs default add-ons to simplify cluster management. If you want to disable the system to install a specific add-on when the system creates a cluster, you can use the `disabled = true` setting. The following example shows how to disable the system to install the `nginx-ingress-controller` add-on:

```
# Disable the system to install the nginx-ingress-controller add-on. 

resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters. 
  # ...

  addons {
    name     =  "nginx-ingress-controller"
    disabled = true
  }
}
```

## Add-ons that are automatically installed if no add-on is specified in the addons object

The system automatically installs the following add-ons if you do not specify an add-on in the addons object:

**Cluster type**

**Add-on type**

**Name of the default add-on that is installed**

**Description**

ACK cluster

System add-ons

kube-scheduler

Schedules cluster resources.

cloud-controller-manager

Creates SLB instances for your applications and manages the route entries of nodes.

kube-apiserver

The bus and Ingress gateway of an ACK cluster.

kube-controller-manager

A cluster internal resource manager.

Logging and monitoring add-ons

alicloud-monitor-controller

Monitors the lifecycles and status of containers.

metrics-server

Collects container resource usage metrics for the auto scaling mechanism.

Volume add-ons

csi-plugin

Manages the lifecycle of volumes. This add-on is recommended.

csi-provisioner

Creates and deletes volumes. This add-on is recommended.

storage-operator

Manages the lifecycle of storage add-ons. This add-on is recommended.

Network add-ons

CoreDNS

Serves as a DNS server for a Kubernetes cluster.

Gateway API

A gateway resource model.

terway-eniip

The Terway network add-on.

nginx-ingress-controller (the Pro edition is installed by default)

Parses the traffic forwarding rules that are configured in NGINX Ingresses.

ACK Serverless cluster

System add-ons

kube-scheduler

Schedules cluster resources.

ack-virtual-node

Scales resources based on virtual nodes and elastic container instances.

cloud-controller-manager

Creates SLB instances for your applications and manages the route entries of nodes.

kube-apiserver

The bus and Ingress gateway of an ACK cluster.

kube-controller-manager

A cluster internal resource manager.

Network add-ons

CoreDNS

Serves as a DNS server for a Kubernetes cluster.

ACK Edge cluster

System add-ons

kube-scheduler

Schedules cluster resources.

cloud-controller-manager

Creates SLB instances for your applications and manages the route entries of nodes.

kube-apiserver

The bus and Ingress gateway of an ACK cluster.

kube-controller-manager

A cluster internal resource manager.

Logging and monitoring add-ons

alicloud-monitor-controller

Monitors the lifecycles and status of containers.

metrics-server

Collects container resource usage metrics for the auto scaling mechanism.

Network add-ons

CoreDNS

Serves as a DNS server for a Kubernetes cluster.

terway-eniip

The Terway network add-on.

Others

edge-controller-manager

\-

edge-tunnel-agent

Adopts the C/S architecture to create reverse O&M tunnels for cloud-edge collaboration.

edge-tunnel-server

Adopts the C/S architecture to create reverse O&M tunnels for cloud-edge collaboration.

yurt-app-manager

Provides node pools and cell-based deployment for ACK Edge clusters.

## Examples of commonly used configurations

This section provides examples of commonly used configurations for your reference.

-   Use Terway as the network add-on.
    
-   Choose CSI or FlexVolume based on your business requirements. We recommend that you choose CSI because FlexVolume is discontinued.
    
-   Choose nginx-ingress-controller or alb-ingress-controller based on your requirements.
    
-   You can choose other add-ons based on your business requirements.
    

**Example 1: Do not install any add-ons**

```
# Do not install any add-ons when you create the cluster. In this scenario, only the default add-ons are installed. 
# A simple template. Replace the variables with the desired values. 
resource "alicloud_cs_managed_kubernetes" "default" {
  name                         = var.name
  cluster_spec                 = "ack.pro.small"
  is_enterprise_security_group = true
  pod_cidr                     = "172.20.0.0/16"
  service_cidr                 = "172.21.0.0/20"
  worker_vswitch_ids           = [var.vswitch_id]
}
```

**Example 2: Install Terway**

```
# Create a cluster that has Terway installed. 
# Enable the Assign One ENI to Each Pod mode. 

resource "alicloud_cs_managed_kubernetes" "default" {
  name                         = var.name
  cluster_spec                 = "ack.pro.small"
  is_enterprise_security_group = true
  pod_vswitch_ids              = [var.vswitch_id]
  service_cidr                 = "172.21.0.0/20"
  worker_vswitch_ids           = [var.vswitch_id]

  addons {
    name = "terway-eni"
  }
}

# Create a cluster that has Terway installed. 
# Enable the IPVLAN mode and enable Kubernetes network policies. 
resource "alicloud_cs_managed_kubernetes" "default" {
  name                         = var.name
  cluster_spec                 = "ack.pro.small"
  is_enterprise_security_group = true
  service_cidr                 = "172.21.0.0/20"
  pod_vswitch_ids              = [var.vswitch_id]
  worker_vswitch_ids           = [var.vswitch_id]

  addons {
    name   =  "terway-eniip"
    config = "{\"IPVlan\":\"true\",\"NetworkPolicy\":\"true\"}"
  }
}
```

**Example 3: Install the Terway, CSI, and nginx-ingress-controller add-ons**

```
# A template for installing the Terway, CSI, and nginx-ingress-controller add-ons. 

resource "alicloud_cs_managed_kubernetes" "default" {
  name                         = var.name
  cluster_spec                 = "ack.pro.small"
  is_enterprise_security_group = true
  service_cidr                 = "172.21.0.0/20"
  pod_vswitch_ids              = [var.vswitch_id]
  worker_vswitch_ids           = [var.vswitch_id]

  addons {
    name = "terway-eniip"
    config = "{\"IPVlan\":\"true\",\"NetworkPolicy\":\"false\"}"
  }
  addons {
    name = "csi-plugin"
  }
  addons {
    name = "csi-provisioner"
  }
  addons {
    name = "storage-operator"
    config = "{\"CnfsOssEnable\":\"false\",\"CnfsNasEnable\":\"true\"}"
  }
  addons {
    name = "loongcollector"
    config = "{\"IngressDashboardEnabled\":\"true\"}"
  }
  addons {
    name = "ack-node-problem-detector"
    config = "{\"sls_project_name\":\"\"}"
  }
  addons {
    name = "nginx-ingress-controller"
    config = "{\"IngressSlbNetworkType\":\"internet\",\"IngressSlbSpec\":\"slb.s2.small\"}"
  }
  addons {
    name = "ack-node-local-dns"
  }
  addons {
    name = "arms-prometheus"
  }
  addons {
    name = "alicloud-monitor-controller"
    config = "{\"group_contact_ids\":\"[10619]\"}"
  }
}
```
