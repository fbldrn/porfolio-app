'use client';
import Link from 'next/link';
import {Button} from './ui/button';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';


import ProjectCard from '@/components/ProjectCard';


const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'X Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veniam quas. Reiciendis similique, consequuntur',
        link: '/',
        github: '/'

    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Y Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veniam quas. Reiciendis similique, consequuntur',
        link: '/',
        github: '/'

    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Z Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veniam quas. Reiciendis similique, consequuntur',
        link: '/',
        github: '/'

    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'F Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veniam quas. Reiciendis similique, consequuntur',
        link: '/',
        github: '/'

    },
    {
        image: '/work/4.png',
        category: 'UI',
        name: 'B Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veniam quas. Reiciendis similique, consequuntur',
        link: '/',
        github: '/'

    },
];

const Work = () => {
  return (
    <section className='relative mb-12 lg:mb-48'>
        <div className="container mx-auto  lg:flex lg:justify-between">
            <div className='relative max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:h-[400px] flex flex-col justify-center items-center lg:items-start'>
                <h2 className='section-title mb-4'>Latest Projects</h2>
                <p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro similique totam temporibus enim quisquam cum, sequi rem velit ad numquam vero consequatur nisi dolores culpa molestiae voluptatum. Tempora, illum quam!</p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>
            <div className='flex-1 lg:max-w-[660px] lg:relative'>
                <Swiper className='h-[600px]' slidesPerView={1} 
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{clickable:true}}
                >
                    {projectData.slice(0,4).map((project, index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard className='' project={project}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work