You can use the Export General-Purpose Model component to export a model trained in MaxCompute to a specified Object Storage Service (OSS) path.

## Prerequisites

The OSS authorization is complete. For more information, see [Cloud Product Dependencies and Authorization: Designer](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-machine-learning-designer#task799).

## Supported upstream components

-   General machine learning components
    
    -   [Gradient Boosting Decision Trees (GBDT) Binary Classification](/help/en/pai/user-guide/gbdt-binary-classification#concept-2099253)
        
    -   [Linear Support Vector Machine](/help/en/pai/user-guide/linear-svm#concept-2513778)
        
    -   [Logistic Regression Binary Classification](/help/en/pai/user-guide/logistic-regression-for-binary-classification#concept-2099252)
        
    -   [GBDT Regression](/help/en/pai/user-guide/gbdt-regression#concept-2563037)
        
    -   [Linear Regression](/help/en/pai/user-guide/linear-regression#concept-2099288)
        
    -   [k-means Clustering](/help/en/pai/user-guide/k-means-clustering#concept-2560698)
        
    -   [Logistic Regression Multiclass Classification](/help/en/pai/user-guide/logistic-regression-for-multiclass-classification#concept-2099273)
        
    -   [Naive Bayes](/help/en/pai/user-guide/naive-bayes#concept-2099279)
        
-   PS-series components
    
    -   [PS-SMART Binary Classification Training](/help/en/pai/user-guide/ps-smart-binary-classification-training#concept-2099256)
        
    -   [PS-SMART Multiclass Classification](/help/en/pai/user-guide/ps-smart-multiclass-classification#concept-2557243)
        
    -   [PS-SMART Regression](/help/en/pai/user-guide/ps-smart-regression#concept-2099290)
        
    -   [PS Linear Regression](/help/en/pai/user-guide/ps-linear-regression#concept-2099291)
        

## Visual Configuration Components

On the **Parameters** tab of the **Export General-Purpose Model** component, configure the following parameters.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9172835071/p749342.png)

**Parameter**

**Description**

**Rename**

-   If this parameter is configured, the exported model is renamed before it is saved.
    
-   If this parameter is not configured, the exported model is saved with the name of the upstream output model.
    

**Note**

To overwrite the previously exported model each time you run the export, configure **Rename** and select the **Overwrite Existing Model** parameter.

**Overwrite**

If this parameter is selected, the generated model file overwrites the model file of the same name in the specified OSS path.

**Export Model Format**

The following values are supported:

-   **original**: The exported model includes a `.meta` file and a `.model` file that describe the model.
    
-   **pmml**: The exported model file has a `.xml` extension.
    

Model formats that can be exported by upstream components:

-   General machine learning components support exporting models in **original** and **pmml** formats. Connect the output model to port 1 of the **Export General-Purpose Model** component.![端口1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0272835071/p477149.png)
    
-   PS-series components support exporting models only in the **original** format. The downstream component must be connected to both port 1 and port 2 of the **Export General-Purpose Model** component.![端口1&端口2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0272835071/p477150.png)
    

## Configure the component using PAI commands

You can configure the component by running the following PAI command in an [SQL script](/help/en/pai/user-guide/sql-script) or an [ODPS SQL node in DataWorks](/help/en/pai/user-guide/call-pai-tensorflow#title-frl-l3b-b6v).

```
PAI -name generalmodeltransfer2oss
-project algo_public
-Dformat="original"
-Drename="model_export"
-Doverwrite="false"
-DossPath="oss://examplebucket-cn-hangzhou-internal.aliyuncs.com/export/"
-Darn="acs:ram::xxxxxxxxxx:role/aliyunodpspaidefaultrole"
-DmodelName="model_flow_aius5tamq5rv4x****_node_anprs9ufo40opc****_model"
```

The following table describes the parameters.

**Parameter Name**

**Required**

**Description**

**Default Value**

format

Yes

The format of the output model. The following values are supported:

-   original
    
-   pmml
    

None

rename

No

The new name for the model.

None (The model is not renamed by default.)

overwrite

No

Specifies whether to overwrite a model of the same name in the specified directory. The following values are supported:

-   true
    
-   false
    

false

ossPath

Yes

The OSS path to which the model is exported.

None

arn

Yes

The authorization information. To obtain this information, log on to the [PAI console](https://pai.console.alibabacloud.com/console). On the **All Product Dependencies** page, find the **Designer** section and click **View Authorization Information** in the **Actions** column. For more information, see [Cloud product dependencies and authorization: Designer](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-machine-learning-designer#section-o9g-1pf-vnp).

None

inputTable

No

When you export a model from a PS-series component, you must also specify the model table that is generated by the training component.

None

modelName

Yes

The name of the offline model to export.

None
