import Balance from "../Balance"
import NavBar from "../NavBar"
import { Routes, Route } from "react-router-dom"
import TransactionTabBar from "./TransactionTabBar"
import "./Dashboard.css"

const Wallet = ({menulist}) => {
  return (
    <>
    <NavBar
    menulist="Wallet"
    />
    <Balance/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h4 id="transactionHistory">Transaction History</h4>

  <TransactionTabBar/>
    </>
    
  )
}

export default Wallet