import React from 'react'

export default function Caraousel() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel" >
                <div class="carousel-inner my-class" id='carousel' >
                    <div class="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div class="carousel-item active">
                        <img src="https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg"  style={{ objectFit: "contain",filter:"brightness(30%)"}} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo&pid=Api&rs=1&c=1&qlt=95&w=178&h=111"style={{objectFit: "contain",filter:"brightness(30%)"}} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.3qiOYdcpu2jl8G9ln1phLgHaE8&pid=Api&rs=1&c=1&qlt=95&w=156&h=104" style={{objectFit: "contain",filter:"brightness(30%)"}}class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
