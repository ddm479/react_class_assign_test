import React, { useContext } from 'react' // 컨텍스트 훅 방식
const ThemeContext = React.createContext('light'); // 컨텍스트 생성
// 컨텍스트이름.Provider로 감싸지지 않은 컴포넌트에서는 컨텍스트 값 사용불가
function ContextHook() {
    return (
        <ThemeContext.Provider value='lavender'>
            <Toolbar />
        </ThemeContext.Provider>
    )
}
function Toolbar() {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}
function ThemeButton() {
    return (
        <div>
            <Button />
        </div>
    )
}
function Button() {
    const valueNameNoSangGwan = useContext(ThemeContext); // 컨텍스트 훅 사용 
    return (
        <div
            style={{
                margin: 50,
                padding: 50,
                backgroundColor: valueNameNoSangGwan,
            }}
        >
            <p> 컨텍스트를 가지고 데이터를 전달하는 예 </p>
            <button>확인</button>
        </div>)
}
export default ContextHook;