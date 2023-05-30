import React from 'react'

export default function Header() {
    return (
        <div className="bg-header h-12">
            <nav className="rounded-md ml-auto mr-auto container h-full">
                <ol className="list-reset flex h-full items-center text-sm font-normal">
                    <li>
                        <a href="!#" className="text-white text-opacity-40 "
                        >Home</a>
                    </li>
                    <li>
                        <span className="mx-2 text-white">/</span>
                    </li>
                    <li className="text-white dark:text-neutral-400">Checkout</li>
                </ol>
            </nav>
        </div>
    )
}
