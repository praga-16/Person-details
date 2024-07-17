import React, { useState } from 'react';
import './App.css'

const UserDetails = () => {
  const [showDetails,setshowDetails ] = useState(false)
  function handletoggle(){
    (showDetails) ? setshowDetails(false) : setshowDetails(true)
  }


  return (

    <div style={styles.container}>
      <div style={styles.icon}>
        <img src="/logo.jpeg" viewBox="0 0 24 24" width="150" height="100">
        </img>
      </div>
      <div style={styles.textContainer}>
        <p style={styles.name}>Name: pragatheesvaran AB</p>
        <p style={styles.registration}>Registration No: 212221240039</p>
      </div>
      <button style={styles.button} onClick={handletoggle}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      {
        showDetails &&(
          <><p>Age: 20</p><br /><p>Department: Artificial intelligence and machine learning</p><br /></>

        )

      }

    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px', 
    borderRadius: '8px',
    width: '300px',
    margin: '0 auto'
  },
  icon: {
    marginBottom: '20px'
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  registration: {
    fontSize: '16px',
    fontWeight: 'bold'

  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default UserDetails;

