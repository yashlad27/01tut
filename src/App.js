import logo from './logo.svg';
import './App.css';

function App() {
  
  const name = 'John Doe';

  const handleNameChange = () => {
    const names = ['John Doe', 'Jane Doe', 'Joe Doe'];
    const int  = Math.floor(Math.random() * 3);
    return names[int];
  }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          {/* Hello {name}; */}
          Hello {handleNameChange()}!
        </p>

        <p>{name}</p>
        <p>{[1, 2, 3]}</p>
        <p>[1, 2, 3]</p>
        {/* <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
