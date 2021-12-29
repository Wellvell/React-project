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
  const [getError, setGetError] = useState("");
  const [errorStatus, getErrorStatus] = useState("");

  const handlerAddWord = (newWord) => {
    let tags = prompt("Введите тег для слова");
    let tagTest = /^[А-Яа-яЁё\s]+$/;
    if (tagTest.test(tags)) {
      newWord.tags = tags;
      const options = {
        method: 'POST',
        headers: {
          'Contept-Type': 'application/json'
        },
        body: JSON.stringify(newWord)
      };
      fetch(`/api/words/add`, options).then(response => response.json())
        .then(data => {
        });
      alert("Слово добавлено!")
      setData(data.unshift(newWord))
    }
    else {
      alert("Убедитесь, что вы вводите символы на кириллице.")
    }
  };

  const handlerInputSave = (updatedWord) => {
    if (updatedWord.tags === undefined || updatedWord.tags.length === 0) {
      let tags = prompt("Введите тег для слова");
      let tagTest = /^[А-Яа-яЁё\s]+$/;
      if (tagTest.test(tags)) {
        updatedWord.tags = tags;
      }
      else {
        alert("Убедитесь, что вы вводите символы на кириллице.")
      }
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(updatedWord)
    };
    fetch(`/api/words/${updatedWord.id}/update`, options).then(response => response.json())
      .then(data => {
        console.log(data)
      });
    alert("Слово изменено!")
    const index = data.findIndex((h) => h.id === updatedWord.id);
    let array = data;
    array[index] = updatedWord;
    setData(array);
  };


  const handlerDelete = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Contept-Type': 'application/json'
      },
    };
    fetch(`/api/words/${id}/delete`, options).then(response => response.json())
      .then(data => {
        console.log(data)
      });
    alert("Слово удалено!")
    const array = data.filter((el) => el.id !== id);
    setData(array)
  }


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
      setGetError(error.message);
      setloading(false);
    });
  },[])
  if (getError.length!==0){
    console.log(getError)
    return(
      <Problem img={meme} header={errorStatus} p={getError}/>
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
      <DataContext.Provider value={{data, handlerAddWord, handlerDelete, handlerInputSave, errorStatus, getError, loading}}>
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
