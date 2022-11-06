import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Featured from '../featured/Featured'
import Home from '../home/Home'
import Promo from '../promo/Promo'
import Guide from '../orderguide/Guide'
import OnProgress from '../onprogress/OnProgress'
import Header from '../header/Header'
import HeaderBack from '../header/HeaderBack'

const RouterLine = () => {
  return (
    <div>
    <Routes>
        <Route exact path="/flower-co" element={<><Header/><Home/><Featured/><Guide/><Promo/></>} />
        <Route path="/on-progress" element={<><HeaderBack/><OnProgress/></>} />
    </Routes>
    </div>
  )
}

export default RouterLine