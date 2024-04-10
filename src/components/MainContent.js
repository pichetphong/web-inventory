import "./MainContent.css"
import Items from "./Items.js"
import product from "../data/product.js"
import { useState } from "react"
import ProductModal from "./ProductModal.js"
import AppSearch from "./AppSearch.js"

const MainContent=()=>{

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchText, setSearchText] = useState('');
    
    function onItemOpenClick(product) {
        setSelectedProduct(product);
    }
    function onItemCloseClick() {
        setSelectedProduct(null);
    }

    const productElement = product.filter((element)=>{
        return element.title.includes(searchText)})
        .map((element, index)=>{
        return <Items key={index} products={element} onItemOpenClick={onItemOpenClick}/>
    })

    let productModal = null;
    if (!!selectedProduct) {
        productModal = <ProductModal product={selectedProduct} onItemCloseClick={onItemCloseClick}/>
    }

    return (
        <>
            <div className="AppSearch-grid-col">
                <div className="AppSearch-bg">
                    <AppSearch value={searchText} onValueChang={setSearchText}/>
                </div>
            </div>
            {productElement}
            {productModal}
        </>
    )
}

export default MainContent;