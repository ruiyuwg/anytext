Network plans are subscription-based prepaid traffic packages for Database Backup (DBS). Purchase a network plan with your Alibaba Cloud account to offset network traffic fees from cross-region backups and backup set downloads. Covered traffic is free. Only traffic exceeding your plan quota is billed on a pay-as-you-go basis.

## Supported databases

**Feature**

**Supported databases**

Cross-region backups

ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, ApsaraDB RDS for SQL Server, PolarDB for MySQL, PolarDB for PostgreSQL, ApsaraDB for MongoDB

Backup set downloads

ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, ApsaraDB RDS for SQL Server

Cross-region backups can be initiated from both the ApsaraDB RDS and PolarDB consoles. Backup set downloads are available only from the ApsaraDB RDS console.

Network plans apply to all regions worldwide. Traffic is offset based on the offset factors for the source and destination regions.

## How offset works

1.  Purchase a network plan with a specific traffic quota, such as 1 TB.
    
2.  Each day, DBS calculates the total network traffic consumed by your cross-region backups and backup set downloads.
    
3.  Offset factors convert your plan quota to effective traffic for each region. A lower offset factor means more effective traffic per unit of quota.
    
4.  Covered traffic incurs no additional charges. Excess traffic is billed daily on a pay-as-you-go basis.
    

When multiple types of traffic are generated on the same day, DBS offsets traffic in the chronological order in which bills are issued.

> Network plans of higher specifications provide larger discounts compared to the pay-as-you-go billing method.

## Offset factors

An offset factor determines how much plan quota is consumed per unit of actual traffic. A lower offset factor means your plan covers more traffic.

```
Effective traffic coverage = Plan quota / Offset factor
```

For example, with a 1 TB plan and an offset factor of 0.625, the plan covers up to 1 TB / 0.625 = 1.6 TB of actual cross-region backup traffic.

### Cross-region backup offset factors for ApsaraDB RDS in dedicated mode

**Source region**

**Destination region**

**Offset factor**

Chinese mainland

Chinese mainland

0.625

Chinese mainland

China (Hong Kong)

4.625

Chinese mainland

Outside China

4.625

China (Hong Kong)

Chinese mainland

4.625

Outside China

Chinese mainland

4.625

China (Hong Kong) or outside China

China (Hong Kong) or outside China

8

**Chinese mainland regions:** China (Hangzhou), China (Beijing), China (Shanghai), China (Shenzhen), China (Qingdao), China (Zhangjiakou), China (Chengdu), China (Heyuan), China (Hohhot), China (Ulanqab), and China (Guangzhou).

**Regions outside China:** Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), and UAE (Dubai).

### Cross-region backup offset factors for PolarDB and ApsaraDB for MongoDB

For the offset factors of cross-region backups for PolarDB for MySQL clusters, PolarDB for PostgreSQL clusters, and ApsaraDB for MongoDB instances, see [Network traffic fees of cross-region backups for PolarDB for MySQL and PolarDB for PostgreSQL clusters](/help/en/dbs/product-overview/network-traffic-fees#06a5659992vxo).

### Backup set download offset factors

**Source region**

**Offset factor**

Chinese mainland

1

China (Hong Kong) or outside China

1.25

## Offset example

You purchase a 1 TB network plan for an ApsaraDB RDS for MySQL instance in the China (Hangzhou) region. The instance generates 1,000 GB of cross-region backup traffic and 800 GB of backup set download traffic. The cross-region backup bill is issued first.

**Offset factors for China (Hangzhou):**

-   Cross-region backups: 0.625
    
-   Backup set downloads: 1
    

**Step**

**Item**

**Calculation**

**Result**

1

Effective plan coverage for cross-region backups

1 TB (1,024 GB) / 0.625

1,638.4 GB

2

Remaining quota after cross-region backup offset

(1,638.4 GB - 1,000 GB) x 0.625

399 GB

3

Effective coverage for backup set downloads

399 GB / 1

399 GB

4

Excess download traffic (billed pay-as-you-go)

800 GB - 399 GB

401 GB

The network plan fully covers the 1,000 GB of cross-region backup traffic. The remaining quota covers 399 GB of the 800 GB download traffic. The remaining 401 GB is billed on a pay-as-you-go basis.

## Limitations

**Limitation**

**Details**

Validity period

Each network plan is valid for one year. Expired plans cannot offset traffic fees.

No upgrades or refunds

Network plans cannot be upgraded or unsubscribed after purchase.

Stackable

Purchase multiple plans to combine their quotas. For example, a 50 TB plan and a 10 TB plan provide 60 TB of total quota.

Excess billing

Traffic exceeding the total quota of all active plans is billed daily on a pay-as-you-go basis.

**Important**

Network plans become invalid after they expire. Expired network plans cannot be used to offset network traffic fees.

  

## Purchase a network plan

1.  Go to the [network plans buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=cbs_network_dp_intl).
    
2.  Configure the **Specifications** and **Quantity** parameters based on your business requirements.
    
3.  Click **Buy Now**.
