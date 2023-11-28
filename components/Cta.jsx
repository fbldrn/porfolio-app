import { Button } from "./ui/button";
import Link from 'next/link';




const Cta = () => {
  return (
    <section className="py-24 bg-accent/40 dark:bg-accent/40">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8">How can i help you ?
                </h2>
                <Link href='/contact'>
                    <Button>Contact me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta