import './ProductAdd.css'

const ProductAdd = (props)=>{

    const {isOpen, onClose} = props

    if (!isOpen) return null;

    return (
        <>
            <div className='add-product-modal'>
                <div className='add-product-modal-bg'/>
                <div className='add-product-modal-content'>
                    <div className='title'>เพิ่มสินค้า</div>
                    <form action='#'>
                        <div className='product-details'>
                            <div className='input-box'>
                                <span className='details'>ชื่อสินค้า</span>
                                <input type='text'/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>รายการละเอียด</span>
                                <input type='text'/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>รูปภาพ</span>
                                <input type='file'/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>ราคา</span>
                                <input type='number'/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>เลือกประเภทสินค้า</span>
                                <select class="form-input-box">
                                    <option selected>one</option>
                                    <option value>Two</option>
                                    <option value>Three</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className='btn-con'>
                        <button className='button'>บันทึก</button>
                        <button className='button' onClick={onClose}>ปิด</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAdd