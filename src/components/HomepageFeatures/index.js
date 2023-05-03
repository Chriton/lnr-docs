import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        // Svg: require('@site/static/img/1.svg').default,
        image: require('@site/static/img/chriton_icon_1.png').default,
        description: (
            <>
                The <b><a href="/docs/developer-quickstart">developer quickstart</a></b> guide will get you up and running in no time
            </>
        ),
    },
    {
        title: 'Forever On Chain',
        // Svg: require('@site/static/img/2.svg').default,
        image: require('@site/static/img/chriton_icon_3.png').default,
        description: (
            <>
                Sites you <b><a href={'/docs/introduction'}>deploy</a></b> will live <b>forever</b> as long as the ethereum
                network exists
            </>
        ),
    },
    // {
    //     title: 'Powered by The Graph',
    //     // Svg: require('@site/static/img/4.svg').default,
    //     image: require('@site/static/img/3.png').default,
    //     description: (
    //         <>
    //             Queries are made using <b><a href="https://thegraph.com" target="_blank" rel="noopener">The
    //             Graph</a></b> which is the standard for indexing blockchain data.
    //         </>
    //     ),
    // },
    {
        title: 'Why web3://',
        // Svg: require('@site/static/img/4.svg').default,
        image: require('@site/static/img/chriton_icon_2.png').default,
        description: (
            <>
                <b>web3</b> puts power in the hands of individuals. <b><a href={'/docs/introduction'}> Read more</a></b>
            </>
        ),
    },
];

function Feature({Svg, title, description, image}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {/*<Svg className={styles.featureSvg} role="img" />*/}
                <img src={image} className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
