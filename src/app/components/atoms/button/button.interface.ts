import { Icon } from "../icon/icon.enum";

export interface Button {
    name: string;
    label: string;
    icon?: Icon;
    buttonType: string;
    actionType?: string;
    actionUrl?: string;
}