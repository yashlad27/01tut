import React from 'react'
import { useState } from 'react';
const Content = () => {
    // const name = 'John Doe';

    const [name, setName] = useState('Yash Lad');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
      const names = ['John Doe', 'Jane Doe', 'Joe Doe'];
      const int  = Math.floor(Math.random() * 3);
      setName(names[int]);
    }

    const handleClick = () => {
      setCount(count + 1);
        console.log(count)
    }

    // const handleClick2 = (name) => {
    //     console.log(`${name} was clicked`)
    // }

    const handleClick2 = (e) => {
      console.log(count);
    }

    // const handleClick3 = (e) => {
    //     console.log(e.target)
    // }
    
  return (
    <main>
        {/* <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
        </p> */}

        <p onDoubleClick={handleClick}>
          Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={handleClick2}>Click It</button>
    </main>
  )
}

export default Content