export interface DocumentRichText {
  content: DocumentRichText[];
  data: {};
  nodeType: string;
}

export interface Asset {
  alt?: string;
  contentType: string;
  id: string;
  title: string;
  url: string;
}