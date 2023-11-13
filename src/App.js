import logo from './logo.svg';
import './App.css';
import Weather from './components/weather';



function App() {
  return (
    <div className="App">
      <div className='container m-auto shadow-2xl w-96 h-96 p-10 relative justify-center text-white bg-slate-700'>
        <Weather />
      </div>
    </div>
  );
}

export default App;
