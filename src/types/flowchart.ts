export interface Node {
  question?: string;
  type?: 'question' | 'intro';
  activity?: string;
  endpoint?: boolean;
  yes?: string;
  no?: string;
  next?: string;
  buttons?: Array<{
    text: string;
    url: string;
  }>;
}

export type Flowchart = Record<string, Node>; 