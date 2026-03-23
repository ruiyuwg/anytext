ALIYUN::SAE::ConfigMap is used to create a ConfigMap instance in a namespace.

## Syntax

```
{
  "Type": "ALIYUN::SAE::ConfigMap",
  "Properties": {
    "Data": Map,
    "NamespaceId": String,
    "Name": String,
    "Description": String
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

Data

Map

Yes

Yes

The ConfigMap data.

The ConfigMap data is key-value pairs in the JSON format. Example:

`{"Data":"{"k1":"v1", "k2":"v2"}"}`

k specifies a key and v specifies a value. For more information, see [Manage a Kubernetes ConfigMap](/help/en/sae/manage-a-kubernetes-configmap).

NamespaceId

String

Yes

No

The ID of the namespace to which the ConfigMap instance belongs.

None.

Name

String

Yes

No

The name of the ConfigMap instance.

The name can contain digits, letters, and underscores (\_). The name must start with a letter.

Description

String

No

Yes

The description.

The description must be 1 to 255 characters in length, and cannot contain spaces.

## Return values

Fn::GetAtt

-   ConfigMapId: the ID of the ConfigMap instance.
    
-   NamespaceId: the ID of the namespace to which the ConfigMap instance belongs.
    

## Examples

YAML

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Data": {
      "Type": "Json",
      "Description": {
        "en": "Configmap key value pairs of data, json format.The format is as follows:\n{\"k1\":\"v1\", \"k2\":\"v2\"}\nK means key, V represents value.For more information about configuration items, see management and use of configuration items."
      },
      "Required": true
    },
    "NamespaceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the namespace to which this config map instance belongs."
      },
      "Required": true
    },
    "Name": {
      "Type": "String",
      "Description": {
        "en": "The name of the config map."
      },
      "Required": true
    }
  },
  "Resources": {
    "ConfigMap": {
      "Type": "ALIYUN::SAE::ConfigMap",
      "Properties": {
        "Data": {
          "Ref": "Data"
        },
        "NamespaceId": {
          "Ref": "NamespaceId"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "ConfigMapId": {
      "Description": "The ID of the config map.",
      "Value": {
        "Fn::GetAtt": [
          "ConfigMap",
          "ConfigMapId"
        ]
      }
    },
    "NamespaceId": {
      "Description": "The ID of the namespace to which this config map instance belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ConfigMap",
          "NamespaceId"
        ]
      }
    }
  }
}
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Data": {
      "Type": "Json",
      "Description": {
        "en": "Configmap key value pairs of data, json format.The format is as follows:\n{\"k1\":\"v1\", \"k2\":\"v2\"}\nK means key, V represents value.For more information about configuration items, see management and use of configuration items."
      },
      "Required": true
    },
    "NamespaceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the namespace to which this config map instance belongs."
      },
      "Required": true
    },
    "Name": {
      "Type": "String",
      "Description": {
        "en": "The name of the config map."
      },
      "Required": true
    }
  },
  "Resources": {
    "ConfigMap": {
      "Type": "ALIYUN::SAE::ConfigMap",
      "Properties": {
        "Data": {
          "Ref": "Data"
        },
        "NamespaceId": {
          "Ref": "NamespaceId"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "ConfigMapId": {
      "Description": "The ID of the config map.",
      "Value": {
        "Fn::GetAtt": [
          "ConfigMap",
          "ConfigMapId"
        ]
      }
    },
    "NamespaceId": {
      "Description": "The ID of the namespace to which this config map instance belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ConfigMap",
          "NamespaceId"
        ]
      }
    }
  }
}
                        
```
