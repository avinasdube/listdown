import { useEffect, useState } from 'react';
import './App.scss';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Layout from './layouts/Layout';
import TaskList from './components/TaskList/TaskList';

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
        <div className="appContainer">
          <Layout >
            <TaskList />
          </Layout>
        </div>
      }
    </>
  );
}

export default App;
