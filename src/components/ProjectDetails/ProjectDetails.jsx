import React from 'react'
import { Charts } from '../Charts/Charts'
import { PieChart } from '../Pie/Pie'
import TeamMood from '../TeamMood/TeamMood'
import ProjectDetailCard from './ProjectDetailCard'



const projectDetailsData = [{
    label : "Total Projects",
    count : 5,
    icon : 'dataset',
    id : 1
},{
    label : "Completed",
    count : 5,
    icon:'task_alt',
    id : 2
},{
    label : "Ongoing",
    count : 5,
    icon:'autorenew',
    id : 3
},{
    label : "Delayed",
    count : 5,
    icon:"warning",
    id : 4
},{
    label : "Employees",
    count : 5,
    icon:"group",
    id : 5
}]
function ProjectDetails() {
  return (
    <div className='flex flex-row justify-evenly'>
        <div className='flex flex-col'>
            <ProjectDetailCard details = {projectDetailsData}/>
            <div className="flex border p-8 mt-8">
                <Charts/>
                <PieChart/>
            </div>
        </div>
        <TeamMood/>
    
    </div>
  )
}

export default ProjectDetails