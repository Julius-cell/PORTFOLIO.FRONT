export interface Swiper {
    contentTypeId: string;
    title?: string;
    slides: any[];
    slidesPerViewDesktop: number;
    slidesPerViewMobile: number;
    spaceBetween: number;
    speed: number;
    isFullScreen: boolean;
    height: string;
    indicators: boolean;
    loop: boolean;
    pausedTime?: number;
    autoplayDelay?: number;
}