import { useState } from "react"
import { TitleButton } from "./TitleButton.jsx"

export const TwoPaneList = ({ data }) => {
  let [contents, setContents] = useState("");

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          {data.map((d, i) => {
            return <TitleButton key={i} onClick={setContents} title={d.title} content={d.content} />
          })}
        </div>
        <div className="column content">
          {contents
            ? contents.map((c, i) => <p key={i}>{c}</p>)
            : <p className="label is-medium">Select a title on the left</p>
          }
        </div>
      </div>
    </div>
  )
}
