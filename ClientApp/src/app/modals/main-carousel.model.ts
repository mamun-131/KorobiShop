
export class MainCarousel {
    id?: number;
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    link?: string;
    constructor(

        id?: number,
        title?: string,
        subtitle?: string,
        description?: string,
        image?: string,
        link?: string
    ) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.image = image;
        this.link = link;
      
    }

}
