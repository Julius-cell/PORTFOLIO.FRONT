export interface Section {
    contentTypeId: string;
    title?: string;
    subTitle?: string;
    columns: string;
    gapMobile?: number;
    gapDesktop?: number;
    bgColor?: string;
    blocks: any[];
    padding?: string;
    marginTop?: string;
    marginBottom?: string;
    contentPosition?: string;
}