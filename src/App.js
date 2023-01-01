import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character'
const App = () => {
  const [theforce,setTheForce] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/`)
    .then(res=>{
      setTheForce(res.data)
    })
    .catch(err=> console.error(err))
  },[])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {theforce && theforce.map((char,index)=>{
        return <Character key={index} char={char}/>
      })}
    </div>
  );
}

export default App;
