import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {detailsOfProject} = props
  return (
    <div className="this-is-project-card">
      <div>
        <img src={detailsOfProject.imageUrl} alt="project" />
        <h1>{detailsOfProject.projectTitle}</h1>
        <p>
          <AiFillCalendar />
          {detailsOfProject.duration}
        </p>
        <p>{detailsOfProject.description}</p>
        <a href={detailsOfProject.projectUrl}>Visit</a>
      </div>
    </div>
  )
}
export default ProjectTimeLineCard
