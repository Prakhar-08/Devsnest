import React, {useState} from "react";
import './App.css';
import CalorieCard from './CalorieCard';
import Calories from './CalorieInfo';



function App() {
  const [items, setItems] = useState(Calories);

  function Card(item, index) {
    return (
      <CalorieCard 
        key={item.id} 
        title={item.title} 
        source={item.source}
        text={item.text} 
        items={items} 
        setItems={setItems} 
        index={index} 
      />
    )
  }
  
  return (
    <div className="App">
      <h1 className="heading-text">Calorie Card</h1>
      <div className="Container">
      {items.length > 0 ? items.map(Card) : <h1 style={{textAlign: "center"}}>NO DATA FOUND</h1>}
      </div>
    </div>
  );
}

export default App;




