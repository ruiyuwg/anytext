-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Vertex AI Search](https://docs.cloud.google.com/generative-ai-app-builder/docs)
-   [Reference](https://docs.cloud.google.com/generative-ai-app-builder/docs/apis)

Send feedback

# SearchResult Stay organized with collections Save and categorize content based on your preferences.

 

Represents the search results.

JSON representation

{
  "id": string,
  "document": {
    object (`[Document](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents#Document)`)
  },
  "chunk": {
    object (`[Chunk](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents.chunks#Chunk)`)
  },
  "modelScores": {
    string: {
      object (`[DoubleList](/generative-ai-app-builder/docs/reference/rest/v1alpha/SearchResult#DoubleList)`)
    },
    ...
  },
  "rankSignals": {
    object (`[RankSignals](/generative-ai-app-builder/docs/reference/rest/v1alpha/SearchResult#RankSignals)`)
  }
}

 

Fields

`id`

`string`

`[Document.id](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents#Document.FIELDS.id)` of the searched `[Document](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents#Document)`.

`document`

``object (`[Document](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents#Document)`)``

The document data snippet in the search response. Only fields that are marked as `retrievable` are populated.

`chunk`

``object (`[Chunk](/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.collections.dataStores.branches.documents.chunks#Chunk)`)``

The chunk data in the search response if the `[SearchRequest.ContentSearchSpec.search_result_mode](/generative-ai-app-builder/docs/reference/rest/v1alpha/ContentSearchSpec#FIELDS.search_result_mode)` is set to `[CHUNKS](/generative-ai-app-builder/docs/reference/rest/v1alpha/ContentSearchSpec#SearchResultMode.ENUM_VALUES.CHUNKS)`.

`modelScores`

``map (key: string, value: object (`[DoubleList](/generative-ai-app-builder/docs/reference/rest/v1alpha/SearchResult#DoubleList)`))``

Output only. Google provided available scores.

`rankSignals`

``object (`[RankSignals](/generative-ai-app-builder/docs/reference/rest/v1alpha/SearchResult#RankSignals)`)``

Optional. A set of ranking signals associated with the result.

## DoubleList

Double list.

JSON representation

{
  "values": \[
    number
  \]
}

 

Fields

`values[]`

`number`

Double values.

## RankSignals

A set of ranking signals.

JSON representation

{
  "defaultRank": number,
  "customSignals": \[
    {
      object (`[CustomSignal](/generative-ai-app-builder/docs/reference/rest/v1alpha/SearchResult#CustomSignal)`)
    }
  \],
  "keywordSimilarityScore": number,
  "relevanceScore": number,
  "semanticSimilarityScore": number,
  "pctrRank": number,
  "topicalityRank": number,
  "documentAge": number,
  "boostingFactor": number
}

 

Fields

`defaultRank`

`number`

Optional. The default rank of the result.

`customSignals[]`

``object (`[CustomSignal](/generative-ai-app-builder/docs/reference/rest/v1alpha/SearchResult#CustomSignal)`)``

Optional. A list of custom clearbox signals.

`keywordSimilarityScore`

`number`

Optional. Keyword matching adjustment.

`relevanceScore`

`number`

Optional. Semantic relevance adjustment.

`semanticSimilarityScore`

`number`

Optional. Semantic similarity adjustment.

`pctrRank`

`number`

Optional. Predicted conversion rate adjustment as a rank.

`topicalityRank`

`number`

Optional. Topicality adjustment as a rank.

`documentAge`

`number`

Optional. Age of the document in hours.

`boostingFactor`

`number`

Optional. Combined custom boosts for a doc.

## CustomSignal

Custom clearbox signal represented by name and value pair.

JSON representation

{
  "name": string,
  "value": number
}

 

Fields

`name`

`string`

Optional. name of the signal.

`value`

`number`

Optional. Float value representing the ranking signal (e.g. 1.25 for BM25).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-08-26 UTC.
