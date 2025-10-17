import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_container'>
        <div className='footer_icons'>
          <InstagramIcon />
          <FacebookOutlinedIcon />
          <YouTubeIcon />
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio and Subtitles</li>
              <li>Audio Description</li>
              <li>Help Center</li>
              <li>Gift Cards</li>
              <li>Media Center</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </ul>
            </div>
            <div>
              <ul>
                <li>Netflix Originals</li>
                <li>Contact Us</li>
                <li>Speed Test</li>
                <li>Legal Notices</li>
                <li>Only on Netflix</li>

              </ul>
            </div>
           <div>
            <button className='footer_button'>Service Code</button>
            
           </div>
            <div className='footer_copyright'>
              <p>© 1997-2024 Netflix, Inc.</p>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default Footer
