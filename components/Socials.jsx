'use client'

import { RiGithubFill, RiLinkedinFill, RiInstagramFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: 'https://www.linkedin.com/',
    name: <RiLinkedinFill/>
  },
  {
    path: 'https://github.com/',
    name: <RiGithubFill/>
  },
  {
    path: 'https://www.instagram.com/',
    name: <RiInstagramFill/>
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (<div className={`${containerStyles}`}>
    {icons.map((icon, index)=>{
      return (
      <Link href={icon.path} target="_blank">
        <div className={`${iconsStyles}`}>{icon.name}</div>
      </Link>
    );
    })}

  </div>
  );
  
}

export default Socials