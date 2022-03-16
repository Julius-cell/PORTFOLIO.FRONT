import { Footer } from "../footer/footer.interface";
import { Header } from "../header/header.interface";

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