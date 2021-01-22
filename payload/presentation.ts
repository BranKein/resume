import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'Overfeat paper reading',
      subTitle: 'Wing-2021-AI-Winter-PR Week2',
      at: '2021-01-13',
      descriptions: [
        {
          content: '발표 영상',
          postHref: 'https://www.youtube.com/watch?v=4bsaYf-gZa8&ab_channel=%EC%9D%B4%EC%A4%80%EB%AA%85'
        },
        {
          content: '발표 자료',
          postHref: 'https://github.com/Slime0519/Wing-2021-AI-Winter-PR/blob/main/Week%202/Yeonhyuk%20Kim%20-%20Overfeat.pdf',
        },
      ],
    },
    {
      title: 'ResNet paper reading',
      subTitle: 'Wing-2021-AI-Winter-PR Week3',
      at: '2021-01-20',
      descriptions: [
        {
          content: '발표 영상',
        },
        {
          content: '발표 자료',
          postHref: 'https://github.com/Slime0519/Wing-2021-AI-Winter-PR/blob/main/Week%203/Yeonhyuk%20Kim%20-%20ResNet.pdf',
        },
      ],
    },
  ],
};

export default presentation;
