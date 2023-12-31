import { useEffect, useState } from 'react';
import './App.scss';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Layout from './layouts/Layout';
import TaskList from './components/TaskList/TaskList';
import { useSelector } from 'react-redux';

function App() {

  // CODE TO IMPLEMENT LOADING SCREEN 

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // GETTING TASKLIST FROM REDUX STATE REDUCER
  const tasklist = useSelector(state => state.todos.todos);

  // GETTING CURRENT MODE FROM REDUX STATE REDUCER
  const currentMode = useSelector(state => state.mode.currentMode);

  return (
    <>
      {loading === true ? <LoadingScreen /> :
        <div className={`appContainer ${currentMode === 'dark' ? 'active' : ''}`}>
          <Layout >
              <TaskList tasklist={tasklist} />
          </Layout>
        </div>
      }
    </>
  );
}

export default App;
