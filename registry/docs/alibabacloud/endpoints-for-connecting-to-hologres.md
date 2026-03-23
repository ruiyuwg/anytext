Hologres provides dedicated endpoints that you can use to access Hologres services in different Alibaba Cloud regions.

## Notes

A VPC endpoint connects only to the VPC attached to the Hologres instance. To connect to other VPCs, see [Network connectivity](/help/en/vpc/getting-started/network-connection-overview#concept-wyd-112-sdb).

## Available endpoints

The following tables list the service connections for Hologres by region and network type.

Regions and service connections for the public network

**Region**

**City**

**Public network endpoint**

China (Hong Kong)

Hong Kong

`<instanceID>-cn-hongkong.hologres.aliyuncs.com:80`

Singapore

Singapore

`<instanceID>-ap-southeast-1.hologres.aliyuncs.com:80`

Malaysia (Kuala Lumpur)

Kuala Lumpur

`<instanceID>-ap-southeast-3.hologres.aliyuncs.com:80`

US (Silicon Valley)

Silicon Valley

`<instanceID>-us-west-1.hologres.aliyuncs.com:80`

Indonesia (Jakarta)

Jakarta

`<instanceID>-ap-southeast-5.hologres.aliyuncs.com:80`

Japan (Tokyo)

Tokyo

`<instanceID>-ap-northeast-1.hologres.aliyuncs.com:80`

Regions and service connections for the classic network

**Region**

**City**

**Classic network endpoint**

China (Hong Kong)

Hong Kong

`<instanceID>-cn-hongkong-internal.hologres.aliyuncs.com:80`

Singapore

Singapore

`<instanceID>-ap-southeast-1-internal.hologres.aliyuncs.com:80`

Malaysia (Kuala Lumpur)

Kuala Lumpur

`<instanceID>-ap-southeast-3-internal.hologres.aliyuncs.com:80`

US (Silicon Valley)

Silicon Valley

`<instanceID>-us-west-1-internal.hologres.aliyuncs.com:80`

Indonesia (Jakarta)

Jakarta

`<instanceID>-ap-southeast-5-internal.hologres.aliyuncs.com:80`

Japan (Tokyo)

Tokyo

`<instanceID>-ap-northeast-1-internal.hologres.aliyuncs.com:80`

Regions and service connections for VPCs

**Region**

**City**

**VPC endpoint**

China (Hong Kong)

Hong Kong

`<instanceID>-cn-hongkong-vpc-st.hologres.aliyuncs.com`

Singapore

Singapore

`<instanceID>-ap-southeast-1-vpc-st.hologres.aliyuncs.com`

Malaysia (Kuala Lumpur)

Kuala Lumpur

`<instanceID>-ap-southeast-3-vpc-st.hologres.aliyuncs.com`

US (Silicon Valley)

Silicon Valley

`<instanceID>-us-west-1-vpc-st.hologres.aliyuncs.com`

Indonesia (Jakarta)

Jakarta

`<instanceID>-ap-southeast-5-vpc-st.hologres.aliyuncs.com`

Japan (Tokyo)

Tokyo

`<instanceID>-ap-northeast-1-vpc-st.hologres.aliyuncs.com`

## Domain Name Examples

<instanceID> is the instance ID. You can obtain it by logging on to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance) and navigating to the **Instance Details** page, as shown in the following figure.![实例ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4976586761/p539583.png)

For example, assume that you purchase a Hologres instance named testdemo in Singapore. The instance ID is `hgprecn-cn-xxxk3ovx003`. The endpoints for this instance vary based on the network type:

-   Public network: `hgprecn-cn-xxxk3ovx003-ap-southeast-1.hologres.aliyuncs.com`.
    
-   Classic network: `hgprecn-cn-xxxk3ovx003-ap-southeast-1-internal.hologres.aliyuncs.com`.
    
-   VPC: `hgprecn-cn-xxxk3ovx003-ap-southeast-1-vpc-st.hologres.aliyuncs.com`.
