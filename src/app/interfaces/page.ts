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
  name: string;
  logo: string;
  categories: string[];
}

export interface Footer {
  name: string;
  socialMediaLinks: string[];
}

export interface DocumentRichText {
  content: DocumentRichText[];
  data: {};
  nodeType: string;
}
