ALIYUN::SLS::Index is used to create an index for a Simple Log Service (SLS) Logstore.

## Syntax

```
{
  "Type": "ALIYUN::SLS::Index",
  "Properties": {
    "ProjectName": String,
    "FullTextIndex": Map,
    "LogstoreName": String,
    "KeyIndices": List,
    "LogReduce": Boolean
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

ProjectName

String

Yes

No

The name of the SLS project.

The name must be 3 to 63 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (\_). It must start with a lowercase letter or a digit.

FullTextIndex

Map

Yes

Yes

The full-text index configurations.

For more information, see [FullTextIndex properties](#section-i6q-ofb-6dk).

LogstoreName

String

Yes

No

The name of the Logstore.

None.

KeyIndices

List

No

Yes

The field index configurations.

You must specify at least one of FullTextIndex and KeyIndices.

For more information, see the "KeyIndices properties" section of this topic.

LogReduce

Boolean

No

Yes

Specifies whether to enable the LogReduce feature.

Valid values:

-   true
    
-   false (default)
    

## FullTextIndex syntax

```
"FullTextIndex": {
  "CaseSensitive": Boolean,
  "Delimiter": String,
  "IncludeChinese": Boolean,
  "Enable": Boolean
}
```

## FullTextIndex properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Enable

Boolean

Yes

Yes

Specifies whether to enable the full-text index feature.

Valid values:

-   true (default)
    
-   false
    

CaseSensitive

Boolean

No

Yes

Specifies whether the text is case-sensitive.

Valid values:

-   true
    
-   false (default)
    

Delimiter

String

No

Yes

The delimiter.

The following special characters are supported:

```
,'";=()[]{}?@&<>/:\n\t\r
```

IncludeChinese

Boolean

No

Yes

Specifies whether the text contains Chinese characters.

Valid values:

-   true
    
-   false (default)
    

## KeyIndices syntax

```
"KeyIndices": [
  {
    "Name": String,
    "EnableAnalytics": Boolean,
    "Delimiter": String,
    "CaseSensitive": Boolean,
    "JsonKeyIndices": List,
    "Alias": String,
    "IncludeChinese": String,
    "Type": String
  }
]
```

## KeyIndices properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Name

String

Yes

Yes

The name of the field.

You can specify a name in the nested format separated with periods (.). Example: k1.k2.k3.

EnableAnalytics

Boolean

No

Yes

Specifies whether to enable the statistical analysis feature for the field.

Valid values:

-   true (default)
    
-   false
    

Delimiter

String

No

Yes

The delimiter.

The following special characters are supported:

```
,'";=()[]{}?@&<>/:\n\t\r
```

CaseSensitive

Boolean

No

Yes

Specifies whether the field is case-sensitive.

Valid values:

-   true
    
-   false (default)
    

This property takes effect only when Type is set to `text` or `json`.

JsonKeyIndices

List

No

Yes

The JSON index configurations. Format: `[{"key1": "value1", "key2": "value2", ...}]`.

Supported keys are Name, Alias, Type, and EnableAnalytics.

For more information, see [JsonKeyIndices properties](#section-y1e-mtq-3xd).

Alias

String

No

Yes

The alias of the field.

None.

IncludeChinese

Boolean

No

Yes

Specifies whether the field contains Chinese characters.

Valid values:

-   true
    
-   false (default)
    

This property takes effect only when Type is set to text.

Type

String

Yes

Yes

The field type.

Valid values:

-   `text` (default)
    
-   `long`
    
-   `double`
    
-   `json`
    

## JsonKeyIndices syntax

```
"JsonKeyIndices": [
  {
    "Type": String,
    "Alias": String,
    "EnableAnalytics": Boolean,
    "Name": String
  }
]  
```

## JsonKeyIndices properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Name

String

Yes

Yes

The name of the field.

None.

EnableAnalytics

Boolean

No

Yes

Specifies whether to enable the statistical analysis feature for the field.

Valid values:

-   true
    
-   false
    

Alias

String

No

Yes

The alias of the field.

None.

Type

String

Yes

Yes

The field type.

None.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test SLS Index
Parameters: {}
Resources:
  LogIndex:
    Type: ALIYUN::SLS::Index
    Properties:
      ProjectName: TestProject
      FullTextIndex:
        CaseSensitive: true
      LogstoreName: TestLogstore
Outputs: {}          
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test SLS Index",
  "Parameters": {
  },
  "Resources": {
    "LogIndex": {
      "Type": "ALIYUN::SLS::Index",
      "Properties": {
        "ProjectName": "TestProject",
        "FullTextIndex": {
          "CaseSensitive": true
        },
        "LogstoreName": "TestLogstore"
      }
    }
  },
  "Outputs": {
  }
}
```
