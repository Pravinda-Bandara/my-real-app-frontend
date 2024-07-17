import React from 'react';
import { Menubar, MenubarMenu, MenubarSeparator, MenubarTrigger } from "./ui/menubar.tsx";
import {
    ClipboardListIcon,
    CogIcon,
    LayoutDashboard,
    MessageCircleQuestion,
    NewspaperIcon,
    ReceiptText,
    UsersIcon,
    Volume2
} from "lucide-react";

const SideMenu = () => {
    return (
        <div className="w-48 lg:w-60 h-auto bg-white flex flex-col px-2 justify-start border-r-2">
            <div className="flex flex-col items-start h-auto">
                <div className="p-4 text-xl font-bold w-full">
                    <span className="text-blue-600">my</span>RealPage
                </div>
                <MenubarSeparator className="my-2 border-gray-300" />
                <Menubar className="flex flex-col w-full h-auto border-0">
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-blue-600 hover:rounded-2xl hover:text-white">
                            <LayoutDashboard className="w-5 h-5 mr-2" />
                            Dashboard
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-blue-600 hover:rounded-2xl hover:text-white">
                            <UsersIcon className="w-5 h-5 mr-2" />
                            Leads
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-blue-600 hover:rounded-2xl hover:text-white">
                            <Volume2 className="w-5 h-5 mr-2" />
                            Marketing
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-blue-600 hover:rounded-2xl hover:text-white">
                            <ClipboardListIcon className="w-5 h-5 mr-2" />
                            Listings
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-blue-600 hover:rounded-2xl hover:text-white">
                            <ReceiptText className="w-5 h-5 mr-2" />
                            Billing
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarSeparator className="my-2 border-gray-300" />
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-blue-600 hover:rounded-2xl hover:text-white">
                            <NewspaperIcon className="w-5 h-5 mr-2" />
                            News
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className="pt-20 h-auto">
                <MenubarSeparator className="border-gray-300" />
                <Menubar className="flex flex-col w-full h-full border-0">
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-blue-600 hover:rounded-2xl hover:text-white">
                            <MessageCircleQuestion className="w-5 h-5 mr-2" />
                            Support
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-blue-600 hover:rounded-2xl hover:text-white">
                            <CogIcon className="w-5 h-5 mr-2" />
                            Settings
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    );
};

export default SideMenu;
