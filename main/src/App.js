import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(1)

  const fullStar = 'https://w7.pngwing.com/pngs/661/1019/png-transparent-star-icon-flat-black-emblem-favourite-rate-mark-like-sign-thumbnail.png'

  const emptyStar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHbb3hx5QmeTR90gYocfRDUeN_WrprKyPeC-jxJ6dzArE8DwqK5E4rL_ujJORi1tzlRc&usqp=CAU'

  const handleCounter = (operation) => {
    if(operation === 'remove'){
      if(counter > 1){
        setCounter(counter - 1)
        let star = document.getElementById(`star-${counter}`)
        star.src = emptyStar
      }
    }
    else { 
      if(counter < 5){
        setCounter(counter + 1)
        let star = document.getElementById(`star-${counter + 1}`)
        star.src = fullStar
      }
    }
  }

  return (
    <>
      <div id='header'>
        <div id='logo-wrapper'>
          <p>LOGO</p>
        </div>
        <div id='menu-wrapper'>
          <p>menu</p>
        </div>
      </div>
      <div id='body'>
        <div id='number-wrapper'>
          <button onClick={(e) => handleCounter('remove')}>Remove 1</button>
          <h1>{counter}</h1>
          <button onClick={(e) => handleCounter('add')}>Add 1</button>
        </div>
        <div id='stars-wrapper'>
          <img src={fullStar} 
          id='star-1' alt='star-rating'></img>
          <img src={emptyStar} id='star-2' alt='star-rating'></img>
          <img src={emptyStar} id='star-3' alt='star-rating'></img>
          <img src={emptyStar} id='star-4' alt='star-rating'></img>
          <img src={emptyStar} id='star-5' alt='star-rating'></img>
        </div>
      </div>
    </>
  );
}

export default App;
