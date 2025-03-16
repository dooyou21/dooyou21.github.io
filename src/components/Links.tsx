import InstagramSvg from '../assets/instagram.svg?react';
import ThreadsSvg from '../assets/threads.svg?react';
import SoundcloudSvg from '../assets/soundcloud.svg?react';
import GithubSvg from '../assets/github.svg?react';

const linkStyle = 'text-blue-500 dark:text-blue-300 underline';
const logoStyle = 'inline stroke-blue-500 fill-blue-500 dark:stroke-blue-300 dark:fill-blue-300';

const centeredListStyle = "text-center text-blue-950 dark:text-blue-50";
const listTitleStyle = "text-center text-bold text-lg";
const dividerStyle = "text-blue-950/10 dark:text-blue-50/10 my-8";
const descriptionStyle = "text-blue-950/50 dark:text-blue-50/50 my-2 text-xs";
const importantDescriptionStyle = "text-blue-950 dark:text-blue-50 text-bold text-sm";

export function Links() {
  return (
    <div className="text-sm m-auto flex flex-col w-96 pt-24">
      <h1>쓰는 사람(Identities)</h1>
      <p className={descriptionStyle}>편의를 위해 아래에 분야별로 분류해두었습니다</p>
      <p className={importantDescriptionStyle}> 어떤 일이든 함께 해보고 싶다면 제안해주세요:)</p>
      <p className={descriptionStyle}>질문도 환영입니다!</p>
      <p>email: <a className={linkStyle} href="mailto:cubeclock94@gmail.com">cubeclock94@gmail.com</a></p>
      <hr className={dividerStyle} />
      <figure className={centeredListStyle}>
        <figcaption className={listTitleStyle}>
          💻 코드 쓰는 사람, 개발하는 사람
        </figcaption>
        <ul>
          <li>이력서: <a className={linkStyle} href="https://crystalee.notion.site/015c462de7734656afa53cf2fc88eb7b?pvs=4" target="_blank">Software Engineering - Web (Frontend)</a></li>
          <li>코드: <a className={linkStyle} href="https://github.com/dooyou21" target="_blank"><GithubSvg className={logoStyle} /> dooyou21</a></li>
        </ul>
      </figure>
      <hr className={dividerStyle} />
      <figure className={centeredListStyle}>
        <figcaption className={listTitleStyle}>📝 읽고, 생각하고, 쓰는 사람</figcaption>
        <ul className={centeredListStyle}>
          <li>다듬은 긴 글: <a className={linkStyle} href="https://tobe.aladin.co.kr/t/dooyou21" target="_blank">투비로그</a></li>
          <li>개발 관련 긴 글: <a className={linkStyle} href="https://velog.io/@dooyou21/posts" target="_blank">dooyou21.log</a></li>
          <li>짧은 글(주로 독후감): <a className={linkStyle} href="https://www.instagram.com/writing_sujeong?igsh=amU0aDFkZDJsNG9h&utm_source=qr" target="_blank"><InstagramSvg className={logoStyle} /> writing_sujeong</a></li>
        </ul>
      </figure>
      <hr className={dividerStyle} />
      <figure>
        <figcaption className={listTitleStyle}>🎼 곡 쓰는 사람, 🎹 피아노 치는 사람</figcaption>
        <ul className={centeredListStyle}>
          <li>노래: <a className={linkStyle} href="https://soundcloud.com/dooyou21?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank"><SoundcloudSvg className={logoStyle} /> dooyou21</a></li>
          <li>피아노 연습에 대한 기록: <a className={linkStyle} href="https://www.threads.net/@dooyou21?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><ThreadsSvg className={logoStyle} /> dooyou21</a></li>
        </ul>
      </figure>
      <hr className={dividerStyle} />
      <figure>
        <figcaption className={listTitleStyle}>🌿 살아가는 사람</figcaption>
        <ul className={centeredListStyle}>
          <li>사진/일상: <a className={linkStyle} href="https://www.instagram.com/dooyou21?igsh=MWZzcHFmM2cxa255ag%3D%3D&utm_source=qr" target="_blank"><InstagramSvg className={logoStyle} /> dooyou21</a></li>
          <li>날것의 생각: <a className={linkStyle} href="https://www.threads.net/@dooyou21?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><ThreadsSvg className={logoStyle} /> dooyou21</a></li>
          <li>공예: <a className={linkStyle} href="https://www.instagram.com/starsand_store?igsh=ODB6c3EzdTg5dWN4&utm_source=qr" target="_blank"><InstagramSvg className={logoStyle} /> starsand_store</a></li>
        </ul>
      </figure>
    </div>
  );
}

