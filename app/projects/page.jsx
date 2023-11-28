'use client';
import React, {useState} from 'react';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
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

const uniqueCategories = ['all projects',...new Set(projectData.map((item)=>item.category))]


const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category,setCategory] = useState('all projects');
  const filteredProjects = projectData.filter(project =>{
    return category === 'all projects' ? project : project.category === category;
  });
  console.log(filteredProjects)
  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
          Projects
          </h2>
          <Tabs defaultValue={category} className='mb-24 lg:mb-48'>
            <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
              {categories.map((category, index)=> {
                return (
                  <TabsTrigger onClick={()=> setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
                );
              })}
            </TabsList>
            <div className='text-lg lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {filteredProjects.map((project, index)=>{
                return <TabsContent value={category} key={index}>
                  <ProjectCard project={project}/>
                </TabsContent>
            })}</div>
          </Tabs>
      </div>
    </section>
  )
}

export default Projects