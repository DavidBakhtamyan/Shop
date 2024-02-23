import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logOut } from "../../store/slices/usersSlice/usersSlice"

const DropdownUser = () => {
    const dispatch = useDispatch()
    return (
        <div className="Dropdown DropdownUser">
            <ul>
                <li onClick={() => dispatch(logOut())}><Link to={'/'}>Logout</Link></li>
                <li><Link to={'/reg'}>Register</Link></li>
            </ul>
        </div>
        )
}

export default DropdownUser