import React from 'react'
import{useEffect,useState} from "react";

function Fourth() {
const[users,setUsers] = useState([]);
    // You can use your own images if you wish

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/users') {
          resolve({
            status: 200,
            message: 'Success',
            data: [
              {
                name: 'Saroj',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 500,
                comments: 10,
              },
              {
                name: 'Meeta',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 200,
                comments: 1,
              },
              {
                name: 'Alia',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 100,
                comments: 5,
              },
            ],
          })
        } else {
          reject({
            status: 404,
            message: 'users data not found.',
          })
        }
      }, 2000)
    })
  }

const fetchUsers =async()=>{
    try{
        const response = await fakeFetch('https://example.com/api/users');
        const{data} = response;
        setUsers(data);
    }catch(err){
        console.log("Data fetch error: " + err);
    }
}

useEffect(()=>{
    fetchUsers();
},);

return(
    users.length === 0 ?<div>Loading........</div>:
  
    <div>{users.map((x , index)=>{
        return(
            <div key={index} style={{border:"1px solid black", minWidth:"500px"}}>
            <img src={x.image} alt={x.name} width={500} height={300}/>
            <h3>{x.name}</h3>
            <h4>Likes : {x.likes}</h4>
            <h4>Comments : {x.comments}</h4>
            </div>
        )
    })}
    </div>
  )
}

export default Fourth