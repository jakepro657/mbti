"use client"
import React from 'react'
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineRead } from "@react-icons/all-files/ai/AiOutlineRead";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {}

const navItems = [
    { label: '컨텐츠', href: '/contents', icon: <AiOutlineRead /> },
    { label: '전체홈', href: '/', icon: <AiOutlineHome /> },
    { label: '마이홈', href: '/my', icon: <AiOutlineUser /> },
]

function Nav({ }: Props) {

    const path = usePathname()

    return (
        <nav className='nav'>
            {navItems.map((item, index) => (
                <Link href={item.href} key={index} className='nav-element' style={{ color: path === item.href ? 'tomato' : 'black' }}>
                    {item.icon}
                    <div>{item.label}</div>
                </Link>
            ))}
        </nav>
    )
}

export default Nav