import Container from 'react-bootstrap/Container';
import data from '../data.json'

const ViewJob = () => {
    const companyEl = document.getElementsByClassName('.company')
    
    fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(job =>{
            companyEl.insertInnerHTML('',`<h4>${job.company}</h4>`);
        }) 
    })

    // 
  return (
    <div>
        <Container>
            <> 
                 <div className='companyinfo' >
                    <div className='viewjoblogocontainer' style={{background:job.logoBackground}}>
                        <img className='logo' src={job.logo} alt="" />
                    </div>
                    <div className='viewjobcompanyname'>
                        <h4 className='company'>{job.company}</h4>
                        <p>{job.website}</p>
                    </div>
                    <div>
                        <button className='viewjobcompanysitebutton'>Company site</button>
                    </div>
                 </div>
            </>
        </Container>
    </div>
  )
}

export default ViewJob