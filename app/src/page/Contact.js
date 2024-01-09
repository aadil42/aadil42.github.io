import React, { Component } from 'react'

import ReactGA from 'react-ga'
import { Animated } from 'react-animated-css'

import { CONTACT, INFO } from '../constant'
const { resume } = INFO
const { email } = INFO

const handleClick = (label) => ReactGA.event({
  category: 'Social',
  action: 'Click',
  label
})

const Divider = () =>
  <Animated animationInDelay={ 2000 } animationIn="fadeIn" animationInDuration={ 1000 }>
    <span className="divider center"></span>
  </Animated>

const Resume = () =>
  <Animated animationInDelay={ 1000 } animationIn="fadeInDown" animationInDuration={ 1500 }>
    <h4><a className="white-text" href={ resume } target="_blank" onClick={ handleClick.bind(null, 'Resume') }>Resume</a></h4>
  </Animated>

const Email = () =>
  <Animated animationInDelay={ 500 } animationIn="bounceIn" animationOut="rotateOutUpLeft" animationInDuration={ 1500 }>
    <a href={ `mailto:${email}` } onClick={ handleClick.bind(null, 'Email') }>
      <span className="fa-stack fa-3x">
        <i className="white-text fa-stack-2x fas fa-comment"></i>
        <small className="fa-stack-1x fa-stack-text">
          <span className="green-text-color">Email</span>
        </small>
      </span>
    </a>
  </Animated>

const Social = () =>
  <Animated animationInDelay={ 1000 } animationIn="fadeInUp" animationInDuration={ 1500 }>
    {/* <ul>{ CONTACT.map(({ media, path, icon }, index) =>
    {
      return (<a key={ index } className="white-text" href={ path } target="_blank" onClick={ handleClick.bind(null, media) }>
                  <i className={`icon ${icon}  fa-2x`}></i>
                </a>);
    }
    
    )}
    </ul> */}
    <ul>
      <a key={1} className="white-text" href="https://www.linkedin.com/in/aadil-k-525717199/" target="_blank" onClick={ handleClick.bind(null, "Linkedin") }>
      {/* <?xml version="1.0" encoding="utf-8"?> */}
      <svg width="60px" height="60px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path width="50px" height="50px" fill="#fff" d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"/>
      </svg>
      </a>
      <a key={2} className="white-text" href="https://github.com/aadil42" target="_blank" onClick={ handleClick.bind(null, "Github") }>
      <svg fill="#fff" width="60px" height="60px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30">    
      <path width="50px" height="50px" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
      </svg>
      </a>
      <a key={3} className="white-text" href="https://leetcode.com/aadil42/" target="_blank" onClick={ handleClick.bind(null, "LeetCode") }>
      <svg fill="#fff" width="60px" height="60px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        <path width="50px" height="50px" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
      </a>
    </ul>
  </Animated>

const Footer = () =>
  <Animated animationInDelay={ 2000 } animationIn="fadeIn" animationInDuration={ 1000 }>
    <small>
      <span className="white-text dark-outline">{ new Date().getFullYear() }</span>
            &nbsp;
      <a className="green-text-color" href="" onClick={ handleClick.bind(null, 'Home') }>A2Z</a>
    </small>
  </Animated>

class Contact extends Component {
    state = {
      display: 'none'
    };

    static getDerivedStateFromProps (props, state) {
      return (props?.state?.destination?.index === 2 && state?.display === 'none')
        ? { display: 'block' }
        : null
    }

    render () {
      return (
        <div id="contact" className="section">
          <div style={ this.state }>
            <Resume/>
            <Divider/>
            <Email/>
            <Divider/>
            <Social/>
            <Footer/>
          </div>
        </div>
      )
    }
}

export default Contact
