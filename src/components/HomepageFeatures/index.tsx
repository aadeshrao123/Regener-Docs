import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type PluginItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const PluginList: PluginItem[] = [
  {
    title: 'RG Chat System',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Modular, multiplayer-ready chat system with proximity and channel support.
      </>
    ),
    link: '/docs/rg-chat/intro',
  },
  {
    title: 'Upcoming Plugin',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Stay tuned for more high-quality Unreal Engine plugins.
      </>
    ),
    link: '#',
  },
];

function Plugin({title, Svg, description, link}: PluginItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {link !== '#' && (
          <Link className="button button--primary" to={link}>
            Explore Docs
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center" style={{marginBottom: '2rem'}}>Our Plugins</h2>
        <div className="row">
          {PluginList.map((props, idx) => (
            <Plugin key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
