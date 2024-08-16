import React from 'react'

type Props = {
    children?: React.ReactNode
}

function Background({ children }: Props) {
    return (
        <div className='background'>{children}</div>
    )
}

export default Background