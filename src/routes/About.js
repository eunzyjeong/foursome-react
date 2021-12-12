import React from 'react';
import Map from 'components/Map';

import 'styles/About.scss';
import QR from 'img/qr_code.png';

const About = () => {
  return (
    <main className="About">
      <section className="about--foursome">
        <h1 className="foursome__title">Four colors make Something special!</h1>
        <p className="foursome__description">
          포썸은 C-cyan M-magenta Y-yellow K-black 4가지 색으로 공간을 꾸미는
          실사출력 업체입니다. B2B 부터 B2C까지 다양한 소비자의 눈높이에 맞춰
          든든한 조력자이자 새로운 시장을 창출하는 퍼스트 무버(First Mover)가
          되기위해 노력합니다.
        </p>
      </section>
      <div className="scroll-area">
        <section className="foursome__info">
          <article className="foursome__info--map">
            <Map />
          </article>
          <article className="foursome__description detail">
            <p>주소: 서울 마포구 대흥로6길 8 다산빌딩 201호 포썸</p>
            <p>전화: 010-9832-6006 </p>
            <p>메일: foursome@naver.com</p>
            <p>인스타그램: @foursome_official_</p>
            <p>카카오톡 플러스친구: QR코드 혹은 포썸 검색</p>
            <img id="foursome-QR" src={QR} alt="포썸 QR코드" />
          </article>
          <article className="foursome__description">
            <p>주말 · 공휴일 제외 10:00 - 18:00</p>
            <p>운영시간 외 문의사항은 메일을 이용해주세요.</p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default About;
