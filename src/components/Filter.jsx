import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import search from '../assets/images/desktop/icon-search.svg';
import location from '../assets/images/desktop/icon-location.svg';

const Filter = () => {
  return (
    <div>
       <Container>
      <Row className='filter'>
        <Col sm={4} className='filtercolumn'>
        <img className='' src={search} alt="" />
        <input className='companyinput' type='text' placeholder='Filter by title, companies or expertise...'/>
        </Col>
        <Col className='filtercolumn'>
        <img className='' src={location} alt="" />
        <input className='locationinput' type='text' placeholder='Filter by location...' />
        </Col>
        <Col>
        <input className='fulltimecheckbox' type="checkbox" />
        <label >Full time only</label>
        <button className='searchbutton'>Search</button>
        </Col>
      </Row>     
      </Container>
    </div>
  )
}

export default Filter