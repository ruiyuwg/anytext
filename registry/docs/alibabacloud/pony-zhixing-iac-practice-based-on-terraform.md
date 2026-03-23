This article, summarized by the Pony.ai DevOps team, details the strategy, decision-making, and implementation process of using Terraform to fully automate their cloud infrastructure.

## **Background**

Founded in 2016, Pony.ai is a global autonomous vehicle technology company with R&D centers in Silicon Valley, Guangzhou, Beijing, Shanghai, and Shenzhen. The company has secured autonomous driving test and operation permits in multiple locations across the U.S. and China and collaborates with leading automakers like Toyota, Hyundai, FAW Group, and GAC Group. Pony.ai's China operations rely heavily on Alibaba Cloud to host critical business services, including data labeling, Robotaxi, and Robotruck platforms. These services utilize a wide array of cloud products, such as Elastic Compute Service (ECS), ApsaraDB RDS (RDS), Server Load Balancer (SLB), Bastionhost, and Security Center. The complexity of managing these components presented a significant challenge for the DevOps team. To address this, the team defined three core objectives:

1.  Reviewable deployments: To ensure every stage of an operational activity—from requirement gathering and architectural design to coding and deployment—is precise and adheres to company standards.
    
2.  Version-controlled deployments: To maintain a complete, traceable history of all infrastructure changes, enabling rapid rollbacks to specific versions in emergencies to minimize business impact.
    
3.  Consistent multi-environment deployments: To eliminate discrepancies between different environments (e.g., development, staging, production) and prevent failures caused by environmental inconsistencies.
    

## **Technology selection**

The team evaluated three mainstream approaches for managing public cloud resources:

1.  Cloud provider console: Direct management through the GUI.
    
2.  Custom management system: Developing or purchasing a system to interact with cloud provider APIs.
    
3.  Infrastructure as Code (IaC) frameworks: Using code to define and manage infrastructure.
    

![3steps](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0896523571/p413623.png)

IaC has become the established standard for infrastructure automation in the global tech community and is the most widely used framework for multi-cloud management. Drawing on its international experience, Pony.ai recognized the advantages of an IaC approach. Paired with Git for version control, IaC offered a clear solution to their goals for traceability and versioning. Every deployment and change can be managed as code, and rollbacks can be executed simply by reverting to a previous Git branch.

Within the IaC ecosystem, Terraform stands out as a premier open-source tool with a proven track record in enterprise production environments. By adopting Terraform, the DevOps team could focus its efforts on writing the business logic for their infrastructure rather than building a custom orchestration tool from scratch.

This approach proved significantly less complex and more agile than developing a bespoke solution on top of various cloud APIs.

Ultimately, considering Pony.ai's multi-cloud strategy and hybrid cloud architecture, the team chose Terraform for its standardization, ease of use, and vibrant community support.

## **Architecture and implementation**

The Pony.ai team implemented a Terraform-based IaC solution with a Git-centric workflow, as shown in the following figure:

![arch](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0896523571/p413625.png)

For configuration files, the team opted for JSON over HashiCorp Configuration Language (HCL) to maintain consistency with their existing JSON-based applications and simplify the code review process.

Code is organized by business service. For instance, if a service requires an SLB, certificates, and ECS instances, all these resources are defined within a single Terraform file for that service. The following is a simplified example of such a file:

```
{
    "output": {
        "ecs_instance_1-private-ip": {
            "value": "${alicloud_instance.ecs_instance_1.private_ip}"
        }, 
        "ecs_instance_2-private-ip": {
            "value": "${alicloud_instance.ecs_instance_2.private_ip}"
        }, 
        "ponyai_business_1-slb-address": {
            "value": "${alicloud_slb.ponyai_business_1-slb.address}"
        }
    }, 
    "provider": {
        "alicloud": {
            "region": "alicloud_region"
        }
    }, 
    "resource": {
        "alicloud_instance": {
            "ecs_instance_1": {
                "availability_zone": "availability_zone_1", 
                "data_disks": [
                    {
                        "category": "cloud_essd", 
                        "name": "data_volume", 
                        "size": "xx"
                    }
                ], 
                "host_name": "ecs_instance_1", 
                "image_id": "image_id_1", 
                "instance_name": "ecs_instance_1", 
                "instance_type": "ecs_instance_type", 
                "internet_charge_type": "PayByTraffic", 
                "internet_max_bandwidth_out": 10, 
                "key_name": "key_name_1", 
                "security_groups": [
                    "security_groups_1"
                ], 
                "system_disk_category": "cloud_essd", 
                "system_disk_size": "xx", 
                "tags": {
                    "host_name": "ecs_instance_1"
                }, 
                "vswitch_id": "vswitch_id_1"
            }, 
            "ecs_instance_2": {
                "availability_zone": "availability_zone_2", 
                "data_disks": [
                    {
                        "category": "cloud_essd", 
                        "name": "data_volume", 
                        "size": "xx"
                    }
                ], 
                "host_name": "availability_zone_2", 
                "image_id": "image_id_1", 
                "instance_name": "availability_zone_2", 
                "instance_type": "ecs_instance_type", 
                "internet_charge_type": "PayByTraffic", 
                "internet_max_bandwidth_out": 10, 
                "key_name": "key_name_1", 
                "security_groups": [
                    "security_groups_1"
                ], 
                "system_disk_category": "cloud_essd", 
                "system_disk_size": "xx", 
                "tags": {
                    "host_name": "availability_zone_2"
                }, 
                "vswitch_id": "vswitch_id_2"
            }
        }, 
        "alicloud_slb": {
            "slb-1": {
                "address_type": "internet", 
                "internet_charge_type": "PayByTraffic", 
                "name": "slb_name", 
                "specification": "slb_specification"
            }
        }, 
        "alicloud_slb_listener": {
            "slb-listener-1": {
                "backend_port": "xx", 
                "bandwidth": -1, 
                "frontend_port": "xx", 
                "health_check": "on", 
                "health_check_connect_port": "xx", 
                "health_check_domain": "domain_name", 
                "health_check_type": "check_type", 
                "health_check_uri": "uri_1", 
                "load_balancer_id": "${alicloud_slb.slb-1.id}", 
                "protocol": "protocol_1", 
                "scheduler": "scheduler_1", 
                "server_certificate_id": "${alicloud_slb_server_certificate.slb-certificate-1.id}", 
                "server_group_id": "${alicloud_slb_server_group.slb-server-group-1.id}"
            }
        }, 
        "alicloud_slb_server_certificate": {
            "slb-certificate-1": {
                "alicloud_certificate_id": "xx", 
                "alicloud_certificate_name": "xx", 
                "name": "certificate_1"
            }
        }, 
        "alicloud_slb_server_group": {
            "slb-server-group-1": {
                "load_balancer_id": "${alicloud_slb.slb-1.id}", 
                "name": "slb-server-group", 
                "servers": {
                    "port": "xx", 
                    "server_ids": [
                        "${alicloud_instance.ecs_instance_1.id}", 
                        "${alicloud_instance.ecs_instance_2.id}"
                    ]
                }
            }
        }
    }, 
    "terraform": {
        "backend": {
            "s3": {
                "bucket": "bucket_name", 
                "dynamodb_table": "table", 
                "key": "key_1", 
                "profile": "profile_1", 
                "region": "region_1"
            }
        }, 
        "required_providers": {
            "alicloud": {
                "source": "aliyun/alicloud", 
                "version": "xx"
            }
        }
    }
}
```

## **Business challenges**

As the team wrote more Terraform code, they encountered challenges related to code reuse and readability. Key concerns included:

-   For specific resources like ECS instances, the team was primarily interested in a subset of parameters, such as instance\_type, instance\_name, and availability\_zone.
    
-   Deploying the same service across different environments often involved identical configurations with only minor parameter changes (e.g., using an slb.s2.medium SLB instance in production versus an slb.s1.small in test). Rewriting the code for each environment led to poor readability and maintainability.
    

## **Solutions**

To solve this, the team introduced Jsonnet, an open-source data templating language, to generate the Terraform JSON files. This allowed them to abstract away repetitive boilerplate and create reusable modules by building a library of utility functions. For example, they created a generateEcs function:

```
generateEcs(instance_name,
            availability_zone,
            vswitch_id,
            security_groups,
            instance_type,
            host_name,
            data_volume_size=null,
            system_disk_size=null,
            internet_charge_type="PayByTraffic",
            image_id="ubuntu_18_04_x64_20G_alibase_20200914.vhd",
            key_name="bootstrap-bot",
            system_disk_category="cloud_essd",
            internet_max_bandwidth_out=10,
            data_disk_category="cloud_essd"): {
  instance_name: instance_name,
  availability_zone: availability_zone,
  vswitch_id: vswitch_id,
  security_groups: security_groups,
  instance_type: instance_type,
  internet_charge_type: internet_charge_type,
  image_id: image_id,
  system_disk_category: system_disk_category,
  [if system_disk_size != null then "system_disk_size"]:
    system_disk_size,
    key_name: key_name,
    internet_max_bandwidth_out: internet_max_bandwidth_out,
    host_name: host_name,
    data_disks: if data_volume_size != null then [
      {
        name: "data_volume",
        size: data_volume_size,
        category: data_disk_category,
      },
    ] else [],
      tags: {
        host_name: host_name,
      },
}
```

This abstraction enables engineers to simply call the function to generate the necessary configuration, dramatically simplifying the code required to provision multiple instances:

```
alicloud_instance: {
  [host_config.host_name]:
    ecsUtils.generateEcs(
      instance_name=host_config.host_name,
      availability_zone=host_config.az,
      security_groups=$.ecs_security_groups,
      host_name=host_config.host_name,
      instance_type=$.ecs_instance_type,
      vswitch_id=vpc_output["vswitch-public-" + host_config.az].value,
      data_volume_size=$.ecs_data_volume_size,
      system_disk_size=$.ecs_system_disk_size
    )
  for host_config in host_configs
},
```

Any adjustments can be made directly in the corresponding utility function, avoiding the need to modify each infrastructure component individually.

For handling different environments (e.g., production, staging, test) where only a few component parameters differ, the team defines a base template. Each environment's configuration then imports this base template and simply overrides the necessary parameters.

This approach allows Pony.ai to deploy a service across multiple environments using the following directory structure:

**Note**

"generated/main.tf.json", the file Terraform executes, is the JSON file generated by the Jsonnet tool from "main.tf.json.jsonnet." The file "main.tf.json.jsonnet.output" contains the outputs generated after Terraform applies the configuration.

```
├── alicloud-region
│   ├── dev
│   │   ├── generated
│   │   │   └── main.tf.json
│   │   ├── main.tf.json.jsonnet
│   │   └── main.tf.json.jsonnet.output
│   ├── prod
│   │   ├── generated
│   │   │   └── main.tf.json
│   │   ├── main.tf.json.jsonnet
│   │   └── main.tf.json.jsonnet.output
│   └── staging
│       ├── generated
│       │   └── main.tf.json
│       ├── main.tf.json.jsonnet
│       └── main.tf.json.jsonnet.output
└── ponyai_business_1_base.libsonnet
```

Using the SLB specification as an example, the production and test environments simply import the base template and provide different values. For the production environment:

```
local base = import "../../ponyai_business_1_base.libsonnet";
base {
  name: "ponyai_business_1_prod",
  environment: "prod",
  region: "alicloud_region",
  slb_specification: "slb.s2.medium"
}
```

For the test environment, only the specification and name-related fields change:

```
local base = import "../../ponyai_business_1_base.libsonnet";
base {
  name: "ponyai_business_1_dev",
  environment: "dev",
  region: "alicloud_region",
  slb_specification: "slb.s1.small"
}
```

This method significantly improves code readability and reusability. Furthermore, Jsonnet also elegantly solves the problem of dependencies between infrastructure components. For instance, creating an ECS instance on Alibaba Cloud requires a Virtual Private Cloud (VPC) ID, but the VPC is often defined and managed in a separate Terraform file. The ECS configuration must therefore reference the VPC ID generated by the VPC file. At Pony.ai, a "main.tf.json" file creates the VPC, and its ID is written to an output file ("main.tf.json.jsonnet.output") in its own directory:

```
├── ali-cloud-region
│   ├── dev
│   │   ├── generated
│   │   │   └── main.tf.json
│   │   ├── main.tf.json.jsonnet
│   │   └── main.tf.json.jsonnet.output
│   └── prod
│       ├── generated
│       │   └── main.tf.json
│       ├── main.tf.json.jsonnet
│       └── main.tf.json.jsonnet.output
```

The resulting "main.tf.json.jsonnet.output" file looks like this:

```
{
  "vpc_id": {
    "sensitive": false,
    "type": "string",
    "value": "vpc_id_for_ponyai"
  },
"vswitch-id": {
    "sensitive": false,
    "type": "string",
    "value": "vswitch_public_id_for_ponyai"
  }
}
```

Other services that need these values can then easily reference them using a simple import statement, which avoids hardcoding generated values directly into the codebase:

```
{
"ali-cloud-region": {
  prod: import "./ali-cloud-region/prod/main.tf.json.jsonnet.output",
  }
}
```

Through this layered technical abstraction, the Pony.ai DevOps team leveraged the power of the Terraform ecosystem while solving the complexity of service invocation, leading to a significant boost in overall operational efficiency.

## **Business outcomes**

Adopting an IaC methodology with Terraform and Git has yielded substantial benefits. All infrastructure parameters are now explicitly defined in code. When a service needs two ECS instances of a specific size with defined disk configurations, it's all captured in a file.

This code-based approach makes every change reviewable through a standard Git pull request (PR) process, allowing for thorough discussion and verification before any deployment.

This process ensures that the final deployment perfectly matches the initial design. Any deviations are caught during the coding phase, prompting timely adjustments. The mandatory self-testing before a PR submission further reduces review cycles.

![gitcommit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0896523571/p413626.png)

The key business benefits of this transformation can be summarized in four areas:

-   Faster: Infrastructure provisioning is no longer a series of repetitive, manual console operations. The significantly shortened production cycle allows the company to respond more quickly to business decisions and market opportunities.
    
-   More controllable: With infrastructure defined as code, every change is versioned and auditable. This elevates the organization from manual console operations to a more sophisticated, trustworthy, and traceable management system.
    
-   More efficient: Collaboration across multiple teams, including international ones, has improved dramatically, mitigating delays caused by time zone differences and varied work styles.
    
-   More secure: The risk of production accidents due to human error is greatly reduced. By combining automated, code-driven processes with environment-specific approval workflows, Pony.ai has created a robust system that safeguards its business operations.
    

## **Conclusion**

-   Management model upgrade
    

The IaC philosophy now underpins all infrastructure development at Pony.ai. The company has successfully abstracted numerous Alibaba Cloud components—including ECS, VPC, Object Storage Service (OSS), Public DNS, Resource Access Management (RAM), Simple Log Service, and users—into internal functions.

-   Business model upgrade
    

When a team needs a cloud resource, they simply use these pre-built, vetted functions. This allows the DevOps team to focus on maintaining and enhancing this internal library, driving a massive increase in operational efficiency.

-   Operations model upgrade
    

Today, more than 20 business units at Pony.ai are deployed and managed 100% via this IaC workflow. This provides a clear, versioned history of every component, facilitates rigorous reviews, and empowers the team to reject improper deployments. The result is an online environment that is clean, reliable, and scalable.

## **About the author**

The Pony.ai DevOps team

This article was contributed by an external author, and all copyrights belong to them. Alibaba Cloud assumes no responsibility for the content.
