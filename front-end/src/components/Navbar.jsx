import { UserAuth } from "../context/AuthCon"

function Navbar() {
    const {signOutUser} = UserAuth();
  return (
    <div className="navbar bg-base-100 shadow-sm bg-primary text-primary-content">
        <div className="flex-1">
            <h1>Navbar</h1>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><button className="btn btn-soft btn-error" onClick={signOutUser}>Sign-Out</button></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar