import "./Items.css"
import axios, { Axios } from 'axios';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Items = (props)=>{
    const [productList, setProductList] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newCountry, setNewCountry] = useState("");
    const [newPosition, setNewPosition] = useState("");
    const [newWage, setNewWage] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setSelectedProduct(product);
        setShow(true);
    };
    const updateAndClose = (productId) => {
        // ทำการอัปเดตสินค้า
        updateProduct(productId);
        // ปิด Modal
        handleClose();
    };
    
    

    useEffect(() => {
        getProduct();
    }, []); // ใช้วิธีนี้เพื่อให้ฟังก์ชันทำงานเมื่อคอมโพเนนต์ถูกเรียกใช้งานเท่านั้น


    const getProduct = () => {
        axios.get('http://localhost:3001/product')
            .then(response => {
                setProductList(response.data);
            });
    }

    const updateProduct = (id) =>{
        axios.put('http://localhost:3001/update',
        {name: newName, 
            age: newAge, 
            country: newCountry,
            position: newPosition,
            wage: newWage,
            id: id
        }).then((response)=>{
            setProductList(
                productList.map((val)=>{
                    return val.id == id ? {
                        id: val.id,
                        name: newName,
                        country: newCountry,
                        age: newAge,
                        position: newPosition,
                        wage: newWage
                    } : val;
                })
            )
        })
    }

    const daleteProduct = (id)=>{
        axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
            setProductList(
                productList.filter((val)=>{
                    return val.id != id;
                })
            )
        })
    }

    

    return (
        <>
            {productList.map((val , key) =>{
                return (
                    <div className="card">
                        <div className="card-body text-left">
                            <p className="card-text">Name: {val.name}</p>
                            <p className="card-text">Age: {val.age}</p>
                            <p className="card-text">Country: {val.country}</p>
                            <p className="card-text">position: {val.position}</p>
                            <p className="card-text">wage: {val.wage} บาท</p>
                            <div className="d-flex justify-content-end">
                                <Button className="me-2" variant="primary" onClick={() => handleShow(val)}>เพิ่มเติม</Button>
                                <Button variant="outline-danger" onClick={()=>{ daleteProduct(val.id) }}>ลบ</Button>
                            </div>
                        </div>
                    </div>
                )
            })}

            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>รายการละเอียด</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct && (
                        <>
                            <p>Name: {selectedProduct.name}</p>
                            <input type="text" placeholder="แก้ไขชื่อ" className="form-control mb-3" onChange={(event)=>{setNewName(event.target.value)}}/>
                            <p>Age: {selectedProduct.age}</p>
                            <input type="number" placeholder="แก้ไขอายุ" className="form-control mb-3" onChange={(event)=>{setNewAge(event.target.value)}}/>
                            <p>Country: {selectedProduct.country}</p>
                            <input type="text" placeholder="แก้ไขประเทศ" className="form-control mb-3" onChange={(event)=>{setNewCountry(event.target.value)}}/>
                            <p>Position: {selectedProduct.position}</p>
                            <input type="text" placeholder="แก้ไขตำแหน่ง" className="form-control mb-3" onChange={(event)=>{setNewPosition(event.target.value)}}/>
                            <p>Wage: {selectedProduct.wage} บาท</p>
                            <input type="number" step="1" min="0" placeholder="แก้ไขเงินเดือน" className="form-control mb-3" onChange={(event)=>{setNewWage(event.target.value)}}/>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="warning" onClick={()=>{ updateAndClose(selectedProduct.id) }}>แก้ไข</Button>
                <Button variant="outline-warning" onClick={handleClose}>ปิด</Button>
                </Modal.Footer>
            </Modal>

            {/* <div className="product-item">
                <img src={products.imgUrl} alt="" onClick={()=>{onItemOpenClick(products)}}/>
                <div className="product-description">
                    <p>{products.title}</p>
                    <p>ราคา {products.amount} บาท</p>
                </div>
            </div> */}
        </>
    )
}

export default Items;