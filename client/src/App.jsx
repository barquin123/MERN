import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import Header from './components/header/header'
import TaskDetails from './components/contents/taskDetails'

function App() {

  const routerArray = [
    {
      path: '*',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/taskdetails/*',
      element: <TaskDetails/>,
    },
  ]

  const routesElement = useRoutes(routerArray)

  return (
    <>
      <div className="mainContainer">
        <Header />
        <div className="flex justify-between w-full p-5">
          {/* <div className="sidebar max-w-xs w-full">
            <Sidebar />
          </div> */}
          <div className="content w-full m-3 backdrop-blur-sm border border-white">
            {routesElement}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
