import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='bg-secondary dark:bg-accent py-12'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-between'>
          
          <Socials containerStyles='flex gap-x-6 lg:mx-0 mb-4' iconsStyles='text-white/70 dark:text-white/70  text-[20px] hover:text-primary dark:hover:text-primary'/>
          <div className='text-muted-foreground text-center'>
            Copyright &copy; WRITEWHATYOUWANT. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer