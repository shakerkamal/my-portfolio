import React from 'react'

const Footer = () => {
  const HackerRank = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="hackerrank"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="svg-inline--fa fa-hackerrank fa-w-16 fa-3x"
      height="25px"
      style={{ verticalAlign: 'text-bottom' }}
    >
      <path
        fill="currentColor"
        d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z"
        class=""
      ></path>
    </svg>
  )
  return (
    <div id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://Linkedin.com/in/shaker-ibna-kamal"
              target="_blank"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shakerkamal"
              target="_blank"
              className="icon fa-github"
            >
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ShakerKamal12"
              target="_blank"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/shakerkamal"
              target="_blank" //<i class="fab fa-hackerrank"></i>
            >
              <HackerRank />
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Md Shaker Ibna Kamal</li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
