import InstagramSvg from '../assets/instagram.svg?react';
import ThreadsSvg from '../assets/threads.svg?react';
import SoundcloudSvg from '../assets/soundcloud.svg?react';
import GithubSvg from '../assets/github.svg?react';

const linkStyle = 'text-blue-500 dark:text-blue-300 underline';
const logoStyle = 'inline stroke-blue-500 fill-blue-500 dark:stroke-blue-300 dark:fill-blue-300';


export function Links() {
  return (
    <div className="text-sm m-auto flex flex-col w-96 pt-24">
      <ul className="text-center text-blue-950 dark:text-blue-50">
        <li>노래: <a className={linkStyle} href="https://soundcloud.com/dooyou21?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank"><SoundcloudSvg className={logoStyle} /> dooyou21</a></li>
        <li>코드: <a className={linkStyle} href="https://github.com/dooyou21" target="_blank"><GithubSvg className={logoStyle} /> dooyou21</a></li>
        <li>다듬은 긴 글: <a className={linkStyle} href="https://tobe.aladin.co.kr/t/dooyou21" target="_blank">투비로그</a></li>
        <li>개발 관련 긴 글: <a className={linkStyle} href="https://velog.io/@dooyou21/posts" target="_blank">dooyou21.log</a></li>
        <li>짧은 글(주로 독후감): <a className={linkStyle} href="https://www.instagram.com/writing_sujeong?igsh=amU0aDFkZDJsNG9h&utm_source=qr" target="_blank"><InstagramSvg className={logoStyle} /> writing_sujeong</a></li>
        <li>날것의 생각: <a className={linkStyle} href="https://www.threads.net/@dooyou21?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><ThreadsSvg className={logoStyle} /> dooyou21</a></li>
        <li>사진/일상: <a className={linkStyle} href="https://www.instagram.com/dooyou21?igsh=MWZzcHFmM2cxa255ag%3D%3D&utm_source=qr" target="_blank"><InstagramSvg className={logoStyle} /> dooyou21</a></li>
        <li>공예: <a className={linkStyle} href="https://www.instagram.com/starsand_store?igsh=ODB6c3EzdTg5dWN4&utm_source=qr" target="_blank"><InstagramSvg className={logoStyle} /> starsand_store</a></li>
        <li>email: <a className={linkStyle} href="mailto:cubeclock94@gmail.com">cubeclock94@gmail.com</a></li>
      </ul>
    </div>
  );
}

