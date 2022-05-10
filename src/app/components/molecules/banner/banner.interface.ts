import { Button } from "../../atoms/button/button.interface";
import { Image } from "../../atoms/image/image.interface";

export interface Banner {
    contentTypeId: string;
    title?: string;
    subTitle?: string;
    bgImage?: Image;
    bgColor?: string;
    isFullScreen?: boolean;
    cta?: Button;
}