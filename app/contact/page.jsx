
import Form from '@/components/Form';
import {MailIcon, HomeIcon, PhoneCall} from 'lucide-react';



const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        
       
        
          <div className='grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 lg:mb-24 gap-x-10'>
            
            <div className='hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'>
    
             </div>
             <div className='flex flex-col justify-center '>
              <div className='flex items-center gap-x-4 text-primary text-lg'>
            <span className='w-[50px] h-[2px] bg-primary'></span>
            Hello 👀
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's Work Together.</h1>
            <p className='subtitle max-w-[400px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repudiandae voluptates pariatur
               provident architecto vel magni officiis, perspiciatis nam, doloremque dolorum, molestias voluptate perferendis id. Accusamus iusto soluta fugiat! Harum.
               </p>
            </div>
            
          </div>
          
        <div className='grid lg:grid-cols-2 mb-24 lg:mb-32 gap-x-10'>

            <Form/>
            <div className='flex flex-col gap-y-4 lg:gap-y-14 lg:mb-24 text-base lg:text-lg mb-12'>
          <div className='flex items-center gap-x-8'>
            <MailIcon size={18} className='text-primary'/>
            <div>youremail@gmail.com</div>
          </div>
          <div className='flex items-center gap-x-8'>
            <HomeIcon size={18} className='text-primary'/>
            <div>???, ???, TUR</div>
          </div>
          <div className='flex items-center gap-x-8'>
            <PhoneCall size={18} className='text-primary'/>
            <div>+90 544 444 44 44</div>
          </div>
          </div>
          
          </div>
          
      </div>
    </section>
  )
}

export default Contact