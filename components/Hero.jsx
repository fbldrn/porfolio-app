'use client';

import Link from 'next/link';
import {Button} from './ui/button';
import { Download, Send} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri';

import DevImg from './DevImg';
import Socials from './Socials';


const Hero = () => {
  return (
    <section className='py-12 lg:py-24 h-max lg:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className="container mx-auto">
            <div className='flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left'>
                   
                   <h1 className='text-3xl font-bold'>
                    <span className=' bg-clip-text text-primary dark:text-primary'>Hello, I'm{""}</span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        "Furkan",
                        1000,
                        "Front-End Developer",
                        2000,
                        "Software Engineer",
                        2000,
                    ]}
                    wrapper='span'
                    speed={25}
                    repeat={Infinity}
                    />
                   </h1>


                   <p className='subtitle max-w-[490px] mx-auto lg:mx-0'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veniam quas. Reiciendis similique, consequuntur,
                        sed debitis animi maxime voluptate nobis expedita omnis quidem quam reprehenderit fugiat amet. Possimus, quod necessitatibus.
                   </p>
                   <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12 '>
                    <Link href='/contact'>
                    <Button>
                        Contact me <Send className='ml-2' size={18}/>
                    </Button>
                    </Link>
                    <a target='_blank' href="./cv/CV.pdf"><Button variant='secondary' >
                        Show CV <Download className='ml-2' size={18}/>
                    </Button>
                    </a>
                    </div>
                   <Socials containerStyles='flex gap-x-6 mx-auto lg:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transistion-all'/>
                </div>
                <div className='hidden lg:flex relative '>
                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                    <DevImg 
                    containerStyles='container mx-auto mt-10 w-[500px] h-[480px] bg-no-repeat relative bg-bottom'
                    imgSrc=''
                    />
                </div>
                <div className='hidden md:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce'> 
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero