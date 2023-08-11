import './App.css';

import React,{useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = ()=> {

  let pageSize = 12;
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
  
    return (
      <>
      <BrowserRouter>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
      
      <Routes>        
      <Route index path="/" element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
      <Route path="business" element={<News apiKey={apiKey} setProgress={setProgress} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
      <Route path="entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
      <Route path="health" element={<News apiKey={apiKey} setProgress={setProgress} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
      <Route path="science" element={<News apiKey={apiKey} setProgress={setProgress} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
      <Route path="sports" element={<News apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
      <Route path="technology" element={<News apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )

}
export default App;