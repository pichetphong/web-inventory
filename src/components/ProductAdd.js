import './ProductAdd.css'
import axios, { Axios } from 'axios';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import product from '../data/product';

const ProductAdd = (props)=>{

    const {isOpen, onClose} = props
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0)


    const addProduct = () =>{
        axios.post('http://localhost:3001/create',{
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage
        })
    }


    if (!isOpen) return null;

    return (
        <>
            <div className='add-product-modal'>
                <div className='add-product-modal-bg ' onClick={()=>onClose()}/>
                <div className='add-product-modal-content'>
                    <div className='mb-4'><h1>เพิ่มสินค้า</h1></div>
                    <form action='#'>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>
                                ชื่อสินค้า:
                            </label>
                            <input type='text' className='form-control'
                                onChange={(event) =>{setName(event.target.value)}}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='age' className='form-label'>
                                อายุ:
                            </label>
                            <input type='number' className='form-control'
                                onChange={(event) =>{setAge(event.target.value)}}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='country' className='form-label'>
                                ประเทศ:
                            </label>
                            <input type='text' className='form-control'
                                onChange={(event) =>{setCountry(event.target.value)}}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='position' className='form-label'>
                                ตำแหน่ง:
                            </label>
                            <input type='text' className='form-control'
                                onChange={(event) =>{setPosition(event.target.value)}}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='wage' className='form-label'>
                                เงินเดือน:
                            </label>
                            <input type='number' className='form-control'
                                onChange={(event) =>{setWage(event.target.value)}}
                            />
                        </div>
                        <button className='btn btn-success me-2' onClick={() => { addProduct(); onClose(); }}>บันทึก</button>
                        <button className='btn btn-outline-success' onClick={onClose}>ปิด</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductAdd