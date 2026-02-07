"use client"
import React from 'react'
import CountUp from "react-countup"

const stats = [
    {
        num: 2,
        text: "Years of experience",
    },
    {
        num: 8,
        text: "Projects delivered",
    },
    {
        num: 2,
        text: "Certifications",
    },
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
    <div className='container mx-auto'>
        <div className='rounded-3xl bg-gradient-to-br from-accent/40 via-white/10 to-gold/40 p-[1px] max-w-[80vw] mx-auto xl:max-w-none'>
          <div className='rounded-3xl bg-primary/80 border border-white/10 px-6 py-6'>
            <div className='flex flex-wrap gap-6'>
              {stats.map((item, index) =>{
                  return(
                      <div key={index} className='flex-1 min-w-[220px] flex gap-4 items-center justify-center xl:justify-start'>
                          <CountUp 
                              end={item.num}
                              duration={5}
                              delay={2}
                              className='text-4xl xl:text-6xl font-extrabold'
                          />
                          <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                      </div>
                  )
              })}
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Stats
