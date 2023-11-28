import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent ,TabsList ,TabsTrigger } from '@/components/ui/tabs';

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide-react';
import { get } from 'react-hook-form';

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Furkan',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+90 544 444 4444',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'youremail@gmail.com',
    },
    {
        icon: <Calendar size={20}/>,
        text: '19 September 1998',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Elektrical-Electronics Engineering',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Adress',
    },

];

const qualificationData=[
    {
        title: 'education',
        data:[
            {
                university: '??? High School',
                qualification: 'Bachelor of Electrical-Electronics Engineering',
                years: '2013-2017',
            },
            {
                university: '??? University',
                qualification: 'Bachelor of Electrical-Electronics Engineering',
                years: '2018-2022',
            },
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data:[
            {
                name:'HTML, CSS',
            },
            {
                name:'Front-end Development',
            },
            {
                name:'Angular, React.js, Next.js',
            },
            {
                name:'Javascript, TypeScript',
            },
            {
                name:'Tailwind CSS, Swiper',
            },
        ]
    },
    {
        title: 'tools',
        data:[
            {
                imgPath:'/about/vscode.svg',
            },
            {
                imgPath:'/about/sql.svg',
            },
            {
                imgPath:'/about/git.svg',
            },
            {
                imgPath:'/about/firebase.svg',
            },
        ]
    },
]


const About = () => {
    const getData = (arr, title) =>{
        return arr.find((item)=> item.title === title);
    };
  return (
    <section className=' lg:h-[860px] pb-12 lg:py-24'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 lg:mb-16 lg:mt-0 text-center mx-auto'>About me</h2>
            <div className='flex flex-col lg:flex-row'>
                <div className='hidden lg:flex flex-1 relative'>
                   <DevImg containerStyles='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[460px] h-[490px] relative '/>
                </div>
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none '>
                            <TabsTrigger className='w-[162px] lg:w-auto' value='personal'>
                               Personal Info
                            </TabsTrigger>
                            <TabsTrigger className='w-[162px] lg:w-auto' value='qualifications'>
                                Qualifications
                            </TabsTrigger>
                            <TabsTrigger className='w-[162px] lg:w-auto' value='skills'>
                                Skills
                            </TabsTrigger>
                        </TabsList>
                        <div className='text-lg mt-12 lg:mt-8'>
                        <TabsContent value='personal'>
                            <div className='text-center lg:text-left'>
                                <h3 className='h3 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <p className='subtitle max-w-xl mx-auto lg:mx-0'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a laborum provident delectus quisquam culpa asperiores sit architecto, ullam consequuntur error quos quasi? Eius, exercitationem. Provident repellendus repellat similique nam?
                                </p>
                                <div className='grid lg:grid-cols-2 gap-4 mb-12' >
                                    {infoData.map((item,index)=>{
                                        return <div className='flex items-center gap-x-4 mx-auto lg:mx-0' key={index}>
                                            <div className='text-primary'>{item.icon}</div>
                                            <div>{item.text}</div>
                                            </div>
                                    })}
                                </div>
                                <div className='flex flex-col gap-y'>
                                    <div className='text-primary'>Language Skills</div>
                                    <div className="border-b border-border"></div>
                                    <div>Turkish, English, German</div>
                                </div>
                               </div></TabsContent>
                        <TabsContent value='qualifications'>
                            <div>
                                <h3 className='h3 mb-8 text-center lg:text-left'>My Awesome Journey</h3>
                                <div>

                                    <div>
                                        <h4 className='flex gap-x-4 items-center text-[22px] text-primary'>
                                            <Briefcase/>
                                            <div className='capitalize font-medium'>
                                                {getData(qualificationData, 'education').title}
                                            </div>
                                        </h4>
                                    </div>


                                    <div className='flex flex-col gap-y-8'> 
                                        {getData(qualificationData,'education').data.map((item,index)=>{
                                           const {university, qualification, years } = item;
                                           return (
                                                <div className='group flex gap-x-8' key={index}>
                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                        <div className='text-base font-medium'>{years}</div>
                                                    </div>
                                                </div>
                                           );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value='skills'>
                            <div className='text-center lg:text-left'>
                                <h3 className='h3 mb-8'>Tools I Use</h3>
                                <div className='mb-16'>
                                    <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                    <div className='border-b border-border mb-4'></div>
                                    <div>
                                        {getData(skillData, 'skills').data.map((item, index)=>{
                                            const {name} = item;
                                            return (
                                                <div className='w-2/4 text-center lg:text-left mx-auto lg:mx-0' key={index}>
                                                    <div>{name}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-xl font-semibold  mb-2 lg:text-left mx-auto'>Tools</h4>
                                    <div className='border-b border-border mb-4'></div>
                                    <div className='flex gap-x-8 justify-center lg:justify-start'>
                                        {getData(skillData, 'tools').data.map((item,index)=>{
                                            const {imgPath} = item;
                                            return(
                                                <div key={index}>
                                                    <Image src={imgPath} width={48} height={48}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        </div>
                    </Tabs>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default About