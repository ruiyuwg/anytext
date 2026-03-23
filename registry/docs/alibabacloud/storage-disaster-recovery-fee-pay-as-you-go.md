MaxCompute storage fees include both storage billing and backup storage billing. If you use zone-disaster recovery for storage disaster recovery, the storage fees for the project are based on the storage disaster recovery billing rules, while the billing method for backup storage remains unchanged. This topic describes the storage disaster recovery billing rules.

## **Billing for storage disaster recovery**

MaxCompute is billed based on the storage resource usage of each project on an hourly basis, where the storage resource usage is defined as the size of the compressed data replica. Projects configured with storage tiers are billed based on the amount of data accessed. The following table describes the billing rules.

Storage type

Price

Storage disaster recovery - Standard

Public cloud: USD 0.001 per GB per day.

**Note**

The SAU (Riyadh - Partner Region) region is operated by a partner, with a unit price of USD 0.0012 per GB per day.
