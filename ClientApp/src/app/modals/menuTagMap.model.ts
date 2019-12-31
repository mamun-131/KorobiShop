export class MenuTagMap {
    id?: number;
    menu_id?: string;
    tagType?: string;
    tagValue?: number;
    constructor(
        id?: number,
        menu_id?: string,
        tagType?: string,
        tagValue?: number
    ) {
        this.id = id;
        this.menu_id = menu_id;
        this.tagType = tagType;
        this.tagValue = tagValue;
    }

}
