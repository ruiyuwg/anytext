PolarDB for AI integrates the Qwen large language model (LLM) into PolarDB for MySQL. Run sentiment analysis, text summarization, translation, and chat tasks directly from SQL on data stored in your database.

## SQL syntax

All models use the `/*polar4ai*/` comment prefix to activate PolarDB for AI and the `PREDICT` function to route queries to a specified model.

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL <model_name>, SELECT <column> FROM <table> [WHERE <condition>]) WITH ();
```

## Available models

**Model name**

**Task**

**Description**

`_polar4ai_tongyi`

Chat / completion

Generates responses based on input text. Supports both table data and inline text.

`_polar4ai_tongyi_sa`

Sentiment analysis

Evaluates the emotional tone of a sentence. Returns a label such as `Positive`, `Negative`, or `Neutral`.

`_polar4ai_tongyi_summarize`

Summarization

Generates a concise summary of longer text.

`_polar4ai_tongyi_tran_2_en`

Translation (to English)

Translates Chinese text into English.

`_polar4ai_tongyi_tran_2_zh`

Translation (to Chinese)

Translates text from a specific language such as English into Chinese.

`_polar4ai_tongyi_p_comment`

Positive comment generation

Generates a positive comment based on input content.

`_polar4ai_tongyi_n_comment`

Negative comment generation

Generates a negative comment based on input content.

## Limits

-   **Online inference** processes a single data entry at a time. **Offline inference** handles multiple data entries in batches.
    
-   The maximum input length is **8,000 tokens**. If the model cannot produce output within **10 seconds**, no result is returned. Add AI nodes to improve performance.
    

## Prerequisites

Before you begin, make sure that you have:

1.  AI nodes added to your PolarDB for MySQL cluster, with a database account configured for those nodes. For more information, see [Enable the PolarDB for AI feature](/help/en/polardb/polardb-for-mysql/enable-the-polardb-for-ai-feature)
    
    > If you add AI nodes when purchasing the cluster, configure an account for the AI nodes to connect to the database directly.
    
2.  A connection to the PolarDB cluster through a **cluster endpoint**. For more information, see [Connect to a cluster by using the cluster endpoint to use the PolarDB for AI feature](/help/en/polardb/polardb-for-mysql/connection-mode)
    

## Prepare sample data

The following examples use a `textinfo` table. Create the table and insert sample data before running the model queries.

1.  Create a table named `textinfo`.
    
    ```
    CREATE TABLE IF NOT EXISTS textinfo (
        id INT NOT NULL,
        content TEXT NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    ```
    
2.  Insert the sample data.
    
    ```
    INSERT INTO textinfo (id, content) VALUES (1, "This product appears good but has poor performance. I do not recommend that you buy it.");
    INSERT INTO textinfo (id, content) VALUES (2, "The Mate 60 Pro, the latest mobile phone developed by Huawei, has been highly popular and in strong demand since its launch and is now out of stock. Guo Mingji, a well-known analyst, posted on Monday that he has significantly raised the shipment expectations for the Mate 60 Pro. He emphasized that the influence of Huawei on the technology industry and stock market is undeniable and the company is making a strong comeback.");
    INSERT INTO textinfo (id, content) VALUES (3, "In recent years, the Chinese film market has increasingly favored realistic themes. In 2018, Dying to Survive became the summer box office champion with 3.1 billion yuan in sales. Films including The White Storm 2: Drug Lords, Raging Fire, and Chinese Doctors also achieved significant success. This summer, realistic-themed movies such as Lost in the Stars, Never Say Never, and No More Bets gained immense popularity, which reflects the interest of the audience in close-to-life content.");
    INSERT INTO textinfo (id, content) VALUES (4, "Who are you?");
    INSERT INTO textinfo (id, content) VALUES (5, "This item only looks decent; the actual experience is very poor. I do not recommend purchasing it.");
    ```
    

## Analyze sentiment

The sentiment analysis model evaluates the emotional tone or attitude expressed in a sentence. Common use cases include e-commerce review analysis, news reporting bias detection, and public opinion monitoring.

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_sa, SELECT content FROM textinfo WHERE id = 1) WITH ();
```

Sample output:

```
Negative
```

## Generate positive and negative comments

The comment generation models produce positive or negative commentary based on input content.

**Generate a positive comment:**

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_p_comment, SELECT content FROM textinfo WHERE id = 2) WITH ();
```

Sample output:

```
The Huawei Mate 60 Pro has been selling extremely well since its launch, which demonstrates strong consumer recognition and support for the Huawei brand. As a well-known technology company in China, Huawei has always attracted significant attention in the smartphone market. The post of Guo Mingji further confirms the influence of Huawei in the technology industry and stock market, which indicates that Huawei is gradually regaining its prominent position in these areas. The influence of Huawei extends beyond product sales. Huawei also plays a key role in driving advancements in the broader technology sector and influencing the stock market. We must encourage and support excellent enterprises like Huawei to promote the sustained development of the science and technology industry in China.
```

**Generate a negative comment:**

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_n_comment, SELECT content FROM textinfo WHERE id = 2) WITH ();
```

Sample output:

```
The strong sales performance of the Huawei Mate 60 Pro has come as a surprise, but it also reflects that consumer recognition and support for the Huawei brand remain high. However, this success may also be related to the current instability in the global technology market. As a Chinese company, Huawei has faced significant political and economic pressures in international markets, which may potentially impact its sales performance in the long term. In addition, the comments of Guo Mingji, a well-known analyst, may be overly optimistic and ignore the challenges and difficulties that Huawei faces. In conclusion, although the influence of Huawei is returning, the future market performance of the brand requires a more thorough analysis.
```

## Summarize text

The summarization model generates a concise summary for a longer text.

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_summarize, SELECT content FROM textinfo WHERE id = 3) WITH ();
```

Sample output:

```
In recent years, the Chinese film market has increasingly favored realistic themes. In 2018, Dying to Survive became the summer box office champion with 3.1 billion yuan in sales. Films including The White Storm 2: Drug Lords, Raging Fire, and Chinese Doctors also succeeded. This summer, realistic-themed movies such as Lost in the Stars, Never Say Never, and No More Bets gained immense popularity, which reflects the interest of the audience in content close to life.
```

## Translate text

**Translate Chinese text into English:**

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_tran_2_en, SELECT content FROM textinfo WHERE id = 1) WITH ();
```

Sample output:

```
This product appears good but has poor performance. I do not recommend that you buy it.
```

**Translate English text into Chinese:**

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi_tran_2_zh, SELECT content FROM textinfo WHERE id = 5) WITH ();
```

Sample output:

```
这件商品看起来还不错，实际体验却很差。 我不推荐购买。
```

## Chat with the model

The chat model generates responses based on input text. It accepts both table column data and inline plain text.

**Query from a table:**

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi, SELECT content FROM textinfo WHERE id = 4) WITH ();
```

Sample output:

```
I am a large language model of Alibaba Cloud. You can call me Qwen.
```

**Query with inline text:**

```
/*polar4ai*/SELECT * FROM PREDICT (MODEL _polar4ai_tongyi, SELECT 'Who are you?') WITH ();
```

Sample output:

```
I am a large language model of Alibaba Cloud. You can call me Qwen.
```
