import './Products.css'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

function Products() {
    return(
        <>
        <div className="product-main">
            <div className="add-option">
                <h1>Products</h1>
                <Link to='/addproduct'>
                <button>Add Products</button>
                </Link>
            </div>

            <div className="all-product">
                <div className="product">
                    <img src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdG9yYmlrZXxlbnwwfHwwfHx8MA%3D%3D"  alt="product" className='image'/>
                    <h1>Product Name</h1>
                    <p>Product Price: $100</p>
                    <button>Bid Now</button>
                    </div>
                    
                <div className="product">
                    <img src="https://plus.unsplash.com/premium_photo-1664303727151-4c345687204a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JiaWtlfGVufDB8fDB8fHww"  alt="product" className='image'/>
                    <h1>Product Name</h1>
                    <p>Product Price: $100</p>
                    <button>Bid Now</button>
                    </div>
                <div className="product">
                    <img src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFtYm9yZ2hpbml8ZW58MHx8MHx8fDA%3D"  alt="product" className='image'/>
                    <h1>Product Name</h1>
                    <p>Product Price: $100</p>
                    <button>Bid Now</button>
                    </div>
    
            </div>
        </div>

        <Footer/>
        </>
    )
}
export default Products