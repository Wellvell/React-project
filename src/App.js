import './App.css';
import Cards from './components/cards';
import Footer from './components/footer';
import Header from './components/header';
import Table from './components/table';
import { useState } from 'react';



function App() {

  const [pressedTable, setPressedTable] = useState(false);
  const handleChangeTable = () => {
    setPressedTable(true);
  };
  const handleChangeCards = () => {
    setPressedTable(false);
  };

  if (pressedTable){
    return (
      <div className="App">
      <Header changeModeTable={handleChangeTable} changeModeCards={handleChangeCards}></Header>
      <Table></Table>
      <Footer></Footer>
      </div>
    );
  }
  else{
    return (
      <div className="App">
      <Header changeModeTable={handleChangeTable} changeModeCards={handleChangeCards}></Header>
      <Cards></Cards>
      <Footer></Footer>
      </div>
    );

  }

}

export default App;
