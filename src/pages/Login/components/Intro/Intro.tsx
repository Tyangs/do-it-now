import './Intro.scss';

import React from 'react';

import { ReactComponent as DoneIcon } from '@/assets/svgs/done.svg';
import { ReactComponent as FavIcon } from '@/assets/svgs/favicon.svg';

const title = 'Do it now';

const description = 'Pure tool to help you better focus on work and time management';

const features = [
  {
    title: 'Pure tool',
    description: 'no cumbersome styles and complicated operations.',
  },
  {
    title: 'Focus on work',
    description: 'record notes at work, freeing your brain to focus on the work.',
  },
  {
    title: 'Time management',
    description: 'simple task timeline management.',
  },
];

const Intro = () => {
  return (
    <div className="login-intro">
      <div className="login-intro__title">
        <div className="login-intro__title-logo">
          <FavIcon />
        </div>
        {title}
      </div>
      <div className="login-intro__description">{description}</div>
      <ul className="login-intro__features">
        {features.map(({ title, description }) => (
          <li key={title} className="login-intro__feature-item">
            <div className="login-intro__feature-item__done">
              <DoneIcon />
            </div>
            <div>
              <span className="login-intro__feature-item__title">{title}: </span>
              <span className="login-intro__feature-item__description">{description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Intro;
