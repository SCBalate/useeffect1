
import './App.css';
import Fourth from './Fourth';
import Second from './Second';
import Seventh from './Seventh';
import Sixth from './Sixth';
import Third from './Third';
import First from './first';

function App() {
  return (
    <div className="App">
    <First/>
    <Second/>
    <Third width={500} height={300}/>
    <Fourth/>
    <Sixth/>
    <Seventh/>
    </div>
  );
}

export default App;
