**注:** このドキュメントは、Gemini Enterprise の Standard、Plus、Frontline の各エディションに適用されます。Business エディションについては、[Gemini Enterprise - Business エディションのヘルプセンター](https://support.google.com/g?hl=ja)をご覧ください。

-   [Home](https://docs.cloud.google.com/?hl=ja)
-   [Documentation](https://docs.cloud.google.com/docs?hl=ja)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml?hl=ja)
-   [Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs?hl=ja)
-   [リファレンス](https://docs.cloud.google.com/gemini/enterprise/docs/apis?hl=ja)

フィードバックを送信

# REST Resource: projects.locations.dataStores.branches コレクションでコンテンツを整理 必要に応じて、コンテンツの保存と分類を行います。

 

## リソース: ブランチ

`[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=ja#Document)` を保存するデータブランチ。

JSON 表現

{
  "name": string,
  "displayName": string,
  "isDefault": boolean,
  "lastDocumentImportTime": string,
  "branchStats": {
    object (`[BranchStats](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches?hl=ja#Branch.BranchStats)`)
  }
}

 

フィールド

`name`

`string`

変更不可。ブランチの完全なリソース名（`projects/*/locations/global/dataStores/dataStore/branches/branchId` など）。

`displayName`

`string`

出力専用。UI に表示するブランチの人が読める名前。

`isDefault`

`boolean`

出力専用。このブランチが親データストアのデフォルト ブランチとして設定されているかどうかを示します。

`lastDocumentImportTime`

``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

出力専用。`[DocumentService.ImportDocuments](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.dataStores.branches.documents/import?hl=ja#google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments)` を介した最後のインポートのタイムスタンプ。値が空の場合は、このブランチにインポートが行われていないことを意味します。

RFC 3339 を使用します。生成された出力は常に Z 正規化され、小数点以下は 0、3、6、または 9 桁になります。「Z」以外のオフセットも使用できます。例: `"2014-10-02T15:01:23Z"`、`"2014-10-02T15:01:23.045123456Z"`、`"2014-10-02T15:01:23+05:30"`

`branchStats`

``object (`[BranchStats](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches?hl=ja#Branch.BranchStats)`)``

出力専用。ブランチを記述する統計情報。このフィールドは \[BranchView.BASIC\]\[\] ビューでは入力されません。

 

## メソッド

### `[batchGetDocumentsMetadata](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.dataStores.branches/batchGetDocumentsMetadata?hl=ja)`

`[Document](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents?hl=ja#Document)` のインデックスの更新頻度メタデータを取得します。

### `[get](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.dataStores.branches/get?hl=ja)`

`[Branch](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches?hl=ja#Branch)` を取得します。

### `[list](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.dataStores.branches/list?hl=ja)`

指定された親 `[DataStore](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores?hl=ja#DataStore)` のすべての `[Branch](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches?hl=ja#Branch)` を一覧表示します。

フィードバックを送信

特に記載のない限り、このページのコンテンツは[クリエイティブ・コモンズの表示 4.0 ライセンス](https://creativecommons.org/licenses/by/4.0/)により使用許諾されます。コードサンプルは [Apache 2.0 ライセンス](https://www.apache.org/licenses/LICENSE-2.0)により使用許諾されます。詳しくは、[Google Developers サイトのポリシー](https://developers.google.com/site-policies?hl=ja)をご覧ください。Java は Oracle および関連会社の登録商標です。

最終更新日 2025-11-18 UTC。
