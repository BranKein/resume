import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Python(Flask)',
      level: 3,
    },
    {
      title: 'Amazon Web Services',
      level: 3,
    },
    {
      title: 'Nginx',
      level: 2,
    },
    {
      title: 'Python(Selenium)',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'C#(Unity)',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'SQLite(Android)',
      level: 1
    }
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Android Studio(Java)',
      level: 3,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'HTML',
      level: 2,
    },
    {
      title: 'Java(Swing)',
      level: 2,
    },
    {
      title: 'Next.js',
      level: 1,
    },
    {
      title: 'D3.js',
      level: 1,
    },
    {
      title: 'PIXI.js',
      level: 1,
    },
    {
      title: 'AppInventor',
      level: 1,
    },
  ],
};

const ai: ISkill.Skill = {
  category: 'AI',
  items: [
    {
      title: 'Keras(DNN)',
      level: 3,
    },
    {
      title: 'Keras(CNN)',
      level: 3,
    },
    {
      title: 'Tensorflow v2.x',
      level: 2,
    },
    {
      title: 'Python(pandas)',
      level: 2,
    },
    {
      title: 'Python(numpy)',
      level: 2,
    },
    {
      title: 'Python(matplotlib)',
      level: 1,
    },
    {
      title: 'Keras(RNN)',
      level: 1,
    },
    {
      title: 'Tensorflow v1.x',
      level: 1,
    },
    {
      title: 'Tensorflow Lite',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Jupyter Notebook',
    },
    {
      title: 'DataGrip',
    },
    {
      title: 'Photoshop',
    },
    {
      title: 'Illustrator',
    },
    {
      title: 'Xd',
    },
    {
      title: 'Vegas Pro',
    },
    {
      title: 'Premiere Pro',
    },
    {
      title: '3Ds max',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, ai, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
