export interface Manifest {
  version: number;
  updatedAt: string;
  libraries: Library[];
}

export interface Library {
  id: string;
  name: string;
  description: string;
  version: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  tags: string[];
  path: string;
  tokens: number;
}
