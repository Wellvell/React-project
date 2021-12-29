import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { inject, observer } from 'mobx-react'
import { useEffect } from 'react';




const App = inject(['wordsStore'])(observer(({ wordsStore }) => {
  useEffect(() => {
    wordsStore.getWords() 
  }, [])

  return (
    <div className="App">
    <Header></Header>
    <Footer></Footer>
    </div>
  );

}))

export default App;
