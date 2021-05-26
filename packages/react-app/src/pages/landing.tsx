import { css } from '@emotion/css';
import { MyCard, MyComponent } from 'stencil-demo-react';

export const Landing = () => {
  return (
    <div
      className={css`
        margin-top: 24px;
      `}
    >
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
