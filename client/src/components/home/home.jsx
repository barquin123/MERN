import { useEffect, useState } from 'react';
import TaskList from '../contents/taskList'
import AddTask from '../modal/addTask';
const Home = () => {
    const [admin, setAdmin] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setAdmin(true);
    },[admin])
    const assignedTo = 'John Doe'
    const taskDetailsName = 'Task 1'
    const createdAt = '2021-09-01'
    const taskDetailsLink = '/taskdetails/1'
    const assignedBy = 'Jane Doe'
    const TaskName = 'Task 1'

    const handleSelectStatus = (selectedStatus) =>{
        console.log(selectedStatus);
    }

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () =>{
        setShowModal(false);
    }

  return (
    <>
        <AddTask ShowModal={showModal} handleCloseModal={handleCloseModal}/>
        { admin ? (
            <div className='p-5 pb-0'>
                <button className='modalBtn' onClick={handleShowModal}>Add Task</button>
            </div>
        ):(null)}
        <div className='p-5'>
            <table className='w-full [&_tr]:border [&_th]:border-x [&_td]:border-x [&_td]:p-2'>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Assigned By</th>
                        <th>Assigned To</th>
                        <th>Task Details</th>
                        <th>Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <TaskList TaskName={TaskName} assignedBy={assignedBy} assignedTo = {assignedTo} taskDetailsLink={taskDetailsLink} taskDetailsName={taskDetailsName} createdAt={createdAt} onStatusChange={handleSelectStatus}/>
            </table>
        </div>
    </>
  )
}

export default Home