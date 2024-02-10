import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimeLineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div>
        <h1>
          MY JOURNEY OF <br /> CCBP 4.0
        </h1>

        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  courseDetails={eachItem}
                  key={eachItem.id}
                />
              )
            }
            if (eachItem.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard
                  detailsOfProject={eachItem}
                  key={eachItem.id}
                />
              )
            }
            return null // return null for other categories or handle them accordingly
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimeLineView
