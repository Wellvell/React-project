import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataContext from './components/context'

function Main(){

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [getError, setGetError] = useState(null);

  useEffect(() => {
    setloading(true);
    fetch('/api/words')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } 
      else {
       throw new Error('Something went wrong ...');
      }})
    .then((response) => {
      setData(response)
      setloading(false)})
    .catch(error => {
      setGetError(error);
      setloading(false);
    });
  },[])

  if (getError){
    return(
      <p>{getError.message}</p>
    )
  }

  if (loading){
    return (
      <p>Loading....</p>
    )
  }
  else {
    return(
      <React.StrictMode>
      <DataContext.Provider value={{data, setData}}>
        <App />
      </DataContext.Provider>
    </React.StrictMode>)
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);


reportWebVitals();
