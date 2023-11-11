import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import Display from './components/display';
import Bottom from './components/bottom';



function App() {
  return (
    <div className="App">
      <div className='container shadow-2xl w-96 h-96 p-10 relative justify-center bg-slate-700'>
        <Search/>
        <Display />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
