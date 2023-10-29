import {useEffect, useState} from 'react';
import axios from 'axios';
//var axios=new Axios();
 
 
 
 
function App() {
  const[data,setdata]=useState([]);
  const[userid,setuserid]=useState('');
  const[password,setpassword]=useState('');
  const[emailid,setemailid]=useState('');
  const updateuserid=(event)=>{
    setuserid(event.target.value);
  }
  const updatepassword=(event)=>{
    setpassword(event.target.value);
  }
  const updateemail=(event)=>{
    setemailid(event.target.value);
  }
 
  const insertuser=()=>{
    axios.post("http://localhost:9902/Add",{id:userid,pass:password,emailid:emailid})
    .then(res=>console.log(res));
  }
 
  const updateuser=()=>{
    axios.post("http://localhost:9902/Update",{id:userid,pass:password,emailid:emailid})
    .then(res=>console.log(res));
  }
 
  const deleteuser = () => {
    axios.delete(`http://localhost:9902/deleteuse?id=${userid}`)
      .then((res) => {
        console.log(res);
      hello();
      });
  };
 
useEffect(() => {
 
})
    const hello=()=>{
        fetch("http://localhost:9902/Getall").
    then(response=>response.json()).then(data=>{setdata(data)})
      };
        //console.log(data);
 
  return (  
    <div className="App">
        <h1>Welcome to React</h1>
        
 
        <form onSubmit={insertuser}>
          <center>
          Enter uid:<input type="text" name="userid" value={userid} onChange={updateuserid}/><br/>
          Enter password:<input type="password" name="password" value={password} onChange={updatepassword}/><br/>
          Enter EmailID:<input type="email" name="emailid" value={emailid} onChange={updateemail}/><br/>
          <input type="submit" value="Add" />&nbsp;&nbsp;&nbsp;
          <input type='reset' value="reset"/>&nbsp;&nbsp;&nbsp;
          <input type="button" value="update" onClick={updateuser}/>
          <input type='button' value="delete" onClick={deleteuser}/>
          <br/>
          <br/>
          <input className='button' type='button' value="show" onClick={hello}/>
          </center>
        </form>
        {
        data.map(item => (
          <ul key={item.userid}>
        <li >{item.userid},{item.password},{item.emailid}</li>
        </ul>
      ))}
     
 
 
     
    </div>
  );
        }
 
export default App;