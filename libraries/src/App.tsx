import React from 'react';
import './App.css';
import ZustandLibrary from 'src/zustand/ZustandLibrary';
import { Route, Routes } from 'react-router';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';

function App() {
  return (
  <Routes>
    {/* <Route index element={<ReactRouterLibrary />} /> 
    <Route path='/page1' element={<ReactRouterPage1 />} />
    <Route path='/page2' element={<ReactRouterPage2 />} />
    <Route path='/zustand' element={<ZustandLibrary />} /> */}
    <Route path='/router' >
      <Route index element={<ReactRouterLibrary />} />
      {/* 현재 path의 URL을 path='/router'로 설정했을때 path='/page1' '/' 빼기 */}
      <Route path='page1' element={<ReactRouterPage1 />} />
      <Route path='page2' element={<ReactRouterPage2 />} />
    </Route>
    <Route path='/zustand' element={<ZustandLibrary />} />
  </Routes>
);
}

export default App;
