Deploy Designer models to EAS as online services with one-click deployment for supported algorithms or manual configuration.

## Prerequisites

Train and validate models in Designer before deployment. See [Build and debug a model](/help/en/pai/user-guide/build-and-debug-models).

## One-click deployment

### Supported components

Components listed below support one-click deployment to EAS. Other components require manual deployment. See [Manual deployment](#bda18707a8ky9).

**Component name**

**Deployable model format**

**Matching EAS processor**

**Configuration**

Logistic Regression for Binary Classification

PMML

PMML

Before training, open component settings, go to **Fields Setting** tab, and enable **Whether to Generate PMML**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9932826761/p550299.png)

Gradient Boosting Decision Trees (GBDT) Binary Classification

PMML

PMML

Linear SVM

PMML

PMML

Logistic Regression for Multiclass Classification

PMML

PMML

Random Forest

PMML

PMML

Naive Bayes

PMML

PMML

K-means Clustering

PMML

PMML

GBDT Regression

PMML

PMML

Linear Regression

PMML

PMML

Scorecard Training

PMML

PMML

Text Summarization Training

tgz package

EasyNLP

EasyNLP is provided by PAI in a public OSS bucket and configured automatically.

Image Classification Training (torch)

tgz package

EasyCV

EasyCV is provided by PAI in a public OSS bucket and configured automatically.

PyAlink Script

AlinkModel

Alink

See [PyAlink Script](/help/en/pai/user-guide/pyalink-script).

XGBoost Training

XGBoost

XGBoost

See [XGBoost Training](/help/en/pai/user-guide/xgboost-train).

### Deploy a model

1.  Go to [Visualized Modeling (Designer)](https://pai.console.alibabacloud.com/#/designer), select your workspace, and open the workflow containing your trained model.
    
2.  Click **Model List** above the workflow canvas. The system automatically detects and displays all deployable models.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4786060771/p876732.png)
    
3.  Select your model from the list and click **Deploy to EAS** to open the Create Service page in EAS console.
    
4.  Configure deployment parameters.
    
    **Model File** and **Processor Type** are populated automatically based on model type. For additional options, see [Custom deployment](/help/en/pai/user-guide/model-service-deployment-by-using-the-pai-console/).
    
5.  Click **Deploy**. Wait until **Service Status** shows **Running**.
    

## Manual deployment

Components listed below require manual deployment. After training, use the [Export General-purpose Model](/help/en/pai/user-guide/model-export-1) component to package your model, export it to OSS, and configure EAS deployment manually.

**Component name**

**Deployable model format**

**Matching EAS processor**

**Deployment steps**

PS-SMART Binary Classification

PS format

PS algorithm

Connect the [Export General-purpose Model](/help/en/pai/user-guide/model-export-1) component downstream of this component.

PS-SMART Multiclass Classification

PS-SMART Regression

After exporting your model to OSS, configure EAS deployment manually. See [Custom deployment](/help/en/pai/user-guide/model-service-deployment-by-using-the-pai-console/).

## Troubleshooting

**Why is a supported node dimmed and cannot be selected?**

Open component node settings, go to **Fields Setting** tab, and enable **Whether to Generate PMML**. Re-run the component to enable deployment.

## Related topics

-   Go to PAI-EAS console to monitor deployed services or perform administrative tasks. See [Manage EAS online model services](/help/en/pai/user-guide/service-deployment/#title-21g-8l6-7nr).
    
-   Use online debugging to verify that your deployed service functions correctly. See [Debug a service online](/help/en/pai/user-guide/debug-a-service-online).
    
-   For automated service updates, use **Update EAS Service (beta)** component in Designer to periodically refresh deployed services. See [Periodically update online model services](/help/en/pai/user-guide/periodically-update-online-model-services).
