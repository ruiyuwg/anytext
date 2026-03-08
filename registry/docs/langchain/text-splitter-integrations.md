# Text splitter integrations

Source: https://docs.langchain.com/oss/javascript/integrations/splitters/index

Integrate with text splitters using LangChain.

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/textsplitters @langchain/core
# Requires Node.js 20+
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/textsplitters @langchain/core
# Requires Node.js 20+
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/textsplitters @langchain/core
# Requires Node.js 20+
```

```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
bun add @langchain/textsplitters @langchain/core
# Requires Node.js 20+
```

**Text splitters** break large docs into smaller chunks that will be retrievable individually and fit within model context window limit.

There are several strategies for splitting documents, each with its own advantages.

For most use cases, start with the [`RecursiveCharacterTextSplitter`](/oss/javascript/integrations/splitters/recursive_text_splitter). It provides a solid balance between keeping context intact and managing chunk size. This default strategy works well out of the box, and you should only consider adjusting it if you need to fine-tune performance for your specific application.

## Text structure-based

Text is naturally organized into hierarchical units such as paragraphs, sentences, and words. We can leverage this inherent structure to inform our splitting strategy, creating split that maintain natural language flow, maintain semantic coherence within split, and adapts to varying levels of text granularity. LangChain's `RecursiveCharacterTextSplitter` implements this concept:

- The [`RecursiveCharacterTextSplitter`](/oss/javascript/integrations/splitters/recursive_text_splitter) attempts to keep larger units (e.g., paragraphs) intact.
- If a unit exceeds the chunk size, it moves to the next level (e.g., sentences).
- This process continues down to the word level if necessary.

Example usage:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 100, chunkOverlap: 0 })
const texts = splitter.splitText(document)
```

**Available text splitters**:

- [Recursively split text](/oss/javascript/integrations/splitters/recursive_text_splitter)

## Length-based

An intuitive strategy is to split documents based on their length. This simple yet effective approach ensures that each chunk doesn't exceed a specified size limit. Key benefits of length-based splitting:

- Straightforward implementation
- Consistent chunk sizes
- Easily adaptable to different model requirements

Types of length-based splitting:

- Token-based: Splits text based on the number of tokens, which is useful when working with language models.
- Character-based: Splits text based on the number of characters, which can be more consistent across different types of text.

Example implementation using LangChain's `CharacterTextSplitter` with token-based splitting:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { TokenTextSplitter } from "@langchain/textsplitters";

const splitter = new TokenTextSplitter({ encodingName: "cl100k_base", chunkSize: 100, chunkOverlap: 0 })
const texts = splitter.splitText(document)
```

**Available text splitters**:

- [Split by tokens](/oss/javascript/integrations/splitters/split_by_token)
- [Split by characters](/oss/javascript/integrations/splitters/character_text_splitter)

## Document structure-based

Some documents have an inherent structure, such as HTML, Markdown, or JSON files. In these cases, it's beneficial to split the document based on its structure, as it often naturally groups semantically related text. Key benefits of structure-based splitting:

- Preserves the logical organization of the document
- Maintains context within each chunk
- Can be more effective for downstream tasks like retrieval or summarization

**Available text splitters**:

- [Split code](/oss/javascript/integrations/splitters/code_splitter)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/integrations/splitters/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
