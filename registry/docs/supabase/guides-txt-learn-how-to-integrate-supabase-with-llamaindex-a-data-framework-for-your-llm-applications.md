# Learn how to integrate Supabase with LlamaIndex, a data framework for your LLM applications.

Learn how to integrate Supabase with LlamaIndex, a data framework for your LLM applications.

This guide will walk you through a basic example using the LlamaIndex [`SupabaseVectorStore`](https://github.com/supabase/supabase/blob/master/examples/ai/llamaindex/llamaindex.ipynb).

## Project setup

Let's create a new Postgres database. This is as simple as starting a new Project in Supabase:

1. [Create a new project](https://database.new/) in the Supabase dashboard.
2. Enter your project details. Remember to store your password somewhere safe.

Your database will be available in less than a minute.

**Finding your credentials:**

You can find your project credentials on the dashboard:

- [Database connection strings](/dashboard/project/_/settings/api?showConnect=true): Direct and Pooler connection details including the connection string and parameters.
- [Database password](/dashboard/project/_/database/settings): Reset database password here if you do not have it.
- [API credentials](/dashboard/project/_/settings/api): your serverless API URL and `anon` / `service_role` keys.

## Launching a notebook

Launch our [LlamaIndex](https://github.com/supabase/supabase/blob/master/examples/ai/llamaindex/llamaindex.ipynb) notebook in Colab:

At the top of the notebook, you'll see a button `Copy to Drive`. Click this button to copy the notebook to your Google Drive.

## Fill in your OpenAI credentials

Inside the Notebook, add your `OPENAI_API_KEY` key. Find the cell which contains this code:

```py
import os
os.environ['OPENAI_API_KEY'] = "[your_openai_api_key]"
```

## Connecting to your database

Inside the Notebook, find the cell which specifies the `DB_CONNECTION`. It will contain some code like this:

```python
DB_CONNECTION = "postgresql://<user>:<password>@<host>:<port>/<db_name>"

# create vector store client
vx = vecs.create_client(DB_CONNECTION)
```

Replace the `DB_CONNECTION` with your own connection string. You can find the connection string on your project dashboard by clicking [Connect](/dashboard/project/_?showConnect=true).

SQLAlchemy requires the connection string to start with `postgresql://` (instead of `postgres://`). Don't forget to rename this after copying the string from the dashboard.

You must use the "connection pooling" string (domain ending in `*.pooler.supabase.com`) with Google Colab since Colab does not support IPv6.

## Stepping through the notebook

Now all that's left is to step through the notebook. You can do this by clicking the "execute" button (`ctrl+enter`) at the top left of each code cell. The notebook guides you through the process of creating a collection, adding data to it, and querying it.

You can view the inserted items in the [Table Editor](/dashboard/project/_/editor/), by selecting the `vecs` schema from the schema dropdown.

![Colab documents](/docs/img/ai/google-colab/colab-documents.png)

## Resources

- Visit the LlamaIndex + `SupabaseVectorStore` [docs](https://developers.llamaindex.ai/python/examples/vector_stores/supabasevectorindexdemo/)
- Visit the official LlamaIndex [repo](https://github.com/jerryjliu/llama_index/)
