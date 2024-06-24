"use client"
import React from 'react';
import { LogOutIcon } from '@/components/ui/icons';
import { logout } from '@/app/auth/01-auth';
const LogoutButton = () => {
    return (
        <button
            className="flex border items-center bg-white gap-3 rounded-lg px-3 py-2 text-sm font-medium text-black transition-all"
            onClick={async () => {
                await logout();
            }}
        >
            <LogOutIcon className="h-4 w-4"/>
            Logout
        </button>
    );
};

export default LogoutButton;
