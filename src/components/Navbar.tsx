import * as React from "react";
import {BellIcon, LayoutDashboard} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger} from "./ui/select.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar.tsx";
function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between p-4">
            <div className="flex items-center space-x-4 ">
                <div>
                    <span className="text-lg">Welcome, Moni Roy</span>
                    <div>
                        <a href="/dashboard" className="text-4xl font-medium font-bold flex items-center space-x-1">
                            <LayoutDashboard  className="h-6 w-6"/>
                            <span>Dashboard</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-white w-12 h-12 rounded-2xl border-2 flex items-center justify-center">
                    <BellIcon className="w-1/2 h-1/2 text-gray-500"/>
                </div>

                <div className="relative">
                    <Select>
                        <SelectTrigger className="flex h-12 items-center space-x-2 p-2 rounded-xl hover:bg-gray-100">
                            <Avatar className="rounded-xl">
                                <AvatarImage src="https://github.com/shadcn.png" alt="Moni Roy" />
                                <AvatarFallback>MR</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="font-medium">Moni Roy</span>
                                <span className="text-sm text-gray-500">Admin</span>
                            </div>
                        </SelectTrigger>
                        <SelectContent className="relative right-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 origin-top-right">
                            <SelectGroup>
                                <SelectLabel className="px-4 py-2 text-gray-700">Profile</SelectLabel>
                                <SelectItem value="logout" className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">Logout</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
