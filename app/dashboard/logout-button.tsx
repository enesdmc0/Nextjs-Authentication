"use client"
import React from 'react';
import { LogOutIcon } from '@/components/ui/icons';
import { logout } from '@/app/auth/01-auth';
const LogoutButton = () => {
    return (
        <button
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-all hover:text-gray-900"
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
