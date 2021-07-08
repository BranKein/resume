import favicon from '../asset/favicon.ico';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume of Yeonhyuk Kim';
const description = 'This is web resume for Yeonhyuk Kim';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
