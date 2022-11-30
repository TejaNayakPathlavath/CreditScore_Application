
import Navbar from './components/Navbar';
import './App.css';
import CreditScore from './components/CreditScore';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import button from'../src/components/Home';
// import CreditScoreList from './components/CreditScoreList';
import CreditScoreRecordList from './components/CreditScoreList';
import Update from './components/Update';
import About from './components/About';
// import CrsButton from'../src/components/CreditScore'
// import YourScore from './components/YourScore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/CreditScore' element={<CreditScore/>}/>
      <Route path='/CreditScore' element={button}/>
      <Route path='/CreditScoreRecordList' element={<CreditScoreRecordList/>}/>
      <Route path="/edit/:id" element={<Update/>}/>
      <Route path="/About" element={<About/>}/>
      {/* <Route path='/YourScore' element={<YourScore/>}/>
      <Route path='/YourScore' element={CrsButton}/> */}
      
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
