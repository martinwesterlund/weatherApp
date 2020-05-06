import { createContext } from 'react'
import { action, observable } from 'mobx'

export class Store {

    _items = observable.object({
        values: []
    })

    get items() {
        return this._items.values
    }

    set items(v) {
        this._items.values = v
    }

    addLocation = action((location) => {
        if (this.items.length > 6) {
            this.items.shift()
        }
        this.items.push(location)
    })

    resetHistory = action(() => {
        this.items = []
    })
}

export default createContext(new Store())