import React from 'react'
import CV from '../../assets/CV.pdf'
import { MdOutlineMailOutline } from 'react-icons/md'
import {AiOutlineCloudDownload} from 'react-icons/ai'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn btn-primary'><AiOutlineCloudDownload className='cta-icon'/>
        <h5>CV</h5></a>

        <a href='#contact' className='btn btn-primary'><MdOutlineMailOutline className='cta-icon'/>
        <h5>EMAIL</h5></a>
    </div>
  )
}

export default CTA