Retrieves details for Polarlakebase Global Data Networks (GDNs) across all regions in your account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeGlobalDataNetworkList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeGlobalDataNetworkList)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

polardb:DescribeGlobalDataNetworkList

list

\*All Resource

`*`

None

None

## Request syntax

```
GET  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PageNumber

integer

No

The page number to return.

1

PageSize

integer

No

The number of records to return on each page.

30

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response schema

RequestId

string

The request ID.

CD35F3-F3-44CA-AFFF-BAF869\*\*\*\*\*\*

TotalRecordCount

string

The total number of records.

1

PageRecordCount

string

The number of records on the current page.

1

PageNumber

string

The page number.

1

Items

object

The details of the Global Data Networks (GDNs).

Networks

array<object>

The list of GDN networks.

array<object>

Details of the Global Data Network (GDN)

NetworkId

string

The ID of the GDN.

gdn-xxx

NetworkDescription

string

The description of the GDN.

mygdn

NetworkStatus

string

The status of the GDN. Valid values:

-   **Creating**: The GDN is being created.
    
-   **Running**: The GDN is running.
    
-   **Syncing**: The GDN is synchronizing data.
    
-   **SyncFinished**: Data synchronization is complete.
    
-   **SyncFailed**: Data synchronization failed.
    
-   **SyncPartialFailed**: Data synchronization partially failed.
    
-   **Stopped**: The GDN is stopped.
    
-   **Maintaining**: The GDN is under maintenance.
    
-   **Restarting**: The GDN is restarting.
    
-   **Locking**: The GDN is being locked.
    
-   **Locked**: The GDN is locked.
    
-   **Unlocking**: The GDN is being unlocked.
    
-   **Deleting**: The GDN is being deleted.
    
-   **Deleted**: The GDN is deleted.
    

Running

NetworkTopology

object

The network topology of the GDN.

Sources

array<object>

The synchronization sources.

object

Details about the synchronization source.

SourceFileSystemPath

string

The source path.

/

SourceType

string

The type of the source. Valid values:

-   **pfs**: Polarlakebase High-performance Edition.
    
-   **pcs**: Polarlakebase Cold Storage Edition.
    

pcs

SourceRegion

string

The region of the source.

cn-wulanchabu

SourceId

string

The ID of the source Polarlakebase instance.

pcs-xxx

Destinations

array<object>

The synchronization destinations.

object

Details about the synchronization destination.

DestinationFileSystemPath

string

The destination path.

/

DestinationRegion

string

The region of the destination.

cn-beijing

DestinationType

string

The type of the destination. Valid values:

-   **pfs**: Polarlakebase High-performance Edition.
    
-   **pcs**: Polarlakebase Cold Storage Edition.
    

pfs

DestinationId

string

Destination PolarDB instance

pfs-xxx

CreateTime

string

The time when the GDN was created.

2025-03-25T09:37:10Z

Channels

array<object>

The synchronization channels.

object

Details about the synchronization channel.

ChannelId

string

The ID of the synchronization channel.

gdc-xxx

ChannelStatus

string

The status of the synchronization channel. Valid values:

-   **Creating**: The channel is being created.
    
-   **Running**: The channel is running.
    
-   **Syncing**: The channel is synchronizing data.
    
-   **SyncFinished**: Data synchronization is complete.
    
-   **SyncFailed**: Data synchronization failed.
    
-   **SyncPartialFailed**: Data synchronization partially failed.
    
-   **Stopped**: The channel is stopped.
    
-   **Maintaining**: The channel is under maintenance.
    
-   **Restarting**: The channel is restarting.
    
-   **Locking**: The channel is being locked.
    
-   **Locked**: The channel is locked.
    
-   **Unlocking**: The channel is being unlocked.
    
-   **Deleting**: The channel is being deleted.
    
-   **Deleted**: The channel is deleted.
    

Syncing

Progress

string

The synchronization progress.

**Note**

The value is a percentage that is accurate to two decimal places.

11.45%

FreezeSourceDuringSync

boolean

Indicates whether the source path is frozen during data transmission.

true

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CD35F3-F3-44CA-AFFF-BAF869******",
  "TotalRecordCount": "1",
  "PageRecordCount": "1",
  "PageNumber": "1",
  "Items": {
    "Networks": [
      {
        "NetworkId": "gdn-xxx",
        "NetworkDescription": "mygdn",
        "NetworkStatus": "Running",
        "NetworkTopology": {
          "Sources": [
            {
              "SourceFileSystemPath": "/",
              "SourceType": "pcs",
              "SourceRegion": "cn-wulanchabu",
              "SourceId": "pcs-xxx"
            }
          ],
          "Destinations": [
            {
              "DestinationFileSystemPath": "/",
              "DestinationRegion": "cn-beijing",
              "DestinationType": "pfs",
              "DestinationId": "pfs-xxx"
            }
          ]
        },
        "CreateTime": "2025-03-25T09:37:10Z",
        "Channels": [
          {
            "ChannelId": "gdc-xxx",
            "ChannelStatus": "Syncing",
            "Progress": "11.45%",
            "FreezeSourceDuringSync": true
          }
        ]
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeGlobalDataNetworkList#workbench-doc-change-demo) for a complete list.
