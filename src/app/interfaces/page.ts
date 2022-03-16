export interface DocumentRichText {
  content: DocumentRichText[];
  data: {};
  nodeType: string;
}

export interface Image {
  actionType?: string;
  actionUrl?: string;
  desktopImage?: Asset;
  mobileImage?: Asset;
}

export interface Asset {
  alt?: string;
  contentType: string;
  id: string;
  title: string;
  url: string;
}