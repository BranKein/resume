import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '광주과학기술원 (GIST)',
      subTitle: '전기전자컴퓨터공학부 학사과정 재학중',
      startedAt: '2020-03',
      descriptions: [
        {
          content: '자료구조, 객체지향, 컴퓨터 네트워크 과목을 수강했습니다.',
        },
        {
          content: '학생회 산하 특별자치회 GSA Infoteam 회장 (2학년)',
        },
        {
          content: '지스트신문 디지털콘텐츠부 웹마스터 (2학년)',
        },
        {
          content: '전산동아리 Wing Application 분과장 (2학년)',
        },
      ],
    },
    {
      title: '인천진산과학고등학교',
      subTitle: '조기졸업',
      startedAt: '2018-03',
      endedAt: '2020-02',
      descriptions: [
        {
          content: '전산동아리 JS++ 부회장 (2학년)',
        },
        {
          content: '자율동아리 ArduFlow 부회장 (2학년)',
        },
      ],
    },
  ],
};

export default education;
