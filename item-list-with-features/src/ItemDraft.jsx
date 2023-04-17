import { useState } from "react"

export const ItemDraft = ({ item, commit, cancel }) => {
    const [draft, setDraft] = useState(item?.text || "");

    const onDraftEdit = (event) => {
        setDraft(event.target.value);
    };

    const genItemId = () => {
        // Would probably be better to use a GUID library for Id gen, but this should be ok for this exercise
        return new Date().getTime();
    }

    const confirmDraft = (event) => {
        event.preventDefault(); // Avoid page refresh
        const updatedItem = {
            id: item?.id || genItemId(),
            text: draft
        };
        commit(updatedItem);
        setDraft("");
    }

    return <form onSubmit={confirmDraft}>
        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" value={draft} onChange={onDraftEdit}></input>
            </div>
            <input className="button is-success" type="submit" value="Submit" />
            {cancel && <button className="button" onClick={cancel}>Cancel</button>}
        </div>
    </form>
}
