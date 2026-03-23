-   [Home](https://docs.cloud.google.com/?hl=zh-cn)
-   [Documentation](https://docs.cloud.google.com/docs?hl=zh-cn)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml?hl=zh-cn)
-   [Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs?hl=zh-cn)
-   [参考文档](https://docs.cloud.google.com/gemini/enterprise/docs/apis?hl=zh-cn)

发送反馈

# REST Resource: projects.locations.collections.dataStores.branches.documents 使用集合让一切井井有条 根据您的偏好保存内容并对其进行分类。

 

## 资源：Document

文档会捕获要推荐或搜索的项的所有原始元数据信息。

JSON 表示法

{
  "name": string,
  "id": string,
  "schemaId": string,
  "content": {
    object (`[Content](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.Content)`)
  },
  "parentDocumentId": string,
  "derivedStructData": {
    object
  },
  "aclInfo": {
    object (`[AclInfo](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.AclInfo)`)
  },
  "indexTime": string,
  "indexStatus": {
    object (`[IndexStatus](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.IndexStatus)`)
  },

  // Union field `data` can be only one of the following:
  "structData": {
    object
  },
  "jsonData": string
  // End of list of possible types for union field `data`.
}

 

字段

`name`

`string`

不可变。文档的完整资源名称。格式：`projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}/branches/{branch}/documents/{documentId}`。

此字段必须是采用 UTF-8 编码的字符串，长度上限为 1024 个字符。

`id`

`string`

不可变。文档的标识符。

ID 应符合 [RFC-1034](https://tools.ietf.org/html/rfc1034) 标准，且长度上限为 128 个字符。

`schemaId`

`string`

位于同一数据存储区中的架构的标识符。

`content`

``object (`[Content](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.Content)`)``

与相应文档相关联的非结构化数据。仅当相应文档位于 `CONTENT_REQUIRED` 数据存储区下，才能设置内容；并且在这种情况下，必须设置内容。

`parentDocumentId`

`string`

父级文档的标识符。目前最多支持两级文档层次结构。

ID 应符合 [RFC-1034](https://tools.ietf.org/html/rfc1034) 标准，且长度上限为 63 个字符。

`derivedStructData`

``object (`[Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct)` format)``

仅限输出。此字段为 OUTPUT\_ONLY。它包含不在原始输入文档中的派生数据。

`aclInfo`

``object (`[AclInfo](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.AclInfo)`)``

文档的访问权限控制信息。

`indexTime`

``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

仅限输出。上次将文档编入索引的时间。如果设置了此字段，则文档可能会在搜索结果中返回。

此字段为 OUTPUT\_ONLY。如果未填充此字段，则表示文档从未编入索引。

采用 RFC 3339 标准，生成的输出将始终进行 Z 规范化（即转换为 UTC 零时区格式并在末尾附加 Z），并使用 0、3、6 或 9 个小数位。不带“Z”的偏差时间也是可以接受的。示例：`"2014-10-02T15:01:23Z"`、`"2014-10-02T15:01:23.045123456Z"` 或 `"2014-10-02T15:01:23+05:30"`。

`indexStatus`

``object (`[IndexStatus](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.IndexStatus)`)``

仅限输出。文档的索引状态。

-   如果文档已成功编入索引，则系统会填充 indexTime 字段。
-   否则，如果因错误而未将文档编入索引，则系统会填充 errorSamples 字段。
-   否则，如果文档的索引编入正在进行中，则系统会填充 pendingMessage 字段。

联合字段 `data`。数据表示形式。应提供 `[struct_data](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.FIELDS.struct_data)` 或 `[json_data](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.FIELDS.json_data)`，否则系统会抛出 `INVALID_ARGUMENT` 错误。`data` 只能是下列其中一项：

`structData`

``object (`[Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct)` format)``

文档的结构化 JSON 数据。它应符合已注册的 `[Schema](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.schemas?hl=zh-cn#Schema)`，否则系统会抛出 `INVALID_ARGUMENT` 错误。

`jsonData`

`string`

文档的 JSON 字符串表示形式。它应符合已注册的 `[Schema](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.schemas?hl=zh-cn#Schema)`，否则系统会抛出 `INVALID_ARGUMENT` 错误。

### Content

与此文档相关联的非结构化数据。

JSON 表示法

{
  "mimeType": string,

  // Union field `content` can be only one of the following:
  "rawBytes": string,
  "uri": string
  // End of list of possible types for union field `content`.
}

 

字段

`mimeType`

`string`

内容的 MIME 类型。受支持的类型：

-   `application/pdf`（PDF，目前仅支持原生 PDF）
-   `text/html` (HTML)
-   `text/plain` (TXT)
-   `application/xml` 或 `text/xml` (XML)
-   `application/json` (JSON)
-   `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (DOCX)
-   `application/vnd.openxmlformats-officedocument.presentationml.presentation` (PPTX)
-   `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` (XLSX)
-   `application/vnd.ms-excel.sheet.macroenabled.12` (XLSM)

仅当数据存储区中启用了布局解析器时，才支持以下类型：

-   `image/bmp` (BMP)
-   `image/gif` (GIF)
-   `image/jpeg` (JPEG)
-   `image/png` (PNG)
-   `image/tiff` (TIFF)

请参阅 [https://www.iana.org/assignments/media-types/media-types.xhtml](https://www.iana.org/assignments/media-types/media-types.xhtml)。

联合字段 `content`。非结构化文档的内容。`content` 只能是下列其中一项：

`rawBytes`

`string ([bytes](https://developers.google.com/discovery/v1/type-format?hl=zh-cn) format)`

由字节流表示的内容。长度上限为 1,000,000 字节（1 MB / ~0.95 MiB）。

注意：与所有 `bytes` 字段一样，此字段在协议缓冲区中以纯二进制形式表示，在 JSON 中以 base64 编码的字符串形式表示。例如，`abc123!?$*&()'-=@~` 在 JSON 中应表示为 `YWJjMTIzIT8kKiYoKSctPUB+`。请参阅 [https://developers.google.com/protocol-buffers/docs/proto3#json](https://developers.google.com/protocol-buffers/docs/proto3?hl=zh-cn#json)。

使用 base64 编码的字符串。

`uri`

`string`

相应内容的 URI。仅支持 Cloud Storage URI（例如 `gs://bucket-name/path/to/file`）。对于基于文本的格式，文件大小上限为 2.5 MB；对于其他格式，文件大小上限为 200 MB。

### AclInfo

文档的 ACL 信息。

JSON 表示法

{
  "readers": \[
    {
      object (`[AccessRestriction](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.AccessRestriction)`)
    }
  \]
}

 

字段

`readers[]`

``object (`[AccessRestriction](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.AccessRestriction)`)``

文档的读者。

### AccessRestriction

AclRestriction，用于对复杂的继承限制进行建模。

示例：对“同时允许”继承进行建模，其中用户需要拥有父文档的访问权限才能访问子文档。

文档层次结构 - Space\_S --> Page\_P。

读者：Space\_S：group\_1、user\_1 Page\_P：group\_2、group\_3、user\_2

Space\_S ACL Restriction - { "aclInfo": { "readers": \[ { "principals": \[ { "groupId": "group\_1" }, { "userId": "user\_1" } \] } \] } }

Page\_P ACL 限制。{ "aclInfo": { "readers": \[ { "principals": \[ { "groupId": "group\_2" }, { "groupId": "group\_3" }, { "userId": "user\_2" } \], }, { "principals": \[ { "groupId": "group\_1" }, { "userId": "user\_1" } \], } \] } }

JSON 表示法

{
  "principals": \[
    {
      object (`[Principal](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.Principal)`)
    }
  \],
  "idpWide": boolean
}

 

字段

`principals[]`

``object (`[Principal](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document.Principal)`)``

主账号列表。

`idpWide`

`boolean`

身份提供方中的所有用户。

### 主账号

用户或群组的主账号标识符。

JSON 表示法

{

  // Union field `principal` can be only one of the following:
  "userId": string,
  "groupId": string,
  "externalEntityId": string
  // End of list of possible types for union field `principal`.
}

 

字段

联合字段 `principal`。联合字段主账号。主账号可以是用户或群组。`principal` 只能是下列其中一项：

`userId`

`string`

用户标识符。对于 Google Workspace 用户账号，userId 应该是 Google Workspace 用户邮箱。对于非 Google 身份提供方用户账号，userId 是在员工池配置期间配置的映射用户标识符。

`groupId`

`string`

群组标识符。对于 Google Workspace 用户账号，groupId 应该是 Google Workspace 群组邮箱。对于非 Google 身份提供方用户账号，groupId 是在 workforcepool 配置期间配置的映射群组标识符。

`externalEntityId`

`string`

对于客户身份提供方中不存在的第三方应用身份。

### IndexStatus

相应文档的索引状态。

JSON 表示法

{
  "indexTime": string,
  "errorSamples": \[
    {
      object (`[Status](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/ListOperationsResponse?hl=zh-cn#Status)`)
    }
  \],
  "pendingMessage": string
}

 

字段

`indexTime`

``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

相应文档的编入索引时间。如果此字段已填充，则表示相应文档已编入索引。

采用 RFC 3339 标准，生成的输出将始终进行 Z 规范化（即转换为 UTC 零时区格式并在末尾附加 Z），并使用 0、3、6 或 9 个小数位。不带“Z”的偏差时间也是可以接受的。示例：`"2014-10-02T15:01:23Z"`、`"2014-10-02T15:01:23.045123456Z"` 或 `"2014-10-02T15:01:23+05:30"`。

`errorSamples[]`

``object (`[Status](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/ListOperationsResponse?hl=zh-cn#Status)`)``

为文档编制索引时遇到的错误示例。如果此字段已填充，则表示相应文档因存在错误而未编入索引。

`pendingMessage`

`string`

不可变。此消息表示文档索引正在进行中。如果此字段已填充，则表示文档索引处于待处理状态。

 

## 方法

### `[create](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents/create?hl=zh-cn)`

创建 `[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document)`。

### `[delete](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents/delete?hl=zh-cn)`

删除一个 `[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document)`。

### `[get](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents/get?hl=zh-cn)`

获取 `[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document)`。

### `[getProcessedDocument](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents/getProcessedDocument?hl=zh-cn)`

获取某个 `[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document)` 的已解析布局信息。

### `[import](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents/import?hl=zh-cn)`

批量导入多个 `[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document)`。

### `[list](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents/list?hl=zh-cn)`

获取 `[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document)` 的列表。

### `[patch](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents/patch?hl=zh-cn)`

更新一个 `[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document)`。

### `[purge](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents/purge?hl=zh-cn)`

永久删除分支中的所有选定 `[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=zh-cn#Document)`。

发送反馈

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-11-18。
