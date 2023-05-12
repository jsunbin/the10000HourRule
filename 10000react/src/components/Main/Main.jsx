import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <main>
    <form className="inputs">
      <p className="input-expert">나는 <input type="text" placeholder="예) 프로그래밍" /> 전문가가 될 것이다.</p>
      <p className="input-hour">그래서 앞으로 매일 하루에 <input type="number" placeholder="예) 5시간" />시간씩 훈련할 것이다.</p>
      <button type="submit" className="btn-run">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
    </form>
    
    <section className="result">
      <h2 className="blind">결과</h2>
      <p className="result-expert">당신은 <strong>프론트엔드</strong>전문가가 되기 위해서는</p>
      <p className="result-hour">약<strong>1000</strong>일 이상 훈련하셔야 합니다! :&#41;</p>

      <div className="result-btns">
        <button type="button" className="btn-go">훈련하러 가기 GO!GO!</button>
        <button type="button" className="btn-share">공유하기</button>
      </div>
    </section>
  </main>
  )
}
