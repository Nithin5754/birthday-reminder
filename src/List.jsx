import React from 'react';

const List = ({people}) => {

  if(people.length<1){
    return <p style={{fontSize:'18px',textAlign:'center'}}>no post</p>
  }

  return (
    <>
      {people.map((user)=>{
        return(
          <article className='person' key={user.id}>
            <p>{user.id}</p>
           
            <h4>{user.name}</h4>
            <img src={user.image}  />
           
          <p >age:{user.age}</p>
          </article>
        )
      })}
    </>
  );
};

export default List;
