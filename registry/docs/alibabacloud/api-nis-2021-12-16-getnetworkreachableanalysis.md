Obtains the results of network reachability analysis.

## Operation description

**GetNetworkReachableAnalysis** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can query the state of the task for analyzing network reachability.

-   The **init** state indicates that the task is in progress.
    
-   The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/nis/2021-12-16/GetNetworkReachableAnalysis)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/nis/2021-12-16/GetNetworkReachableAnalysis)

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

nis:GetNetworkReachableAnalysis

get

\*NetworkReachableAnalysis

`acs:nis:*:{#accountId}:networkreachableanalysis/{#NetworkReachableAnalysisId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The ID of the region for which you want to obtain the result of network reachability analysis.

cn-shanghai

NetworkReachableAnalysisId

string

Yes

The ID of the task for analyzing network reachability. You can call the **CreateNetworkRearchableAnalysis** operation to obtain the ID of the task for analyzing network reachability.

nra-90eef36a9e6e4662\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NetworkPathId

string

The network path ID.

np-2a1332214fa346b6\*\*\*\*

NetworkReachableAnalysisId

string

The ID of the task for analyzing network reachability.

nra-8607514e71c1484\*\*\*\*

NetworkReachableAnalysisStatus

string

The state of the task for analyzing network reachability. Valid values:

-   **init**: The task is in progress.
    
-   **finish**: The task is complete.
    
-   **error**: An analysis error occurred.
    
-   **timeout**: The task timed out.
    

finish

NetworkReachableAnalysisResult

string

The result of network reachability analysis, which includes the network topology, error codes of network unreachability, and rules of network unreachability.

{ "errorCode": "", "networkAclData": { "networkAclItems": \[ \] }, "nraId": "nra-f2c8701a36424094\*\*\*\*", "requestId": "B931F8A0-620E-5230-B77F-3BD7F612\*\*\*\*", "routeData": { "routeItems": \[ \] }, "securityGroupData": { "policy": "accept", "securityGroupItems": \[ { "description": "default\_sg\_access\_rule", "matchedRule": { "bizProtocol": "ALL", "creatingTime": "2022-11-10T03:24:49Z", "description": "", "destinationCidr": "", "destinationGroupId": "sg-wz980j96p8y99co5\*\*\*\*", "direction": "egress", "policy": "Accept", "portRange": "-1/-1", "priority": "1", "sourceCidr": "", "sourceGroupId": "" }, "policy": "accept", "resourceId": "eni-wz92ce4saz1jzazg\*\*\*\*", "securityGroupId": "sg-wz980j96p8y99co5\*\*\*\*" }, { "description": "user\_acl\_drop\_rule", "matchedRule": { "bizProtocol": "", "creatingTime": "", "description": "", "destinationCidr": "", "destinationGroupId": "", "direction": "", "policy": "", "portRange": "", "priority": "", "sourceCidr": "", "sourceGroupId": "" }, "policy": "", "resourceId": "eni-wz97vry93t6z4lbd\*\*\*\*", "securityGroupId": "sg-wz980j96p8y99co\*\*\*\*" } \], "securityGroupReportId": "sgr-4479d23bb37241aab\*\*\*\*" }, "status": "security\_group\_checking\_target", "topologyData": { "positive": { "linkList": \[ { "id": "i-wz91dk7bor557hp93zyv-->eni-wz92ce4saz1jzazg\*\*\*\*", "source": "i-wz91dk7bor557hp9\*\*\*\*", "target": "eni-wz92ce4saz1jzazg\*\*\*\*" }, { "id": "eni-wz92ce4saz1jzazgi13d-->vsw-wz9slpwdcppwfrnee\*\*\*\*", "source": "eni-wz92ce4saz1jzazg\*\*\*\*", "target": "vsw-wz9slpwdcppwfrnee\*\*\*\*" }, { "id": "vsw-wz9slpwdcppwfrneebcrp-->eni-wz97vry93t6z4lbd\*\*\*\*", "source": "vsw-wz9slpwdcppwfrnee\*\*\*\*", "target": "eni-wz97vry93t6z4lbd\*\*\*\*" }, { "id": "eni-wz97vry93t6z4lbdgmfi-->i-wz91dk7bor557hp9\*\*\*\*", "source": "eni-wz97vry93t6z4lbd\*\*\*\*", "target": "i-wz91dk7bor557hp9\*\*\*\*" } \], "nodeList": \[ { "aZone": "cn-shenzhen-d", "bizInsId": "i-wz91dk7bor557hp9\*\*\*\*", "id": "i-wz91dk7bor557hp9\*\*\*\*", "level": 1, "matchedRoute": { "nextHopSet": \[ \] }, "nodeType": "VM", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "trafficLogs": \[ \] }, { "aZone": "cn-shenzhen-d", "bizInsId": "i-wz91dk7bor557hp9\*\*\*\*", "id": "i-wz91dk7bor557hp9\*\*\*\*", "level": 3, "matchedRoute": { "nextHopSet": \[ \] }, "nodeType": "VM", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "trafficLogs": \[ \] }, { "aZone": "cn-shenzhen-d", "bizInsId": "vsw-wz9slpwdcppwfrnee\*\*\*\*", "cidr": "192.168.0.0/24", "id": "vsw-wz9slpwdcppwfrnee\*\*\*\*", "level": 2, "matchedRoute": { "nextHopSet": \[ \] }, "nodeType": "VSW", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "trafficLogs": \[ \] }, { "bizInsId": "eni-wz92ce4saz1jzazg\*\*\*\*", "id": "eni-wz92ce4saz1jzazg\*\*\*\*", "ip": "192.168.0.33", "mac": "00:XXXX:3e:16:7c:50", "matchedRoute": { "nextHopSet": \[ \] }, "nodeType": "ENI", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "status": "InUse", "trafficLogs": \[ \] }, { "bizInsId": "eni-wz97vry93t6z4lbd\*\*\*\*", "id": "eni-wz97vry93t6z4lbd\*\*\*\*", "ip": "192.168.0.34", "mac": "00:XXXX:3e:14:70:c2", "matchedRoute": { "nextHopSet": \[ \] }, "nodeType": "ENI", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "status": "InUse", "trafficLogs": \[ \] } \] }, "reverse": { "revLinkList": \[ { "id": "i-wz91dk7bor557hp93zys-->eni-wz97vry93t6z4lbd\*\*\*\*", "source": "i-wz91dk7bor557hp9\*\*\*\*", "target": "eni-wz97vry93t6z4lbd\*\*\*\*" }, { "id": "eni-wz97vry93t6z4lbdgmfi-->vsw-wz9slpwdcppwfrnee\*\*\*\*", "source": "eni-wz97vry93t6z4lbd\*\*\*\*", "target": "vsw-wz9slpwdcppwfrnee\*\*\*\*" }, { "id": "vsw-wz9slpwdcppwfrneebcrp-->eni-wz92ce4saz1jzazg\*\*\*\*", "source": "vsw-wz9slpwdcppwfrnee\*\*\*\*", "target": "eni-wz92ce4saz1jzazg\*\*\*\*" }, { "id": "eni-wz92ce4saz1jzazgi13d-->i-wz91dk7bor557hp9\*\*\*\*", "source": "eni-wz92ce4saz1jzazg\*\*\*\*", "target": "i-wz91dk7bor557hp9\*\*\*\*" } \], "revNodeList": \[ { "aZone": "cn-shenzhen-d", "bizInsId": "i-wz91dk7bor557hp9\*\*\*\*", "id": "i-wz91dk7bor557hp9\*\*\*\*", "level": 1, "nodeType": "VM", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "revMatchedRoute": { "revNextHopSet": \[ \] } }, { "aZone": "cn-shenzhen-d", "bizInsId": "i-wz91dk7bor557hp9\*\*\*\*", "id": "i-wz91dk7bor557hp9\*\*\*\*", "level": 3, "nodeType": "VM", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "revMatchedRoute": { "revNextHopSet": \[ \] } }, { "aZone": "cn-shenzhen-d", "bizInsId": "vsw-wz9slpwdcppwfrnee\*\*\*\*", "cidr": "192.168.0.0/24", "id": "vsw-wz9slpwdcppwfrnee\*\*\*\*", "level": 2, "nodeType": "VSW", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "revMatchedRoute": { "revNextHopSet": \[ \] } }, { "bizInsId": "eni-wz97vry93t6z4lbd\*\*\*\*", "id": "eni-wz97vry93t6z4lbd\*\*\*\*", "ip": "192.168.0.34", "mac": "00:XXXX:3e:14:70:c2", "nodeType": "ENI", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "revMatchedRoute": { "revNextHopSet": \[ \] }, "status": "InUse" }, { "bizInsId": "eni-wz92ce4saz1jzazg\*\*\*\*", "id": "eni-wz92ce4saz1jzazg\*\*\*\*", "ip": "192.168.0.33", "mac": "00:XXXX:3e:16:7c:50", "nodeType": "ENI", "regionNo": "cn-shenzhen-st3-a01", "regionNoAlias": "cn-shenzhen", "revMatchedRoute": { "revNextHopSet": \[ \] }, "status": "InUse" } \] }, "topologyReportId": "tpr-21cf60002715491b8\*\*\*\*" } }

Reachable

boolean

Indicates whether the network path is reachable. Valid values:

-   **true**: The network path is reachable.
    
-   **false**: The network path is unreachable.
    

true

CreateTime

string

The time when the network path was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2023-03-16T07:11:27Z

AliUid

integer

The unique ID (UID) of the Alibaba Cloud account.

123147627844\*\*\*\*

RequestId

string

The request ID.

DEE0FEAF-59AE-5CDD-AA07-626BC365D571

NetworkPathParameter

string

The parameters of the network path.

{ "sourceId": "i-bp100g5pbp6kj4p9\*\*\*\*", "sourceType": "ecs", "targetId": "i-t4n4ltwgbbomzb0g\*\*\*\*", "targetType": "ecs" }

## Examples

Success response

`JSON` format

```
{
  "NetworkPathId": "np-2a1332214fa346b6****",
  "NetworkReachableAnalysisId": "nra-8607514e71c1484****",
  "NetworkReachableAnalysisStatus": "finish",
  "NetworkReachableAnalysisResult": "{\n  \"errorCode\": \"\",\n  \"networkAclData\": {\n    \"networkAclItems\": [\n      \n    ]\n  },\n  \"nraId\": \"nra-f2c8701a36424094****\",\n  \"requestId\": \"B931F8A0-620E-5230-B77F-3BD7F612****\",\n  \"routeData\": {\n    \"routeItems\": [\n      \n    ]\n  },\n  \"securityGroupData\": {\n    \"policy\": \"accept\",\n    \"securityGroupItems\": [\n      {\n        \"description\": \"default_sg_access_rule\",\n        \"matchedRule\": {\n          \"bizProtocol\": \"ALL\",\n          \"creatingTime\": \"2022-11-10T03:24:49Z\",\n          \"description\": \"\",\n          \"destinationCidr\": \"\",\n          \"destinationGroupId\": \"sg-wz980j96p8y99co5****\",\n          \"direction\": \"egress\",\n          \"policy\": \"Accept\",\n          \"portRange\": \"-1/-1\",\n          \"priority\": \"1\",\n          \"sourceCidr\": \"\",\n          \"sourceGroupId\": \"\"\n        },\n        \"policy\": \"accept\",\n        \"resourceId\": \"eni-wz92ce4saz1jzazg****\",\n        \"securityGroupId\": \"sg-wz980j96p8y99co5****\"\n      },\n      {\n        \"description\": \"user_acl_drop_rule\",\n        \"matchedRule\": {\n          \"bizProtocol\": \"\",\n          \"creatingTime\": \"\",\n          \"description\": \"\",\n          \"destinationCidr\": \"\",\n          \"destinationGroupId\": \"\",\n          \"direction\": \"\",\n          \"policy\": \"\",\n          \"portRange\": \"\",\n          \"priority\": \"\",\n          \"sourceCidr\": \"\",\n          \"sourceGroupId\": \"\"\n        },\n        \"policy\": \"\",\n        \"resourceId\": \"eni-wz97vry93t6z4lbd****\",\n        \"securityGroupId\": \"sg-wz980j96p8y99co****\"\n      }\n    ],\n    \"securityGroupReportId\": \"sgr-4479d23bb37241aab****\"\n  },\n  \"status\": \"security_group_checking_target\",\n  \"topologyData\": {\n    \"positive\": {\n      \"linkList\": [\n        {\n          \"id\": \"i-wz91dk7bor557hp93zyv-->eni-wz92ce4saz1jzazg****\",\n          \"source\": \"i-wz91dk7bor557hp9****\",\n          \"target\": \"eni-wz92ce4saz1jzazg****\"\n        },\n        {\n          \"id\": \"eni-wz92ce4saz1jzazgi13d-->vsw-wz9slpwdcppwfrnee****\",\n          \"source\": \"eni-wz92ce4saz1jzazg****\",\n          \"target\": \"vsw-wz9slpwdcppwfrnee****\"\n        },\n        {\n          \"id\": \"vsw-wz9slpwdcppwfrneebcrp-->eni-wz97vry93t6z4lbd****\",\n          \"source\": \"vsw-wz9slpwdcppwfrnee****\",\n          \"target\": \"eni-wz97vry93t6z4lbd****\"\n        },\n        {\n          \"id\": \"eni-wz97vry93t6z4lbdgmfi-->i-wz91dk7bor557hp9****\",\n          \"source\": \"eni-wz97vry93t6z4lbd****\",\n          \"target\": \"i-wz91dk7bor557hp9****\"\n        }\n      ],\n      \"nodeList\": [\n        {\n          \"aZone\": \"cn-shenzhen-d\",\n          \"bizInsId\": \"i-wz91dk7bor557hp9****\",\n          \"id\": \"i-wz91dk7bor557hp9****\",\n          \"level\": 1,\n          \"matchedRoute\": {\n            \"nextHopSet\": [\n              \n            ]\n          },\n          \"nodeType\": \"VM\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"trafficLogs\": [\n            \n          ]\n        },\n        {\n          \"aZone\": \"cn-shenzhen-d\",\n          \"bizInsId\": \"i-wz91dk7bor557hp9****\",\n          \"id\": \"i-wz91dk7bor557hp9****\",\n          \"level\": 3,\n          \"matchedRoute\": {\n            \"nextHopSet\": [\n              \n            ]\n          },\n          \"nodeType\": \"VM\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"trafficLogs\": [\n            \n          ]\n        },\n        {\n          \"aZone\": \"cn-shenzhen-d\",\n          \"bizInsId\": \"vsw-wz9slpwdcppwfrnee****\",\n          \"cidr\": \"192.168.0.0/24\",\n          \"id\": \"vsw-wz9slpwdcppwfrnee****\",\n          \"level\": 2,\n          \"matchedRoute\": {\n            \"nextHopSet\": [\n              \n            ]\n          },\n          \"nodeType\": \"VSW\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"trafficLogs\": [\n            \n          ]\n        },\n        {\n          \"bizInsId\": \"eni-wz92ce4saz1jzazg****\",\n          \"id\": \"eni-wz92ce4saz1jzazg****\",\n          \"ip\": \"192.168.0.33\",\n          \"mac\": \"00:XXXX:3e:16:7c:50\",\n          \"matchedRoute\": {\n            \"nextHopSet\": [\n              \n            ]\n          },\n          \"nodeType\": \"ENI\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"status\": \"InUse\",\n          \"trafficLogs\": [\n            \n          ]\n        },\n        {\n          \"bizInsId\": \"eni-wz97vry93t6z4lbd****\",\n          \"id\": \"eni-wz97vry93t6z4lbd****\",\n          \"ip\": \"192.168.0.34\",\n          \"mac\": \"00:XXXX:3e:14:70:c2\",\n          \"matchedRoute\": {\n            \"nextHopSet\": [\n              \n            ]\n          },\n          \"nodeType\": \"ENI\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"status\": \"InUse\",\n          \"trafficLogs\": [\n            \n          ]\n        }\n      ]\n    },\n    \"reverse\": {\n      \"revLinkList\": [\n        {\n          \"id\": \"i-wz91dk7bor557hp93zys-->eni-wz97vry93t6z4lbd****\",\n          \"source\": \"i-wz91dk7bor557hp9****\",\n          \"target\": \"eni-wz97vry93t6z4lbd****\"\n        },\n        {\n          \"id\": \"eni-wz97vry93t6z4lbdgmfi-->vsw-wz9slpwdcppwfrnee****\",\n          \"source\": \"eni-wz97vry93t6z4lbd****\",\n          \"target\": \"vsw-wz9slpwdcppwfrnee****\"\n        },\n        {\n          \"id\": \"vsw-wz9slpwdcppwfrneebcrp-->eni-wz92ce4saz1jzazg****\",\n          \"source\": \"vsw-wz9slpwdcppwfrnee****\",\n          \"target\": \"eni-wz92ce4saz1jzazg****\"\n        },\n        {\n          \"id\": \"eni-wz92ce4saz1jzazgi13d-->i-wz91dk7bor557hp9****\",\n          \"source\": \"eni-wz92ce4saz1jzazg****\",\n          \"target\": \"i-wz91dk7bor557hp9****\"\n        }\n      ],\n      \"revNodeList\": [\n        {\n          \"aZone\": \"cn-shenzhen-d\",\n          \"bizInsId\": \"i-wz91dk7bor557hp9****\",\n          \"id\": \"i-wz91dk7bor557hp9****\",\n          \"level\": 1,\n          \"nodeType\": \"VM\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"revMatchedRoute\": {\n            \"revNextHopSet\": [\n              \n            ]\n          }\n        },\n        {\n          \"aZone\": \"cn-shenzhen-d\",\n          \"bizInsId\": \"i-wz91dk7bor557hp9****\",\n          \"id\": \"i-wz91dk7bor557hp9****\",\n          \"level\": 3,\n          \"nodeType\": \"VM\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"revMatchedRoute\": {\n            \"revNextHopSet\": [\n              \n            ]\n          }\n        },\n        {\n          \"aZone\": \"cn-shenzhen-d\",\n          \"bizInsId\": \"vsw-wz9slpwdcppwfrnee****\",\n          \"cidr\": \"192.168.0.0/24\",\n          \"id\": \"vsw-wz9slpwdcppwfrnee****\",\n          \"level\": 2,\n          \"nodeType\": \"VSW\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"revMatchedRoute\": {\n            \"revNextHopSet\": [\n              \n            ]\n          }\n        },\n        {\n          \"bizInsId\": \"eni-wz97vry93t6z4lbd****\",\n          \"id\": \"eni-wz97vry93t6z4lbd****\",\n          \"ip\": \"192.168.0.34\",\n          \"mac\": \"00:XXXX:3e:14:70:c2\",\n          \"nodeType\": \"ENI\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"revMatchedRoute\": {\n            \"revNextHopSet\": [\n              \n            ]\n          },\n          \"status\": \"InUse\"\n        },\n        {\n          \"bizInsId\": \"eni-wz92ce4saz1jzazg****\",\n          \"id\": \"eni-wz92ce4saz1jzazg****\",\n          \"ip\": \"192.168.0.33\",\n          \"mac\": \"00:XXXX:3e:16:7c:50\",\n          \"nodeType\": \"ENI\",\n          \"regionNo\": \"cn-shenzhen-st3-a01\",\n          \"regionNoAlias\": \"cn-shenzhen\",\n          \"revMatchedRoute\": {\n            \"revNextHopSet\": [\n              \n            ]\n          },\n          \"status\": \"InUse\"\n        }\n      ]\n    },\n    \"topologyReportId\": \"tpr-21cf60002715491b8****\"\n  }\n}",
  "Reachable": true,
  "CreateTime": "2023-03-16T07:11:27Z",
  "AliUid": 0,
  "RequestId": "DEE0FEAF-59AE-5CDD-AA07-626BC365D571",
  "NetworkPathParameter": "{\n  \"sourceId\": \"i-bp100g5pbp6kj4p9****\",\n  \"sourceType\": \"ecs\",\n  \"targetId\": \"i-t4n4ltwgbbomzb0g****\",\n  \"targetType\": \"ecs\"\n}"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

SizeExceeds.Zones

The length of the specified available zones exceeds the limit.

The specified number of zones exceeds the upper limit.

400

SizeExceeds.DiskCategories

The length of the specified disk categories exceeds the limit.

The specified number of disk categories exceeds the upper limit.

400

OperationDenied.ZonesConflict

The specified available zones do not belong to the same region.

The specified zones do not belong to the same region.

400

IllegalParam.ZoneId

The specified available zone (%s) is invalid.

The specified zone (%s) is invalid.

400

IllegalParam.StepMinutes

The specified sampling interval (%s) is invalid.

The specified sampling interval (%s) is invalid.

400

IllegalParam.BeginTime

The specified begin time (%s) is invalid.

The specified start time (%s) is invalid.

400

IllegalParam.EndTime

The specified end time (%s) is invalid.

The specified end time (%s) is invalid.

400

Mismatch.BeginTimeAndEndTime

The specified begin time must be earlier than the end time.

The specified start time must be earlier than the end time.

400

OperationDenied.NetworkReachableAnalysis

The operation is not allowed because of invalid parameters.

The request has invalid parameters. The current operation is not allowed.

403

Forbidden.NetworkReachableAnalysisId

The user does not have permission on the instance parameter (%s).

The user does not have permission to the resource (%s).

404

ResourceNotFound.NetworkReachableAnalysisId

The instance resource (%s) does not exist.

The resource (%s) does not exist.

404

ResourceNotFound.NetworkReachableAnalysis

The specified resource of %s is not found.

The specified network path ID %s is invalid.

See [Error Codes](https://api.alibabacloud.com/document/nis/2021-12-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/nis/2021-12-16/GetNetworkReachableAnalysis#workbench-doc-change-demo) for a complete list.
