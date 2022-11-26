import React from 'react'

const Content = () => {
    // const name = 'John Doe';

    const handleNameChange = () => {
      const names = ['John Doe', 'Jane Doe', 'Joe Doe'];
      const int  = Math.floor(Math.random() * 3);
      return names[int];
    }

  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content