import Image from 'next/image';
import './devimg.css'

const DevImg = ({containerStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className='profile-picture' fill priority alt=''/>
    </div>
  )
}

export default DevImg