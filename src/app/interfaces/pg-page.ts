export interface PgPage {
  id: string;
  contentTypeId: string;
  title: string;
  description: string;
  slug: string;
  // header: Block;
  // template?: Block;
  // blocks: Block[];
  // footer: Block;
  // info: Block;
}

export interface Block {
  id: string;
  contentTypeId: string;
  contentType: string;
  fields?: any[];
}
