
import './App.css';
import StripeContainer from './components/StripeContainer';
import {useState} from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
     <h1>Donate Here</h1>
     {/* {showItem ? <StripeContainer/> : <><h3>$5.00</h3> <img src='' alt='Donate here'></img><button onClick={() => setShowItem(true)}>Donate Here</button></>} */}
     {showItem ? <StripeContainer/> : <><h2>$5.00</h2><button onClick={() => setShowItem(true)}>DONATE</button></>}

    </div>
  );
}

export default App;
