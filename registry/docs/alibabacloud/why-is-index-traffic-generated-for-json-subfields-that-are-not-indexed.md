After you configure an index for a field of the JSON type, the field name and field value are both included in the index traffic. The subfields that are not indexed are also included.

## Calculation rules

You can calculate index traffic for a JSON field based on the following rules:

-   If a subfield is not indexed, the index traffic is calculated by regarding the data type of the subfield as text.
-   If a subfield is indexed, the index traffic is calculated based on the data type of the subfield. The data type can be text, long, or double. For more information, see [Create indexes](/help/en/sls/create-indexes#section-p4c-1u5-szf).

## Example

In the following sample log, the result field is of the JSON type and only the result.anomaly\_type subfield is indexed. When index traffic is calculated, the name of the result field and all content in the value of the result field are included in the index traffic. The names and values of subfields such as dim\_name are also included in the index traffic, and the data types of the subfields are regarded as text.

-   Sample log![Sample log](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5839151461/p357810.png)
-   Index configuration![Index configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5839151461/p357816.png)
