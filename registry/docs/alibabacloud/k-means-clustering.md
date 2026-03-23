K-means clustering is an unsupervised learning algorithm designed to partition a dataset into K clusters to minimize the sum of squared errors in a cluster. The algorithm iteratively assigns data points to the nearest cluster centroid and updates the position of the centroids until the cluster assignments no longer change significantly or the maximum number of iterations is reached.

## Usage notes

K-means clustering randomly selects K objects as the initial centroids of each cluster, computes the distance between the remaining objects and the centroids, distributes the remaining objects to the nearest clusters, and then recalculates the centroids of each cluster. K-means clustering assumes that clustering objects are spatial vectors. K-means clustering minimizes the sum of the mean squared error (MSE) inside each cluster and constantly performs calculations and iterations until the criterion function converges.

When you use the K-means Clustering component, you must take note of the following items:

-   If cosine is used, specific clusters may be empty. In this case, the number of clusters is less than K. K initial centroids may be parallel vectors. If the centroids are traversed in sequence, the sample is not distributed to the centroids that are parallel vectors. We recommend that you use the K centroids that you listed in the external centroid table.
    
-   If the input table contains NULL or empty values, the system reports the following error: `Algo Job Failed-System Error-Null feature value found`. We recommend that you use the default values for imputation.
    
-   If sparse data is used as an input and the largest column ID exceeds 2000000, the system reports the following error: `Algo Job Failed-System Error-Feature count can't be more than 2000000`. We recommend that you renumber the columns from 0 or 1.
    
-   If a write operation fails due to a too large centroid model, the system reports the following error: `Algo Job Failed-System Error-kIOError:Write failed for message: comparison_measure`. We recommend that you renumber the columns whose data is in the sparse format from 0 or 1. If the value of `col*centerCount` is greater than 270000000, run commands to remove the modelName parameter, and then perform clustering again.
    
-   If the name of a column in the input table contains SQL keywords, the system reports the following error: `FAILED: Failed Task createCenterTable:kOtherError:ODPS-0130161:[1,558] Parse exception - invalid token ',', expect ")"`.
    
-   The data columns of the input table can be of the INT or DOUBLE type. If the input table is sparse, data columns of the STRING type are supported.
    

## Configure the component

### Method 1: Configure the component on the pipeline page

On the pipeline details page in Machine Learning Designer, add the **K-means Clustering** component to the pipeline and configure the parameters described in the following table.

**Tab**

**Parameter**

**Description**

**Fields Setting**

**Feature Columns**

The columns that are selected from the input table for training. Separate the column names with commas (,). Columns of the INT and DOUBLE types are supported. If the input data is sparse, columns of the STRING type are supported.

**Appended Columns**

The input columns that are appended to the clustering result table. Separate the column names with commas (,).

**Input Sparse Matrix**

Specifies whether the input data is sparse. Sparse data is presented by using key-value pairs.

**KV Pair Delimiter**

The delimiter that is used to separate key-value pairs. By default, commas (,) are used.

**KV Delimiter**

The delimiter that is used to separate keys and values in key-value pairs. By default, colons (:) are used.

**Parameters Setting**

**Clusters**

The number of clustering centroids. Valid values: 1 to 1000.

**Distance Measurement Method**

The method that is used to measure distances. Valid values: **Euclidean**, **Cosine**, and **Cityblock**.

**Centroid Initialization Method**

The method that is used to initialize centroids. Valid values: **Random**, **First K**, **Uniform**, **K-means++**, and **Use Initial Centroid Table**.

**Maximum Iterations**

The maximum number of iterations. Valid values: 1 to 1000.

**Convergence Criteria**

The threshold to terminate iterations.

**Initial Random Seed**

The initial random seed. By default, the current time is used. If this parameter uses a fixed value, the clustering result is stable.

**Tuning**

**Cores**

The number of cores. By default, the system specifies the value.

**Memory Size per Core**

The memory size of each core. Unit: MB.

### Method 2: Use PAI commands

Configure the component parameters by using PAI commands. You can use the SQL Script component to call PAI commands. For more information, see [Scenario 4: Execute PAI commands within the SQL script component](/help/en/pai/user-guide/sql-script#concept-2325896).

```
pai -name kmeans
    -project algo_public
    -DinputTableName=pai_kmeans_test_input
    -DselectedColNames=f0,f1
    -DappendColNames=f0,f1
    -DcenterCount=3
    -Dloop=10
    -Daccuracy=0.01
    -DdistanceType=euclidean
    -DinitCenterMethod=random
    -Dseed=1
    -DmodelName=pai_kmeans_test_output_model_
    -DidxTableName=pai_kmeans_test_output_idx
    -DclusterCountTableName=pai_kmeans_test_output_couter
    -DcenterTableName=pai_kmeans_test_output_center;
```

**Parameter**

**Required**

**Default value**

**Description**

inputTableName

Yes

No default value

The name of the input table.

selectedColNames

No

All columns

The columns that are selected from the input table for training. Separate the column names with commas (,). Columns of the INT and DOUBLE types are supported. If the input data is sparse, columns of the STRING type are supported.

inputTablePartitions

No

All partitions

The partitions that are selected from the input table for training. The following formats are supported:

-   Partition\_name=value
    
-   name1=value1/name2=value2: multi-level partitions
    

**Note**

Separate multiple partitions with commas (,).

appendColNames

No

No default value

The input columns that are appended to the clustering result table. Separate the column names with commas (,).

enableSparse

No

false

Specifies whether the input data is sparse. Valid values: true and false.

itemDelimiter

No

,

The delimiter that is used to separate key-value pairs.

kvDelimiter

No

:

The delimiter that is used to separate keys and values in key-value pairs.

centerCount

Yes

10

The number of clustering centroids. Valid values: 1 to 1000.

distanceType

No

euclidean

The method that is used to measure distances. Valid values:

-   euclidean: the Euclidean distance that is calculated by using the following formula: `d (x - c) = (x - c) (x - c)'`
    
-   cosine: the cosine that is calculated by using the following formula: ![cosine](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8154337061/p131620.png)
    
-   cityblock: the city block distance, which is also called the Manhattan distance. It is calculated by using the following formula: `d (x - c) = | x - c |`
    

initCenterMethod

No

random

The method that is used to initialize centroids. Valid values:

-   random: K initial centroids are randomly sampled from the input data. The initial random seed is specified by using the seed parameter.
    
-   topk: The first K rows in the input data are used as the initial centroids.
    
-   uniform: K initial centroids are calculated from the minimum value to the maximum value. This ensures that these initial centroids are evenly distributed.
    
-   kmpp: K initial centroids are obtained by using the k-means++ algorithm.
    
-   external: This method specifies the additional initial centroids in a table.
    

initCenterTableName

No

No default value

The name of the table that lists initial centroids. This parameter takes effect only if the initCenterMethod parameter is set to external.

loop

No

100

The maximum number of iterations. Valid values: 1 to 1000.

accuracy

No

0.1

The conditions under which to terminate the algorithm. The algorithm is terminated if the objective difference between two iterations is less than the value of this parameter.

seed

No

Current time

The initial random seed.

modelName

No

No default value

The name of the output model.

idxTableName

Yes

No default value

The name of the clustering result table, which includes the ID of the cluster to which each record belongs after the clustering.

idxTablePartition

No

No default value

The partition in the clustering result table.

clusterCountTableName

No

No default value

The clustering statistics table that records the number of points included in each cluster.

centerTableName

No

No default value

The clustering centroid table.

coreNum

No

Determined by the system

The number of cores. This parameter must be used together with the memSizePerCore parameter. The number of cores. Valid values: 1 to 9999.

memSizePerCore

No

Determined by the system

The memory size of each core. Valid values: 1024 to 65536. Unit: MB.

lifecycle

No

No default value

The lifecycle of the output table. Unit: days.

## Output

The output data of the K-means Clustering component includes the clustering result table, clustering statistics table, and clustering centroid table. Output format:

-   Clustering result table
    
    **Column**
    
    **Description**
    
    appendColNames
    
    The names of the appended columns.
    
    cluster\_index
    
    The cluster to which each sample is assigned in the training table.
    
    distance
    
    The distance from each sample to the cluster centroid in the training table.
    
-   Clustering statistics table
    
    **Column**
    
    **Description**
    
    cluster\_index
    
    The ID of the cluster.
    
    cluster\_count
    
    The number of samples in each cluster.
    
-   Clustering centroid table
    
    **Column**
    
    **Description**
    
    cluster\_index
    
    The ID of the cluster.
    
    selectedColNames
    
    The columns that are selected from the training table for training.
    

## Examples

Input data in the dense format:

1.  Generate test data by using one of the following methods:
    
    -   Use the initial centroid table
        
        ```
        create table pai_kmeans_test_init_center as
        select * from
        (
        select 1 as f0,2 as f1
        union all
        select 1 as f0,3 as f1
        union all
        select 1 as f0,4 as f1
        )tmp;
        ```
        
    -   Use other initial centroids
        
        ```
        create table pai_kmeans_test_input as
        select * from
        (
          select 'id1' as id,1 as f0,2 as f1
          union all
          select 'id2' as id,1 as f0,3 as f1
          union all
          select 'id3' as id,1 as f0,4 as f1
          union all
          select 'id4' as id,0 as f0,3 as f1
          union all
          select 'id5' as id,0 as f0,4 as f1
        )tmp;
        ```
        
2.  Run PAI commands to submit the parameters of the K-means Clustering component.
    
    -   Use the initial centroid table
        
        ```
        drop table if exists pai_kmeans_test_output_idx;
        yes
        drop table if exists pai_kmeans_test_output_couter;
        yes
        drop table if exists pai_kmeans_test_output_center;
        yes
        drop offlinemodel if exists pai_kmeans_test_output_model_;
        yes
        pai -name kmeans
            -project algo_public
            -DinputTableName=pai_kmeans_test_input
            -DinitCenterTableName=pai_kmeans_test_init_center
            -DselectedColNames=f0,f1
            -DappendColNames=f0,f1
            -DcenterCount=3
            -Dloop=10
            -Daccuracy=0.01
            -DdistanceType=euclidean
            -DinitCenterMethod=external
            -Dseed=1
            -DmodelName=pai_kmeans_test_output_model_
            -DidxTableName=pai_kmeans_test_output_idx
            -DclusterCountTableName=pai_kmeans_test_output_couter
            -DcenterTableName=pai_kmeans_test_output_center;
        ```
        
    -   Use the initial centroids that are randomly selected
        
        ```
        drop table if exists pai_kmeans_test_output_idx;
        yes
        drop table if exists pai_kmeans_test_output_couter;
        yes
        drop table if exists pai_kmeans_test_output_center;
        yes
        drop offlinemodel if exists pai_kmeans_test_output_model_;
        yes
        pai -name kmeans
            -project algo_public
            -DinputTableName=pai_kmeans_test_input
            -DselectedColNames=f0,f1
            -DappendColNames=f0,f1
            -DcenterCount=3
            -Dloop=10
            -Daccuracy=0.01
            -DdistanceType=euclidean
            -DinitCenterMethod=random
            -Dseed=1
            -DmodelName=pai_kmeans_test_output_model_
            -DidxTableName=pai_kmeans_test_output_idx
            -DclusterCountTableName=pai_kmeans_test_output_couter
            -DcenterTableName=pai_kmeans_test_output_center;
        ```
        
3.  View the clustering result table, clustering statistics table, and clustering centroid table.
    
    -   Clustering result table specified by idxTableName
        
        ```
        +------------+------------+---------------+------------+
        | f0         | f1         | cluster_index | distance   |
        +------------+------------+---------------+------------+
        | 1          | 2          | 0             | 0.0        |
        | 1          | 3          | 1             | 0.5        |
        | 1          | 4          | 2             | 0.5        |
        | 0          | 3          | 1             | 0.5        |
        | 0          | 4          | 2             | 0.5        |
        +------------+------------+---------------+------------+
        ```
        
    -   Clustering statistics table specified by clusterCountTableName
        
        ```
        +---------------+---------------+
        | cluster_index | cluster_count |
        +---------------+---------------+
        | 0             | 1             |
        | 1             | 2             |
        | 2             | 2             |
        +---------------+---------------+
        ```
        
    -   Clustering centroid table specified by centerTableName
        
        ```
        +---------------+------------+------------+
        | cluster_index | f0         | f1         |
        +---------------+------------+------------+
        | 0             | 1.0        | 2.0        |
        | 1             | 0.5        | 3.0        |
        | 2             | 0.5        | 4.0        |
        +---------------+------------+------------+
        ```
        

Input data in the sparse format:

1.  Generate test data.
    
    ```
    create table pai_kmeans_test_sparse_input as
    select * from
    (
      select 1 as id,"s1" as id_s,"0:0.1,1:0.2" as kvs0,"2:0.3,3:0.4" as kvs1
      union all
      select 2 as id,"s2" as id_s,"0:1.1,2:1.2" as kvs0,"4:1.3,5:1.4" as kvs1
      union all
      select 3 as id,"s3" as id_s,"0:2.1,3:2.2" as kvs0,"6:2.3,7:2.4" as kvs1
      union all
      select 4 as id,"s4" as id_s,"0:3.1,4:3.2" as kvs0,"8:3.3,9:3.4" as kvs1
      union all
      select 5 as id,"s5" as id_s,"0:5.1,5:5.2" as kvs0,"10:5.3,6:5.4" as kvs1
    )tmp;
    ```
    
    If input data is sparse, 0 is used to impute the cells with missing values. If multiple columns are used as an input, these columns are merged. For example, if kvs0 and kvs1 are used as an input, the first row contains the following data:
    
    ```
    0:0.1,1:0.2,2:0.3,3:0.4,4:0,5:0,6:0,7:0,8:0,9:0,10:0
    ```
    
    In this example, the sparse matrix is numbered from 0, and has five rows and 11 columns. If a column in kvs contains `123456789:0.1`, the sparse matrix has five rows and 123456789 columns. This matrix consumes large amounts of CPU and memory resources. If kvs contains the columns that are incorrectly numbered, we recommend that you renumber the columns to reduce the size of the matrix.
    
2.  Run the following PAI command to submit the parameters of the K-means Clustering component:
    
    ```
    pai -name kmeans
      -project algo_public
      -DinputTableName=pai_kmeans_test_sparse_input
      -DenableSparse=true
      -DselectedColNames=kvs0,kvs1
      -DappendColNames=id,id_s
      -DitemDelimiter=,
      -DkvDelimiter=:
      -DcenterCount=3
      -Dloop=100
      -Daccuracy=0.01
      -DdistanceType=euclidean
      -DinitCenterMethod=topk
      -Dseed=1
      -DmodelName=pai_kmeans_test_input_sparse_output_model
      -DidxTableName=pai_kmeans_test_sparse_output_idx
      -DclusterCountTableName=pai_kmeans_test_sparse_output_couter
      -DcenterTableName=pai_kmeans_test_sparse_output_center;
    ```
    
3.  View the clustering result table, clustering statistics table, and clustering centroid table.
    
    -   Clustering result table specified by idxTableName
        
        ```
        +------------+------------+---------------+------------+
        | id         | id_s       | cluster_index | distance   |
        +------------+------------+---------------+------------+
        | 4          | s4         | 0             | 2.90215437218629 |
        | 5          | s5         | 1             | 0.0        |
        | 1          | s1         | 2             | 0.7088723439378913 |
        | 2          | s2         | 2             | 1.1683321445547923 |
        | 3          | s3         | 0             | 2.0548722588034516 |
        +------------+------------+---------------+------------+
        ```
        
    -   Clustering statistics table specified by clusterCountTableName
        
        ```
        +---------------+---------------+
        | cluster_index | cluster_count |
        +---------------+---------------+
        | 0             | 2             |
        | 1             | 1             |
        | 2             | 2             |
        +---------------+---------------+
        ```
        
    -   Clustering centroid table specified by centerTableName
        
        ```
        +---------------+------------+------------+
        | cluster_index | kvs0       | kvs1       |
        +---------------+------------+------------+
        | 0             | 0:2.6,1:0,2:0,3:1.1,4:1.6,5:0 | 6:1.15,7:1.2,8:1.65,9:1.7,10:0 |
        | 1             | 0:5.1,1:0,2:0,3:0,4:0,5:5.2 | 6:5.4,7:0,8:0,9:0,10:5.3 |
        | 2             | 0:0.6,1:0.1,2:0.75,3:0.2,4:0.65,5:0.7 | 6:0,7:0,8:0,9:0,10:0 |
        +---------------+------------+------------+
        ```
