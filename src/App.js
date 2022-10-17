import './App.scss';
import axios from 'axios';
import Card from './components/Card';
import { useState, useEffect } from 'react';

const url = "https://randomuser.me/api/";

function App() {

  const [loading, setLoading] = useState(true);
  const [user,setUser] = useState([]);

  const users = async () => {
    
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
      setLoading(false)
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    users();
  }, []);

  if(loading){
    return <h2>Loading...</h2>
  }


  return (
    <>
      <div className="App">
        <Card user={user}/>
      </div>
      <div className='button' onClick={()=> {users()}}>Random User</div>
    </>
    
  );
}

export default App;
