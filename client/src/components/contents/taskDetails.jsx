
const TaskDetails = () => {
  const assignedTo = 'John Doe'
  const taskDetailsName = 'Mao ni ang task kamatay'
  const createdAt = '2021-09-01'
  const taskDetailsLink = '/taskdetails/1'
  const assignedBy = 'Jane Doe'
  const TaskName = 'Task 1'
  return (
    <>
      <div>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Task Details</h1>
          </div>
          <div className="mt-5">
            <h1 className="text-lg font-bold">{TaskName}</h1>
            <p className="text-gray-500">{taskDetailsName}</p>
            <p>{assignedBy}</p>
            <p>{assignedTo}</p>
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskDetails