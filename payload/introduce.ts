import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '백엔드, 프론트엔드, 안드로이드 앱, 인공지능까지 가능한 다재다능 풀스택 개발자입니다.',
    'Flask, Ubuntu를 이용한 웹 서버 개발을 주로 하고 있므며 React도 추가도 다루고 있습니다.',
    '- Git 사용 경험(Task별 branch 분기를 통한 프로젝트 관리)',
    '- Flask, MySQL, uwsgi, nginx를 이용한 웹서비스 배포 경험',
    '- AWS 클라우드 환경, Ubuntu 경험',
    '- React, React Native를 이용한 프론트엔드 개발 경험',
    '- Android Studio, Java 사용 경험',
    '- Keras, Tensorflow Lite를 사용한 DNN, CNN, RNN 모델 개발 경험',
    '- 인공지능 논문 리딩 스터디 진행',
    '- Selenium, BeautifulSoup, WordCloud, nltk를 이용한 웹 크롤링 및 자연어 분석 경험',
    '- Photoshop, Xd, Figma 등 디자인 툴 사용 경험',
    '이 말고도 여러 언어를 조금씩이나마 접해보았으며 새로운 언어를 습득하는 속도가 빠른 스펀지입니다 :)'
  ],
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
