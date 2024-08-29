import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import data from '../data.json'
import Card from 'react-bootstrap/Card';



const JobListings = () => {
  const recentJobs =data.slice(0, 12)
  return (
    <div>
       
<Container fluid>
<Row>
    <>{recentJobs.map((job)=>(
        <Col className='' sm={4} key={job.id} >
            <Card className='mt-5'>
                    <Card.Body >
                      <div className='joblogocontainer' style={{background:job.logoBackground}}>
                      <img className='joblogo' src={job.logo} alt="" />
                      </div>
                        
                        <span className='text-gray-600 my-2 '>{job.postedAt}</span>
                        <span> . </span>
                        <span className='text-gray-600 my-2'>{job.contract}</span>
                        <h3 className='text-xl font-bold'>{job.position}</h3>
                        <div className='mb-1'> {job.company}</div>
                        <div className='mb-1' style={{color:'#939BF4'}}> {job.location}</div> 
                </Card.Body>
            </Card> 
        </Col>
))}</>  
</Row> 
<div className='loadmorebuttoncontainer'>
<button className='loadmorebutton'> Load more</button>
</div>

    </Container>
        
    </div>
  )
}

export default JobListings