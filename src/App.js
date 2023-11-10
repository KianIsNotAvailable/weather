import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import Display from './components/display';
import Bottom from './components/bottom';



function App() {
  return (
    <div className="App">
      <div className='Container'>
        <Search/>
        <Display />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
