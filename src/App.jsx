
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import JobListings from './components/JobListings';
import ViewJob from './components/ViewJob';
import Filter from './components/Filter';


function App() {
 

  return (
    <>
      <Header/>
      <Filter/>
      <JobListings/>
      {/* <ViewJob/> */}
      

        
    </>
  )
}

export default App
