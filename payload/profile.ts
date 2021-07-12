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
    small: '(Yeonhyuk Kim)',
  },
  contact: [
    {
      title: 'brankein13@gm.gist.ac.kr',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '웹에 공개된 이력서에는 전화번호를 기재하지 않습니다.',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github',
      link: 'https://github.com/BranKein',
      icon: faGithub,
    },
  ],
};

export default profile;
