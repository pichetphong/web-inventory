import "./Items.css"

const Items = (props)=>{
    const {products,onItemOpenClick} = props
    return (
        <>
            <div className="product-item">
                <img src={products.imgUrl} alt="" onClick={()=>{onItemOpenClick(products)}}/>
                <div className="product-description">
                    <h4>{products.title}</h4>
                    <p>ราคา {products.amount} บาท</p>
                </div>
            </div>
        </>
    )
}

export default Items;