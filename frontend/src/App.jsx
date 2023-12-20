import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Pages/Dashboard'
import My_Shipment from './Components/Pages/My_Shipment'
import Sidebar from './Components/Sidebar'
import My_Ship from './Components/Pages/My_Ship'
import Wallet from './Components/Pages/Wallet'
import Pending_Charges from './Components/Pages/Pending_Charges'
import My_Addresses from './Components/Pages/My_Addresses'
import Invite_Earn from './Components/Pages/Invite_Earn'
import Faqs from './Components/Pages/Faqs'
import Profile from './Components/Pages/Profile'
import Guides_Resources from './Components/Pages/Guides_Resources'


const App = () => {
  return (
    <>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/myshipment' element={<My_Shipment/>}/>
      <Route path='/myship' element={<My_Ship/>}/>
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/pendingcharges' element={<Pending_Charges/>}/>
      <Route path='/invite&earn' element={<Invite_Earn/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/myaddresses' element={<My_Addresses/>}/>
      <Route path='/guidesresources' element={<Guides_Resources/>}/>
    </Routes>
    </Sidebar>
    </>
  )
}

export default App
