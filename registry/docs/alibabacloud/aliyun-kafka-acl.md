ALIYUN::KAFKA::Acl is used to create an access control list (ACL).

## Syntax

```
{
  "Type": "ALIYUN::KAFKA::Acl",
  "Properties": {
    "AclResourceName": String,
    "AclOperationTypes": List,
    "AclResourceType": String,
    "AclResourcePatternType": String,
    "InstanceId": String,
    "Username": String,
    "AclPermissionType": String,
    "Host": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AclResourceName

String

Yes

No

The resource name.

-   The value can be a topic name, group ID, cluster name, or transaction ID.
    
-   You can use an asterisk (\*) to specify all resources of the specified type.
    

**Note**

You can use an asterisk (\*) to query the authorized resources only after you grant the required permissions on all resources.

AclOperationTypes

List

Yes

No

The allowed operations.

Separate multiple operations with commas (,).

Valid values:

-   **Write**: writes.
    
-   **Read**: reads.
    
-   **Describe**: reads of transaction IDs.
    
-   **IdempotentWrite**: idempotent data writes to clusters.
    
-   **IDEMPOTENT\_WRITE**: idempotent data writes to clusters. This value is available only for ApsaraMQ for Kafka V3 instances.
    
-   **DESCRIBE\_CONFIGS**: queries of configurations. This value is available only for ApsaraMQ for Kafka V3 instances.
    

**Note**

This property is available only for serverless ApsaraMQ for Kafka V3 instances.

AclResourceType

String

Yes

No

The resource type.

Valid values:

-   **Topic**: topic
    
-   **Group**: consumer group
    
-   **Cluster**: cluster
    
-   **TransactionalId**: transaction ID
    

AclResourcePatternType

String

Yes

No

The matching mode.

Valid values:

-   **LITERAL**: exact match
    
-   **PREFIXED**: prefix match
    

InstanceId

String

Yes

No

The instance ID.

None.

Username

String

Yes

No

The username.

-   You can use an asterisk (\*) to specify all usernames.
    

**Note**

You can use an asterisk (\*) to query the authorized users only after you grant the required permissions to all users.

AclPermissionType

String

No

No

The authorization type.

Valid values:

-   **DENY**
    
-   **ALLOW**
    

**Note**

This property is available only for serverless ApsaraMQ for Kafka V3 instances.

Host

String

No

No

The source IP address.

**Note**

You can specify only a specific IP address or use an asterisk (\*) to specify all IP addresses. CIDR blocks are not supported.

This property is available only for serverless ApsaraMQ for Kafka V3 instances.

## Return values

Fn::GetAtt

-   InstanceId: the instance ID.
    
-   Username: the username.
    
-   AclResourceType: the resource type.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      AclResourceName:
        Type: String
        Description:
          en: |-
            The resource name.
            The value can be a topic name, a group ID, a cluster name, or a transaction ID.
            You can use an asterisk (*) to specify the names of all resources of the specified type.
            Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
        Required: true
        MinLength: 1
        MaxLength: 256
      AclOperationTypes:
        AssociationPropertyMetadata:
          Parameter:
            Type: String
            Description:
              en: |-
                The type of the operation allowed by the access control list (ACL). Valid values:
                Write
                Read
                Describe: reads of transactional IDs.
                IdempotentWrite: idempotent data writes to clusters.
                IDEMPOTENT_WRITE: idempotent data writes to clusters. This value isavailable only for ApsaraMQ for Kafka V3 instances.
            AllowedValues:
              - Write
              - Read
              - Describe
              - IdempotentWrite
              - IDEMPOTENT_WRITE
              - DESCRIBE_CONFIGS
            Required: true
        AssociationProperty: List[Parameter]
        Type: Json
        Description:
          en: The types of operations allowed by the ACL.
        Required: true
        MinLength: 1
        MaxLength: 10
      Username:
        Type: String
        Description:
          en: |-
            The username.
            You can use an asterisk (*) to specify all usernames.
            Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
        AllowedPattern: ^[a-zA-Z][a-zA-Z0-9_]{2,63}$
        Required: true
      InstanceId:
        Type: String
        Description:
          en: The instance ID.
        Required: true
        MinLength: 1
        MaxLength: 64
      AclResourceType:
        Type: String
        Description:
          en: |-
            The resource type. Valid values:
            Topic
            Group
            Cluster
            TransactionalId: transactional ID
        AllowedValues:
          - Cluster
          - Group
          - Topic
          - TransactionalId
        Required: true
      AclResourcePatternType:
        Type: String
        Description:
          en: |-
            The matching mode. Valid values:
            LITERAL: exact match
            PREFIXED: prefix match
        AllowedValues:
          - LITERAL
          - PREFIXED
        Required: true
    Resources:
      Acl:
        Type: ALIYUN::KAFKA::Acl
        Properties:
          AclResourceName:
            Ref: AclResourceName
          AclOperationTypes:
            Ref: AclOperationTypes
          Username:
            Ref: Username
          InstanceId:
            Ref: InstanceId
          AclResourceType:
            Ref: AclResourceType
          AclResourcePatternType:
            Ref: AclResourcePatternType
    Outputs:
      InstanceId:
        Description: The instance ID.
        Value:
          Fn::GetAtt:
            - Acl
            - InstanceId
      Username:
        Description: The username.
        Value:
          Fn::GetAtt:
            - Acl
            - Username
      AclResourceType:
        Description: The resource type.
        Value:
          Fn::GetAtt:
            - Acl
            - AclResourceType
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "AclResourceName": {
          "Type": "String",
          "Description": {
            "en": "The resource name.\nThe value can be a topic name, a group ID, a cluster name, or a transaction ID.\nYou can use an asterisk (*) to specify the names of all resources of the specified type.\nNote You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources."
          },
          "Required": true,
          "MinLength": 1,
          "MaxLength": 256
        },
        "AclOperationTypes": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "Type": "String",
              "Description": {
                "en": "The type of the operation allowed by the access control list (ACL). Valid values:\nWrite\nRead\nDescribe: reads of transactional IDs.\nIdempotentWrite: idempotent data writes to clusters.\nIDEMPOTENT_WRITE: idempotent data writes to clusters. This value isavailable only for ApsaraMQ for Kafka V3 instances."
              },
              "AllowedValues": [
                "Write",
                "Read",
                "Describe",
                "IdempotentWrite",
                "IDEMPOTENT_WRITE",
                "DESCRIBE_CONFIGS"
              ],
              "Required": true
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "The types of operations allowed by the ACL."
          },
          "Required": true,
          "MinLength": 1,
          "MaxLength": 10
        },
        "Username": {
          "Type": "String",
          "Description": {
            "en": "The username.\nYou can use an asterisk (*) to specify all usernames.\nNote You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users."
          },
          "AllowedPattern": "^[a-zA-Z][a-zA-Z0-9_]{2,63}$",
          "Required": true
        },
        "InstanceId": {
          "Type": "String",
          "Description": {
            "en": "The instance ID."
          },
          "Required": true,
          "MinLength": 1,
          "MaxLength": 64
        },
        "AclResourceType": {
          "Type": "String",
          "Description": {
            "en": "The resource type. Valid values:\nTopic\nGroup\nCluster\nTransactionalId: transactional ID"
          },
          "AllowedValues": [
            "Cluster",
            "Group",
            "Topic",
            "TransactionalId"
          ],
          "Required": true
        },
        "AclResourcePatternType": {
          "Type": "String",
          "Description": {
            "en": "The matching mode. Valid values:\nLITERAL: exact match\nPREFIXED: prefix match"
          },
          "AllowedValues": [
            "LITERAL",
            "PREFIXED"
          ],
          "Required": true
        }
      },
      "Resources": {
        "Acl": {
          "Type": "ALIYUN::KAFKA::Acl",
          "Properties": {
            "AclResourceName": {
              "Ref": "AclResourceName"
            },
            "AclOperationTypes": {
              "Ref": "AclOperationTypes"
            },
            "Username": {
              "Ref": "Username"
            },
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "AclResourceType": {
              "Ref": "AclResourceType"
            },
            "AclResourcePatternType": {
              "Ref": "AclResourcePatternType"
            }
          }
        }
      },
      "Outputs": {
        "InstanceId": {
          "Description": "The instance ID.",
          "Value": {
            "Fn::GetAtt": [
              "Acl",
              "InstanceId"
            ]
          }
        },
        "Username": {
          "Description": "The username.",
          "Value": {
            "Fn::GetAtt": [
              "Acl",
              "Username"
            ]
          }
        },
        "AclResourceType": {
          "Description": "The resource type.",
          "Value": {
            "Fn::GetAtt": [
              "Acl",
              "AclResourceType"
            ]
          }
        }
      }
    }
                            
    ```
