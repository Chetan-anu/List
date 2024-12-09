import ListItem from "./ListItem";

interface list{
    list: ListItem[],
    load(): void,
    save(): void,
    clearlist(): void,
    addItem(itemobj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements list{
    static instance: FullList = new FullList()
    
    private constructor(private list: ListItem[] = []){}

    get list(): ListItem[]{
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("mylist")
        if (typeof storedList !== "string") return

        const parsedList: { _id: string, _item: string, _checked:boolean} [] = JSON.parse(storedList)

        parsedList.forEach(itemobj =>{
            const newlistItem = new ListItem(itemobj._item, itemobj._checked)
            FullList.instance.addItem(newlistItem)
        })
    }

    save(): void {
        localStorage.setItem("mylist", JSON.stringify(this._list))
    }
    clearlist(): void {
        this._list = []
        this.save()

    }
    addItem(itemobj: ListItem): void {
            this._list.push(itemobj)
            this.save()
        }
        removeItem(id: string): void {
            this._list = this._list.filter(item => item.id !== id)
            this.save()
        }
    }