# Document loader integrations

Source: https://docs.langchain.com/oss/python/integrations/document\_loaders/index

Integrate with document loaders using LangChain Python.

Document loaders provide a **standard interface** for reading data from different sources (such as Slack, Notion, or Google Drive) into LangChain’s [Document](https://reference.langchain.com/python/langchain-core/documents/base/Document) format.
This ensures that data can be handled consistently regardless of the source.

All document loaders implement the [`BaseLoader`](https://reference.langchain.com/python/langchain-core/document_loaders/base/BaseLoader) interface.

## Interface

Each document loader may define its own parameters, but they share a common API:

- `load()` – Loads all documents at once.
- `lazy_load()` – Streams documents lazily, useful for large datasets.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_community.document_loaders.csv_loader import CSVLoader

loader = CSVLoader(
    ...  # Integration-specific parameters here
)

# Load all documents
documents = loader.load()

# For large datasets, lazily load documents
for document in loader.lazy_load():
    print(document)
```

## By category

### Webpages

The below document loaders allow you to load webpages.

| Document Loader                                                             | Description                                                                                                          | Package/API |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------- |
| [Web](/oss/python/integrations/document_loaders/web_base)                   | Uses urllib and BeautifulSoup to load and parse HTML web pages                                                       | Package     |
| [Unstructured](/oss/python/integrations/document_loaders/unstructured_file) | Uses Unstructured to load and parse web pages                                                                        | Package     |
| [RecursiveURL](/oss/python/integrations/document_loaders/recursive_url)     | Recursively scrapes all child links from a root URL                                                                  | Package     |
| [Sitemap](/oss/python/integrations/document_loaders/sitemap)                | Scrapes all pages on a given sitemap                                                                                 | Package     |
| [Spider](/oss/python/integrations/document_loaders/spider)                  | Crawler and scraper that returns LLM-ready data                                                                      | API         |
| [Firecrawl](/oss/python/integrations/document_loaders/firecrawl)            | API service that can be deployed locally                                                                             | API         |
| [Apify Dataset](/oss/python/integrations/document_loaders/apify_dataset)    | Load documents from Apify datasets                                                                                   | API         |
| [Docling](/oss/python/integrations/document_loaders/docling)                | Uses Docling to load and parse web pages                                                                             | Package     |
| [Hyperbrowser](/oss/python/integrations/document_loaders/hyperbrowser)      | Platform for running and scaling headless browsers, can be used to scrape/crawl any site                             | API         |
| [AgentQL](/oss/python/integrations/document_loaders/agentql)                | Web interaction and structured data extraction from any web page using an AgentQL query or a Natural Language prompt | API         |

### PDFs

The below document loaders allow you to load PDF documents.

| Document Loader                                                                    | Description                                          | Package/API |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |
| [PyPDF](/oss/python/integrations/document_loaders/pypdfloader)                     | Uses `pypdf` to load and parse PDFs                  | Package     |
| [Unstructured](/oss/python/integrations/document_loaders/unstructured_file)        | Uses Unstructured's open source library to load PDFs | Package     |
| [Amazon Textract](/oss/python/integrations/document_loaders/amazon_textract)       | Uses AWS API to load PDFs                            | API         |
| [MathPix](/oss/python/integrations/document_loaders/mathpix)                       | Uses MathPix to load PDFs                            | Package     |
| [PDFPlumber](/oss/python/integrations/document_loaders/pdfplumber)                 | Load PDF files using PDFPlumber                      | Package     |
| [PyPDFDirectry](/oss/python/integrations/document_loaders/pypdfdirectory)          | Load a directory with PDF files                      | Package     |
| [PyPDFium2](/oss/python/integrations/document_loaders/pypdfium2)                   | Load PDF files using PyPDFium2                       | Package     |
| [PyMuPDF](/oss/python/integrations/document_loaders/pymupdf)                       | Load PDF files using PyMuPDF                         | Package     |
| [PyMuPDF4LLM](/oss/python/integrations/document_loaders/pymupdf4llm)               | Load PDF content to Markdown using PyMuPDF4LLM       | Package     |
| [PDFMiner](/oss/python/integrations/document_loaders/pdfminer)                     | Load PDF files using PDFMiner                        | Package     |
| [Upstage Document Parse Loader](/oss/python/integrations/document_loaders/upstage) | Load PDF files using UpstageDocumentParseLoader      | Package     |
| [Docling](/oss/python/integrations/document_loaders/docling)                       | Load PDF files using Docling                         | Package     |
| [UnDatasIO](/oss/python/integrations/document_loaders/undatasio)                   | Load PDF files using UnDatasIO                       | Package     |
| [OpenDataLoader PDF](/oss/python/integrations/document_loaders/opendataloader_pdf) | Load PDF files using OpenDataLoader PDF              | Package     |

### Cloud providers

The below document loaders allow you to load documents from your favorite cloud providers.

| Document Loader                                                                                            | Description                                                 | Partner Package | API reference                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AWS S3 Directory](/oss/python/integrations/document_loaders/aws_s3_directory)                             | Load documents from an AWS S3 directory                     | ❌               | [`S3DirectoryLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.s3_directory.S3DirectoryLoader.html)                          |
| [AWS S3 File](/oss/python/integrations/document_loaders/aws_s3_file)                                       | Load documents from an AWS S3 file                          | ❌               | [`S3FileLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.s3_file.S3FileLoader.html)                                         |
| [Azure AI Data](/oss/python/integrations/document_loaders/azure_ai_data)                                   | Load documents from Azure AI services                       | ❌               | [`AzureAIDataLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.azure_ai_data.AzureAIDataLoader.html)                         |
| [Azure Blob Storage](/oss/python/integrations/document_loaders/azure_blob_storage)                         | Load documents from Azure Blob Storage                      | ✅               | [`AzureBlobStorageLoader`](https://reference.langchain.com/python/integrations/langchain_azure/storage/)                                                                                       |
| [Dropbox](/oss/python/integrations/document_loaders/dropbox)                                               | Load documents from Dropbox                                 | ❌               | [`DropboxLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.dropbox.DropboxLoader.html)                                       |
| [Google Cloud Storage Directory](/oss/python/integrations/document_loaders/google_cloud_storage_directory) | Load documents from GCS bucket                              | ✅               | [`GCSDirectoryLoader`](https://python.langchain.com/api_reference/google_community/gcs_directory/langchain_google_community.gcs_directory.GCSDirectoryLoader.html)                             |
| [Google Cloud Storage File](/oss/python/integrations/document_loaders/google_cloud_storage_file)           | Load documents from GCS file object                         | ✅               | [`GCSFileLoader`](https://python.langchain.com/api_reference/google_community/gcs_file/langchain_google_community.gcs_file.GCSFileLoader.html)                                                 |
| [Google Drive](/oss/python/integrations/document_loaders/google_drive)                                     | Load documents from Google Drive (Google Docs only)         | ✅               | [`GoogleDriveLoader`](https://python.langchain.com/api_reference/google_community/drive/langchain_google_community.drive.GoogleDriveLoader.html)                                               |
| [Huawei OBS Directory](/oss/python/integrations/document_loaders/huawei_obs_directory)                     | Load documents from Huawei Object Storage Service Directory | ❌               | [`OBSDirectoryLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.obs_directory.OBSDirectoryLoader.html)                       |
| [Huawei OBS File](/oss/python/integrations/document_loaders/huawei_obs_file)                               | Load documents from Huawei Object Storage Service File      | ❌               | [`OBSFileLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.obs_file.OBSFileLoader.html)                                      |
| [Microsoft OneDrive](/oss/python/integrations/document_loaders/microsoft_onedrive)                         | Load documents from Microsoft OneDrive                      | ❌               | [`OneDriveLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.onedrive.OneDriveLoader.html)                                    |
| [Microsoft SharePoint](/oss/python/integrations/document_loaders/microsoft_sharepoint)                     | Load documents from Microsoft SharePoint                    | ❌               | [`SharePointLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.sharepoint.SharePointLoader.html)                              |
| [Tencent COS Directory](/oss/python/integrations/document_loaders/tencent_cos_directory)                   | Load documents from Tencent Cloud Object Storage Directory  | ❌               | [`TencentCOSDirectoryLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.tencent_cos_directory.TencentCOSDirectoryLoader.html) |
| [Tencent COS File](/oss/python/integrations/document_loaders/tencent_cos_file)                             | Load documents from Tencent Cloud Object Storage File       | ❌               | [`TencentCOSFileLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.tencent_cos_file.TencentCOSFileLoader.html)                |

### Social platforms

The below document loaders allow you to load documents from different social media platforms.

| Document Loader                                              | API reference                                                                                                                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Twitter](/oss/python/integrations/document_loaders/twitter) | [`TwitterTweetLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.twitter.TwitterTweetLoader.html) |
| [Reddit](/oss/python/integrations/document_loaders/reddit)   | [`RedditPostsLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.reddit.RedditPostsLoader.html)    |

### Messaging services

The below document loaders allow you to load data from different messaging platforms.

| Document Loader                                                          | API reference                                                                                                                                                               |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Telegram](/oss/python/integrations/document_loaders/telegram)           | [`TelegramChatFileLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.telegram.TelegramChatFileLoader.html) |
| [WhatsApp](/oss/python/integrations/document_loaders/whatsapp_chat)      | [`WhatsAppChatLoader`](https://python.langchain.com/api_reference/community/chat_loaders/langchain_community.chat_loaders.whatsapp.WhatsAppChatLoader.html)                 |
| [Discord](/oss/python/integrations/document_loaders/discord)             | [`DiscordChatLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.discord.DiscordChatLoader.html)            |
| [Facebook Chat](/oss/python/integrations/document_loaders/facebook_chat) | [`FacebookChatLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.facebook_chat.FacebookChatLoader.html)    |
| [Mastodon](/oss/python/integrations/document_loaders/mastodon)           | [`MastodonTootsLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.mastodon.MastodonTootsLoader.html)       |

### Productivity tools

The below document loaders allow you to load data from commonly used productivity tools.

| Document Loader                                            | API reference                                                                                                                                                                  |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Figma](/oss/python/integrations/document_loaders/figma)   | [`FigmaFileLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.figma.FigmaFileLoader.html)                     |
| [Notion](/oss/python/integrations/document_loaders/notion) | [`NotionDirectoryLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.notion.NotionDirectoryLoader.html)        |
| [Slack](/oss/python/integrations/document_loaders/slack)   | [`SlackDirectoryLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.slack_directory.SlackDirectoryLoader.html) |
| [Quip](/oss/python/integrations/document_loaders/quip)     | [`QuipLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.quip.QuipLoader.html)                                |
| [Trello](/oss/python/integrations/document_loaders/trello) | [`TrelloLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.trello.TrelloLoader.html)                          |
| [Roam](/oss/python/integrations/document_loaders/roam)     | [`RoamLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.roam.RoamLoader.html)                                |
| [GitHub](/oss/python/integrations/document_loaders/github) | [`GithubFileLoader`](https://python.langchain.com/api_reference/community/document_loaders/langchain_community.document_loaders.github.GithubFileLoader.html)                  |

### Common file types

The below document loaders allow you to load data from common data formats.

| Document Loader                                                                                  | Data Type                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`CSVLoader`](/oss/python/integrations/document_loaders/csv)                                     | CSV files                                                                                                                                                                    |
| [`Unstructured`](/oss/python/integrations/document_loaders/unstructured_file)                    | Many file types (see <https://docs.unstructured.io/platform/supported-file-types>)                               |
| [`JSONLoader`](/oss/python/integrations/document_loaders/json)                                   | JSON files                                                                                                                                                                   |
| [`BSHTMLLoader`](/oss/python/integrations/document_loaders/bshtml)                               | HTML files                                                                                                                                                                   |
| [`DoclingLoader`](/oss/python/integrations/document_loaders/docling)                             | Various file types (see <https://ds4sd.github.io/docling/>)                                                                                |
| [`PolarisAIDataInsightLoader`](/oss/python/integrations/document_loaders/polaris_ai_datainsight) | Various file types (see <https://datainsight.polarisoffice.com/documentation?docType=doc_extract>) |

## All document loaders

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/document_loaders/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
