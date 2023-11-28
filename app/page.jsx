import About from '@/components/About'
import Cta from '@/components/Cta'
import Hero from '@/components/Hero'
import Work from '@/components/Work'


export default function Home() {
  return (
    <main className='gap-y-5'>
     <Hero/>
     <About/>
     <Work/>
     <Cta/>
    </main>
  )
}
