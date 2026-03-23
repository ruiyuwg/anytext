A region specifies the location of a DLF data center. An endpoint is the domain name used to access the DLF metadata API. This topic lists the supported regions and endpoints for DLF.

## DLF regions and endpoints

VPC endpoints support both HTTP and HTTPS. OpenAPI endpoints support only HTTPS. The available regions and endpoints are listed below.

## **Paimon REST**

**Region**

**Region ID**

**VPC endpoint**

**OpenAPI public endpoint**

China (Hangzhou)

cn-hangzhou

cn-hangzhou-vpc.dlf.aliyuncs.com

dlfnext.cn-hangzhou.aliyuncs.com

China (Beijing)

cn-beijing

cn-beijing-vpc.dlf.aliyuncs.com

dlfnext.cn-beijing.aliyuncs.com

China (Shanghai)

cn-shanghai

cn-shanghai-vpc.dlf.aliyuncs.com

dlfnext.cn-shanghai.aliyuncs.com

China (Shenzhen)

cn-shenzhen

cn-shenzhen-vpc.dlf.aliyuncs.com

dlfnext.cn-shenzhen.aliyuncs.com

China (Ulanqab)

cn-wulanchabu

cn-wulanchabu-vpc.dlf.aliyuncs.com

dlfnext.cn-wulanchabu.aliyuncs.com

China (Hong Kong)

cn-hongkong

cn-hongkong-vpc.dlf.aliyuncs.com

dlfnext.cn-hongkong.aliyuncs.com

Germany (Frankfurt)

eu-central-1

eu-central-1-vpc.dlf.aliyuncs.com

dlfnext.eu-central-1.aliyuncs.com

Japan (Tokyo)

ap-northeast-1

ap-northeast-1-vpc.dlf.aliyuncs.com

dlfnext.ap-northeast-1.aliyuncs.com

Singapore

ap-southeast-1

ap-southeast-1-vpc.dlf.aliyuncs.com

dlfnext.ap-southeast-1.aliyuncs.com

Indonesia (Jakarta)

ap-southeast-5

ap-southeast-5-vpc.dlf.aliyuncs.com

dlfnext.ap-southeast-5.aliyuncs.com

US (Silicon Valley)

us-west-1

us-west-1-vpc.dlf.aliyuncs.com

dlfnext.us-west-1.aliyuncs.com

US (Virginia)

us-east-1

us-east-1-vpc.dlf.aliyuncs.com

dlfnext.us-east-1.aliyuncs.com

**Paimon REST OpenAPI endpoint: Notes and limitations**

-   **Naming limitations:** Database and table names can contain only letters, digits, and specific symbols.
    
-   **Disabled by default:** OpenAPI endpoints are disabled by default because they allow public network access. To enable an endpoint, an administrator must manually configure it. Go to **Data Catalog** and click the target catalog. On the **Catalog Configuration** tab, add or update the `enable.openapi` advanced configuration and set its value to `true`.
    
-   **Performance:** OpenAPI endpoints have slightly higher latency than VPC endpoints.
    
-   **Required configuration:** You must configure the OSS public endpoint.
    

For more information, see [Public preview: Access DLF Paimon REST over the public network](/help/en/dlf/dlf-2-0/product-overview/public-network-connectivity-for-dlf-now-available).

## **Iceberg REST**

**Region**

**Region ID**

**VPC endpoint**

China (Hangzhou)

cn-hangzhou

cn-hangzhou-vpc.dlf.aliyuncs.com/iceberg

China (Beijing)

cn-beijing

cn-beijing-vpc.dlf.aliyuncs.com/iceberg

China (Shanghai)

cn-shanghai

cn-shanghai-vpc.dlf.aliyuncs.com/iceberg

China (Shenzhen)

cn-shenzhen

cn-shenzhen-vpc.dlf.aliyuncs.com/iceberg

China (Ulanqab)

cn-wulanchabu

cn-wulanchabu-vpc.dlf.aliyuncs.com/iceberg

China (Hong Kong)

cn-hongkong

cn-hongkong-vpc.dlf.aliyuncs.com/iceberg

Germany (Frankfurt)

eu-central-1

eu-central-1-vpc.dlf.aliyuncs.com/iceberg

Japan (Tokyo)

ap-northeast-1

ap-northeast-1-vpc.dlf.aliyuncs.com/iceberg

Singapore

ap-southeast-1

ap-southeast-1-vpc.dlf.aliyuncs.com/iceberg

Indonesia (Jakarta)

ap-southeast-5

ap-southeast-5-vpc.dlf.aliyuncs.com/iceberg

US (Silicon Valley)

us-west-1

us-west-1-vpc.dlf.aliyuncs.com/iceberg

US (Virginia)

us-east-1

us-east-1-vpc.dlf.aliyuncs.com/iceberg
