import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import './Pages/Balance.css'
const Balance = () => {
  return (
    <div className='balance'>
      <div className='balancetext'>
      <p id='balancep'>Your Balance</p>
      <p className='naira'><span className='naira'><FontAwesomeIcon icon={faNairaSign}/></span>0.00</p>
      </div>
      
      <div>
      <button className='fundwallet'>Fund Wallet</button>
      </div>
      
    </div>
  )
}

export default Balance