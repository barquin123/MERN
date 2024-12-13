import propTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TaskList = ({assignedTo, taskDetailsName, createdAt, taskDetailsLink, assignedBy, status, onStatusChange, TaskName}) => {
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    // if(!admin){
    //   return
    // }
    setAdmin(true);
  }, [admin])

  const handleSelectStatus = (e) =>{
    const selectedStatus = e.target.value
    onStatusChange(selectedStatus)
  }
  return (
    <tbody>
                  {admin ? (
                  <tr>
                    <td>{TaskName}</td>
                    <td>{assignedBy}</td>
                    <td>{assignedTo}</td>
                    <td><Link className='w-full block' to={taskDetailsLink}>{taskDetailsName}</Link></td>
                    <td>
                      <select value = {status} onChange={handleSelectStatus}>
                      <option value="Pending">Pending</option> 
                      <option value="In Progress">In Progress</option> 
                      <option value="Completed">Completed</option> 
                      </select>
                    </td>
                    <td>{createdAt}</td>
                    </tr>
                  ):(
                    <tr>
                    <td>{assignedBy}</td>
                    <td>{assignedTo}</td>
                    <td><Link className='w-full block' to={taskDetailsLink}>{taskDetailsName}</Link></td>
                    <td>
                      <select value = {status} onChange={handleSelectStatus}>
                      <option value="Pending">Pending</option> 
                      <option value="In Progress">In Progress</option> 
                      <option value="Completed">Completed</option> 
                      </select>
                    </td>
                    <td>{createdAt}</td>
                    </tr>
                  )}
                    
               
            </tbody>
  )
}
TaskList.propTypes = {
  assignedTo: propTypes.string,
  taskDetailsName: propTypes.string,
  status: propTypes.string,
  createdAt: propTypes.string,
  taskDetailsLink: propTypes.string,
  assignedBy: propTypes.string,
  onStatusChange: propTypes.func,
  TaskName: propTypes.string,
}


export default TaskList