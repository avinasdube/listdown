import { useEffect, useState } from 'react';
import './App.scss';
import LoadingScreen from './components/Logo/LoadingScreen';

import dev from './assets/dev.png';

function App() {

  // CODE TO IMPLEMENT LOADING SCREEN 

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading === true ? <LoadingScreen /> :
        <div className="App">
          <img src={dev} alt=''></img>
          <span>Under Construction. Come back shortly.</span>
        </div>
      }
    </>
  );
}

export default App;
