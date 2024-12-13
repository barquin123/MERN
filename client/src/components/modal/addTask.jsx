
import propTypes from 'prop-types'
const AddTask = ({ShowModal,  ModalSave, handleCloseModal}) => {
  return (
    <>
        {
            ShowModal ? (
            <div className="modal fade fixed left-1/2 -translate-x-1/2 w-full max-w-2xl p-5 backdrop-blur-sm border rounded-sm" id="addTask">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-bold text-center text-2xl" id="addTaskLabel">Add Task</h5>
                        <button className='ModalClose absolute -top-4 -right-3 p-2 rounded-full bg-white text-gray-800 font-bold' onClick={handleCloseModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="taskName" className="form-label mb-2 block">Task Name</label>
                                <input type="text" className="form-control outline-none block w-full min-h-8 rounded-md p-2" id="taskName"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="taskDescription" className="form-label mb-2 block">Task Description</label>
                                <textarea className="form-control outline-none block w-full min-h-40 rounded-md p-2" id="taskDescription" ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="assignedTo" className="form-label mb-2 block">Assigned To</label>
                                <input type="text" className="form-control outline-none block w-full min-h-8 rounded-md p-2" id="assignedTo" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="assignedBy" className="form-label mb-2 block">Assigned By</label>
                                <input type="text" className="form-control outline-none block w-full min-h-8 rounded-md p-2" id="assignedBy"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label mb-2 block">Status</label>
                                <select className="form-select" id="status" >
                                    <option>Pending</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
        </div>
            ):(null)
        }
        
    </>
    
  )
}

AddTask.propTypes = {
  ShowModal: propTypes.bool,
  handleCloseModal: propTypes.func,
  ModalSave: propTypes.func
}
export default AddTask