import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'


export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:7000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <div>
            <Navbar />
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" >
                    <div className="carousel-inner my-className" id='carousel' >
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg" style={{ objectFit: "contain", filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo&pid=Api&rs=1&c=1&qlt=95&w=178&h=111" style={{ objectFit: "contain", filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.3qiOYdcpu2jl8G9ln1phLgHaE8&pid=Api&rs=1&c=1&qlt=95&w=156&h=104" style={{ objectFit: "contain", filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='container'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (<div className='row mb-3'>
                                <div key={data._id} className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItems => {
                                    return (<div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                        <Cards foodItem={filterItems}
                                            options={filterItems.options[0]}
                                            ></Cards>
                                    </div>)
                                }) : <div>No such data found</div>}
                            </div>
                            )
                        }) : <div>"""""""""" </div>
                }


            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}
