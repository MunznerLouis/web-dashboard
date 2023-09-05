import React from 'react';
import './Footer.css';
import GithubIcon from './github.svg';
import LinkedinIcon from './linkedin.svg';

const footer =()=>{
    return(
<footer>
<div class="footer">
<div class="row">
<a href="https://github.com/MunznerLouis"><img src ={GithubIcon}  alt="Github"    style={{ height: 50, width: 50,padding: '10px' }}/></a> 
<a href="https://www.linkedin.com/in/louis-munzner/"><img src={LinkedinIcon} alt="Linkedin" style={{ height: 50, width: 50, padding: '10px' }} /></a> 


</div>

<div class="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="/services">Our Services</a></li>
<li><a href="/privacy-policy">Privacy Policy</a></li>
<li><a href="/terms-of-services">Terms & Services</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div class="row">
Website designed and owned by : Louis Münzner  
</div>
</div>
</footer>
    )
}

export default footer;