import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataContext from './components/context'
import meme from './components/assets/img/cover4.jpg'
import Problem from './components/error';
import Loading from './components/loading'


function Main(){

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [getError, setGetError] = useState(null);
  const [errorStatus, getErrorStatus] = useState("");

  useEffect(() => {
    setloading(true);
    fetch('/api/words')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } 
      else {
        getErrorStatus(response.status)
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
    console.log(getError)
    return(
      <Problem img={meme} header={errorStatus} p={getError.message}/>
    )
  }

  if (loading){
    return (
      <Loading/>
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
