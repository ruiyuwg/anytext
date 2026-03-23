DATASOURCE::CEN::TransitRouterRouteTables is used to query the information about route tables of an Enterprise Edition transit router.

## Syntax

```
{
  "Type": "DATASOURCE::CEN::TransitRouterRouteTables",
  "Properties": {
    "TransitRouterRouteTableIds": List,
    "TransitRouterRouteTableStatus": String,
    "TransitRouterRouteTableNames": List,
    "TransitRouterRouteTableType": String,
    "TransitRouterId": String,
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

TransitRouterRouteTableIds

List

No

Yes

The IDs of the route tables.

You can query up to 20 route table IDs in a call.

TransitRouterRouteTableStatus

String

No

Yes

The status of the route table.

Valid values:

-   Creating: The route table is being created.
    
-   Deleting: The route table is being deleted.
    
-   Active: The route table is available.
    

TransitRouterRouteTableNames

List

No

Yes

The names of the route tables.

You can query up to 20 route table names in a call.

**Note**

If you specify both the TransitRouterRouteTableNames and TransitRouterRouteTableIds properties, make sure that the specified names and IDs belong to the same route tables.

TransitRouterRouteTableType

String

No

Yes

The type of the route table.

Valid values:

-   Custom: custom
    
-   System: default
    

TransitRouterId

String

Yes

Yes

The ID of the Enterprise Edition transit router.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   TransitRouterRouteTableIds: the route table IDs of the Enterprise Edition transit router.
    
-   TransitRouterRouteTables: details of the route tables of the Enterprise Edition transit router.
    

**Property**

**Type**

**Description**

**Constraint**

TransitRouterRouteTableIds

List

The route table IDs of the Enterprise Edition transit router.

None.

TransitRouterRouteTables

List

Details of the route tables of the Enterprise Edition transit router.

None.

TransitRouterRouteTableId

String

The ID of the route table.

None.

TransitRouterRouteTableStatus

String

The status of the route table.

Valid values:

-   Creating: The route table is being created.
    
-   Deleting: The route table is being deleted.
    
-   Active: The route table is available.
    

TransitRouterRouteTableType

String

The type of the route table.

Valid values:

-   Custom: custom
    
-   System: default
    

TransitRouterRouteTableDescription

String

The description of the route table.

None.

CreateTime

String

The time when the route table was created.

The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.

TransitRouterRouteTableName

String

The name of the route table.

None.

## Examples

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TransitRouterId": {
      "Type": "String",
      "Description": "The ID of the Enterprise Edition transit router."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CEN::TransitRouterRouteTables",
      "Properties": {
        "TransitRouterId": {
          "Ref": "TransitRouterId"
        }
      }
    }
  },
  "Outputs": {
    "TransitRouterRouteTableIds": {
      "Description": "The list of TransitRouterRouteTable IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TransitRouterRouteTableIds"
        ]
      }
    },
    "TransitRouterRouteTables": {
      "Description": "The list of TransitRouterRouteTables.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TransitRouterRouteTables"
        ]
      }
    }
  }
}
```

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TransitRouterId:
    Type: String
    Description: The ID of the Enterprise Edition transit router.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CEN::TransitRouterRouteTables
    Properties:
      TransitRouterId:
        Ref: TransitRouterId
Outputs:
  TransitRouterRouteTableIds:
    Description: The list of TransitRouterRouteTable IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TransitRouterRouteTableIds
  TransitRouterRouteTables:
    Description: The list of TransitRouterRouteTables.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TransitRouterRouteTables
                    
```
