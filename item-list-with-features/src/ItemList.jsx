import { useState } from "react"
import { Item } from "./Item.jsx"
import { ItemDraft } from "./ItemDraft.jsx"

export const ItemList = () => {
  let [items, setItems] = useState([]);
  let [itemToDelete, setItemToDelete] = useState(null);

  const commit = (newItem) => {
    const newItems = [
      ...items,
      newItem
    ];
    setItems(newItems);
  }

  const promptForDelete = (itemToDelete) => {
    setItemToDelete(itemToDelete)
  }

  const confirmDelete = () => {
    setItems(items.filter(i => i.id !== itemToDelete.id))
    setItemToDelete(null);
  }

  const edit = (updatedItem) => {
    setItems(items.map(i => {
      if (i.id === updatedItem.id) {
        return updatedItem;
      } else {
        return i;
      }
    }))
  }

  return <div className="container">
    <label className="label is-medium">Item list</label>
    <ul>
      {items.map(i => <Item key={i.id} item={i} deleteItem={promptForDelete} edit={edit} />)}
      <li>
        <label className="label is-medium">Create a new Item</label>
        <ItemDraft commit={commit} />
      </li>
    </ul>

    {/* Would be better as a separate generic modal component, but I've not much time left */}
    <div className={"modal " + (itemToDelete ? "is-active" : "")}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Are you sure?</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <p>Are you sure you want to delete the item "{itemToDelete?.text}"?</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={() => setItemToDelete(null)}>Cancel</button>
          <button className="button is-danger" onClick={() => confirmDelete()}>Delete</button>
        </footer>
      </div>
    </div>
  </div>
}
