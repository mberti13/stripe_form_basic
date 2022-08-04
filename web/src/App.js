import logo from './logo.svg';
import './App.css';
import StripeContainer from './components/StripeContainer';
import {useState} from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
     <h1>Donate</h1>
     {/* {showItem ? <StripeContainer/> : <><h3>$5.00</h3> <img src='' alt='Donate here'></img><button onClick={() => setShowItem(true)}>Donate Here</button></>} */}
     {showItem ? <StripeContainer/> : <><h3>$5.00</h3> <img src='' alt='Donate here'></img><a href="#" class="donate" onClick={() => setShowItem(true)}>DONATE</a></>}

    </div>
  );
}

export default App;
