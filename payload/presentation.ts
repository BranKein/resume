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
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
    {
      title: 'ResNet paper reading',
      subTitle: 'Wing-2021-AI-Winter-PR Week3',
      at: '2021-01-20',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
  ],
};

export default presentation;
