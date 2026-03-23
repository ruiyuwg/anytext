**Parameter**

**Type**

**Description**

**Example**

object

The data structure for the index configuration.

max\_text\_len

integer

The default maximum length of a field value in Simple Log Service is 2,048 bytes (2 KB). To change this limit, set the maximum length for a text field. The value must be between 64 and 16,384 bytes.

2048

log\_reduce\_white\_list

array

The whitelist of fields for log clustering. This parameter is valid only when log clustering is enabled.

string

A field in the whitelist.

name

log\_reduce\_black\_list

array

The blacklist of fields for log clustering. This parameter is valid only when log clustering is enabled.

string

A field in the blacklist.

time

line

object

The full-text index configuration. You must specify either this parameter or the \`keys\` parameter.

chn

boolean

Specifies whether the logs contain Chinese characters.

-   true: The logs contain Chinese characters.
    
-   false (default): The logs do not contain Chinese characters.
    

false

caseSensitive

boolean

Specifies whether the index is case-sensitive.

-   true: The index is case-sensitive.
    
-   false (default): The index is not case-sensitive.
    

true

token

array

The list of delimiters for tokenization. This parameter specifies how the field is tokenized.

string

A delimiter. Examples: ",", ".", "\\r", and "\\n".

,

include\_keys

array

The list of fields to include in the full-text index. This parameter cannot be specified at the same time as \`exclude\_keys\`.

string

The fields to include.

includeField

exclude\_keys

array

The list of fields to exclude from the full-text index. This parameter cannot be specified at the same time as \`include\_keys\`.

string

The fields to exclude.

excludeField

keys

object

The field index configuration. The key is the field name and the value is the index configuration for the field. You must specify either this parameter or the \`line\` parameter.

The field index configuration. The key is the field name and the value is the index configuration for the field.

log\_reduce

boolean

Specifies whether to enable log clustering. If enabled, either the whitelist or the blacklist can be active, but not both.

-   true: Enable log clustering.
    
-   false (default): Do not enable log clustering.
    

true

scan\_index

boolean

Specifies whether to enable the scan index.

false
