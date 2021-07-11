import './CalorieCard.css';

function CalorieCard({title, source, text, index,  items, setItems}) {
    return (
        <div className="calorie-card">
            <div style={{marginTop: "10px", display: "flex", justifyContent: "space-evenly"}}>
                <h2>{title}</h2>
                <button onClick={() => {
                    const newItems = items.filter((item, i) => i !== index);
                    setItems(newItems);
                }}> 
                    Delete
                </button>
            </div>
            <img src={source} alt="" />
            <h3>{text}</h3>
        </div>
    )
}

export default CalorieCard;

// style={{padding: "5px", fontSize: "1.1rem"}} 