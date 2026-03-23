-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Data analytics](https://docs.cloud.google.com/docs/data)
-   [BigQuery](https://docs.cloud.google.com/bigquery/docs)
-   [Reference](https://docs.cloud.google.com/bigquery/quotas)

Send feedback

# TableReference Stay organized with collections Save and categorize content based on your preferences.

 

JSON representation

{
  "projectId": string,
  "datasetId": string,
  "tableId": string
}

 

Fields

`projectId`

`string`

Required. The ID of the project containing this table.

`datasetId`

`string`

Required. The ID of the dataset containing this table.

`tableId`

`string`

Required. The ID of the table. The ID can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as `sample_table$20190123`.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-07-02 UTC.
