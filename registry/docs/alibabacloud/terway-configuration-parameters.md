The default Terway configurations are suitable for most scenarios. Modifying Terway configurations is a high-risk operation that may cause errors, such as stopping the Terway component. If you have special requirements, such as increasing the size of the reserved IP address resource pool to optimize pod IP address allocation speed, you can customize the configurations as described in this topic.

## Limits

-   This topic describes only the functions of the parameters. Not all parameter combinations are suitable for all scenarios. You must thoroughly test the configurations before you apply them.
    
-   Some parameters can be configured in the console. If a parameter is not available in the console, it is not supported by the current component version. You must upgrade the Terway component before you can configure the parameter.
    

## **Terway configuration example**

The ConfigMap file for the Terway component in a cluster uses the following format.

```
apiVersion: v1
data:
  10-terway.conf: |     # Terway Container Network Interface (CNI) configuration file parameters. The configurations are transformed and delivered to /etc/cni/net.d/. Do not modify.
    {
      "cniVersion": "0.4.0",
      "name": "terway",
      "capabilities": {"bandwidth": true},
      "eniip_virtual_type": "datapathv2",
      "host_stack_cidrs": ["169.254.20.10/32"],
      "cilium_args": "",
      "type": "terway"
    }
  disable_network_policy: "false"    # Specifies whether to disable the NetworkPolicy feature.
  eni_conf: |                        # Main configuration parameters for Terway, such as the vSwitches and security groups to use.
    {
      "version": "1",
      "max_pool_size": 5,
      "min_pool_size": 0,
      "credential_path": "/var/addon/token-config",
      "enable_eni_trunking": true,
      "vswitches": {"cn-hangzhou-j":["vsw-foo"],"cn-hangzhou-k":["vsw-foo"]},
      "eni_tags": {"ack.aliyun.com":"c7c3cfoo"},
      "service_cidr": "192.168.0.0/16",
      "security_group": "sg-foo",
      "ip_stack": "ipv4",
      "vswitch_selection_policy": "ordered"
    }
  in_cluster_loadbalance: "true"   # In-cluster load balancing. This parameter takes effect only in DataPathV2 or IPvlan mode.
kind: ConfigMap
metadata:
  name: eni-config
  namespace: kube-system
```

## Parameter description

### **Main parameters**

**Parameter**

**Description**

**Allow modifications**

**Can be configured in the console**

`10-terway.conf`

Terway CNI configuration file parameters. The configurations are transformed and delivered to `/etc/cni/net.d/`.

No

No

`10-terway.conflist`

Custom Terway CNI configuration file parameters. For more information, see [Configure a custom CNI chain](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/custom-cni-chain).

Yes

No

`disable_network_policy`

Specifies whether to disable the NetworkPolicy feature.

-   `false`: enables the NetworkPolicy feature.
    
-   `true`: disables the NetworkPolicy feature.
    

Yes

Yes

`eni_conf`

Main configuration parameters for Terway, such as the vSwitches and security groups to use.

Yes

Partially

`in_cluster_loadbalance`

Specifies whether to enable in-cluster load balancing. This parameter takes effect only in DataPathV2 or IPvlan mode. For more information, see [How do I enable load balancing within a cluster in Terway IPVLAN mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-75m-g9d-3w4).

Yes

Yes

### **10-terway.conf parameters**

**Parameter**

**Type**

**Description**

**Allow modifications**

**Can be configured in the console**

`cniVersion`

string

The CNI configuration version.

No

No

`name`

string

The CNI plugin name.

No

No

`type`

string

The CNI plugin type.

No

No

`capabilities`

string

The CNI capabilities.

Yes

No

`eniip_virtual_type`

string

The ENI virtualization method.

No

No

`cilium_args`

string

The Cilium configuration parameters. Example: `--bpf-map-dynamic-size-ratio=0.003`.

**Important**

Parameter support varies with community versions and backward compatibility is not guaranteed. If you want to use these parameters in a production environment, make sure that you fully test them. If the Terway pod fails to start during an upgrade, delete the configurations and retry.

Yes

Yes

`symmetric_routing`

bool

> terway-eniip version 1.15.0 or later is required.

Specifies whether to enable symmetric routing. If enabled, policy-based routing rules are set to ensure that traffic egresses from the same interface it ingresses.

-   `true`: enabled.
    
-   `false`: disabled.
    

Yes

No

`symmetric_routing_config`

map\[string\]any

> terway-eniip version 1.15.0 or later is required.

The symmetric routing configuration parameters. The following code shows the default values and an example. In most cases, you do not need to configure these parameters.

```
{
  "symmetric_routing_config": {
    "interface": "eth0",
    "mark": 16,
    "mask": 16,
    "table_id": 100,
    "rule_priority": 600,
    "comment": "terway-symmetric"
  }
}
```

**Important**

Incorrect configurations may affect existing network configurations. Use these parameters only after you fully test them in a test environment.

Yes

No

### eni\_conf parameters

**Parameter**

**Type**

**Description**

**Allow modifications**

**Can be configured in the console**

`credential_path`

string

The Security Token Service (STS) token used to access OpenAPI. This parameter applies only to ACK managed clusters.

No

No

`service_cidr`

string

The service CIDR block of the cluster.

No

No

`vswitches`

map\[string\]\[\]string

The list of vSwitches for the elastic network interfaces (ENIs).

Yes

Yes

`eni_tags`

map\[string\]string

The tags to add to the ENIs when they are created. Modifications to this parameter do not affect existing ENIs.

No

No

`eni_tag_filter`

map\[string\]string

Filters the ENIs managed by Terway. For more information, see [Configure a whitelist for ENIs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-whitelist-for-an-eni).

Yes

No

`max_pool_size`

int

The maximum number of idle IP addresses to reserve in the IP address resource pool. Default value: 5.

Yes

Yes

`min_pool_size`

int

The minimum number of idle IP addresses to reserve in the IP address resource pool. Default value: 0.

Yes

Yes

`security_group`

string

The security group to use when you create ENIs. Modifications to this parameter do not affect existing ENIs.

Yes

No

`security_groups`

\[\]string

The security groups to use when you create ENIs. You can specify up to 10 security groups. The security groups must be of the same type. If this parameter is configured, the union of its value and the value of `security_group` is used. Modifications to this parameter do not affect existing ENIs.

Yes

Yes

`vswitch_selection_policy`

string

The policy for selecting a vSwitch when you create an ENI.

-   `ordered`: selects the vSwitch with the most remaining IP addresses. This is the default value.
    
-   `random`: randomly selects a vSwitch.
    

Yes

Yes

`enable_eip_migrate`

bool

Enables the elastic IP address (EIP) migration feature. For more information, see [Migrate EIPs from Terway to ack-extend-network-controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/migrate-terway-eip-function-to-ack-extend-network-controller).

Yes

No

`ip_stack`

string

The IP family mode of the cluster. This parameter cannot be modified.

No

No

`enable_eni_trunking`

bool

Enables the `Trunk` feature. For more information, see [Configure fixed IP addresses, independent vSwitches, and security groups for pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod).

Yes

No

`kube_client_qps`

float32

The queries per second (QPS) for the Kubernetes client. This parameter must be configured together with `kube_client_burst`.

Yes

Yes

`kube_client_burst`

int

The burst for the Kubernetes client. This parameter must be configured together with `kube_client_qps`. The value must be greater than the value of `kube_client_qps`.

Yes

Yes

`resource_group_id`

string

The resource group to which the ENIs belong when they are created. Modifications to this parameter do not affect existing ENIs.

Yes

Yes

`ip_pool_sync_period`

string

> terway-eniip version 1.15.0 or later is required.

The IP address resource pool sync period. Default value: 120 seconds.

Examples: `2m`, `120s`.

Yes

No

`idle_ip_reclaim_after`

string

> terway-eniip version 1.16.0 or later is required.

The length of time an IP address must be idle before it can be reclaimed.

Example: `60m`.

**Note**

The timer is reset if a pod is created or deleted before the IP address is reclaimed.

Yes

No

`idle_ip_reclaim_interval`

string

> terway-eniip version 1.16.0 or later is required.

The time interval between two reclaim checks.

Example: `30m`.

Yes

No

`idle_ip_reclaim_batch_size`

int

> terway-eniip version 1.16.0 or later is required.

The maximum number of IP addresses that can be reclaimed in a single batch. The value must be in the range of \[1, 10\].

Example: `5`.

Yes

No

`idle_ip_reclaim_jitter_factor`

string

> terway-eniip version 1.16.0 or later is required.

The jitter factor used to randomize the reclaim time. The value must be in the range of \[0.0, 1.0\].

Example: `0.1`.

Yes

No

## **Configuration methods**

### Configure using the console

You can configure some frequently used parameters in the console. The console validates the content and rejects parameters that are in an incorrect format.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  Click the **Networking** tab, and then click **Configuration** in the terway-eniip card.
    
4.  In the panel that appears, configure the parameters and then click **OK** in the lower-right corner.
    

### **Configure using kubectl**

Some parameters are not available in the console. You can configure these parameters using kubectl.

**Warning**

Configuring Terway using kubectl is a high-risk operation. kubectl does not validate the input. Incorrect parameters may cause errors, such as stopping the Terway component. Make sure that you fully understand the configurations before you modify them.

1.  [Connect to a cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster) and run the following command to configure advanced parameters.
    
    ```
    kubectl edit cm -n kube-system  eni-config 
    ```
    
2.  After you complete the configuration, save the changes and exit. Then, run the following command to apply the configuration.
    
    ```
     kubectl rollout restart -n kube-system daemonset.apps/terway-eniip
    ```
    

## **References**

-   To upgrade [Terway](/help/en/ack/product-overview/terway), see [Components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview).
    
-   For more information about how to manage ConfigMaps, see [Manage ConfigMaps](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-configmaps).
