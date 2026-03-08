# Document loader integrations

Source: https://docs.langchain.com/oss/javascript/integrations/document\_loaders/index

Integrate with document loaders using LangChain JavaScript.

Document loaders provide a **standard interface** for reading data from different sources (such as Slack, Notion, or Google Drive) into LangChain's [Document](https://reference.langchain.com/javascript/langchain-core/documents/Document) format.
This ensures that data can be handled consistently regardless of the source.

All document loaders implement the [BaseLoader](https://reference.langchain.com/javascript/classes/_langchain_core.document_loaders_base.BaseDocumentLoader.html) interface.

## Interface

Each document loader may define its own parameters, but they share a common API:

- `load()`: Loads all documents at once.
- `loadAndSplit()`: Loads all documents at once and splits them into smaller documents.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";

const loader = new CSVLoader(
  ...  // <-- Integration specific parameters here
);
const data = await loader.load();
```

## By category

LangChain.js categorizes document loaders in two different ways:

- [File loaders](/oss/javascript/integrations/document_loaders/file_loaders/), which load data into LangChain formats from your local filesystem.
- [Web loaders](/oss/javascript/integrations/document_loaders/web_loaders/), which load data from remote sources.

### File loaders

If you'd like to contribute an integration, see [Contributing integrations](/oss/javascript/contributing#add-a-new-integration).

#### PDFs

| Document Loader                                                             | Description                              | Package/API |
| --------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| [PDFLoader](/oss/javascript/integrations/document_loaders/file_loaders/pdf) | Load and parse PDF files using pdf-parse | Package     |

#### Common file types

| Document Loader                                                                   | Description                                                  | Package/API |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| [CSV](/oss/javascript/integrations/document_loaders/file_loaders/csv)             | Load data from CSV files with configurable column extraction | Package     |
| [JSON](/oss/javascript/integrations/document_loaders/file_loaders/json)           | Load JSON files using JSON pointer to target specific keys   | Package     |
| [JSONLines](/oss/javascript/integrations/document_loaders/file_loaders/jsonlines) | Load data from JSONLines/JSONL files                         | Package     |
| [Text](/oss/javascript/integrations/document_loaders/file_loaders/text)           | Load plain text files                                        | Package     |
| [DOCX](/oss/javascript/integrations/document_loaders/file_loaders/docx)           | Load Microsoft Word documents (.docx and .doc formats)       | Package     |
| [EPUB](/oss/javascript/integrations/document_loaders/file_loaders/epub)           | Load EPUB files with optional chapter splitting              | Package     |
| [PPTX](/oss/javascript/integrations/document_loaders/file_loaders/pptx)           | Load PowerPoint presentations                                | Package     |
| [Subtitles](/oss/javascript/integrations/document_loaders/file_loaders/subtitles) | Load subtitle files (.srt format)                            | Package     |

#### Specialized file loaders

| Document Loader                                                                                         | Description                                                 | Package/API |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| [`DirectoryLoader`](/oss/javascript/integrations/document_loaders/file_loaders/directory)               | Load all files from a directory with custom loader mappings | Package     |
| [`UnstructuredLoader`](/oss/javascript/integrations/document_loaders/file_loaders/unstructured)         | Load multiple file types using Unstructured API             | API         |
| [`MultiFileLoader`](/oss/javascript/integrations/document_loaders/file_loaders/multi_file)              | Load data from multiple individual file paths               | Package     |
| [`ChatGPT`](/oss/javascript/integrations/document_loaders/file_loaders/chatgpt)                         | Load ChatGPT conversation exports                           | Package     |
| [Notion Markdown](/oss/javascript/integrations/document_loaders/file_loaders/notion_markdown)           | Load Notion pages exported as Markdown                      | Package     |
| [OpenAI Whisper Audio](/oss/javascript/integrations/document_loaders/file_loaders/openai_whisper_audio) | Transcribe audio files using OpenAI Whisper API             | API         |

### Web loaders

#### Webpages

| Document Loader                                                                                        | Description                                                            | Web Support | Package/API |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | :---------: | ----------- |
| [`Cheerio`](/oss/javascript/integrations/document_loaders/web_loaders/web_cheerio)                     | Load webpages using Cheerio (lightweight, no JavaScript execution)     |      ✅      | Package     |
| [`Playwright`](/oss/javascript/integrations/document_loaders/web_loaders/web_playwright)               | Load dynamic webpages using Playwright (supports JavaScript rendering) |      ❌      | Package     |
| [`Puppeteer`](/oss/javascript/integrations/document_loaders/web_loaders/web_puppeteer)                 | Load dynamic webpages using Puppeteer (headless Chrome)                |      ❌      | Package     |
| [`FireCrawl`](/oss/javascript/integrations/document_loaders/web_loaders/firecrawl)                     | Crawl and convert websites into LLM-ready markdown                     |      ✅      | API         |
| [`Spider`](/oss/javascript/integrations/document_loaders/web_loaders/spider)                           | Fast crawler that converts websites into HTML, markdown, or text       |      ✅      | API         |
| [`RecursiveUrlLoader`](/oss/javascript/integrations/document_loaders/web_loaders/recursive_url_loader) | Recursively load webpages following links                              |      ❌      | Package     |
| [`Sitemap`](/oss/javascript/integrations/document_loaders/web_loaders/sitemap)                         | Load all pages from a sitemap.xml                                      |      ✅      | Package     |
| [`Browserbase`](/oss/javascript/integrations/document_loaders/web_loaders/browserbase)                 | Load webpages using managed headless browsers with stealth mode        |      ✅      | API         |
| [`WebPDFLoader`](/oss/javascript/integrations/document_loaders/web_loaders/pdf)                        | Load PDF files in web environments                                     |      ✅      | Package     |

#### Cloud providers

| Document Loader                                                                                                        | Description                                        | Web Support | Package/API |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :---------: | ----------- |
| [S3](/oss/javascript/integrations/document_loaders/web_loaders/s3)                                                     | Load files from AWS S3 buckets                     |      ❌      | Package     |
| [Azure Blob Storage Container](/oss/javascript/integrations/document_loaders/web_loaders/azure_blob_storage_container) | Load all files from Azure Blob Storage container   |      ❌      | Package     |
| [Azure Blob Storage File](/oss/javascript/integrations/document_loaders/web_loaders/azure_blob_storage_file)           | Load individual files from Azure Blob Storage      |      ❌      | Package     |
| [Google Cloud Storage](/oss/javascript/integrations/document_loaders/web_loaders/google_cloud_storage)                 | Load files from Google Cloud Storage buckets       |      ❌      | Package     |
| [Google Cloud SQL for PostgreSQL](/oss/javascript/integrations/document_loaders/web_loaders/google_cloudsql_pg)        | Load documents from Cloud SQL PostgreSQL databases |      ✅      | Package     |

#### Productivity tools

| Document Loader                                                                    | Description                             | Web Support | Package/API |
| ---------------------------------------------------------------------------------- | --------------------------------------- | :---------: | ----------- |
| [Notion API](/oss/javascript/integrations/document_loaders/web_loaders/notionapi)  | Load Notion pages and databases via API |      ✅      | API         |
| [Figma](/oss/javascript/integrations/document_loaders/web_loaders/figma)           | Load Figma file data                    |      ✅      | API         |
| [Confluence](/oss/javascript/integrations/document_loaders/web_loaders/confluence) | Load pages from Confluence spaces       |      ❌      | API         |
| [GitHub](/oss/javascript/integrations/document_loaders/web_loaders/github)         | Load files from GitHub repositories     |      ✅      | API         |
| [GitBook](/oss/javascript/integrations/document_loaders/web_loaders/gitbook)       | Load GitBook documentation pages        |      ✅      | Package     |
| [Jira](/oss/javascript/integrations/document_loaders/web_loaders/jira)             | Load issues from Jira projects          |      ❌      | API         |
| [Airtable](/oss/javascript/integrations/document_loaders/web_loaders/airtable)     | Load records from Airtable bases        |      ✅      | API         |
| [Taskade](/oss/javascript/integrations/document_loaders/web_loaders/taskade)       | Load Taskade project data               |      ✅      | API         |

#### Search & data APIs

| Document Loader                                                                          | Description                                                    | Web Support | Package/API |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------- | :---------: | ----------- |
| [SearchAPI](/oss/javascript/integrations/document_loaders/web_loaders/searchapi)         | Load web search results from SearchAPI (Google, YouTube, etc.) |      ✅      | API         |
| [SerpApi](/oss/javascript/integrations/document_loaders/web_loaders/serpapi)             | Load web search results from SerpApi                           |      ✅      | API         |
| [Apify Dataset](/oss/javascript/integrations/document_loaders/web_loaders/apify_dataset) | Load scraped data from Apify platform                          |      ✅      | API         |

#### Audio & video

| Document Loader                                                                                        | Description                                                                    | Web Support | Package/API |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | :---------: | ----------- |
| [YouTube](/oss/javascript/integrations/document_loaders/web_loaders/youtube)                           | Load YouTube video transcripts                                                 |      ✅      | Package     |
| [AssemblyAI](/oss/javascript/integrations/document_loaders/web_loaders/assemblyai_audio_transcription) | Transcribe audio and video files using AssemblyAI API                          |      ✅      | API         |
| [Soniox](/oss/javascript/integrations/document_loaders/web_loaders/soniox)                             | Transcribe multilingual audio files with optional translation using Soniox API |      ✅      | API         |
| [Sonix](/oss/javascript/integrations/document_loaders/web_loaders/sonix_audio_transcription)           | Transcribe audio files using Sonix API                                         |      ❌      | API         |

#### Other

| Document Loader                                                                                        | Description                                                | Web Support | Package/API |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | :---------: | ----------- |
| [Couchbase](/oss/javascript/integrations/document_loaders/web_loaders/couchbase)                       | Load documents from Couchbase database using SQL++ queries |      ✅      | Package     |
| [LangSmith](/oss/javascript/integrations/document_loaders/web_loaders/langsmith)                       | Load datasets and traces from LangSmith                    |      ✅      | API         |
| [Hacker News](/oss/javascript/integrations/document_loaders/web_loaders/hn)                            | Load Hacker News threads and comments                      |      ✅      | Package     |
| [IMSDB](/oss/javascript/integrations/document_loaders/web_loaders/imsdb)                               | Load movie scripts from Internet Movie Script Database     |      ✅      | Package     |
| [College Confidential](/oss/javascript/integrations/document_loaders/web_loaders/college_confidential) | Load college information from College Confidential         |      ✅      | Package     |
| [Blockchain Data](/oss/javascript/integrations/document_loaders/web_loaders/sort_xyz_blockchain)       | Load blockchain data (NFTs, transactions) via Sort.xyz API |      ✅      | API         |

## All document loaders

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/document_loaders/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Document transformer integrations

Source: https://docs.langchain.com/oss/javascript/integrations/document\_transformers/index

Integrate with document transformers using LangChain JavaScript.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/document_transformers/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Cache integrations

Source: https://docs.langchain.com/oss/javascript/integrations/llm\_caching/index

Integrate with caches using LangChain JavaScript.

[Caching LLM calls](/oss/javascript/langchain/models#caching) can be useful for testing, cost savings, and speed.

Below are some integrations that allow you to cache results of individual LLM calls using different caches with different strategies.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/llm_caching/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LLM integrations

Source: https://docs.langchain.com/oss/javascript/integrations/llms/index

Integrate with LLMs using LangChain JavaScript.

**You are currently on a page documenting the use of text completion models. Many of the latest and most popular models are [chat completion models](/oss/javascript/langchain/models).**

Unless you are specifically using more advanced prompting techniques, you are probably looking for [this page instead](/oss/javascript/integrations/chat/).

[LLMs](/oss/javascript/langchain/models) are language models that takes a string as input and return a string as output.

## All LLMs

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/llms/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Middleware integrations

Source: https://docs.langchain.com/oss/javascript/integrations/middleware/index

Integrate with middleware using LangChain JavaScript.

Middleware designed for specific providers. Learn more about [middleware](/oss/javascript/langchain/middleware/overview).

| Provider                                                       | Middleware available |
| -------------------------------------------------------------- | -------------------- |
| [Anthropic](/oss/javascript/integrations/middleware/anthropic) | Prompt caching       |

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/middleware/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
