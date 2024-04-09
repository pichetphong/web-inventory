import "./WebHeader.css"
import "./MainContent.js"
import AppSearch from "./AppSearch"

const WebHeader = ()=>{

    return (
        <>
            <div id="container" className="header">
                <div id="start" className="header">
                    <h2>คลังสินค้า</h2>
                </div>
                <div id="center" className="header">
                    {/* <AppSearch value={value} onValueChang={onValueChang}/> */}
                </div>
                <div id="end" className="header">
                    End
                </div>
            </div>
        </>
    )
}
export default WebHeader