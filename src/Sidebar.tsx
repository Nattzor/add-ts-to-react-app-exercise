import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';


const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                { showMenu ? <CgClose/> : <FaBars/> }
            </div>
            {showMenu && <ul className="menu">
                <li><Link to="SVT 1">SVT 1</Link></li>
                <li><Link to="SVT 2">SVT 2</Link></li>
                <li><Link to="SVT Barn">SVT Barn</Link></li>
                <li><Link to="Kunskapskanalen">Kunskapskanalen</Link></li>
                <li><Link to="SVT 24">SVT 24</Link></li>

            </ul>}

        </>
    )
}

export default Sidebar;