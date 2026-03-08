export interface PreprocessConfig {
  stripPatterns?: string[];
  replacePatterns?: Array<{
    match: string;
    replace: string;
    scope?: "all" | "headings";
  }>;
  stripHtml?: boolean;
}

export interface SourceConfig {
  id: string;
  name: string;
  description: string;
  version: string;
  adapter: "llms-full" | "llms-txt" | "html" | "github" | "sitemap";
  url?: string;
  splitConfig?: SplitConfig;
  topicOverrides?: Record<string, Partial<ProcessedTopic>>;
  preprocess?: PreprocessConfig;
  crawl?: CrawlConfig;
  github?: GithubConfig;
}

export interface CrawlConfig {
  contentSelector?: string;
  removeSelectors?: string[];
  startPaths?: string[];
  include?: string[];
  exclude?: string[];
}

export interface GithubConfig {
  repo: string;
  branch?: string;
  docsPath?: string;
  include?: string[];
  exclude?: string[];
}

export interface SplitConfig {
  minTokens?: number;
  maxTokens?: number;
  splitDepth?: number;
}

export interface ProcessedTopic {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tokens: number;
  content: string;
}

export interface Adapter {
  process(
    source: SourceConfig,
    prefetchedContent?: string,
  ): Promise<ProcessedTopic[]>;
}

export interface SourcesFile {
  sources: SourceConfig[];
}

export interface Manifest {
  version: number;
  updatedAt: string;
  libraries: ManifestLibrary[];
}

export interface ManifestLibrary {
  id: string;
  name: string;
  description: string;
  version: string;
  topics: ManifestTopic[];
}

export interface ManifestTopic {
  id: string;
  title: string;
  description: string;
  tags: string[];
  path: string;
  tokens: number;
}
