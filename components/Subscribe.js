function Subscribe() {
  return (
    <div className="subscribe">
      <ul className="subscribe__links">
        <li className="subscribe__link subscribe__link--itunes">
          <a
            target="_blank"
            href="https://itunes.apple.com/ca/podcast/syntax-tasty-web-development-treats/id1253186678?mt=2"
            rel="noopener noreferrer"
          >
            Apple Podcast
          </a>
        </li>
        <li className="subscribe__link subscribe__link--google">
          <a
            target="_blank"
            href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkLnN5bnRheC5mbS9yc3M%3D"
            rel="noopener noreferrer"
          >
            Google Podcast
          </a>
        </li>
        <li className="subscribe__link subscribe__link--spotify">
          <a
            target="_blank"
            href="https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby?si=bOe7-kl6RnOHapMsVnFWgw"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
        </li>
       
      </ul>
    </div>
  );
}

export default Subscribe;
