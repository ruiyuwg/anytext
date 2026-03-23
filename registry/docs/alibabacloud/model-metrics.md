You can configure model metrics for a model when you register the model and use these metrics to compare between different versions of the model. This can help you evaluate the performance differences between different model versions. This topic describes how to configure and view model metrics.

### **Limits**

The length of the serialized configuration content of a model metric cannot exceed 8,192 bytes.

## **Configure model metrics**

When you register a new model, you can select **Advanced Settings** to configure **Model Metrics**. For more information, see [Register and manage models](/help/en/pai/user-guide/register-and-manage-models). ![fbd6506005ca5bd234434261840d2f8b..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9716638861/p675213.png)

The following code provides an example on how to configure **model metrics**.

```
{
  "Results": [{
    "Dataset": {
      "Uri": "oss://xxxx/"
    },
    "Metrics": {
      "lr": 0.000001,
      "train_loss": 2.6345
    }
  },{
    "Dataset": {
      "DatasetId": "d-alksdcjkasdfjhr"
    },
    "Metrics": {
      "lr": 0.000001,
      "train_loss": 2.6345
    }
  }]
}
```

The following table describes the key parameters.

**Parameter**

**Required**

**Description**

**Results**

**Dataset**

No

The dataset used to evaluate the model. You can configure the following parameters:

-   **Uri:** the path of the OSS bucket where the dataset resides.
    
-   **DatasetId:** the ID of the dataset.
    

You can also customize Dataset parameters based on the sample configuration. For example, you can add a dataset name parameter.

**Metrics**

Yes

The metrics for model performance evaluation. You can also customize the Metrics parameter based on the sample configuration.

-   **lr:** the learning rate during model training.
    
-   **train\_loss:** the training loss.
    

## **View model metrics**

You can perform the following steps to view the metrics data of different versions of the model after the model is registered.

1.  On the **Model Management** page, click the model name to go to the model details page.
    
2.  In the **Model Versions** section, find the version that you want to view and click **Details** in the **Operation** column.
    
3.  In the **Model version** panel, view the metrics of the model.
    
    Model metrics are displayed in the following formats:
    
    -   **JSON** ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0816638861/p675234.png)
        
    -   **Table** ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0321996961/p726196.png)
