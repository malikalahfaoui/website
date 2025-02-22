import React from 'react';
import Layout from '@con/components/layout';
import ContactCard from '@con/components/common/ContactCard';
import Review from '@con/components/2021/Review';
import nav from '@con/data/nav';
import { PageProps } from 'gatsby';
import '@con/styles/home/index.scss';

const Conf2021: React.ComponentType<PageProps> = () => {
  const fullNav = {
    ...nav,
    links: [
      ...nav.links,
      {
        to: '/con/2022/',
        text: '2022 archive',
      },
    ],
  };
  return (
    <Layout logoAlwaysVisible edition="2021" nav={fullNav}>
      <Review />
      <div className="conf__contact">
        <ContactCard />
      </div>
    </Layout>
  );
};

export default Conf2021;
