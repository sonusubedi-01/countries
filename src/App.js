import './App.css';
import Nav from './component/Nav';
import Countries from './component/Countries';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState();

  function handleSearch(searchTerm){
    console.log("from app", searchTerm);
    setSearchTerm(searchTerm);

  }
  return <div className="container-fluid">
    <Nav handleSearch = {handleSearch} />
    <Countries searchTerm = {searchTerm} />
  </div>

}
export default App;
