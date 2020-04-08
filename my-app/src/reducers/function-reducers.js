const updateCardItems = (cardItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cardItems.slice(0, idx),
            ...cardItems.slice(idx + 1),
        ]
    }

    if (idx === -1) {
        return [
            ...cardItems,
            item
        ]
    }

    return [
        ...cardItems.slice(0, idx),
        item,
        ...cardItems.slice(idx + 1)
    ]

}

const updateItem = (item = {}, book, quontity) => {
    const {id = book.id, count = 0, title = book.title, total = 0} = item


    return {
        id,
        title,
        count: count + quontity,
        total: total + quontity * book.price
    }

}

const updateOrder = (state, bookId, quontity) => {
    const {bookList: {books}, shoppingCard: {cardItems}} = state
    const book = books.find(i => i.id === bookId)
    const idx = cardItems.findIndex(({id}) => id === bookId)
    const item = cardItems[idx]

    let newItem = updateItem(item, book, quontity)

    return {
        orderTotal: 0,
        cardItems: updateCardItems(cardItems, newItem, idx)
    }
}


export {updateOrder}
