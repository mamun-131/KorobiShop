
export class FirstPageCarouselSerial {

    id?: number;
    mainSlno?: number;
    typeSl?: number;
    caption?: string;
    type?: string;
    routerlink?: string;

    constructor(
        id?: number,
        mainSlno?: number,
        typeSl?: number,
        caption?: string,
        type?: string,
        routerlink?: string
    ) {
        this.id = id;
        this.mainSlno = mainSlno;
        this.typeSl = typeSl;
        this.caption = caption;
        this.type = type;
        this.routerlink = routerlink;

    }

}
