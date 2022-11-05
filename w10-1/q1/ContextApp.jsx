import React from 'react' 
// 컨텍스트 생성
const ThemeContext = React.createContext('light'); // 초깃값 'light'
{/* 컨텍스트이름.Provider로 감싸지지 않은 컴포넌트에서는 컨텍스트 값 사용불가 */}
function ContextApp() {
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
    return (
        <div>
            
            <ThemeContext.Consumer>
                {(valueNameNoSangGwan) => (<div
                    style={{
                        margin: 50,
                        padding: 50,
                        backgroundColor: valueNameNoSangGwan, /* 이곳서 사용*/
                    }} >
                    <p> 컨텍스트를 가지고 데이터를 전달하는 예 </p>
                    <button>확인</button>
                </div>)
                }
            </ThemeContext.Consumer>
        </div >
    )
}
export default ContextApp;
