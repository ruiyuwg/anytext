Data Lake Formation (DLF) is available in 10 regions across China and internationally. To call DLF APIs, use the endpoint for the region where your resources are deployed. All endpoints use HTTPS.

## Supported regions and endpoints

**Choosing an endpoint type**

-   **Public endpoint** — Use when accessing DLF from outside Alibaba Cloud, or from an Elastic Compute Service (ECS) instance without VPC network routing to DLF.
-   **VPC endpoint** — Use when your application runs inside an Alibaba Cloud Virtual Private Cloud (VPC). VPC endpoints keep traffic on the private network, reducing latency and improving security.
-   **Shared endpoint** — Use only when calling DLF from MaxCompute or Hologres. Do not use this endpoint from other clients or application code.

Region

Region ID

Public endpoint

VPC endpoint

Shared endpoint (MaxCompute, Hologres)

China (Beijing)

cn-beijing

dlf.cn-beijing.aliyuncs.com

dlf-vpc.cn-beijing.aliyuncs.com

dlf-share.cn-beijing.aliyuncs.com

China (Shanghai)

cn-shanghai

dlf.cn-shanghai.aliyuncs.com

dlf-vpc.cn-shanghai.aliyuncs.com

dlf-share.cn-shanghai.aliyuncs.com

China (Hangzhou)

cn-hangzhou

dlf.cn-hangzhou.aliyuncs.com

dlf-vpc.cn-hangzhou.aliyuncs.com

dlf-share.cn-hangzhou.aliyuncs.com

China (Shenzhen)

cn-shenzhen

dlf.cn-shenzhen.aliyuncs.com

dlf-vpc.cn-shenzhen.aliyuncs.com

dlf-share.cn-shenzhen.aliyuncs.com

China (Zhangjiakou)

cn-zhangjiakou

dlf.cn-zhangjiakou.aliyuncs.com

dlf-vpc.cn-zhangjiakou.aliyuncs.com

dlf-share.cn-zhangjiakou.aliyuncs.com

China (Hong Kong)

cn-hongkong

dlf.cn-hongkong.aliyuncs.com

dlf-vpc.cn-hongkong.aliyuncs.com

dlf-share.cn-hongkong.aliyuncs.com

Singapore

ap-southeast-1

dlf.ap-southeast-1.aliyuncs.com

dlf-vpc.ap-southeast-1.aliyuncs.com

dlf-share.ap-southeast-1.aliyuncs.com

Germany (Frankfurt)

eu-central-1

dlf.eu-central-1.aliyuncs.com

dlf-vpc.eu-central-1.aliyuncs.com

dlf-share.eu-central-1.aliyuncs.com

US (Virginia)

us-east-1

dlf.us-east-1.aliyuncs.com

dlf-vpc.us-east-1.aliyuncs.com

dlf-share.us-east-1.aliyuncs.com

Indonesia (Jakarta)

ap-southeast-5

dlf.ap-southeast-5.aliyuncs.com

dlf-vpc.ap-southeast-5.aliyuncs.com

dlf-share.ap-southeast-5.aliyuncs.com
