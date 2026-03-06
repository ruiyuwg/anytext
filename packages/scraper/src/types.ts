export interface SourceConfig {
  id: string;
  name: string;
  description: string;
  version: string;
  adapter: "llms-full" | "llms-txt" | "manual";
  url?: string;
  splitConfig?: SplitConfig;
  topicOverrides?: Record<string, Partial<ProcessedTopic>>;
}

export interface SplitConfig {
  minTokens?: number;
  maxTokens?: number;
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
  process(source: SourceConfig): Promise<ProcessedTopic[]>;
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
