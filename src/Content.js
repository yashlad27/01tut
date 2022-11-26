import React from 'react'

const Content = () => {
    // const name = 'John Doe';

    const handleNameChange = () => {
      const names = ['John Doe', 'Jane Doe', 'Joe Doe'];
      const int  = Math.floor(Math.random() * 3);
      return names[int];
    }

    const handleClick = () => {
        console.log('You Clicked it')
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
        console.log(e.target)
    }
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2('John')}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content