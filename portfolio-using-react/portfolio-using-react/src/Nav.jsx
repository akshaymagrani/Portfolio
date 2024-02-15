import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
    console.log(props.theme);
    const [sideMenuState, changeSideMenuState] = useState(false);
    function openmenu() {
        changeSideMenuState(sideMenuState => !sideMenuState);
    }

    return (
        <>
            <nav id="nav" className={`fixed top-0 w-full z-10 ${props.theme ? 'theme__light': 'theme__dark'} dark shadow dark:shadow`}>
                <div className="flex justify-between container items-center">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mr-auto">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 3.75317L21.5509 20.2501H2.44922L12.0001 3.75317ZM5.05089 18.7501H18.9492L12.0001 6.74697L5.05089 18.7501Z" className="fill-[#ff004f] mr-auto" />
                </svg>
                <summary className="_no-triangle focus:border-200 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-transparent focus:border">
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
                
                <ul id="sidemenu" className={`${sideMenuState ? 'open': 'close'}`}>
                    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={openmenu} className={`w-10 h-10 times m-3 hover:shadow rounded border-slate-300`}>
                        <title>times</title>
                        <path d="M17.062 16l9.37-9.37c0.136-0.136 0.219-0.323 0.219-0.53 0-0.415-0.336-0.751-0.751-0.751-0.208 0-0.395 0.084-0.531 0.22v0l-9.369 9.369-9.37-9.369c-0.135-0.131-0.319-0.212-0.522-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.387 0.212 0.522l9.368 9.369-9.369 9.369c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.394-0.084 0.53-0.219v0l9.37-9.37 9.369 9.37c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0z"></path>
                    </svg>
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
                    <li>
                        <a href="https://1drv.ms/w/s!AmYHJtACmlBbik6nvntNLDwePjXa?e=Num1Df" className={`${props.theme ? 'border-black text-black' : 'dark:border-white dark:text-white'} border p-3 rounded`} target="_blank">Download CV
                        </a>
                    </li>
                </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" onClick={openmenu} className="m-3 w-10 h-10 hamburger rounded hover:border-spacing-3 hover:border-slate-300">
                    <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
                </svg>
                </div>
            </nav>
        </>
    )
}