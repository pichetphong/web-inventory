import "./WebHeader.css"
import "./MainContent.js"
// import AppSearch from "./AppSearch"

const WebHeader = ()=>{

    return (
        <>
            <div id="container" className="header">
                <div id="end" className="header">
                    <button>เปิด</button>
                    <button>ปิด</button>
                </div>
            </div>
        </>
    )
}
export default WebHeader