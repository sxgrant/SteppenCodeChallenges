export const TitleButton = ({ title, content, onClick }) => {
    return (
        <div>
            <button className="button" onClick={() => onClick(content)}>
                {title}
            </button>
        </div>
    )
  }
  