DATASOURCE::CLOUDFW::AddressBooks is used to query the information about address books for access control in Cloud Firewall.

## Syntax

```
{
  "Type": "DATASOURCE::CLOUDFW::AddressBooks",
  "Properties": {
    "GroupType": String,
    "Lang": String,
    "RefreshOptions": String
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

GroupType

String

No

Yes

The type of the address book.

Valid values:

-   **ip**: IP address book
    
-   **domain**: domain address book
    
-   **port**: port address book
    
-   **tag**: Elastic Compute Service (ECS) tag-based address book
    
-   **allCloud**: cloud service address book
    
-   **threat**: threat intelligence address book
    

**Note**

If you do not specify this property, the system queries IP address books and ECS tag-based address books.

Lang

String

No

Yes

The language of the content within the request.

Valid values:

-   **zh** (default): Chinese
    
-   **en**: English
    

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   AddressBooks: details of the address books.
    
-   GroupUuids: the UUIDs of the address books.
    

**Property**

**Type**

**Description**

**Constraint**

GroupUuids

List

The UUIDs of the address books.

None.

AddressBooks

List

Details of the address books.

None.

AutoAddTagEcs

String

Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags. This property takes effect for newly purchased ECS instances whose tag settings are complete or ECS instances whose tag settings are modified.

Valid values:

-   **1**: The public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
    
-   **0**: The public IP addresses of ECS instances are not automatically added to the address book if the instances match the specified tags.
    

Tags

List

The information about the tags.

None.

GroupUuid

String

The UUID of the address book.

None.

AddressListCount

String

The number of addresses in the address book.

None.

GroupName

String

The name of the address book.

None.

ReferenceCount

String

The number of times that the address book is referenced.

None.

TagRelation

String

The logical relationship among ECS tags.

Valid values:

-   **and**: Only the public IP addresses of ECS instances that match **all the specified tags** can be added to the address book.
    
-   **or**: The public IP addresses of ECS instances that match **one of the specified tags** can be added to the address book.
    

AddressList

List

The addresses in the address book.

None.

Description

String

The description of the address book.

None.

GroupType

String

The type of the address book.

Valid values:

-   **ip**: IP address book
    
-   **domain**: domain address book
    
-   **port**: port address book
    
-   **tag**: ECS tag-based address book
    
-   **allCloud**: cloud service address book
    
-   **threat**: threat intelligence address book
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  GroupType:
    AllowedValues:
    - ip
    - domain
    - port
    - tag
    Description:
      en: 'Address Book, it can be set to include:

        - **ip**: an IP address book

        - **domain**: domain name address book

        - **port**: port Address Book

        - **tag**:ECS tag address book.'
    Required: false
    Type: String
  Lang:
    Description:
      en: 'The language type of the received message.

        - **zh** (default): Chinese.

        - **en**: English.'
    Required: false
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      GroupType:
        Ref: GroupType
      Lang:
        Ref: Lang
    Type: DATASOURCE::CLOUDFW::AddressBooks
Outputs:
  AddressBooks:
    Description: The list of address books.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AddressBooks
  GroupUuids:
    Description: The list of group uuids.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - GroupUuids
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "GroupType": {
      "Type": "String",
      "Description": {
        "en": "Address Book, it can be set to include:\n- **ip**: an IP address book\n- **domain**: domain name address book\n- **port**: port Address Book\n- **tag**:ECS tag address book."
      },
      "AllowedValues": [
        "ip",
        "domain",
        "port",
        "tag"
      ],
      "Required": false
    },
    "Lang": {
      "Type": "String",
      "Description": {
        "en": "The language type of the received message.\n- **zh** (default): Chinese.\n- **en**: English."
      },
      "Required": false
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CLOUDFW::AddressBooks",
      "Properties": {
        "GroupType": {
          "Ref": "GroupType"
        },
        "Lang": {
          "Ref": "Lang"
        }
      }
    }
  },
  "Outputs": {
    "AddressBooks": {
      "Description": "The list of address books.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AddressBooks"
        ]
      }
    },
    "GroupUuids": {
      "Description": "The list of group uuids.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupUuids"
        ]
      }
    }
  }
}
                        
```
