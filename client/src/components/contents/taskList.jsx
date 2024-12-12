import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TaskList = ({assignedTo, taskDetailsName, status, createdAt, taskDetailsLink}) => {
  return (
    <tbody>
                <tr>
                    <td>{assignedTo}</td>
                    <td><Link className='w-full block' to={taskDetailsLink}>{taskDetailsName}</Link></td>
                    <td>{status}</td>
                    <td>{createdAt}</td>
                </tr>
            </tbody>
  )
}
TaskList.propTypes = {
  assignedTo: propTypes.string,
  taskDetailsName: propTypes.string,
  status: propTypes.string,
  createdAt: propTypes.string,
  taskDetailsLink: propTypes.string,
}


export default TaskList