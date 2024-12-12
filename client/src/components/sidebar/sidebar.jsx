import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
        <ul className="[&_li]:text-center [&_li]:p-4">
            <li><Link className="w-full block" to="/javascript:void(0)">test 1</Link></li>
            <li><Link className="w-full block" to="/javascript:void(0)">test 2</Link></li>
            <li><Link className="w-full block" to="/javascript:void(0)">test 3</Link></li>
            <li><Link className="w-full block" to="/javascript:void(0)">test 4</Link></li>
            <li><Link className="w-full block" to="/javascript:void(0)">test 5</Link></li>
            <li><Link className="w-full block" to="/javascript:void(0)">test 6</Link></li>
            <li><Link className="w-full block" to="/javascript:void(0)">test 7</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar