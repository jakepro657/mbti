import React from 'react'
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
type Props = {}

function TopNav({ }: Props) {
    return (
        <div className='top'>
            <div className='logo'>MY-TI</div>
            <div className='top-icon-container'>
                <AiOutlineSearch />
                <AiOutlineMenu />
            </div>
        </div>
    )
}

export default TopNav