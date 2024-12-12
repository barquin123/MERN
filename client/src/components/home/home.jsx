import TaskList from '../contents/taskList'
const Home = () => {
    const assignedTo = 'John Doe'
    const taskDetailsName = 'Task 1'
    const status = 'In Progress'
    const createdAt = '2021-09-01'
    const taskDetailsLink = '/taskdetails/1'

  return (
    <>
        <div className='p-5'>
            <table className='w-full [&_tr]:border [&_th]:border-x [&_td]:border-x [&_td]:p-2'>
                <thead>
                    <tr>
                        <th>Assigned To</th>
                        <th>Task Details</th>
                        <th>Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <TaskList assignedTo = {assignedTo} taskDetailsLink={taskDetailsLink} taskDetailsName={taskDetailsName} status={status} createdAt={createdAt}/>
            </table>
        </div>
    </>
  )
}

export default Home