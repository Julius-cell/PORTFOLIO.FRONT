export interface Page {
  id: string;
  contentTypeId: string;
  title: string;
  description: string;
  slug: string;
  header: Header;
  // template?: Block;
  blocks?: any[];
  footer: Footer;
}

export interface Header {
  logo: Image;
  categories: string[];
}

export interface Banner {
  contentTypeId: string;
  title: string;
  subTitle: string;
}

export interface Section {
  contentTypeId: string;
  title?: string;
  subTitle?: string;
  columns: string;
  gapMobile?: number;
  gapDesktop?: number;
  bgColor?: string;
  blocks: any[];
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