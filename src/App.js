import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='wrapper'> 
        <Navigation />
        <Main />
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
