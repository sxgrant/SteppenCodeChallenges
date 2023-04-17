import { useState } from "react"
import { ItemDraft } from "./ItemDraft.jsx"

export const Item = ({ item, deleteItem, edit }) => {
    let [inEditMode, setEditMode] = useState(false);
    let [hasHover, setHover] = useState(false);

    const submitEdit = (updatedItem) => {
        edit(updatedItem);
        setEditMode(false);
    }

    return <li onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="level">
        <div className={"level-left" + (hasHover ? "" : " is-invisible")}>
            <button className="button mx-2 is-danger" onClick={() => deleteItem(item)}>Delete</button>
            <button className="button mx-2" onClick={() => setEditMode(true)}>Edit</button>
        </div>
        <div className="level-left ml-4 is-flex-grow-1">
            { inEditMode
                ? <ItemDraft item={item} commit={submitEdit} cancel={() => setEditMode(false)} />
                : <p>{item.text}</p>
            }
        </div>
    </li>
}
