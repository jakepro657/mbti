"use client"
import { carouselImg } from '@/utils/img'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}



function Banner({ }: Props) {

    const ref = useRef<HTMLDivElement | null>(null)

    const onAutoPlay = () => {
        const interval = setInterval(() => {
            ref.current?.scrollBy({
                left: ref.current.clientWidth,
                behavior: 'smooth'
            })

            if (ref.current?.scrollLeft === ref.current?.scrollWidth! - ref.current?.clientWidth!) {
                ref.current?.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                })
            }
        }, 4000)


        return () => clearInterval(interval)
    }

    useEffect(onAutoPlay, [])

    return (
        <div ref={ref} className="banner">
            {carouselImg.map((img, i) => (
                <Image src={img} key={i} alt={`carousel-${i}`} />
            ))}
        </div>
    )
}

export default Banner