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

      {[0, 1, 2, 3, 4, 5, 6].map((item, index) =>
        <MyCard
          img="https://miro.medium.com/max/3200/1*-zkpV1IfOv-1dux6ZqWBCQ.png"
          top="Hello World"
          subtitle="TypeScript"
          meta={{ master: true, explicit: false, label: ""}}
        />
        )}
        </div>
    </div>
  );
};
