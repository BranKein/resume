import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile_img.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김연혁',
    small: '(프노)',
  },
  contact: [
    {
      title: 'brankein13@gm.gist.ac.kr',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github',
      link: 'https://github.com/BranKein',
      icon: faGithub,
    },
    {
      title: 'Github blog',
      link: 'https://brankein.github.io',
      icon: faGithub,
    },
  ],
};

export default profile;
