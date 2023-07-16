import React from 'react'
import { useEffect ,useState} from 'react'

function First() {

    const[users,setUsers] = useState([])

     const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users/status') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            users: [
              { name: 'Raju', status: 'Online' },
              { name: 'Pankaj', status: 'Offline' },
              { name: 'Sakshi', status: 'Offline' },
              { name: 'Kishore', status: 'Offline' },
            ],
          },
         
        })
      } else {
        reject({
          status: 404,
          message: 'No users Found',
        })
      }
    }, 2000)
  })
}




  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fakeFetch('https://example.com/api/users/status');
      const { data } = response;
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
   

    fetchUsers();
  }, [ ]);

  
  return (
    <div>
{users.map((x)=>{
return(
    <div>
        <div style={x.status === "Online" ?{color:"green"} : {color:"red"}}>{x.name}</div>
    </div>
)
})}
    </div>
  )
}

export default First