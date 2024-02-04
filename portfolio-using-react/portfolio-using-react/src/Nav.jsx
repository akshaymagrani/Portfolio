import { NavLink } from "react-router-dom";

export default function Nav(props) {
    console.log(props.theme);
    return (
        <>
        <nav id="nav" className='fixed top-0 mix-blend-difference flex justify-between w-full z-10'>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mr-auto">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 3.75317L21.5509 20.2501H2.44922L12.0001 3.75317ZM5.05089 18.7501H18.9492L12.0001 6.74697L5.05089 18.7501Z" className="fill-[#ff004f] mr-auto" />
            </svg>
            <summary className="_no-triangle focus:border-200 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-transparent bg-gray-100 hover:bg-gray-200 focus:border focus:border-gray-100 focus:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:border-gray-400 dark:focus:bg-gray-700">
                {props.theme ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-[24px] w-[24px]" viewBox="0 0 16 16" onClick={props.handleTheme}>
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-[24px] w-[24px]" viewBox="0 0 16 16" onClick={props.handleTheme}>
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                    </svg>
                }
            </summary>
            <ul id="sidemenu">
                <NavLink 
                    to='/'
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : "pending"
                    }>Home
                </NavLink>
                <NavLink 
                    to='/about'
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : "pending"
                        }>About
                </NavLink>
                <NavLink 
                    to='/projects'
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : "pending"
                        }>Portfolio
                </NavLink>
                <NavLink 
                    to='/contactMe'
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : "pending"
                        }>Contact
                </NavLink>
                <li><a href="https://1drv.ms/w/s!AmYHJtACmlBbik6nvntNLDwePjXa?e=Num1Df" className="btn btn2" target="_blank">Download CV</a></li>
                <i className="fas fa-times"  /*onClick={closemenu()}*/></i>
            </ul>
            <i className="fas fa-bars" /* onClick={openmenu()}*/></i>
        </nav>
        </>
    )
}