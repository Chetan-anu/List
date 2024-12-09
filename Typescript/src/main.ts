import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListItem from './model/ListItem'
import ListTemplate from './templates/listtemplate'

const initApp = (): void => {
    const fullist = FullList.instance
    const template = ListTemplate.instance

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault()
        
        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntryText: string = input.value.trim()
        if (!newEntryText.length) return

        const itemId: number = fullist.clearlist.length
        ? parseInt(fullist.list[fullist.clearlist.length-1].id) + 1
        :1

        const newItem = newListItem(itemId.toString(), newEntryText)

        fullist.addItem(newitem)

        template.render(fullist)
    }).
}
const clearitems = document.getElementById("clearItemsButton") as
HTMLButtonElement

clearitems.addEventListener('click', (): void =>{
    fullList.clearlist()
    template.clear()
    
})
fullist.load()
template.render(fullist)

document.addEventListener("DOMContentLoaded", initApp)