import React from 'react'

const Footer = (promp) => {
  return (
    <footer>
      <p className='footer__Text'>{promp.madeby}<br/>Francisco Cavelli<br/><a href="https://github.com/Franciscocavelli" target='_blank'><i class="fa-brands fa-github"></i></a></p>
      
    </footer>
  )
}

export default Footer