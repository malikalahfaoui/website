import React from 'react';
import Button from '@con/components/common/Button';

const LookingSponsorCard: React.ComponentType = () => (
  <div className="conf__sponsorcard">
    <h3 className="sponsorcard__title p-30 flex flex-col items-center justify-center">
      <span className="overline">We&apos; looking for</span>
      <strong className="h5 lined lined-white">sponsors&nbsp;!</strong>
    </h3>
    <div className="dotted-corner conf__bg-white flex-1 px-40 py-20">
      <h3 className="h5 text-blue mb-10">Why you should partner&nbsp;?</h3>
      <ul className="sponsorcard__list mb-30">
        <li>
          <span className="text-blue icon-circle-chevron-right point__arrow" />
          Market your developer products and platforms
        </li>
        <li>
          <span className="text-blue icon-circle-chevron-right point__arrow" />
          Reach many more developers with online coverage
        </li>
        <li>
          <span className="text-blue icon-circle-chevron-right point__arrow" />
          Improve your brand by supporting the API Platform community
        </li>
        <li>
          <span className="text-blue icon-circle-chevron-right point__arrow" />
          Hire multi-skilled developers
        </li>
      </ul>
      <Button className="square small">Become sponsor</Button>
    </div>
  </div>
);

export default LookingSponsorCard;
