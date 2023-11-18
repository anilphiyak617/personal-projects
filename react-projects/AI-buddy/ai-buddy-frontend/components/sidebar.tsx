'use client'
import { cn } from '@/lib/utils';
import { Home, LucideIcon, Plus, Router, Settings } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'


export type routeTypes = {
    icon: LucideIcon;
    href: string;
    label: string;
    protected: boolean;
} 

const TabLink = ({ route, pathname }: { route: routeTypes, pathname: string }) => {

    const router = useRouter();
    const navigateHandler = (URL: string, pro: boolean) =>{ 
        // TODO: check if the route is protected
        router.push(URL)
    }

    return (<div
        onClick={() => {navigateHandler(route.href,route.protected)}}
        className={cn(
        "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition ",
        pathname === route.href && "bg-primary/10 text-primary",
    )}>

        <div className="flex flex-col gap-y-2 items-center flex-1 justify-center">
            <route.icon className="h-5 w-5" />
            {route.label}
        </div>

    </div>)
}

function Sidebar() {

    // hooks
    const  pathname = usePathname()


    const routes = [
        {
            icon: Home,
            href: '/',
            label: "Home",
            protected: false,
        },
        {
            icon: Plus,
            href: '/companion/new',
            label: "Create",
            protected: true,
        },
        {
            icon: Settings,
            href: '/settings',
            label: "Settings",
            protected: false,
        },
    ];

    

    return (
        <div className='space-y-4 flex flex-col h-full text-primary bg-secondary'>
            <div className='p-3 flex flex-1 justify-center'>
                {/*  side-nav links */}
                <div className='space-y-2'>
                    {routes.map((route) => (<TabLink route={route} pathname={pathname} key={route.href}/>))}
                </div>
            </div>
        </div>
    )
}


export default Sidebar