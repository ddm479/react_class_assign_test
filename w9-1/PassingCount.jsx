import React, { useState } from "react";
import './PassingCount.css';
const FirstChild = (props) => {
    console.log(`자식1 ${props.data}`);
    return (
        <div className="first">
            <p> 자식1 컴포넌트 </p>
            <p> (카운터: {props.data}) </p>
        </div>
    )
};
// "2가지 방식이 있다" 정도로만 이해하고 넘기자
// 자식컴포넌트에서 함수를 만들고 그 함수 안에서 props로 부모컴포넌트의 state 관리
// props.resetData는 부모컴포넌트에서 만든 함수를 props로 넘긴 거
const SecondChild = (props) => {
    const onLeftClick = () => props.setLeft((prevData) => parseInt(prevData) + 1);
    const onRightClick = () => props.setRight((prevData) => parseInt(prevData) + 1);
    console.log("자식2 (버튼)");
    return (
        <div className="second">
            <p> 자식2 컴포넌트 </p>
            <button onClick={onLeftClick} > ◀ 카운터++ </button>
            <button onClick={props.resetData} > 카운터 0 </button>
            <button onClick={onRightClick} > 카운터++ ▶ </button>
        </div>
    )
};

const ThirdChild = (props) => {
    console.log(`자식3 ${props.data}`);
    return (
        <div className="third">
            <p> 자식3 컴포넌트 </p>
            <p> (카운터: {props.data}) </p>
        </div>
    )
};

// 부모컴포넌트에서 함수를 만들고 그 함수 안에서 props로 부모컴포넌트의 state 관리
const TestLeft =(props)=>{
    return (
        <div>
            <button onClick={props.setLeftCount}> 왼쪽 값 증가?</button>
        </div>
    )
}
const TestRight =(props)=>{
    return (
        <div>
            <button onClick={props.setRightCount}> 오른쪽 값 증가?</button>
        </div>
    )
}
function PassingCount() {
    const [leftCount, setLeftCount] = useState(0);
    const [rightCount, setRightCount] = useState(0);
    
    // 부모컴포넌트에서 함수를 만든 부분
    const resetData = () => { setLeftCount(0); setRightCount(0); }

    // 부모컴포넌트에서 함수를 만든 부분
    const testLeftChange = () =>{
        setLeftCount((prevData) => parseInt(prevData) + 1);
    }

    const testRightChange = () =>{
        setRightCount((prevData) => parseInt(prevData) + 1);
    }

    return (
        <div className="parent">
            부모컴포넌트
            <br />
            (왼쪽카운트: {leftCount}, 오른쪽카운트: {rightCount})
            <div className="layout">
                <FirstChild data={leftCount} />
                <SecondChild setLeft={setLeftCount}
                    setRight={setRightCount}
                    resetData={resetData} />
                <ThirdChild data={rightCount} />
            </div>
            <TestLeft setLeftCount={testLeftChange}/>
            <TestRight setRightCount={testRightChange}/>
        </div>

    )
}
export default PassingCount;