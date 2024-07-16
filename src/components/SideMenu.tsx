import React from 'react';
import {Menubar, MenubarMenu, MenubarSeparator, MenubarTrigger} from "./ui/menubar.tsx";
import {
    ClipboardListIcon,
    CogIcon,
    LayoutDashboard,
    MessageCircleQuestion,
    NewspaperIcon, ReceiptText,
    UsersIcon,
    Volume2
} from "lucide-react";

const SideMenu = () => {
    return (
        <div className="w-48 h-full bg-white  flex flex-col  justify-between content-between border-2">
            <div>
                <div className="p-4 text-xl font-bold w-full h-full">myRealPage</div>
                <MenubarSeparator className="my-2 border-gray-300" />
                <Menubar className="flex flex-col w-full h-full border-0">
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-gray-200">
                            <LayoutDashboard  className="w-5 h-5 mr-2" />
                            Dashboard
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-gray-200">
                            <UsersIcon className="w-5 h-5 mr-2" />
                            Leads
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-gray-200">
                            <Volume2 className="w-5 h-5 mr-2"/>
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
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-gray-200">
                            <ReceiptText  className="w-5 h-5 mr-2"/>
                            Billing
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-gray-200">
                            <NewspaperIcon className="w-5 h-5 mr-2" />
                            News
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div>
                <MenubarSeparator className="my-2 border-gray-300" />
                <Menubar className="flex flex-col w-full h-full border-0">
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-gray-200">
                            <MessageCircleQuestion className="w-5 h-5 mr-2"/>
                            Support
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="flex items-center w-full text-left p-4 hover:bg-gray-200">
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
