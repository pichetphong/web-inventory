import "./SideContent.css"
import ProductAdd from "./ProductAdd";
import { useState } from "react";

const SideContent=()=>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="title">เมนู</div>
                    <div className="list-items">
                        <div className="li"><a>รายการสินค้า</a></div>
                        <div className="li"><a>รายงาน</a></div>
                        <div className="li"><a onClick={openModal}>เพิ่มสินค้า</a></div>
                        <div className="li"><a>เปิด/ปิด</a></div>
                    </div>
                </nav>
            </div>
            <ProductAdd isOpen={isModalOpen} onClose={closeModal}/>
        </>
    )
}

export default SideContent;