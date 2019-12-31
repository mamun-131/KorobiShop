export class ProductAttribute {
    id?: number;
    product_id?: number;
    product_attribute?: string;
    attribute_value?: string;
    attribute_valuetext?: string;
    attribute_stock?: number;
    constructor(
        id?: number,
        product_id?: number,
        product_attribute?: string,
        attribute_value?: string,
        attribute_valuetext?: string,
        attribute_stock?: number
    ) {
        this.id = id;
        this.product_id = product_id;
        this.product_attribute = product_attribute;
        this.attribute_value = attribute_value;
        this.attribute_valuetext = attribute_valuetext;
        this.attribute_stock = attribute_stock;
    }

}

