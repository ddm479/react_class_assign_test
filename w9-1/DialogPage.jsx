import React from "react";
import Dialog from "./Dialog";

function WarningDialog(props) {
    return (
        <Dialog content={props.content} backgroundColor={props.backgroundColor}>
            <div>
                <button onClick={() => { alert("경고!"); }}>누르지 마세요</button>
            </div>
        </Dialog>
    )
}


function WelcomeDialog(props) {
    return (
        <Dialog content={props.content} backgroundColor={props.backgroundColor}>
            <div>
                <h1>테스트해보세요</h1>
            </div>
        </Dialog>
    )
}


function ErrorDialog(props) {
    return (
        <Dialog content={props.content} backgroundColor={props.backgroundColor}>
            <div>
                <h1>버튼을 클릭해보세요</h1>
                <button onClick={() => { alert("에러 발생!"); }}>누르세요</button>
            </div>
        </Dialog>
    )
}


function NoticeDialog(props) {
    return (
        <Dialog content={props.content} backgroundColor={props.backgroundColor}>
            <h1>기말고사는 사실 없습니다.</h1>
            <input type="checkbox" />확인 했으면 체크를 하세요.
        </Dialog>
    )
}

function DialogPage() {
    return (
        <div>
            <WarningDialog content="경고합니다." backgroundColor="red" />
            <WelcomeDialog content="환영합니다." backgroundColor="green" />
            <ErrorDialog content="에러유도합니다." backgroundColor="yellow" />
            <NoticeDialog content="공지합니다." backgroundColor="blue" />
        </div>
    )
}

export default DialogPage;