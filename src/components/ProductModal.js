import './ProductModal.css'

const ProductModal=(props)=>{
    const {product,onItemCloseClick} = props
    return (
        <div className='product-modal'>
            <div className='product-modal-bg' onClick={()=>onItemCloseClick()}/>
            <div className='product-modal-content'>
                <img src={product.imgUrl} alt=""/>
                <div className='product-modal-text'>
                    <h3>{product.title}</h3>
                    <p>{product.amount}</p>
                    <p>{product.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductModal