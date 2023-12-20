import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./TabBar.css"


const TransactionTabBar = () => {
  return (
        <>
      <Container className='py-4'>
        <Row className='justify-content-right'>
          <div className='bottomline'>

          </div>
        <Tabs justify variant="pills" defaultActiveKey='tab-1' className='mb-5 tabsbox' id='tabsbox'>
          <Tab eventKey="tab-1" title="All"className='tabtext' >
          <img src="https://shorturl.at/rsMSZ" alt="Wallet" className="wallet"/>
          <h2>You dont have any Transactions yet</h2>
          <p>Request a new shipment and the log of all your transactions would appear here.</p>

          </Tab>
          <Tab eventKey="tab-2" title="Wallet Funding"className='tabtext'>
            <img src="https://shorturl.at/rsMSZ" alt="Wallet" className="wallet"/>
          <h2>You dont have any Credit Transactions yet</h2>
          <p>Request a new shipment and the log of all your transactions would appear here.</p>
          </Tab>
          <Tab eventKey="tab-3" title="Debit" className='tabtext'>
          <img src="https://shorturl.at/rsMSZ" alt="Wallet" className="wallet"/>
          <h2>You dont have any Debit Transactions yet</h2>
          <p>Request a new shipment and the log of all your transactions would appear here.</p>          
          </Tab>
        </Tabs>
          
        </Row>
      </Container>
        </>
  )
}

export default TransactionTabBar

