import Link from 'next/link';

const Footer = () => (
  <footer className="bottom">
    <p>
      Want to{' '}
      <Link href="/sponsor">
        <a>Sponsor the ICPodcast?</a>
      </Link>
    </p>
    {/* <p>
      Looking for some{' '}
      <Link href="/sickpicks">
        <a>Sick Picks?</a>
      </Link>
    </p> */}
    <p>&copy; ICPodcast {new Date().getFullYear()}</p>
    <p>
      Website made with React, Next.js and stylus. Build on{' '}
      <a href="https://dfinity.org/">IC</a>. The source is on{' '}
      <a
        href="https://github.com/wesbos/syntax"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default Footer;
