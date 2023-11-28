'use client'

import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { User, MailIcon , SendIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  return ( <form className='flex flex-col gap-y-4 mb-10'>
    {}
    <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Name'/>
        <User className='absolute right-6' size={20}/>
    </div>
    <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='Email'/>
        <MailIcon className='absolute right-6' size={20}/>
    </div>
    <div className='relative flex items-center'>
        <Textarea type='text' id='text' placeholder='What do you want to say?'/>
        <MessageSquare className='absolute top-3 right-6' size={20}/>
    </div>
    <Button className='flex items-center gap-x-4 max-w-[166px]'>
        Send 
        <SendIcon size={20}/>
    </Button>
  </form>
  )
}

export default Form