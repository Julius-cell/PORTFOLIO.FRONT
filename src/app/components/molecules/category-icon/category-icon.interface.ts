import { Image } from "../../atoms/image/image.interface";

export interface CardIcon {
  name: string;
  label: string;
  actionType: string;
  actionValue: string;
  image: Image;
}