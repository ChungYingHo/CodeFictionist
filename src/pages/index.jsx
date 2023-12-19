import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subTitle}>
          這是一張我還在台大讀碩時，某年中秋和朋友爬象山拍的台北市夜景後製。<br/>
          華燈初上，台北的夜剛開始，站在山上向下望卻有一種脫離現實、如夢似幻的感覺，明明城市是如此地近。<br/>
          星月皎潔，我們跟著人群走下山，城市的氣息撲面而來，復歸，這喧鬧地可愛的現實。
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
