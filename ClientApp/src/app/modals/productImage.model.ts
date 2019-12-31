export class ProductImage {
    id?: number;
    product_id?: number;
    imagePath?: string;
    imagePathThumb?: string;

    constructor(

        id?: number,
        product_id?: number,
        imagePath?: string,
        imagePathThumb?: string
    ) {
        this.id = id;
        this.product_id = product_id;
        this.imagePath = imagePath;
        this.imagePathThumb = imagePathThumb;
    }

}

