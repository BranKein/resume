import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '반하다 서비스',
      startedAt: '2021-01',
      endedAt: '2021-01',
      where: 'Oasis hackathon team 3N, Full-Stack',
      descriptions: [
        { content: '기존의 "당근마켓" 어플의 서비스 범위를 동 단위가 아니라 "아파트 단위"로 좁히고 거래 대상을 "신선식품과 배달식품"으로 하여 새로운 타겟을 설정하고 "주민들간의 좋은 관계 형성" 및 "음식물 쓰레기 배출량 감소"를 목표로 한 거래 플랫폼 개발' },
        { content: 'Flask를 사용하여 RESTful API 제작 후 Java의 OkHttp3를 사용하여 통신하도록 개발' },
        { content: 'Xd 디자인 툴을 사용하여 디자이너와 프로그래머와의 효율적인 업무를 진행' },
      ],
      skillKeywords: ['Python', 'Flask', 'MySQL', 'Android Studio', 'OkHttp3'],
    },
    {
      title: 'GSA Infoteam GISTORY 페이지',
      startedAt: '2020-07',
      where: '학생회 산하 특별자치회 GSA Infoteam 공동작업, Back-end 작업',
      descriptions: [
        { content: '광주과학기술원 구성원이 사용할 수 있는 공개 커뮤니티' },
        { content: '보통의 커뮤니티와 같이 게시물 작성, 수정, 삭제가 가능하도록 개발' },
        { content: '교내 학사일정을 크롤링하여 메인 화면에 띄우도록 api 제작' },
      ],
      skillKeywords: ['Python', 'Flask', 'MySQL', 'Nginx'],
    },
    {
      title: 'GSA Infoteam Recruiting Management System',
      startedAt: '2021-01',
      where: 'GSA Infoteam 내 구성원 1인과의 프로젝트, Full-Stack',
      descriptions: [
        { content: '학교 내 모든 자치회, 동아리들이 사용할 수 있도록 개발한 신입 부원 모집 시스템' },
        { content: '이전에 개발된 코드의 경우 GSA Infoteam만 사용할 수 있도록 제작되어 있어 다른 자치회와 동아리가 사용하기 위해서는 별도의 관리 서버와 페이지가 필요' },
        { content: '자치회 또는 동아리별, 연도별 신입부원 모집을 하나의 프로젝트로 간주하고 프로젝트들을 추가, 삭제할 수 있는 어플리케이션 제작' },
        { content: '각 자치회 또는 동아리 관리자가 지원자를 관리하고 일괄적으로 문자를 전송할 수 있는 서비스를 제공하는 페이지 개선 및 기능 추가'},
        { content: 'recruiting 페이지를 자치회 또는 동아리가 customizing 할 수 있도록 제작' },
      ],
      skillKeywords: ['Python', 'Flask', 'MySQL', 'Nginx', 'Android Studio', 'OkHttp3', 'Http', 'Javascript', 'AJAX', 'React.js'],
    },
    {
      title: 'MJM Service',
      startedAt: '2019-06',
      endedAt: '2020-02',
      where: '인천진산과학고등학교 자율동아리 팀 프로젝트, Full-Stack',
      descriptions: [
        { content: '인천광역시 교육청 주관 특성화 고등학교 대상 융합학술연구 컨퍼런스를 위해 진행한 프로젝트' },
        { content: '사용자의 나이, 성별, 비행 시간에 따라 달라질 수 있는 인천공항 내 캡슐호텔에서의 최적의 수면 환경을 인공지능이 학습하고 추천해주는 서비스'},
        { content: 'Tensorflow v1.x를 이용하여 네트워크 구성 후 Toy Dataset을 자체제작하여 경향성을 학습하는지 테스트를 진행'},
        { content: '학습된 모델을 tflite 파일로 변환하여 MJM 앱에 삽입, 사용자의 나이, 성별, 비행 시간을 입력하면 추천 온도와 습도를 출력하는 로직 구성'},
        {
          content: 'Github Link',
          postHref: 'https://github.com/BranKein/MJM_And'
        },
        {
          content: '자세한 설명',
          postHref: 'https://brankein.github.io/2020-02-10-mjm/'
        }
      ],
      skillKeywords: ['Android Studio', 'Tensorflow', 'Tensorflow Lite'],
    },
    {
      title: 'Debris Barrier Simulator',
      startedAt: '2019-06',
      endedAt: '2020-02',
      where: '지인의 논문 연구 참여 및 도움',
      descriptions: [
        { content: 'Journal of the International STEAM에 투고되어 있는 논문 <An Analysis on the Debris Flow Disaster Reduction Effect of Debris Barrier Type> 연구를 위한 사방댐 효능 측정 시뮬레이터를 유니티 물리엔진을 사용하여 제작' },
        {
          content: '기존 방식의 문제점',
          weight: 'MEDIUM',
          descriptions: [
            { content: '사방댐의 모양, 각도, 크기 등을 다양하게 변화시키며 실험해야 했기에 시간도 많이 걸리고 노동력이 많이 필요'},
            { content: '토사물이 낙하하는 속력과 시간 등을 정밀하게 측정하는 데 어려움'}
          ]
        },
        {
          content: 'Unity와 3Ds max를 이용한 시뮬레이터 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '다양한 모양의 사방댐을 제작하기 위해 3Ds max를 이용하여 사방댐 3D 디자인을 제작'},
            { content: '모델링 된 사방댐 디자인을 Unity에 가져온 후 그 위로 polygon을 생성하여 충돌 가능한 object로 제작'},
            { content: '조작변수에 대한 리스트를 만들고 모든 경우에 대하여 자동으로 시뮬레이션이 진행되도록 class를 구성'},
            { content: '토사물이 떨어진 속력, 시간 등을 내부에서 측정하여 시뮬레이션 후 스크린샷과 함께 저장하도록 제작'}
          ]
        }
      ],
      skillKeywords: ['simulator', 'Unity', 'C#', '3Ds max'],
    },
  ],
};

export default project;
