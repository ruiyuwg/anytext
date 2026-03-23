This topic describes the node specifications and disk types that are supported by Alibaba Cloud Elasticsearch (ES). You can refer to this information when you purchase an Alibaba Cloud ES or Logstash cluster by calling an API.

## **Node specifications for ES clusters**

**CPU type**

**Category**

**Node specifications**

**vCPU and memory**

Intel

Disk-based (1:2 family)

elasticsearch.n4.small

**Note**

No longer available for purchase.

1 vCPU and 2 GiB of memory

elasticsearch.sn1ne.large

2 vCPUs and 4 GiB of memory

elasticsearch.sn1ne.2xlarge

**Note**

Supported only in some regions. The specifications on the [buy page](https://common-buy-intl.alibabacloud.com/new?spm=a2cba.elasticsearch_instance_list.c_list.1.33e668de83pVJC&commodityCode=elasticsearch_intl&orderType=BUY&from_biz_channel=console&regionId=cn-hangzhou) prevail.

8 vCPUs and 16 GiB of memory

elasticsearch.sn1ne.4xlarge

**Note**

Supported only in some regions. The specifications on the [buy page](https://common-buy-intl.alibabacloud.com/new?spm=a2cba.elasticsearch_instance_list.c_list.1.33e668de83pVJC&commodityCode=elasticsearch_intl&orderType=BUY&from_biz_channel=console&regionId=cn-hangzhou) prevail.

16 vCPUs and 32 GiB of memory

Disk-based (1:4 family)

elasticsearch.sn2ne.large

2 vCPUs and 8 GiB of memory

elasticsearch.sn2ne.xlarge

4 vCPUs and 16 GiB of memory

elasticsearch.sn2ne.2xlarge

8 vCPUs and 32 GiB of memory

elasticsearch.sn2ne.4xlarge

16 vCPUs and 64 GiB of memory

Disk-based (1:8 family)

elasticsearch.r5.2xlarge

**Note**

Supported only in some regions. The specifications on the [buy page](https://common-buy-intl.alibabacloud.com/new?spm=a2cba.elasticsearch_instance_list.c_list.1.33e668de83pVJC&commodityCode=elasticsearch_intl&orderType=BUY&from_biz_channel=console&regionId=cn-hangzhou) prevail.

8 vCPUs and 64 GiB of memory

**Note**

The cluster type with 1 vCPU and 2 GiB of memory is no longer available for purchase. This cluster type is suitable only for test scenarios and is not applicable to production environments. This cluster type is not covered by the Service-Level Agreement (SLA). We recommend that you upgrade low-specification cluster types to high-specification cluster types at your earliest convenience.

## **Node specifications for Logstash clusters**

**CPU type**

**Category**

**Node specifications**

**vCPU and memory**

Intel

Disk-based (1:1 family)

elasticsearch.ic5.xlarge

4 vCPUs and 4 GiB of memory

elasticsearch.ic5.2xlarge

8 vCPUs and 8 GiB of memory

elasticsearch.ic5.3xlarge

12 vCPUs and 12 GiB of memory

elasticsearch.ic5.4xlarge

16 vCPUs and 16 GiB of memory

Disk-based (1:2 family)

elasticsearch.sn1ne.large

2 vCPUs and 4 GiB of memory

elasticsearch.sn1ne.4xlarge

16 vCPUs and 32 GiB of memory

elasticsearch.sn1ne.8xlarge

32 vCPUs and 64 GiB of memory

Disk-based (1:4 family)

elasticsearch.sn2ne.large

2 vCPUs and 8 GiB of memory

elasticsearch.sn2ne.xlarge

4 vCPUs and 16 GiB of memory

elasticsearch.sn2ne.2xlarge

8 vCPUs and 32 GiB of memory

elasticsearch.sn2ne.4xlarge

16 vCPUs and 64 GiB of memory

Disk-based (1:8 family)

elasticsearch.r5.large

2 vCPUs and 16 GiB of memory

elasticsearch.r5.xlarge

4 vCPUs and 32 GiB of memory

elasticsearch.r5.2xlarge

8 vCPUs and 64 GiB of memory

## Node storage types

Cluster type

Node storage type

Description

Elasticsearch

cloud\_essd\_PL0

ESSD PL0

cloud\_essd\_PL1

ESSD PL1

cloud\_essd\_PL2

ESSD PL2

cloud\_essd\_PL3

ESSD PL3

cloud\_efficiency

ultra disk

cloud\_ssd

standard SSD

Logstash

cloud\_efficiency

ultra disk

cloud\_ssd

SSD

For more information about disks, see [Overview of disks](/help/en/ecs/user-guide/disks-2#concept-n1s-rzb-wdb).

## **References**

-   Available node specifications vary by region and version. For more information, see the [Purchase page](https://common-buy-intl.alibabacloud.com/new?spm=a2cba.elasticsearch_instance_list.c_list.1.33e668de83pVJC&commodityCode=elasticsearch_intl&orderType=BUY&from_biz_channel=console&regionId=cn-hangzhou).
    
-   To purchase an ES cluster by calling an API, see [createInstance](/help/en/es/developer-reference/api-createinstance).
    
-   To purchase a Logstash cluster by calling an API, see [CreateLogstash](/help/en/es/developer-reference/api-createlogstash).
