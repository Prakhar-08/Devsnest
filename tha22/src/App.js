import './App.css';
import {useState, useEffect} from "react";
import Templates from './Templates';
import Meme from './Meme';

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  const fetchTemplate = async() => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const memes = await response.json();
    setTemplates(memes.data.memes);
  }

  useEffect(()=> {
    fetchTemplate();
  }, []);


  return(
    <div className="App">
    <h1>Meme Generator</h1>
      {meme===null ? <Templates templates={templates} setMeme={setMeme} /> : <Meme meme={meme} setMeme={setMeme} />}
    </div>
  );
}


export default App;


