import { css } from '@emotion/css';
import { MyCard } from 'stencil-demo-react';
import logo from '../logo.svg';
export const Landing = () => {
  return (
    <div
      className={css`
        margin-top: 24px;
      `}
    >
      <img src={logo} alt="logo" className={css`height: 120px; width: 100%; margin-bottom: 40px; text-align: center;`} />
      <div className={css`
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      `}>

      {Array.apply(null, Array(1000)).map((item, index) =>
        <MyCard
          img="https://miro.medium.com/max/3200/1*-zkpV1IfOv-1dux6ZqWBCQ.png"
          top="Hello World"
          subtitle="TypeScript"
          meta={{ master: index % 2 === 0, explicit: index % 3 === 0, label: "1995"}}
        />
        )}
        </div>
    </div>
  );
};
