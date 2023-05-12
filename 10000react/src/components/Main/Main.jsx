import React from "react";
import { useTransition } from "react";
import { useState } from "react";
import "./Main.css";

export default function Main(props) {
  // 1. 전문가 입력값 -> 상태관리
  // 2. 훈련 시간 입력값 -> 상태관리
  // 3. 실행 버튼 클릭 시, result 보여주기
  // 4. result 영역
  //  4-1. 전문가 입력값 반영
  //  4-2. 훈련시간 입력값 반영: 계산

  const [expert, setExpert] = useState("");
  const [trainingHour, setTrainingHour] = useState("");
  const [day, setDay] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setDay(Math.ceil(10000 / trainingHour));
    setIsClicked(true);
  }

  return (
    <main>
      <form className="inputs" onSubmit={handleSubmit}>
        <p className="input-expert">
          나는{" "}
          <input type="text" value={expert} onChange={(event) => (setExpert(event.target.value))} placeholder="예) 프로그래밍"/>
          전문가가 될 것이다.
        </p>
        <p className="input-hour">
          그래서 앞으로 매일 하루에{" "}
          <input type="number" value={trainingHour} onChange={(event) => (setTrainingHour(event.target.value))} placeholder="예) 5시간" />
          시간씩 훈련할 것이다.
        </p>
        <button type="submit" className="btn-run">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>

      {isClicked && <section className="result">
        <h2 className="blind">결과</h2>
        <p className="result-expert">
          당신은 <strong>{expert}</strong>전문가가 되기 위해서는
        </p>
        <p className="result-hour">
          약<strong>{day}</strong>일 이상 훈련하셔야 합니다! :&#41;
        </p>

        <div className="result-btns">
          <button type="button" className="btn-go" onClick={props.modalOpen}>
            훈련하러 가기 GO!GO!
          </button>
          <button type="button" className="btn-share">
            공유하기
          </button>
        </div>
      </section>}
    </main>
  );
}
