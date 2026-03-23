This topic describes TairVector-based hybrid search solutions that implement any combination of conditional filtering, vector search, and full-text search.

## **Background information**

Large language models (LLMs) enable the semantic representation of unstructured data such as text, images, audio, and videos using vectors. Vector-based k-nearest neighbor (kNN) search is expected to play a major role in fields like semantic search, personalized product recommendation, and intelligent Q&A. Typically, most vector database services support the combination of one or two of the following search methods: conditional filtering, full-text search, and vector search. These methods have obvious advantages and disadvantages.

-   Conditional filtering: filters data using boolean expressions and imposes strict constraints on datasets and their usage, which makes it suitable only for specific scenarios.
    
-   Full-text search: calculates document relevance by tokenizing a query and returns a list of results that are the most relevant to the query. This method is limited to text-based queries that are prone to input errors and grammar issues.
    
-   Vector search: performs semantic encoding, calculates the similarity between vectors, and then returns a list of the most similar results. This method can handle multiple types of unstructured data such as documents, images, audio, and videos in various scenarios. However, this method depends heavily on LLMs and may return inaccurate results when processing enterprise-specific data.
    

You can use TairVector to achieve any combination of the preceding search methods within an involved database. You can combine these three search methods using a single statement. In this statement, you can use images, text, audio, and videos to implement vector search, use text to implement full-text search, and use boolean expressions to implement conditional filtering. Additionally, TairVector sorts the results of these methods by weight and returns the final candidate list.

This way, you can go beyond the limits of a single search method to increase the hit rate of data retrieval. Specifically, you can use the **hybrid\_ratio** parameter to adjust the weights assigned to different search methods based on specific requests. For more information, see [Vector](/help/en/redis/developer-reference/tairvector/).

## **Solution overview**

In this example, the open source [fashion-product-images-small](https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-small) dataset is used to demonstrate the performance of different solutions.

**Note**

When you use open source datasets, you must comply with the associated agreements, laws, and regulations.

### **Data description**

This dataset contains data of 44,000 product data entries. The following table describes the data format.

**id (int64)**

**gender (string)**

**masterCategory (string)**

**subCategory (string)**

**articleType (string)**

**baseColour (string)**

**season (string)**

**year (float64)**

**usage (string)**

**productDisplayName (string)**

**image (dict)**

15,970

"Men"

"Apparel"

"Topwear"

"Shirts"

"Navy Blue"

"Fall"

2,011

"Casual"

"Turtle Check Men Navy Blue Shirt"

{ "bytes": \[ 255, 216, 255, ... \], "path": null }

39,386

"Men"

"Apparel"

"Bottomwear"

"Jeans"

"Blue"

"Summer"

2,012

"Casual"

"Peter England Men Party Blue Jeans"

{ "bytes": \[ 255, 216, 255, ...\], "path": null }

59,263

"Women"

"Accessories"

"Watches"

"Watches"

"Silver"

"Winter"

2,016

"Casual"

"Titan Women Silver Watch"

{ "bytes": \[ 255, 216, 255, ...\], "path": null }

### **Data conversion**

TairVector uses a simple and intuitive `Tair vector index Key-Key-(Key-Value)` storage structure. First, create a vector index, such as **hybrid\_index**, to store all product data. Then, transform the table data structure. The fields are divided into four categories:

-   Convert **id** to the primary key for search in TairVector. You can use this field to implement point queries. A point query scans only a small amount of data.
    
-   Convert data in the **image** field to vectors that are encoded using LLMs. You can implement search based on these vectors.
    
-   Convert data in the **productDisplayName** field to the description of the corresponding data in the **image** field. You can use the description to implement full-text search. You can use the description to implement full-text search.
    
-   Convert **other fields** to the lowest level key-value pairs in TairVector. No limits are imposed on the number of these key-value pairs. You can use these key-value pairs to implement conventional filtering by attribute. You can use these key-value pairs to implement conventional filtering by attribute.
    

The following figure shows the data structure in TairVector.![1.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4008205961/p705863.jpg)

### **Procedure and sample code**

Procedure for this example:

1.  Load the dataset.
    
2.  Prepare the Tair environment.
    
3.  Import the dataset to Tair.
    
4.  Use different solutions to query data.
    

For more information, see [Hybrid search code project](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20230815/oody/hybrid_search_demo.ipynb).

**Important**

This code is in a .ipynb file. Before using it, you can run the `pip install jupyter` command to install the required dependencies.

## **Query display**

The following code shows how to perform queries using different search solutions and their results. The example query is for `Green Kidswear`. The tests are run for four scenarios by adjusting the **hybrid\_ratio** parameter. The **hybrid\_ratio** parameter is the weight for vector search, and the weight for full-text search is `1-**hybrid_ratio**`.

-   Vector search: Set the **hybrid\_ratio** parameter to 0.9999.
    
    ```
    topk = 20
    text = "Green Kidswear"
    vector = model.encode([text])[0]
    filter_str = None
    kwargs = {"TEXT" : text, "hybrid_ratio" : 0.9999}
    result = client.tvs_knnsearch(index_name, topk, vector, False, filter_str, **kwargs)
    top_img = [images[id_pos[int(item[0])]] for item in result]
    display_result(top_img)
    ```
    
    Result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4008205961/p705940.png)
    
-   Full-text search: Set the **hybrid\_ratio** parameter to 0.0001.
    
    ```
    topk = 20
    text = ""Green Kidswear"
    vector = model.encode([text])[0]
    filter_str = None
    kwargs = {"TEXT" : text, "hybrid_ratio" : 0.0001}
    result = client.tvs_knnsearch(index_name, topk, vector, False, filter_str, **kwargs)
    top_img = [images[id_pos[int(item[0])]] for item in result]
    display_result(top_img)
    ```
    
    Result:![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4008205961/p705943.png)
    
-   Hybrid search that combines vector search and full-text search: Set the **hybrid\_ratio** parameter to 0.5.
    
    ```
    topk = 20
    text = ""Green Kidswear"
    vector = model.encode([text])[0]
    filter_str = None
    kwargs = {"TEXT" : text, "hybrid_ratio" : 0.5}
    result = client.tvs_knnsearch(index_name, topk, vector, False, filter_str, **kwargs)
    top_img = [images[id_pos[int(item[0])]] for item in result]
    display_result(top_img)
    ```
    
    Result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4008205961/p705947.png)
    
-   Hybrid vector, full-text, and conditional filter search: Set the **hybrid\_ratio** parameter to 0.5 and add the `subCategory == "Topwear"` conditional statement.
    
    ```
    topk = 20
    text = "Green Kidswear"
    vector = model.encode([text])[0]
    filter_str = "subCategory == \"Topwear\""
    kwargs = {"TEXT" : text, "hybrid_ratio" : 0.5}
    result = client.tvs_knnsearch(index_name, topk, vector, False, filter_str, **kwargs)
    print(result)
    top_img = [images[id_pos[int(item[0])]] for item in result]
    display_result(top_img)
    ```
    
    Result:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4008205961/p705949.png)
    

## **Summary**

-   Based on the preceding results, both vector search and full-text search can meet query requirements. Based on the top-ranked candidate sets, the performance of full-text search is slightly higher than that of vector search.
    
-   For hybrid search solutions, if a product is retrieved by two search methods, the product ranks higher than other products.
    
-   You can use the **hybrid\_ratio** parameter to adjust the weights of search methods in a hybrid solution. This way, the results can be reranked to obtain relatively more accurate results.
    
-   You can use conditional filtering to filter out specific candidate sets to improve the hit rate of vector search.
