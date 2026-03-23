This topic describes the K-means clustering algorithm (hereinafter referred to as K-means).

## Overview

K-means algorithm is an iterative clustering algorithm. The algorithm works in this way: First divide the data into K groups, randomly select K objects as the initial clustering center, calculate the distance between each object and each seed clustering center, and then assign each object to the nearest cluster center. A cluster include the cluster center and the objects assigned to the cluster center. The K-means algorithm uses some columns of a table as features and clusters the raw data into several groups by using the specified similarity calculation method.

## Scenarios

The K-means algorithm is widely used in scenarios for clustering data records. The following major scenarios are included:

-   Document classification
    
    Documents are classified based on tags, topics, and content.
    
    First, a document is initialized to be represented by vectors. The document is classified by identifying common words with word frequency. Document vectors are clustered to identify similarity between document groups.
    
-   Customer classification
    
    The K-means algorithm can help marketers optimize their customer bases. Purchase history, interests, and activity monitoring data also can be used to analyze customer categories.
    
    For example, the K-means algorithm can be used to divide the payment methods of subscription telecommunication customers into top-up, test message sending, and website browsing. Classifying customers helps companies develop advertisements for specific customer groups.
    
-   Fraud detection
    
    The K-means algorithm also plays a vital role in fraud detection and are widely used in automobile, medical insurance, and insurance fraud detection. Historical data from past fraudulent claims is used to identify new frauds based on clustered similarity of fraudulent patterns.
    
-   Automated cluster clustering
    
    IT infrastructure components such as network, storage, or databases of large companies generate a large number of alerts, which must be manually filtered to ensure the priority of subsequent actions because alerts involve specific actions. Data clustering by using the K-means algorithm enables in-depth analysis of alert categories and mean time to repair, and helps predict subsequent failures.
    
-   Call record analysis
    
    A call detail record (CDR) retains information of calls, text messages, and network activities. Combining CDRs with customer profiles can help telecommunication companies predict more about customer needs.
    
-   Crime scene identification
    
    The K-means algorithm can analyze crime data of specific areas in a city. The information such as crime types, crime locations, and the relationship between the two is analyzed to assist high-quality surveys of crime hotspots in areas or cities.
    

## Parameters

The values of the parameters described in the following table are the same as those of the `model_parameter` parameter specified in the `CREATE MODEL` statement that is used to create a model. You can configure the parameters based on your business requirements.

**Parameter**

**Description**

n\_clusters

The number of clusters. Default value: 4.

## Examples

Create a K-means clustering model.

```
/*polar4ai*/CREATE MODEL test_kmeans WITH
(model_class = 'kmeans', x_cols = 'dx1,dx2',
 y_cols='',model_parameter=(n_clusters=2))
 AS (select * from db4ai.testdata1);
```

Model prediction:

```
/*polar4ai*/select dx1,dx2 FROM
PREDICT(MODEL test_kmeans,
select * from db4ai.testdata1 limit 10)
WITH (x_cols = 'dx1,dx2',
      y_cols='');
```

**Note**

The columns in `x_cols` must use floating-point or integer data.
