import { ISkill } from '../component/skill/ISkill';

const language: ISkill.Skill = {
  category: 'Language',
  items: [
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
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
      title: 'CSS',
      level: 2,
    },
    {
      title: 'C',
      level: 2,
    },
    {
      title: 'C++',
      level: 2,
    },
    {
      title: 'C#',
      level: 1,
    },
  ]
}

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Flask',
      level: 3,
    },
    {
      title: 'Amazon Web Services',
      level: 2,
    },
    {
      title: 'Nginx',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'Python(Selenium)',
      level: 1,
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
      title: 'Redis',
      level: 2,
    },
    {
      title: 'SQLite(Android)',
      level: 1
    }
  ],
};

const etc: ISkill.Skill = {
  category: 'ETC',
  items: [
    {
      title: 'Selenium',
    },
    {
      title: 'BeautifulSoup',
    },
    {
      title: 'WordCloud',
    },
    {
      title: 'Unity(C#)',
    },
  ]
}

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js, Redux',
      level: 3,
    },
    {
      title: 'Native Android(Java)',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'HTML, CSS',
      level: 2,
    },
    {
      title: 'React Native',
      level: 1,
    },
    {
      title: 'Swing',
      level: 1,
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
      title: 'Keras(DNN, CNN, RNN)',
      level: 3,
    },
    {
      title: 'Tensorflow (v2.x, v1.x)',
      level: 2,
    },
    {
      title: 'Pandas, Numpy',
      level: 2,
    },
    {
      title: 'Matplotlib',
      level: 1,
    },
    {
      title: 'Tensorflow Lite',
      level: 1,
    },
  ],
};

const ide: ISkill.Skill = {
  category: 'IDE, Tools',
  items: [
    {
      title: 'Pycharm Professional',
    },
    {
      title: 'Webstorm',
    },
    {
      title: 'DataGrip',
    },
    {
      title: 'IntelliJ IDEA Ultimate',
    },
    {
      title: 'Android Studio',
    },
    {
      title: 'CLion',
    },
    {
      title: 'Jupyter Notebook',
    },
    {
      title: 'Gitkraken',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Notion',
    },
  ]
};

const design: ISkill.Skill = {
  category: 'Design Tools',
  items: [
    {
      title: 'Photoshop',
    },
    {
      title: 'Adobe XD',
    },
    {
      title: '3Ds MAX',
    },
    {
      title: 'Vegas Pro',
    },
  ]
}

const skill: ISkill.Payload = {
  disable: false,
  skills: [language, backend, database, frontend, ai, etc, ide, design],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: 자신있게 개발 가능한 수준',
};

export default skill;
