export interface Item{
    item: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements item{
    constructor(
        private_id: string = '',
        private_item: string = '',
        private_checked: boolean = false,
    ) {}

    get id(): string{
        return this._id
    }
    set id(id: string){
        this._id = id 
    }
    get item(): string{
        return this._item
    }
    set item(item: string){
        this._item = item 
    }
    get checked(): boolean{
        return this._checked
    }
    set checked(item: boolean){
        this._checked = checked
    }
}