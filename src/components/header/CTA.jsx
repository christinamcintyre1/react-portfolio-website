import React from 'react'
import CV from '../../assets/CV.pdf'
import { MdOutlineMailOutline } from 'react-icons/md'
import { GrDocumentDownload } from 'react-icons/gr'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn btn-primary'><GrDocumentDownload className='cta-icon'/> CV</a>
        <a href='#contact' className='btn btn-primary'><MdOutlineMailOutline className='cta-icon'/>EMAIL</a>
    </div>
  )
}

export default CTA