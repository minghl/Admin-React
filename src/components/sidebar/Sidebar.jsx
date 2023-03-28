import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {  DarkModeContext } from "../../context/darkModeContext.js";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">minghaoadmin </span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>
                            Dashboard
                        </span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlinedIcon className="icon" />
                            <span>
                                Users
                            </span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <Inventory2OutlinedIcon className="icon" />
                            <span>
                                Products
                            </span>
                        </li>
                    </Link>
                    <li>
                        <BorderColorOutlinedIcon className="icon" />
                        <span>
                            Orders
                        </span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>
                            Delivery
                        </span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentOutlinedIcon className="icon" />
                        <span>
                            Stats
                        </span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className="icon" />
                        <span>
                            Notifications
                        </span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>
                            System Health
                        </span>
                    </li>
                    <li>
                        <AddToQueueOutlinedIcon className="icon" />
                        <span>
                            Logs
                        </span>
                    </li>
                    <li>
                        <SettingsApplicationsOutlinedIcon className="icon" />
                        <span>
                            Settings
                        </span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>
                            Profile
                        </span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" 
                onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div className="colorOption" 
                onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    )
}
export default Sidebar;