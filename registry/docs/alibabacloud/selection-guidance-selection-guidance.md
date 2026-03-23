Alibaba Cloud Object Storage Service (OSS) supports all types of data, including images, audio files, video files, documents, software packages, files in CSV, JSON, and Parquet formats, and backup files. Every object stored in a bucket has a storage class that determines how the data is stored, how quickly it can be retrieved, and how much it costs.

By default, objects stored in OSS use the **Standard** storage class. OSS also offers **Infrequent Access (IA)**, **Archive**, **Cold Archive**, and **Deep Cold Archive** storage classes for data with different access patterns.

## How to choose a storage class

When selecting a storage class, evaluate the following factors:

**Factor**

**Description**

**Range**

**Access frequency**

How often you read and write data

Frequent to rare

**Retrieval time**

How quickly you need to access the data

Real-time to hours or days

**Availability**

The probability that OSS is operational within a given period

99.00% to 99.995%

**Durability**

The security and integrity of data stored in OSS within a given period

99.999999999% (eleven 9's) to 99.9999999999% (twelve 9's)

## Redundancy types

Each storage class can be combined with a redundancy type that controls how your data is distributed across storage infrastructure:

**Redundancy type**

**Distribution**

**Durability**

**Supported storage classes**

**Zone-redundant storage (ZRS)**

Across multiple availability zones

99.9999999999% (twelve 9's)

Standard, IA, Archive

**Locally redundant storage (LRS)**

Within a single availability zone

99.999999999% (eleven 9's)

Standard, IA, Archive, Cold Archive, Deep Cold Archive

## Storage class specifications

The following table lists the access frequency, retrieval time, availability, and durability for each combination of storage class and redundancy type.

**Storage class**

**Access frequency**

**Retrieval time**

**Availability**

**Durability**

Standard zone-redundant storage (ZRS)

Frequently accessed

Real-time access

99.995%

99.9999999999% (twelve 9's)

Standard locally redundant storage (LRS)

Frequently accessed

Real-time access

99.99%

99.999999999% (eleven 9's)

IA ZRS

Infrequently accessed

Real-time access

99.50%

99.9999999999% (twelve 9's)

IA LRS

Infrequently accessed

Real-time access

99.00%

99.999999999% (eleven 9's)

Archive ZRS

Seldom accessed

Real-time access or 1 minute

99.50%

99.9999999999% (twelve 9's)

Archive LRS

Seldom accessed

Real-time access or 1 minute

99.00%

99.999999999% (eleven 9's)

Cold Archive LRS

Rarely accessed

1 to 12 hours

99.00%

99.999999999% (eleven 9's)

Deep Cold Archive LRS

Rarely accessed

12 or 48 hours

99.00%

99.999999999% (eleven 9's)

The following table summarizes the typical use cases for each storage class.

**Storage class**

**Access pattern**

**Typical use cases**

**Standard**

Frequently accessed, real-time retrieval

Active application data, content delivery, big data analytics

**Infrequent Access (IA)**

Infrequently accessed, real-time retrieval

Data accessed once or twice a month, backups with occasional retrieval

**Archive**

Seldom accessed, retrieval in real-time or 1 minute

Long-term archival data that may need occasional access

**Cold Archive**

Rarely accessed, retrieval in 1 to 12 hours

Compliance archives, long-term backups

**Deep Cold Archive**

Rarely accessed, retrieval in 12 or 48 hours

Data retained for regulatory or historical purposes with minimal retrieval needs

For more information about the pricing for each storage class, visit the [OSS pricing](https://www.alibabacloud.com/product/oss/pricing) page.
