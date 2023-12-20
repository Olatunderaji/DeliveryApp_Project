import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./TrackingInfo.css"

const TrackingInfo = () => {
  return (
    <>
     <Container className='py-4'>
        <Row className='justify-content-right'>
          <div className='bottomline'>

          </div>
        <Tabs justify variant="pills" defaultActiveKey='tab-1' className='mb-5 tabsbox' id='tabsbox'>
          <Tab eventKey="tab-1" title="All"className='tabtext' >
          
          </Tab>
          <Tab eventKey="tab-2" title="In Progress"className='tabtext'>
           
          </Tab>
          <Tab eventKey="tab-3" title="Delivered" className='tabtext'>
                   
          </Tab>
          <Tab eventKey="tab-4" title="Cancelled" className='tabtext'>
                  
          </Tab>
        </Tabs>
          
        </Row>
      </Container>

    </>
  )
}

export default TrackingInfo