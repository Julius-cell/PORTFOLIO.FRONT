import { Image } from "../../atoms/image/image.interface";
import { Link } from "../../atoms/link/link.interface";

export interface Header {
    logo: Image;
    categories: Link[];
}