// importing svg icons
// import leetCodeSvg from "../Svgs/leetcode-svgrepo-com.svg";
// import GitHubSvg from "../Svgs/github-142-svgrepo-com.svg";
// import LinkedinSvg from "../Svgs/linkedin-svgrepo-com.svg";


const INFO = {
  name: 'aadil42',
  email: 'adilkelawala@gmail.com',
  summary: 'Software Engineer',
  profession: 'Software Engineer',
  resume: '../../public/Documents/Resume.pdf'
}

const SKILLS = {
  client: [
    '../../public/Images/Skills/Client/html.png',
    '../../public/Images/Skills/Client/css.png',
    '../../public/Images/Skills/Client/react.png',
    '../../public/Images/Skills/Client/javascript.png'
  ],
  cms: [
    "../../public/Images/Skills/CMS/shopify.png",
    "../../public/Images/Skills/CMS/wordpress.png"
  ],
  tools: [
    "../../public/Images/Skills/Tools/git.png",
    "../../public/Images/Skills/Tools/github.png",
    "../../public/Images/Skills/Tools/linux.png"
  ]
}

const PHOTOGRAPHY = [{
  content: '',
  path: '../../public/Images/Photos/01.jpg',
  color: 'white-text dark-outline',
  placement: 'left'
}, {
  content: '',
  path: '../../public/Images/Photos/02.jpg',
  color: 'white-text dark-outline',
  placement: 'left'
}, {
  content: '',
  path: '../../public/Images/Photos/03.jpg',
  color: 'white-text dark-outline',
  placement: 'left'
}, {
  content: '',
  path: '../../public/Images/Photos/04.jpg',
  color: 'green-text-color dark-outline',
  placement: 'left'
}]

const CONTACT = [{
  media: 'Linkedin',
  path: 'https://www.linkedin.com/in/aadil-k-525717199/',
  icon: 'fab fa-linkedin-in'
}, {
  media: 'Github',
  path: 'https://github.com/aadil42',
  icon: 'fab fa-github'
}, {
  // media: 'LeetCode',
  // path: 'https://leetcode.com/aadil42/',
  // icon: 'cib-leetcode'
}]


// const SVGIcons = [
//   {
//     media: 'Linkedin',
//     path: 'https://www.linkedin.com/in/aadil-k-525717199/',
//     icon: leetCodeSvg
//   },
//   {
//     media: 'Github',
//     path: 'https://github.com/aadil42',
//     icon: GitHubSvg
//   },
//   {
//     media: 'LeetCode',
//     path: 'https://leetcode.com/aadil42/',
//     icon: LinkedinSvg
//   }
// ]

export {
  INFO,
  SKILLS,
  PHOTOGRAPHY,
  CONTACT,
}
