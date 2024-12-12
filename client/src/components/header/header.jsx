import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="p-5 flex justify-between">
        <div>
            <div className="logo">
                Cream Tracker
            </div>
        </div>
        <nav>
            <div>
                <ul className="flex gap-x-2">
                    <li><Link to="/home">Home</Link></li>
                    <li>User</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header