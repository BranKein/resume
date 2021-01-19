import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'MJM Service',
      startedAt: '2019-06',
      endedAt: '2020-02',
      where: '인천진산과학고등학교 자율동아리 팀 프로젝트',
      descriptions: [
        { content: 'Development and operation of Mashup API of Aggregation Layer' },
        {
          content: 'Add Foo Feature in 2019',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
            { content: 'Integer non turpis ante' },
          ],
        },
        {
          content: 'Launched Bar Service in 2018',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
            {
              content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
            },
          ],
        },
      ],
      skillKeywords: ['Python', 'Android Studio', 'Tensorflow', 'Tensorflow Lite'],
    },
    {
      title: 'GSA Infoteam GISTORY 페이지',
      startedAt: '2020-07',
      where: 'GSA Infoteam 학생회 산하 특별자치회',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
      skillKeywords: ['Python', 'Flask', 'MySQL'],
    },
    {
      title: '반하다 서비스',
      startedAt: '2021-01',
      endedAt: '2021-03',
      where: 'Oasis hackathon team 3N',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
      skillKeywords: ['Python', 'Flask', 'MySQL', 'Android Studio', 'OkHttp'],
    },
    {
      title: 'GSA Infoteam Application Project Management',
      startedAt: '2021-01',
      where: 'GSA Infoteam 학생회 산하 특별자치회',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
      skillKeywords: ['Python', 'Flask', 'MySQL', 'React.js'],
    },
  ],
};

export default project;
