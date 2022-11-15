import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import BasicInfo from './components/BasicInfo/BasicInfo';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Interests from './components/Interests/Interests';
import Resume from './components/Resume/Resume';
import React,{useState} from 'react';

const BasicDetailContext=React.createContext();
const SkillContext=React.createContext();
const EducationContext=React.createContext();
const ExperienceContext=React.createContext();
const ProjectContext=React.createContext();
const InterestContext=React.createContext();
const DisplayContext=React.createContext();

function App() {
  const [basicDetails,setBasicDetails]=useState();
  const [skills,setSkills]=useState([]);
  const [education,setEducation]=useState([]);
  const [experience,setExperience]=useState([]);
  const [projects,setProjects]=useState([]);
  const [interests,setInterests]=useState([]);
  const [save,setSave]=useState(true);
  const [display,setDisplay]=useState(false);
  const [fname,setFname]=useState();
  const [lname,setLname]=useState();
  const [tagline,setTagline]=useState();
  const [contact,setContact]=useState();
  const [email,setEmail]=useState();
  const [linkedIn,setLinkedIn]=useState();
  return (
    <BasicDetailContext.Provider value={[basicDetails,setBasicDetails]}>
      <DisplayContext.Provider value={[save,setSave,display,setDisplay,fname,setFname,lname,setLname,tagline,setTagline,email,setEmail,contact,setContact,linkedIn,setLinkedIn]}>
      <SkillContext.Provider value={[skills,setSkills]}>
      <ExperienceContext.Provider value={[experience,setExperience]}>
      <EducationContext.Provider value={[education,setEducation]}>
      <ProjectContext.Provider value={[projects,setProjects]}>
      <InterestContext.Provider value={[interests,setInterests]}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/basicinfo' element={<BasicInfo/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/interests' element={<Interests/>}/>
            <Route path='/resume' element={<Resume/>}/>
          </Routes>
        </Router>
      </InterestContext.Provider>
      </ProjectContext.Provider>
      </EducationContext.Provider>
      </ExperienceContext.Provider>
      </SkillContext.Provider>
      </DisplayContext.Provider>
    </BasicDetailContext.Provider>
  );
}

export default App;
export {SkillContext};
export {BasicDetailContext};
export {DisplayContext};
export {EducationContext};
export {ExperienceContext};
export {ProjectContext};
export {InterestContext};