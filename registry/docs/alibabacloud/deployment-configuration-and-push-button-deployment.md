You can set service deployment configurations when you register a model. When you later use one-click deployment for the model, these configurations are automatically applied. This improves deployment efficiency because you do not need to manually edit the configuration. This topic describes how to set service deployment configurations and use one-click deployment for model services.

## **Service deployment configuration**

When you register a new model, you can customize the service deployment configuration in the **Model Service Deployment Configuration** section.![08ac986b062b90053e728608909d791c..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9446638861/p675127.png)

Select **Custom Configuration** and enter the deployment configuration in the text box.

-   The following is a sample service deployment configuration for a model that is deployed using a custom image:
    
    ```
    {
      "containers": [
        {
          "image": "registry-vpc.cn-shanghai.aliyuncs.com/xxx/yyy:zzz",
          "env": [
            {
              "name": "var_name",
              "value": "var_value"
            }
          ],
          "command": "/data/eas/ENV/bin/python /data/eas/app.py",
          "port": 8000
        }
      ],
      "storage": [
        {
          "oss": {
            "readOnly": false
          },
          "properties": {
            "resource_type": "model"
          }
        }
      ]
    }
    ```
    
    For more information about the parameter settings, see [Custom images](/help/en/pai/user-guide/deploy-a-model-service-by-using-a-custom-image). For more information about the complete configuration and deployment methods for Elastic Algorithm Service (EAS), see [Service deployment](/help/en/pai/user-guide/service-deployment/).
    
-   The following is a sample service deployment configuration for a model that uses a [preset processor](/help/en/pai/user-guide/pmml-processor):
    
    ```
    {
      "processor": "tensorflow_gpu_1.12"
    }
    ```
    
-   The following is a sample service deployment configuration for a model that uses a [custom processor](/help/en/doc-detail/143419.html):
    
    ```
    {
      "processor_entry": "./service.py",
      "processor_type": "python",
      "processor_path": "http://eas-data.oss-cn-shanghai.aliyuncs.com/demo/service.py",
      "data_image": "registry.cn-shanghai.aliyuncs.com/eas-service/develop:latest"
    }
    ```
    

## **One-click service deployment**

You can deploy a registered model directly to EAS. During deployment, the **Model Service Deployment Configuration** is passed directly to the EAS deployment configuration. The procedure is as follows:

1.  On the Model Management page, click **Deploy to EAS** in the **Operation** column for the model. Then, follow the on-screen instructions. You are automatically redirected to the EAS service deployment page.
    
    **Note**
    
    Currently, only models from Model Gallery support one-click deployment.
    
    For models registered from OSS or custom training: use [custom deployment](/help/en/pai/user-guide/model-service-deployment-by-using-the-pai-console/#multiTask1281) instead. In the custom deployment workflow, mount your OSS model path to the container and configure the service manually.
    
2.  On the service deployment page, key parameters in the model service information area are prefilled based on the model service deployment configuration. Configure the other required parameters to start the deployment. For more information about the configuration, see [Custom deployment](/help/en/pai/user-guide/model-service-deployment-by-using-the-pai-console/#multiTask1281).
