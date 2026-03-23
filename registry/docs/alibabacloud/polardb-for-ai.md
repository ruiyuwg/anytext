PolarDB for AI is the distributed machine learning component of PolarDB for MySQL. It provides multiple built-in large AI models, which eliminates the need to manually synchronize data from PolarDB to other AI platforms. You can use SQL statements to directly call the built-in large AI models for complex analytical tasks. Additionally, PolarDB for AI lets you use SQL statements to build custom models and load external models.

With PolarDB for AI, you can:

[Call the Qwen large language model](/help/en/polardb/polardb-for-mysql/qwen-big-model-data-reasoning-and-interaction)

You can directly use the built-in Qwen large language model to perform inference and interact with data in PolarDB. You can select different Qwen large language models based on your scenario.

**Sentiment analysis model**: Analyzes the sentiment of a sentence.

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_sa, SELECT content FROM textinfo LIMIT 1) WITH ();
-- Query result of the textinfo table: This thing only looks okay, but the actual experience is very bad. I do not recommend buying it. 
```

> Output: Negative

**Chat model**: Generates an answer based on a piece of content.

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi, SELECT 'Who are you') WITH ();
```

> Output: I am a large-scale language model from Alibaba Cloud. My name is Qwen.

**Summarization model**: Generates a summary for a piece of content.

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_summarize, SELECT content FROM textinfo WHERE id = 3) WITH ();
-- Query result of the textinfo table: In recent years, the Chinese film market has gradually leaned towards realistic themes. In 2018, "Dying to Survive" became the summer box office champion with 3.1 billion in ticket sales. Subsequently, films such as "The White Storm 2: Drug Lords", "Raging Fire", and "Chinese Doctors" also achieved success. This summer, realistic films such as "Lost in the Stars", "Octagonal", and "No More Bets" were very popular, reflecting the audience's interest in content that is close to life.
```

> Output: In recent years, the Chinese film market has favored realistic themes. In 2018, "Dying to Survive" won the championship with 3.1 billion in box office revenue. Afterwards, "The White Storm 2", "Raging Fire", "Chinese Doctors", and others were also very successful. This sum...

**Translation model**: Translates a piece of Chinese content into English.

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_tran_2_en, SELECT content FROM textinfo ORDER BY id ASC LIMIT 1) WITH ();
-- Query result of the textinfo table: This thing only looks okay, but the actual experience is very bad. I do not recommend buying it. 
```

> Output: This item only looks decent; the actual experience is very poor. I do not recommend purchasing it.

## **Advantages**

**One-stop data intelligence service**: PolarDB for AI provides full lifecycle management from model creation and evaluation to inference. This avoids the problems caused by frequent data transfers between different systems in traditional solutions.

**Seamless compatibility with MySQL syntax**: You can use the familiar SQL language to perform a series of Machine Learning Operations (MLOps). This eliminates the need for extra learning, allowing you to get started quickly.

**Rich library of built-in algorithms**: Includes various machine learning and artificial intelligence algorithms, such as classification, regression, and clustering algorithms.

**Strict data protection**: All data processing and model operations are performed within the database. This ensures end-to-end data security.

## **Scope**

Your cluster must meet the following requirements:

-   Region: Only **Japan (Tokyo)** and **Singapore** are supported.
    
-   The Edition is Enterprise Edition and the Series is Cluster Edition.
    
-   The kernel version is MySQL 8.0.1 or later.
    
-   The database proxy (PolarProxy) version is 2.7.5 or later.
    

> For more information about how to view or upgrade the kernel version and database proxy version, see [Minor version management](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version).

## **Billing**

To use the PolarDB for AI feature, you must create an AI node. While the feature is free, the AI node is charged. AI nodes are billed as standard compute nodes.

In addition to standard compute node specifications, AI nodes also support two GPU specifications that are primarily used for AI model creation and inference.

-   8 cores, 30 GB of memory, and one GU30 (polar.mysql.g8.2xlarge.gpu)
    
-   16 cores, 125 GB of memory, and one GU100 (polar.mysql.x8.2xlarge.gpu)
    

For more information about the billing rules for compute nodes, see [Compute nodes](/help/en/polardb/polardb-for-mysql/compute-nodes).

## **Get started**

1.  Add an AI node and set the database account for connecting to the AI node: [Enable the PolarDB for AI feature](/help/en/polardb/polardb-for-mysql/enable-the-polardb-for-ai-feature)
    
    > If you added an AI node when you purchased the cluster, you can directly set the database account for the AI node.
    
2.  Use a cluster endpoint to connect to the PolarDB cluster: [Log on to PolarDB for AI](/help/en/polardb/polardb-for-mysql/connection-mode)
    
3.  Try the built-in model: [Use the Qwen large language model for data inference and interaction](/help/en/polardb/polardb-for-mysql/qwen-big-model-data-reasoning-and-interaction)
    
4.  Advanced usage:
    
    -   [Build a custom model](/help/en/polardb/polardb-for-mysql/how-to-build-a-custom-model)
        
    -   [Load an external model](/help/en/polardb/polardb-for-mysql/how-to-load-an-external-model)
        

> For more information about how to use models, see [Model usage process and instructions](/help/en/polardb/polardb-for-mysql/model-management).
