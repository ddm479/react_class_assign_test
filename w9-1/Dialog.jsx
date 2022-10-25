import React from "react";
import styled from 'styled-components'
const Wrapper = styled.div`
    margin: 8;
    padding: 8;
    border-radius: 8;
    box-shadow: "0px 0px 4px grey";
    background-color:${(props) => props.b_color};
`;
// 범용다이얼로그 컴포넌트
function Dialog(props) {
    const {backgroundColor, content, children} = props;
    // children은 <Dialog> </Dialog> 로 감싼 안의 내용
    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor
            }}
        >
            <h1>{content}</h1>
            {children}
        </div>
    )
    /*
    return (
        <Wrapper b_color={backgroundColor}>
            <h1>{content}</h1>
            {children}
        </Wrapper>
    )
    */
}
export default Dialog;

