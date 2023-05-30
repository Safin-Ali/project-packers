import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import validNavLink from '../Utils/nav-link-active';

export default function Header() {

    const { pathname } = useLocation();

    return (
        <div className="bg-header h-12">
            <nav className="rounded-md ml-auto mr-auto container h-full">
                <ul className="flex h-full items-center text-sm font-normal">
                    <li
                        className={validNavLink(pathname, `/`)}
                    >
                        <Link
                            to={`/`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <span className="mx-2 text-white">/</span>
                    </li>
                    <li
                        className={validNavLink(pathname, `/checkout`)}>
                        <Link
                            to={`/checkout`}
                        >
                            Chekcout
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}