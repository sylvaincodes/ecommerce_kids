import React from 'react'

const SectionTitle = ({titleText,subtitleText,subtitleColorClass}) => {
  return (
    <div className='section-title-area text-center mb-30'>
        <span className='divider left'></span>
        <h2>{titleText}</h2>
            <p className={subtitleColorClass ? subtitleColorClass : ""}>
            {subtitleText}
        <span className='divider right'></span>
      </p>
    </div>
  )
}

export default SectionTitle