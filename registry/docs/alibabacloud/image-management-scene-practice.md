MaxCompute provides user-defined functions (UDF) and Python development capabilities such as PyODPS and MaxFrame. This topic describes how to use images within MaxCompute UDF, PyODPS, and MaxFrame development job.

## **Using images in SQL UDF development**

The following example uses Pandas in a UDF that sums columns.

1.  Write the Python UDF script and save it as`sum_pandas.py`. The following sample script is shown below:
    
    ```
    from odps.udf import annotate
    import pandas as pd
    
    @annotate("string, string -> string")
    class SumColumns(object):
        def evaluate(self, arg1, arg2):
            # Convert input parameters to pandas DataFrame
            df = pd.DataFrame({'col1': arg1.split(','), 'col2': arg2.split(',')})
    
            # Perform data processing operations by using pandas
            # Calculate the sum of two columns as an example
            df['sum'] = df['col1'].astype(int) + df['col2'].astype(int)
    
            # Convert the processing result to a string and return
            result = ','.join(df['sum'].astype(str).values)
            return result
    ```
    
2.  Upload the `sum_pandas.py` script as a resource to your MaxCompute project. For details, see [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w). Use the following command:
    
    ```
    ADD PY sum_pandas.py -f;
    ```
    
3.  Register the `sum_pandas.py` script as the SumColumns UDF. For details, see [Create a UDF](/help/en/maxcompute/user-guide/function-operations#section-6r8-ozn-xjb). Use the following command:
    
    ```
    CREATE FUNCTION SumColumns AS 'sum_pandas.SumColumns' USING 'sum_pandas.py';
    ```
    
4.  Set up the test table `testsum` with the corresponding test data.
    
    ```
    CREATE TABLE testsum (col1 string, col2 string);
    INSERT INTO testsum VALUES ('1,2,3','1,2,3'),('1,2,3','3,2,1'),('1,2,3','4,5,6');
    ```
    
5.  Specify the image through the Flag parameter when calling the UDF.
    
    ```
    set odps.sql.python.version=cp37;
    set odps.session.image = ;
    SELECT SumColumns(col1,col2) AS result FROM testsum;
    ```
    
    Expected result:
    
    ```
    +------------+
    | result     |
    +------------+
    | 2,4,6      |
    | 4,4,4      |
    | 5,7,9      |
    +------------+
    ```
    

## **Using images in PyODPS development**

The following example implements the psi function from the scipy package.

1.  Prepare the test table`test_float_col` and insert the test data.
    
    ```
    CREATE TABLE test_float_col (col1 double);
    INSERT INTO test_float_col VALUES (3.75),(2.51);
    ```
    
2.  Write the PyODPS code to compute psi(col1) and save it as`psi_col.py`. The following sample code is shown below:
    
    ```
    import os
    from odps import ODPS, options
    
    def my_psi(v):
        from scipy.special import psi
    
        return float(psi(v))
    
    # If the project enables isolation, the following option is not required
    options.sql.settings = {"odps.isolation.session.enable": True}
    
    o = ODPS(
          # Ensure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set to your AccessKey ID,
          # and the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set to your AccessKey secret.
          # It is not recommended to directly use the AccessKey ID and AccessKey secret strings.
          os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
          os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
          project='your-default-project',
          endpoint='your-end-point'
    )
    
    df = o.get_table("test_float_col").to_df()
    # Execute directly and get the result
    df.col1.map(my_psi).execute(image='scipy')
    # Save to another table
    df.col1.map(my_psi).persist("result_table", image='scipy')
    ```
    
    Parameter descriptions:
    
    -   **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID**: Set this environment variable to the AccessKey ID that has the necessary [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb) for the MaxCompute project. You can obtain the AccessKey ID from the [AccessKey management](https://ram.console.alibabacloud.com/manage/ak) page.
        
    -   **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET**: Set this environment variable to the AccessKey secret that corresponds to the AccessKey ID.
        
    -   **your-default-project**: The name of the MaxCompute project. To view the project name, log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), choose **Workspace** > **Projects** in the left-side navigation pane.
        
    -   **your-end-point**: The endpoint for the region where the MaxCompute project resides. You can select the endpoint based on the network connectivity method. For example, `http://service.cn-chengdu.maxcompute.aliyun.com/api`. For details, see [Endpoints](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
        
    
3.  View the results in the`result_table` table.
    
    ```
    SELECT * FROM result_table
    ```
    
    Expected result:
    
    ```
    +----------------------+
    | col1                 |
    +----------------------+
    | 1.1825373886117962   |
    | 0.7080484451910534   |
    +----------------------+
    ```
    

## **Using images in MaxFrame development**

The following example implements the psi function from the scipy package.

1.  Create the test table`test_float_col` and insert the test data.
    
    ```
    CREATE TABLE test_float_col (col1 double);
    INSERT INTO test_float_col VALUES (3.75),(2.51);
    ```
    
2.  Write the MaxFrame code to compute psi(col1) and save it as`psi_col.py`. The following sample code is shown below:
    
    ```
    import os
    from odps import ODPS, options
    from maxframe.session import new_session
    import maxframe.dataframe as md
    
    from maxframe.config import options
    from maxframe import config
    
    # Use the built-in scipy image
    config.options.sql.settings = {
        "odps.session.image": "scipy"
    }
    def my_psi(v):
        from scipy.special import psi
        return float(psi(v))
    
    o = ODPS(
          # Ensure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set to your AccessKey ID,
          # and the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set to your AccessKey secret.
          # It is not recommended to directly use the AccessKey ID and AccessKey secret strings.
          os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
          os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
          project='your-default-project',
          endpoint='your-end-point'
    )
    
    # Create a MaxFrame session
    session = new_session(o)
    df = md.read_odps_table('test_float_col')
    
    # Execute and get the result
    print(df.col1.map(my_psi).execute().fetch()
    ```
    
    Parameter descriptions:
    
    -   **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID**: Set this environment variable to the AccessKey ID that has the necessary [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb) for the MaxCompute project. You can obtain the AccessKey ID from the [AccessKey management](https://ram.console.alibabacloud.com/manage/ak) page.
        
    -   **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET**: Set this environment variable to the AccessKey secret that corresponds to the AccessKey ID.
        
    -   **your-default-project**: The name of the MaxCompute project. To view the project name, log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), choose **Workspace** > **Projects** in the left-side navigation pane.
        
    -   **your-end-point**: The endpoint for the region where the MaxCompute project resides. You can select the endpoint based on the network connectivity method. For example, `http://service.cn-chengdu.maxcompute.aliyun.com/api`. For details, see [Endpoints](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
        
    
    Expected result:
    
    ```
    0    1.182537
    1    0.708048
    Name: col1, dtype: float64
    ```
