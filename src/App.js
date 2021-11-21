import './App.css';
import Cards from './components/cards';
import Footer from './components/footer';
import Header from './components/header';
import Table from './components/table';



function App() {
  return (
    <div className="App">
    <Header></Header>
    {/*<Table></Table>*/}
    <Cards></Cards>
    <Footer></Footer>
    </div>
  );
}

export default App;
