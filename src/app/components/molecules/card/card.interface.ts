import { Button } from "../../atoms/button/button.interface";
import { Image } from "../../atoms/image/image.interface";
import { Link } from "../../atoms/link/link.interface";

export interface Card {
    name: string;
    title?: string;
    subTitle?: string;
    bgImage?: Image;
    sideImage?: Image;
    imagePosition?: string;
    content?: string;
    actionButton?: Button;
    link?: Link;
}