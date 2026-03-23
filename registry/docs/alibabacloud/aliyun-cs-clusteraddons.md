ALIYUN::CS::ClusterAddons is used to install components in a cluster.

## Syntax

```
{
  "Type": "ALIYUN::CS::ClusterAddons",
  "Properties": {
    "ClusterId": String,
    "Addons": List,
    "InstalledIgnore": Boolean,
    "WaitUntil": List,
    "RolePolicy": String,
    "ValidationMode": String
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

ClusterId

String

Yes

No

The ID of the cluster.

None.

Addons

List

Yes

Yes

The configurations of the components.

For more information, see [Addons properties](#section-dhi-4qn-5x1).

InstalledIgnore

Boolean

No

No

Specifies whether to ignore existing components when you create a cluster.

Valid values:

-   true: ignores existing components when you create a cluster.
    
    When you create a cluster, you can install only new components in the cluster. When you delete a cluster, you can uninstall only the components that you installed when you created the cluster.
    
-   false (default): does not ignore existing components when you create a cluster.
    

WaitUntil

List

No

Yes

The system waits until all conditions are met after you start to create or update the component.  

For more information, see [WaitUntil properties](#f0a9b50626z0s).

RolePolicy

String

No

Yes

The role policy. Before you deploy an application, check the policies that are attached to the role of your account.  

Valid values:

-   EnsureAdminRoleAndBinding (default): automatically creates a role named `ros:application-admin:${user-id}\` that has administrator permissions and assigns the role to your account.  
    
-   None: does not perform operations.  
    

ValidationMode

String

No

No

The validation mode.

Valid values:

-   Basic: basic validation. For example, the system validates whether the cluster exists.
    
-   Strict: strict validation. In addition to a basic validation, the system validates whether WaitUntil is valid.
    

## Addons syntax

```
"Addons": [
  {
    "Version": String,
    "Config": String,
    "Name": String
  }
]
```

## Addons properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Version

String

No

No

The version of the component.

None.

Config

String

No

Yes

The configurations of the component.

None.

Name

String

Yes

No

The name of the component.

None.

## WaitUntil syntax

```
"WaitUntil": [
  {
   "ApiVersion": String,
   "FirstMatch": Boolean,
   "Timeout": Integer,
   "JsonPath": String,
   "Namespace": String,
   "Stage": String,
   "Name": String,
   "ValueType": String,
   "Kind": String,
   "Value": String,
   "Operator": String
  }
]
```

## WaitUntil properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ApiVersion

String

No

Yes

The version of the API.

None.

FirstMatch

Boolean

No

Yes

Specifies whether to return only the first matched result in the results that are filtered by using the JSONPath expression.  

Valid values:

-   true
    
-   false (default)
    

Timeout

Integer

No

Yes

The timeout period for waiting for the conditions to be met.

Unit: seconds.

JsonPath

String

No

Yes

The JSONPath expression that you want to use to filter results.

None.

Namespace

String

No

Yes

The Kubernetes namespace of the resource.

Default value: DefaultNamespace.  

Stage

String

No

No

The one or more stages at which the system waits.   

Valid values:

-   Create/Update (default): creation and update stages
    
-   Delete: deletion stage  
    

Name

String

Yes

Yes

The name of the Kubernetes resource that you want to query.

None.

ValueType

String

No

Yes

The value type.

Default value: String.

Kind

String

Yes

Yes

The type of the Kubernetes resource that you want to query.

None.

Value

String

No

Yes

The value to be compared with the result of the JSONPath expression.  

None.

Operator

String

Yes

Yes

The operator that you want to use to compare the value with the result of the JSONPath expression.

None.

## Return values

Fn::GetAtt

-   ClusterId: the ID of the cluster.
    
-   WaitUntilData: the JSONPath values in WaitUntil.  
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Addons:
    Description: 'A combination of addon plugins for Kubernetes clusters.

      Network plug-in: including Flannel and Terway network plug-ins

      Log service: Optional. If the log service is not enabled, the cluster audit
      function cannot be used.

      Ingress: The installation of the Ingress component is enabled by default.'
    Type: Json
  ClusterId:
    Description: Cluster ID.
    Type: String
Resources:
  ClusterAddons:
    Properties:
      Addons:
        Ref: Addons
      ClusterId:
        Ref: ClusterId
    Type: ALIYUN::CS::ClusterAddons
Outputs:
  ClusterId:
    Description: Cluster ID.
    Value:
      Fn::GetAtt:
      - ClusterAddons
      - ClusterId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ClusterId": {
      "Type": "String",
      "Description": "Cluster ID."
    },
    "Addons": {
      "Type": "Json",
      "Description": "A combination of addon plugins for Kubernetes clusters.\nNetwork plug-in: including Flannel and Terway network plug-ins\nLog service: Optional. If the log service is not enabled, the cluster audit function cannot be used.\nIngress: The installation of the Ingress component is enabled by default."
    }
  },
  "Resources": {
    "ClusterAddons": {
      "Type": "ALIYUN::CS::ClusterAddons",
      "Properties": {
        "ClusterId": {
          "Ref": "ClusterId"
        },
        "Addons": {
          "Ref": "Addons"
        }
      }
    }
  },
  "Outputs": {
    "ClusterId": {
      "Description": "Cluster ID.",
      "Value": {
        "Fn::GetAtt": [
          "ClusterAddons",
          "ClusterId"
        ]
      }
    }
  }
}
```
