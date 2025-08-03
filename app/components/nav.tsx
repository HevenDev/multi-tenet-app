"use client"
import { UserButton } from '@clerk/nextjs';
import { OrganizationSwitcher } from '@clerk/nextjs';
import * as React from 'react';

const Nav: React.FC = () => {
    return (
        <nav className=" p-4 flex items-center justify-between">
            <div className="">
                <h1 className="font-semibold text-xl">Blog Application</h1>
            </div>
            <div className="flex gap-4 items-center justify-center">
                <OrganizationSwitcher />
                <UserButton /> 
                </div>
        </nav>
    )
}

export default Nav;