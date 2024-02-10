import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {courseDetails} = props

  return (
    <div className="chromoContainer">
      <div className="ravi">
        <h1>{courseDetails.courseTitle}</h1>
        <p>
          <AiFillClockCircle />
          {courseDetails.duration}
        </p>
        <p>{courseDetails.description}</p>
        {courseDetails.tagsList.map(eachItem => (
          <p>{eachItem.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeLineCard
