import React, {useState, useEffect} from 'react'

const Random = () => {

  const [randomNum, setRandomNum] = useState(0);


  const handleClick = () => {
    const min = 1;
    const max = 6;
    const rand = min + Math.random() * (max - min);
    setRandomNum(Math.round(rand));
}

    return (
      <div>
        <button className="pa2 ba b--green bg-lightest-blue" onClick={handleClick}>Generate Random Number </button>
        <h1 className='f1'> A {randomNum}</h1>
      </div>
    );
  
}

export default Random;

