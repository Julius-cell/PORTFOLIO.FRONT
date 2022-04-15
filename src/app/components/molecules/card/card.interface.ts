import { Button } from "../../atoms/button/button.interface";
import { Image } from "../../atoms/image/image.interface";

export interface Card {
    name: string;
    title?: string;
    subTitle?: string;
    bgImage?: Image;
    sideImage?: Image;
    imagePosition?: string;
    content?: string;
    actionButton?: Button;
}