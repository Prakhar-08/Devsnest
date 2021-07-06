import './App.css';
import MemeCard  from './MemeCard';
import Chess from './Chess';

function App() {
  return (
    <div className="App">

    <div className="Meme">
      <h2 className="heading-text">Meme Card</h2>
      <MemeCard meme="Study-Meme" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFKCQ95CGc0OqXPmLM7f_X58rfPTdKSDuNFP2NFZfewYkba9TSJ2aNcEZOApTOEgSFEk&usqp=CAU" text="Damn! This card is showing reality :("/>
    </div>

    <div className="Chess">
      <h2 className="heading-text">Chess Board</h2>
      <Chess />
    </div>
      
    </div>
  );
}

export default App;
