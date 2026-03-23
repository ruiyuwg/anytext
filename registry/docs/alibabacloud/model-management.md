PolarDB for AI includes built-in large models and also lets you build custom models or load external models using SQL statements. This topic explains how to create, upload, evaluate, and use models for inference.

## **Model overview**

**Model category**

**Description**

Built-in models

Directly call built-in large language models (LLMs) using SQL statements to perform complex analysis tasks. You do not need to synchronize data from PolarDB to other AI platforms. For more information, see [Data inference and interaction with the Qwen LLM](/help/en/polardb/polardb-for-mysql/qwen-big-model-data-reasoning-and-interaction).

Custom models

Built-in LLMs might not meet all your business needs. You can create custom models and tune them for better performance. In addition, PolarDB for AI lets you run models in confidential containers for enhanced data security.

The workflow to build a custom model is as follows:

1.  [Create a model](#title-4zm-v4m-k5k)
    
2.  [Evaluate the model](#title-uul-t0d-9h4)
    
3.  [Perform model inference](#title-ol5-3z6-695)
    

External models

If you have an existing model, you can upload and deploy it to PolarDB for inference. Examples include models based on the Sklearn framework, such as the light gradient boosting machine (LightGBM) and GBDT, or deep learning algorithms based on the TensorFlow or PyTorch frameworks.

The workflow to load an external model is as follows:

1.  [Upload the model](#title-bht-jus-b5i)
    
2.  [Deploy the model](#title-z0n-wko-4zm)
    
3.  [Evaluate the model](#title-uul-t0d-9h4)
    
4.  [Perform model inference](#title-ol5-3z6-695)
    

## Create a model

Create a machine learning model. Model creation is an asynchronous process. Query the model status to check whether the creation is complete.

### **Syntax**

```
CREATE MODEL model_name WITH ( model_class = '', x_cols = '', y_cols='',model_parameter=()) AS (SELECT select_expr [, select_expr] ... FROM table_reference)
```

### **Parameters**

**Parameter**

**Description**

model\_name

The model name.

model\_class

The model type. Valid values:

-   lightgbm: For more information, see [LightGBM algorithm](/help/en/polardb/polardb-for-mysql/lightgbm-algorithm#concept-2228620).
    
-   deepfm: For more information, see [DeepFM algorithm](/help/en/polardb/polardb-for-mysql/deepfm-algorithm#concept-2228622).
    
-   kmeans: For more information, see [K-means clustering algorithm (K-Means)](/help/en/polardb/polardb-for-mysql/k-means-clustering-algorithm#concept-2228623).
    
-   randomforestreg: For more information, see [Random forest regression algorithm (Random Forest Regression)](/help/en/polardb/polardb-for-mysql/random-forest-regression-algorithm#concept-2230309).
    
-   gbrt: For more information, see [GBRT algorithm (GBRT)](/help/en/polardb/polardb-for-mysql/gbrt-algorithm#concept-2230381).
    
-   linearreg: For more information, see [LR algorithm (Linear Regression)](/help/en/polardb/polardb-for-mysql/lr-algorithm#concept-2230404).
    
-   svr: For more information, see [Support vector regression algorithm (SVR)](/help/en/polardb/polardb-for-mysql/svr-algorithm#concept-2230411).
    
-   bst: For more information, see [BST algorithm](/help/en/polardb/polardb-for-mysql/bst-algorithm).
    

x\_cols

The input columns for model creation.

**Note**

Separate multiple column names with commas (,).

y\_cols

The output column for model creation.

model\_parameter

The parameters for model creation.

-   When the value of `model_class` is lightgbm, see [metric description](/help/en/polardb/polardb-for-mysql/lightgbm-algorithm#section-2n1-i08-6lq) for the values of `model_parameter`.
    
-   When the value of `model_class` is deepfm, see [parameter description](/help/en/polardb/polardb-for-mysql/deepfm-algorithm#section-an9-k94-5fe) for the values of `model_parameter`.
    
-   If `model_class` is set to kmeans, see [Parameter description](/help/en/polardb/polardb-for-mysql/k-means-clustering-algorithm#section-niz-15c-a4q) for details about `model_parameter`.
    
-   When the value of `model_class` is randomforestreg, see [Parameter description](/help/en/polardb/polardb-for-mysql/random-forest-regression-algorithm#section-oaj-e8v-xhl) for the values of `model_parameter`.
    
-   When the value of `model_class` is gbrt, see [Parameter descriptions](/help/en/polardb/polardb-for-mysql/gbrt-algorithm#section-c46-39s-oir) for the values of `model_parameter`.
    
-   When the value of `model_class` is \`linearreg\`, the values for `model_parameter` are described in [Parameter description](/help/en/polardb/polardb-for-mysql/lr-algorithm#section-u16-eho-s3f).
    
-   For information about the `model_parameter` value when `model_class` is svr, see [Parameter description](/help/en/polardb/polardb-for-mysql/svr-algorithm#section-0o5-m0t-l24).
    
-   When `model_class` is bst, see [Parameter description](/help/en/polardb/polardb-for-mysql/bst-algorithm#fdf300e05dzgu) for the value of `model_parameter`.
    

select\_expr

The column name.

table\_reference

The table name.

### **Example**

Create the `airlines_gbm` model.

```
/*polar4ai*/CREATE MODEL airlines_gbm WITH (model_class='lightgbm', x_cols ='Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length', y_cols='Delay',model_parameter=(boosting_type='gbdt', n_estimators=100, max_depth=8, num_leaves=256)) as (SELECT * FROM db4ai.airlines_train)
```

The following result is returned:

```
Query OK, 0 rows affected (0.79 sec)
```

## Upload a model

PolarDB for AI supports uploading custom machine learning models. You can upload models that you created offline to PolarDB for AI and then use the platform to manage them. PolarDB for AI supports the following model formats: PMML, ONNX, and Checkpoint (for TensorFlow and PyTorch platforms).

### **Syntax**

```
UPLOAD MODEL model_name WITH (model_location = '', req_location = '') 
```

### **Parameters**

**Parameter**

**Description**

model\_name

The model name.

model\_location

The URL of the model file.

req\_location

The URL of the file that contains the model's runtime dependencies.

### **Example**

Upload the created `my_model` model to the PolarDB for AI platform.

```
/*polar4ai*/UPLOAD MODEL my_model WITH (model_location='https://xxxx.oss-cn-hangzhou.aliyuncs.com/xxxx/model.pkl?Expires=xxxx&OSSAccessKeyId=xxxx&Signature=xxxx', req_location='https://xxxx.oss-cn-hangzhou.aliyuncs.com/xxxx/requirements.txt?Expires=xxxx&OSSAccessKeyId=xxxx&Signature=xxxx');
```

The following result is returned:

```
Query OK, 0 rows affected (0.29 sec)
```

Run the following command to check the model status.

```
/*polar4ai*/ SHOW MODEL my_model;
```

The following result is returned:

```
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
| modelStatus | modelPath                                                                                                                   |
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
| saved       | http://db4ai-collie-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/xxxxx.pkl?OSSAccessKeyId=xxxxxx&Expires=xxxx&Signature=xxxxxx  |
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.23 sec)
```

If `modelStatus` is `saved`, the model is uploaded.

## Deploy a model

Deploy the uploaded model on the PolarDB for AI platform. After deployment, the model is online, which makes subsequent inference calls faster.

### **Syntax**

```
DEPLOY MODEL model_name
```

### **Parameters**

**Parameter**

**Description**

model\_name

The model name.

### **Example**

Deploy the `my_model` model on the PolarDB for AI platform.

```
/*polar4ai*/ DEPLOY MODEL my_model;
```

The following result is returned:

```
Query OK, 0 rows affected (0.29 sec)
```

Run the following command to check the model status:

```
/*polar4ai*/ SHOW MODEL my_model;
```

The following result is returned:

```
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
| modelStatus | modelPath                                                                                                                   |
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
| serving     | http://db4ai-collie-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/xxxxx.pkl?OSSAccessKeyId=xxxxxx&Expires=xxxx&Signature=xxxxxx  |
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.23 sec)
```

If `modelStatus` is `serving`, the model is deployed.

## **View models**

**Note**

You can view only your custom models and uploaded external models. You cannot view the models that are built into PolarDB for AI.

## **View the model list**

View all custom and uploaded external models in the current cluster.

#### **Syntax**

```
SHOW MODELS
```

#### **Example**

```
/*polar4ai*/SHOW MODELS
```

The following result is returned:

```
+-----------------------+-----------------+--------------+
| model_name            | model_class     | model_status |
+-----------------------+-----------------+--------------+
| airline_rfr           | randomforestreg | saved        |
| gbrt1                 | gbrt            | saved        |
| airline_deepfm        | deepfm          | saved        |
| airlines_gbm          | lightgbm        | saved        |
| lgbm1                 | lightgbm        | saved        |
| blackfriday_linearreg | linearreg       | saved        |
+-----------------------+-----------------+--------------+
6 rows in set (0.24 sec)
```

## **View model status**

View the current status of a model. After you create a model, use this syntax to check whether the creation is complete. The model can have the following statuses:

-   training: The model is being created.
    
-   loading\_data: The model is loading data.
    
-   trained: The model is created.
    
-   saved: The model is saved.
    
-   serving: The model is in service.
    
-   deleted: The model is deleted.
    

#### **Syntax**

```
SHOW MODEL model_name 
```

#### **Parameters**

**Parameter**

**Description**

model\_name

The model name.

#### **Example**

View the current status of the `airlines_gbm` model.

```
/*polar4ai*/SHOW MODEL airlines_gbm;
```

The following result is returned:

```
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
| modelStatus | modelPath                                                                                                                   |
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
| saved       | http://db4ai-collie-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/xxxxx.pkl?OSSAccessKeyId=xxxxxx&Expires=xxxx&Signature=xxxxxx  |
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.23 sec)
```

**Note**

The `modelPath` URL is valid for 100 minutes. The `Expires` parameter in the `modelPath` URL shows the expiration time. Access the URL before it expires.

## **View model details**

#### **Syntax**

```
DESCRIBE MODEL model_name
```

#### **Parameters**

**Parameter**

**Description**

model\_name

The model name.

#### **Example**

View the details of the `airlines_gbm` model.

```
/*polar4ai*/DESCRIBE MODEL airlines_gbm;
```

The following result is returned:

```
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| model_name        | model_description                                                                                                                                                                                                                                                                 |
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| airlines_gbm      | basic information:model_name:airlines_gbm model_class:lightgbm feature important:features,imp_gain,imp_splitAirline,0.3327,0.0376 AirportFrom,0.2178,0.1842 Time,0.1893,0.1999 AirportTo,0.1668,0.187 DayOfWeek,0.0384,0.1236 Length,0.0307,0.1269 Flight,0.0242,0.1408           |
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.65 sec)
```

## Evaluate a model

Evaluate the performance of a created model.

### **Syntax**

```
SELECT select_expr [, select_expr] ... FROM EVALUATE (MODEL model_name, SELECT select_expr_for_prediction [, select_expr_for_prediction] ... FROM table_reference ) WITH (x_cols = '', y_cols='', metrics='')
```

### **Parameters**

**Parameter**

**Description**

select\_expr

The columns to display in the model evaluation results.

model\_name

The model name.

select\_expr\_for\_prediction

The columns to use for model evaluation.

table\_reference

The table name.

x\_cols

The input columns for model creation. Separate multiple column names with commas (,).

y\_cols

You can create a model output column.

metrics

The model evaluation metric. Valid values:

-   acc: Accuracy. This metric applies to classification tasks.
    
-   r2\_score: Coefficient of determination. This metric applies to regression tasks.
    
-   ks: KS value. This value indicates the model's ability to distinguish between positive and negative samples. This metric applies to classification tasks.
    
-   auc: AUC value. This value represents the area under the receiver operating characteristic (ROC) curve. This metric applies to classification tasks.
    
-   Fscore: F-score. This is the harmonic mean of precision and recall rate. This metric applies to classification tasks.
    

### **Example**

1.  Use the created `airlines_gbm` model to perform model evaluation.
    
    ```
    /*polar4ai*/SELECT Delay FROM evaluate(MODEL airlines_gbm, SELECT * FROM db4ai.airlines_test) WITH (x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length', y_cols='Delay', metrics='acc');
    ```
    
    The following result is returned:
    
    ```
    +--------------------------------------+
    | task_id                              |
    +--------------------------------------+
    | df05244e-21f7-11ed-be66-xxxxxxxxxxxx |
    +--------------------------------------+
    1 row in set (0.95 sec)
    ```
    
2.  Run the following command to check the task status.
    
    ```
    /*polar4ai*/SHOW TASK `df05244e-21f7-11ed-be66-xxxxxxxxxxxx`;
    ```
    
    The following result is returned:
    
    ```
    +------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
    | taskStatus | filePath                                                                                                                                           | results         | startTime                  | endTime                    |
    +------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
    | finish     | http://db4ai-collie-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/pc-xxxxxxx/airlines_gbm/xxxxx.csv?OSSAccessKeyId=xxxxxx&Expires=xxxx&Signature=xxxxxx | {"acc": 0.6694} | 2022-08-22 17:22:21.122101 | 2022-08-22 17:22:39.428811 |
    +------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
    1 row in set (0.24 sec)
    ```
    
    **Note**
    
    The `filePath` URL is valid for 100 minutes. The `Expires` parameter in the `filePath` URL shows the expiration time. Access the URL before it expires.
    

## Perform model inference

Use a created model to perform online or offline inference.

### **Syntax**

```
SELECT select_expr [, select_expr] ... FROM PREDICT (MODEL model_name, SELECT select_expr_for_prediction [, select_expr_for_prediction] ... FROM table_reference LIMIT row_count) WITH (x_cols= '')
```

### **Parameters**

**Parameter**

**Description**

select\_expr

The columns to display in the model inference results.

model\_name

The model name.

select\_expr\_for\_prediction

The columns to use for model inference.

table\_reference

The table name.

mode

The mode. Set this parameter to **async** for offline inference. If you leave it empty, online inference is performed.

row\_count

The number of samples for inference.

x\_cols

The input columns for model creation. Separate multiple column names with commas (,).

### **Example**

-   Online inference.
    
    Use the created `airlines_gbm` model to perform online inference.
    
    ```
    /*polar4ai*/SELECT Delay FROM PREDICT(MODEL airlines_gbm, SELECT * FROM db4ai.airlines_test LIMIT 10) WITH (x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length', y_cols='Delay');
    ```
    
    The following result is returned:
    
    ```
    +-------+-------------------+
    | Delay | predicted_results |
    +-------+-------------------+
    |     1 | 0                 |
    |     0 | 0                 |
    |     0 | 0                 |
    |     0 | 0                 |
    |     0 | 0                 |
    |     0 | 0                 |
    |     1 | 0                 |
    |     0 | 0                 |
    |     0 | 0                 |
    |     1 | 0                 |
    +-------+-------------------+
    10 rows in set (0.74 sec)
    ```
    
-   Offline inference.
    
    If the number of inference samples exceeds 1,000, PolarDB for AI prompts you to use an offline task:
    
    ```
    ERROR 9050 (HY000): Please limit the SQL selected data length to less than '1000' or convert to offline prediction
    ```
    
    Create an offline task as follows:
    
    ```
    /*polar4ai*/SELECT Delay FROM predict(MODEL airlines_gbm, SELECT * FROM db4ai.airlines_test) WITH (x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length', y_cols='Delay', mode='async');
    ```
    
    The following result is returned:
    
    ```
    +--------------------------------------+
    | task_id                              |
    +--------------------------------------+
    | bd0c1722-21e7-11ed-94a8-xxxxxxxxxxxx |
    +--------------------------------------+
    1 row in set (0.75 sec)
    ```
    
    The query returns the `task_id` of the task. You can use this task ID to query the task status and the download URL for the results.
    
    ```
    /*polar4ai*/SHOW TASK `bd0c1722-21e7-11ed-94a8-xxxxxxxxxxxx`
    ```
    
    The following result is returned:
    
    ```
    +------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
    | taskStatus | filePath                                                                                                                                           | results         | startTime                  | endTime                    |
    +------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
    | finish     | http://db4ai-collie-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/pc-xxxxxxx/airlines_gbm/xxxxx.csv?OSSAccessKeyId=xxxxxx&Expires=xxxx&Signature=xxxxxx |                 | 2022-08-22 14:57:51.355240 | 2022-08-22 14:58:18.316818 |
    +------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
    1 row in set (0.24 sec)
    ```
    
    **Note**
    
    The `filePath` URL is valid for 100 minutes. The `Expires` parameter in the `filePath` URL shows the expiration time. Access the URL before it expires.
    

## **Offline evaluation and inference tasks**

**Note**

An offline task is a long-running batch processing job that does not return results in real time. Offline tasks can be used for evaluation or inference.

## **View the offline task list**

View all offline tasks in the current cluster.

#### **Syntax**

```
SHOW TASKS
```

#### **Example**

Run the following command to view all offline tasks in the current cluster.

```
/*polar4ai*/SHOW TASKS;
```

The following result is returned:

```
+--------------------------------------+------------+-------------+----------------------------+----------------------------+
| task_id                              | task_type  | task_status | start_timestr              | end_timestr                |
+--------------------------------------+------------+-------------+----------------------------+----------------------------+
| 2cba0c74-1f8f-11ed-934a-xxxxxxxxxxxx | prediction | finish      | 2022-08-19 15:18:51.206829 |                            |
| 77b3a186-1f94-11ed-8eaa-xxxxxxxxxxxx | evaluation | finish      | 2022-08-19 15:56:44.465594 |                            |
| 972547a4-1fa3-11ed-9c6b-xxxxxxxxxxxx | evaluation | finish      | 2022-08-19 17:44:59.790353 | 2022-08-19 17:45:23.750100 |
| bd0c1722-21e7-11ed-94a8-xxxxxxxxxxxx | prediction | finish      | 2022-08-22 14:57:51.355240 | 2022-08-22 14:58:18.316818 |
| df05244e-21f7-11ed-be66-xxxxxxxxxxxx | evaluation | finish      | 2022-08-22 16:53:20.381577 | 2022-08-22 16:53:37.189953 |
| ec956db8-21fb-11ed-8400-xxxxxxxxxxxx | evaluation | finish      | 2022-08-22 17:22:21.122101 | 2022-08-22 17:22:39.428811 |
+--------------------------------------+------------+-------------+----------------------------+----------------------------+
9 rows in set (0.18 sec)
```

## **View offline task status**

View the current status of an offline task. The task can have the following statuses:

-   init: The task is being initialized.
    
-   running: The task is running.
    
-   finish: The task is complete.
    
-   fail: The task failed.
    

#### **Syntax**

```
DROP TASK `task_id` 
```

#### **Parameters**

**Parameter**

**Description**

task\_id

The task ID.

#### **Example**

Delete the job with the job ID `df05244e-21f7-11ed-be66-xxxxxxxxxxxx`.

```
/*Polar for AI*/DROP TASK `df05244e-21f7-11ed-be66-xxxxxxxxxxxx`
```

The following result is returned:

```
+------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
| taskStatus | filePath                                                                                                                                           | results         | startTime                  | endTime                    |
+------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
| finish     | http://db4ai-collie-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/pc-xxxxxxx/airlines_gbm/xxxxx.csv?OSSAccessKeyId=xxxxxx&Expires=xxxx&Signature=xxxxxx | {"acc": 0.6694} | 2022-08-22 17:22:21.122101 | 2022-08-22 17:22:39.428811 |
+------------+----------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+----------------------------+----------------------------+
1 row in set (0.24 sec)
```

**Note**

The `filePath` URL is valid for 100 minutes. The `Expires` parameter in the `filePath` URL shows the expiration time. Access the URL before it expires.

## **Delete an offline task**

#### **Syntax**

```
DROP TASK `task_id` 
```

#### **Parameters**

**Parameter**

**Description**

task\_id

The ID of the task.

#### **Example**

Delete the task with the ID `df05244e-21f7-11ed-be66-xxxxxxxxxxxx`.

```
/*polar4ai*/DROP TASK `df05244e-21f7-11ed-be66-xxxxxxxxxxxx`
```

## Delete a model

When a model is no longer needed, use this syntax to delete it.

### **Syntax**

```
DROP MODEL model_name 
```

### **Parameters**

**Parameter**

**Description**

model\_name

The model name.

### **Example**

Delete the `airlines_gbm` model.

```
/*polar4ai*/DROP MODEL airlines_gbm 
```

A result similar to the following is returned, which indicates that the `airlines_gbm` model is deleted:

```
Query OK, 0 rows affected (0.57 sec)
```

## **Best practices for custom models**

This section provides an example of the end-to-end workflow for managing a custom model. This best practice covers offline model creation and online inference.

1.  **Create a model offline**.
    
    The following script shows how to create a model offline using the LightGBM algorithm:
    
    ```
    # coding: utf-8
    from pathlib import Path
    
    import pandas as pd
    from sklearn.metrics import mean_squared_error
    
    import lightgbm as lgb
    import joblib
    
    def train_model():
        print('Loading data...')
        # load or create your dataset
        df_train = pd.read_csv('regression.train', header=None, sep='\t')
        df_test = pd.read_csv('regression.test', header=None, sep='\t')
    
        y_train = df_train[0]
        y_test = df_test[0]
        X_train = df_train.drop(0, axis=1)
        X_test = df_test.drop(0, axis=1)
    
        # create dataset for lightgbm
        lgb_train = lgb.Dataset(X_train, y_train)
        lgb_eval = lgb.Dataset(X_test, y_test, reference=lgb_train)
    
    
        # specify your configurations as a dict
        params = {
            'boosting_type': 'gbdt',
            'objective': 'regression',
            'metric': {'l2', 'l1'},
            'num_leaves': 31,
            'learning_rate': 0.05,
            'feature_fraction': 0.9,
            'bagging_fraction': 0.8,
            'bagging_freq': 5,
            'verbose': 0
        }
    
        print('Starting training...')
        # train
        gbm = lgb.train(params,
                        lgb_train,
                        num_boost_round=20,
                        valid_sets=lgb_eval,
                        callbacks=[lgb.early_stopping(stopping_rounds=5)])
    
    
        print('Saving model...')
        # save model to file
        # gbm.save_model('model.txt')
        joblib.dump(gbm, 'lgb.pkl')
    
        print('Starting predicting...')
        # predict
        y_pred = gbm.predict(X_test, num_iteration=gbm.best_iteration)
        # eval
        rmse_test = mean_squared_error(y_test, y_pred) ** 0.5
        print(f'The RMSE of prediction is: {rmse_test}')
    ```
    
    The model file is exported in `.pkl` format. The `predict` method is called to return the inference result. You must also provide a Python dependency file for the model to run.
    
    The following is an example of the `requirements.txt` file:
    
    ```
    lightgbm==3.3.3
    ```
    
2.  **Upload the model**.
    
    1.  Run the following command to upload the model to PolarDB for AI.
        
        ```
        /*polar4ai*/UPLOAD MODEL my_model WITH (model_location='https://xxxx.oss-cn-hangzhou.aliyuncs.com/xxxx/model.pkl?Expires=xxxx&OSSAccessKeyId=xxxx&Signature=xxxx', req_location='https://xxxx.oss-cn-hangzhou.aliyuncs.com/xxxx/requirements.txt?Expires=xxxx&OSSAccessKeyId=xxxx&Signature=xxxx')
        ```
        
        `model_location` is the URL of the model file, and `req_location` is the URL of the file that contains the runtime dependencies. Prepare these two files, upload them to your private OSS bucket, and then use the command to upload them to the PolarDB for AI platform.
        
        The following result is returned:
        
        ```
        Query OK, 0 rows affected (0.29 sec)
        ```
        
    2.  Run the following command to check the model status.
        
        ```
        /*polar4ai*/ SHOW MODEL my_model;
        ```
        
        The following result is returned:
        
        ```
        +-------------+-----------------------------------------------------------------------------------------------------------------------------+
        | modelStatus | modelPath                                                                                                                   |
        +-------------+-----------------------------------------------------------------------------------------------------------------------------+
        | saved       | http://db4ai-collie-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/xxxxx.pkl?OSSAccessKeyId=xxxxxx&Expires=xxxx&Signature=xxxxxx  |
        +-------------+-----------------------------------------------------------------------------------------------------------------------------+
        1 row in set (0.23 sec)
        ```
        
        If `modelStatus` is `saved`, the model is uploaded.
        
3.  **Deploy the model**.
    
    1.  Run the following command to deploy the model on PolarDB for AI.
        
        ```
        /*polar4ai*/ DEPLOY MODEL my_model;
        ```
        
        The following result is returned:
        
        ```
        Query OK, 0 rows affected (0.29 sec)
        ```
        
    2.  Run the following command to check the model status.
        
        ```
        /*polar4ai*/ SHOW MODEL my_model;
        ```
        
        The following information is returned:
        
        ```
        +-------------+-----------------------------------------------------------------------------------------------------------------------------+
        | modelStatus | modelPath                                                                                                                   |
        +-------------+-----------------------------------------------------------------------------------------------------------------------------+
        | serving     | http://db4ai-collie-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/xxxxx.pkl?OSSAccessKeyId=xxxxxx&Expires=xxxx&Signature=xxxxxx  |
        +-------------+-----------------------------------------------------------------------------------------------------------------------------+
        1 row in set (0.23 sec)
        ```
        
        A `modelStatus` of `serving` indicates that the model is deployed successfully.
        
4.  **Perform online inference**.
    
    Run the following command to perform an online model inference task.
    
    ```
    /*polar4ai*/ SELECT Y FROM PREDICT(MODEL my_model, SELECT * FROM db4ai.regression_test LIMIT 10) WITH (x_cols = 'x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28', y_cols='');
    ```
    
    The following result is returned:
    
    ```
    +------+---------------------+
    | Y    | predicted_results   |
    +------+---------------------+
    |  1.0 | 0.6262147669037363  |
    |  0.0 | 0.5082804008241021  |
    |  0.0 | 0.37533158372209957 |
    |  1.0 | 0.461974928099089   |
    |  0.0 | 0.3777339456553666  |
    |  0.0 | 0.35045096227525735 |
    |  0.0 | 0.4178165504012342  |
    |  1.0 | 0.40869795422774036 |
    |  1.0 | 0.6826481286570045  |
    |  0.0 | 0.47021259543154736 |
    +------+---------------------+
    10 rows in set (0.95 sec)
    ```
    

* * *

Alibaba Cloud is responsible for the maintenance of the underlying infrastructure and the software provided by Alibaba Cloud, such as the service's technical architecture and operating system. You are responsible for everything above the operating system, such as the applications you install. The instance's runtime environment belongs to you. If you upgrade the operating system yourself, you may experience adverse effects, such as downtime. Proceed with caution and be aware of the risks.
