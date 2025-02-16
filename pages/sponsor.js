import React from 'react';
import Page from '../components/Page';
import Meta from '../components/meta';

export default function SponsorPage() {
  return (
    <Page>
      <Meta staticPage={{ title: 'Sponsors' }} />
      <div className="wrapper wrapper--text">
        <h1>ICPodcast Sponsorship</h1>
        <p>
          ICP爱好者，定投群发起，👏赞助我们运行到IC服务上。
        </p>

        <p>
          加微信群：解散了，还是加Telegram吧
        </p>

        <p>
          Telegram：https://t.me/icHolder
        </p>

        <h2>Contact Us</h2>
        <p>
          Please{' '}
          <a href="mailto:chuhemiao@gmail.com">
            send us an email
          </a>{' '}
          if you are interested in working together and sponsoring the ICPodcast.
        </p>
      </div>
    </Page>
  );
}
