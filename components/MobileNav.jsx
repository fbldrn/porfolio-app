import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials'





const MobileNav = () => {
  return (
  <Sheet>
    <SheetTrigger asChild>
      <AlignJustify className='cursor-pointer'></AlignJustify>
    </SheetTrigger>
    <SheetContent>
      <div className="flex flex-col items-center justify-between h-full py-8 text-2xl">
        <div className="flex flex-col items-center gap-y-6">
          <Nav containerStyles='flex flex-col items-center gap-y-6'/>
        </div>
        <Socials containerStyles='flex gap-x-4' iconsStyles='text-3xl'/>
      </div>
    </SheetContent>
  </Sheet>
  )
}

export default MobileNav