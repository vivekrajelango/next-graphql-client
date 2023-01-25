import { useQuery, gql } from '@apollo/client';
import { useRef, useEffect, useState } from 'react';
import { FunctionComponent } from 'react';

const GET_USERS = gql `
  query{
    getAllUsers{
      name, address, email, phone
    }
  }
`
interface User {
  getAllUsers:any
}

const WrapperComponent=(props:any)=>{

    const [userData, setUserData] = useState<any>([])
    const [val, setVal] = useState(20);

    useEffect(()=>{
    },[userData])

    const {loading, error, data} = useQuery(GET_USERS, {onCompleted: setUserData});
      if(loading){
        return 'loading...'
      }
      if(error){
        return error
      }

    const loadMoreItem=(e:any)=>{
      e.preventDefault();
      setVal(prev=>prev+20);
    }
    

    return(
      <>
        <div className='container'>
          <h1 className='text-center text-white'>List of Users</h1>
          <div className="row mt-5">  
            {userData.getAllUsers.map((item:any, index:any) => {
                return <div key={index} className="col-sm-4 col-xs-6">
                <div className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.address}</p>
                    </div>
                </div>
                </div>
            }).slice(0,val)}   
          </div>
          <div className='text-center my-5'>
            <a className="btn btn-primary" onClick={loadMoreItem}>Load more</a>
          </div>
        </div>
      </>
    )
}

export default WrapperComponent as FunctionComponent;

