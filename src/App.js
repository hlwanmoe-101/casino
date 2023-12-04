import React from "react";
import { useEffect, useState } from 'react';
import TopPage from './pages/TopPage';
import NewPage from './pages/NewPage';
import SlotPage from './pages/SlotPage';
import JackpotsPage from './pages/JackpotsPage';
import LivePage from './pages/LivePage';
import BlackJetPage from './pages/BlackjackPage';
import RoulettePage from './pages/RoulettePage';
import TablePage from './pages/TablePage';
import PockerPage from './pages/PockerPage';
import OtherPage from './pages/OtherPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  const[game,setGame]=useState([])
  const[jackpots,setJackpot]=useState([])

  useEffect(()=>{
    fetch("https://stage.whgstage.com/front-end-test/jackpots.php")
    .then((response)=>response.json())
    .then(json=>{
        setJackpot(json)
    });
    },[])
  useEffect(()=>{
    fetch("https://stage.whgstage.com/front-end-test/games.php")
    .then((response)=>response.json())
    .then(json=>{
      setGame(json)  
    })
  },[])

  const combinedData = {
    game: game,
    jackpots: jackpots,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage data={combinedData}/>}></Route>
        <Route path="/new" element={<NewPage data={combinedData}/>}></Route>
        <Route path="/slot" element={<SlotPage data={combinedData}/>}></Route>
        <Route path="/jackpots" element={<JackpotsPage data={combinedData}/>}></Route>
        <Route path="/live" element={<LivePage data={combinedData}/>}></Route>
        <Route path="/blackjack" element={<BlackJetPage data={combinedData}/>}></Route>
        <Route path="/roulette" element={<RoulettePage data={combinedData}/>}></Route>
        <Route path="/table" element={<TablePage data={combinedData}/>}></Route>
        <Route path="/pocker" element={<PockerPage data={combinedData}/>}></Route>
        <Route path="/other" element={<OtherPage data={combinedData}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
