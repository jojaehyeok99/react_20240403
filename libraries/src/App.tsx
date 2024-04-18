import React from 'react';
import './App.css';
import ZustandLibrary from 'src/zustand/ZustandLibrary';
import { Route, Routes } from 'react-router';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';
import Layout from './react-router/Layout';
import AxiosLibrary from './axios/AxiosLibrary';

function App() {
  return (
  <Routes>
    {/* <Route index element={<ReactRouterLibrary />} /> 
    <Route path='/page1' element={<ReactRouterPage1 />} />
    <Route path='/page2' element={<ReactRouterPage2 />} />
    <Route path='/zustand' element={<ZustandLibrary />} /> */}
    <Route path='/router' element={<Layout />}>
      <Route index element={<ReactRouterLibrary />} />
      {/* 현재 path의 URL을 path='/router'로 설정했을때 path='/page1' '/' 빼기 */}
      <Route path='page1/:value' element={<ReactRouterPage1 />} />
      <Route path='page2' element={<ReactRouterPage2 />} />
    </Route>
    <Route path='/zustand' element={<ZustandLibrary />} />
    <Route path='/axios' element={<AxiosLibrary />} />
    {/* 사용자가 잘못된 URL에 접속 시 오류 전송 */}
    <Route path='*' element={<h3>404 Error</h3>}/> 
  </Routes>
);
}

export default App;
