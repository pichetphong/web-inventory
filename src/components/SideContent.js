import "./SideContent.css"

const SideContent=()=>{
    return (
        <>
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="title">เมนู</div>
                    <div className="list-items">
                        <div className="li"><a>รายการสินค้า</a></div>
                        <div className="li"><a>รายงาน</a></div>
                        <div className="li"><a>เพิ่มสินค้า</a></div>
                        <div className="outline-btnAdd-product">
                            <button className="btnAdd-product">เพิ่มสินค้า</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SideContent;