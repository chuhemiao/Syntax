import Link from 'next/link';
// import Subscribe from './Subscribe';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/">
        <a aria-label="Syntax.FM">
          <img className="header__logo" src="/static/logo.png" alt="Syntax" />
        </a>
      </Link>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">一个IC爱好者定投翻身群发起的播客节目.</h2>
        <a
          target="_blank"
          href="mailto:chuhemiao@gmail.com"
          className="title__potluck-btn"
          rel="noopener noreferrer"
        >
          Ask a KK德米安 Question →
        </a>
      </div>
      <div className="people">
        <div className="person">
          <img
            src="/static/kk.png"
            alt="Wes Bos"
            className="avatar"
          />
          <h3>KK德米安</h3>
          <a
            target="_blank"
            href="https://twitter.com/delokkkk"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @白总
          </a>
          <p>
            菜菜的程序员,懂一点Javascript、Go、Rust、Motoko...
          </p>
        </div>

        <div className="person">
          <img
            src="/static/mei.png"
            alt="Scott Tolinski"
            className="avatar"
            rel="noopener noreferrer"
          />
          <h3>Lionel Messi</h3>
          <a
            target="_blank"
            href="https://twitter.com/delokkkk"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @梅总
          </a>
          <p>
            ICP Holder，格局大，大局观很厉害的大佬。
          </p>
        </div>

        <div className="person">
          <img
            src="/static/qiong.png"
            alt="Scott Tolinski"
            className="avatar"
            rel="noopener noreferrer"
          />
          <h3>Sofia</h3>
          <a
            target="_blank"
            href="https://twitter.com/delokkkk"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @币圈首穷
          </a>
          <p>
            做空ICP财务自由的男人
          </p>
        </div>


        <div className="person">
          <img
            src="/static/icp-logo.png"
            alt="Scott Tolinski"
            className="avatar"
            rel="noopener noreferrer"
          />
          <h3>深度套牢的群友</h3>
          <a
            target="_blank"
            href="https://twitter.com/delokkkk"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @波波波 @初一 @YSYMS @简单就好 @V神不太神
          </a>
          <p>
            他们来自ICP定投翻身群深度套牢的一群人...
          </p>
        </div>


      </div>
    </div>
    {/* <Subscribe /> */}
  </header>
);

export default Header;
