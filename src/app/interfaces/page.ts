export interface Page {
  id: string;
  contentTypeId: string;
  title: string;
  description: string;
  slug: string;
  header: Header;
  // template?: Block;
  // blocks: Block[];
  footer: Footer;
  // info: Block;
}

export interface Block {
  id: string;
  contentTypeId: string;
  contentType: string;
  fields?: any[];
}

export interface Header {
  logo: Image;
  categories: string[];
}

export interface Footer {
  socialMediaLinks: Image[];
}

export interface DocumentRichText {
  content: DocumentRichText[];
  data: {};
  nodeType: string;
}

export interface Image {
  actionType: string;
  actionUrl: string;
  desktopImage: Asset;
  mobileImage: Asset;
}

export interface Asset {
  alt: string;
  contentTYPE: string;
  id: string;
  title: string;
  url: string;
}