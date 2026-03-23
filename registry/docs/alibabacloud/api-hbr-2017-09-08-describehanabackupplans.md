Queries for one or more SAP HANA backup plans that match specified criteria.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaBackupPlans)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaBackupPlans)

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

hbr:DescribeHanaBackupPlans

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

VaultId

string

No

The ID of the backup vault.

v-000i4lg4kz\*\*\*\*\*\*ahl

ClusterId

string

Yes

The ID of the SAP HANA instance.

cl-000chxz\*\*\*\*\*\*lz7bk

PageNumber

integer

No

The page number. The value must be a number that starts from 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

DatabaseName

string

No

The name of the database.

SYSTEMDB

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmvywqfey5njq

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

F029C1C7-26B6-5ADD-A73E-D85CCD7C73A9

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The message that is returned. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

PageNumber

integer

The page number. The value must be a number that starts from 1. Default value: 1.

1

PageSize

integer

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

TotalCount

integer

The total number of records.

6

HanaBackupPlans

object

HanaBackupPlan

array<object>

The details of the backup plan.

object

The details of the backup plan.

VaultId

string

The ID of the backup vault.

v-000csihw82pqkd7hcjws

BackupPrefix

string

The backup prefix.

COMPLETE\_DATA\_BACKUP

Schedule

string

The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified by `{startTime}` and repeats the backup job at an interval that is specified by `{interval}`. The system does not run a backup job to compensate for a missed backup job. If a backup job is not complete, the next backup job is not triggered. For example, `I|1631685600|P1D` indicates that the system runs a backup job every day, starting from 2021-09-15 14:00:00.

-   startTime: The start time of the backup job. This value is a UNIX timestamp. Unit: seconds.
    
-   interval: The interval of the backup job. This value follows the ISO 8601 standard. For example, PT1H indicates that the backup job is run every hour. P1D indicates that the backup job is run every day.
    

I|1602673264|P1D

DatabaseName

string

The name of the database.

SYSTEMDB

BackupType

string

The backup type.

-   COMPLETE: full backup.
    
-   INCREMENTAL: incremental backup.
    
-   DIFFERENTIAL: differential backup.
    

COMPLETE

Disabled

boolean

Indicates whether the backup plan is paused.

-   true: The backup plan is paused.
    
-   false: The backup plan is not paused.
    

false

PlanId

string

The ID of the backup plan.

pl-0000tnyndg3ne5m4ubeu

ClusterId

string

The ID of the SAP HANA instance.

cl-0002scknka\*\*\*\*\*

PlanName

string

The name of the backup plan.

plan-20220118-141153

BusinessStatus

string

The business status.

ACTIVE

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F029C1C7-26B6-5ADD-A73E-D85CCD7C73A9",
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 6,
  "HanaBackupPlans": {
    "HanaBackupPlan": [
      {
        "VaultId": "v-000csihw82pqkd7hcjws",
        "BackupPrefix": "COMPLETE_DATA_BACKUP",
        "Schedule": "I|1602673264|P1D",
        "DatabaseName": "SYSTEMDB",
        "BackupType": "COMPLETE",
        "Disabled": false,
        "PlanId": "pl-0000tnyndg3ne5m4ubeu",
        "ClusterId": "cl-0002scknka*****",
        "PlanName": "plan-20220118-141153",
        "BusinessStatus": "ACTIVE"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeHanaBackupPlans#workbench-doc-change-demo) for a complete list.
