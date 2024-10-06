import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/home.tsx'
import './index.css'
import { Route} from 'wouter'
import Profile from './routes/profile.tsx'
import Education from './routes/education.tsx'
import Experience from './routes/experience.tsx'
import Projects from './routes/projects.tsx'
import Blogs from './routes/blogs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Route path="/" component={Home}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/education" component={Education}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/experience" component={Experience}/>
    <Route path="/blogs" component={Blogs}/>
  </StrictMode>,
)
