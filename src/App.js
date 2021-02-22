import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [users, setUsers] = useState([]); 
  
  const fetchUsers = async () => {
    const userData = await fetch('https://api.jsonbin.io/b/6032277da3e9f25d023d0b59');
    const userJSON = await userData.json();
    setUsers(userJSON);
    console.log(userJSON);
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="App">
      <h1 className="title">List of motorciclist</h1>
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-tr">
            <th className="table__head-tr-th">Photo</th>
            <th className="table__head-tr-th">Name</th>
            <th className="table__head-tr-th">Hours</th>
            <th className="table__head-tr-th">Status</th>
            <th className="table__head-tr-th">Actions</th>
          </tr>  
        </thead>
        <tbody className="table__body">
          {
            users.map(user => {
              return(
              <tr key={user.id} className="table__body-tr">
                <th className="table__body-tr-th"><img src={user.img} alt="User photo"/></th>
                <th className="table__body-tr-th">{user.name}</th>
                <th className="table__body-tr-th">{user.hours}</th>
                <th className="table__body-tr-th">{user.availability ? 'Available' : 'Busy'}</th>
                <th><button className="btnOrder" disabled={user.availability ? false : true}>Order</button></th>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
