import React from 'react'
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import './product_style.css'
function Products() {

  return (
    <div >
        <div className='home'>
        <div className="macbook-air-7">
        <img className="macbook-air-7-child" alt="" src="/frame-251.svg" />
        <div className="access-context-manager-svgrepo-parent">
          <img
            className="access-context-manager-svgrepo-icon"
            alt=""
            src="/accesscontextmanager-svgrepocom.svg"
          />
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="nutryfood1">NUTRYFOOD</div>
          <b className="crowned-with-innovations2">CROWNED WITH INNOVATIONS</b>
        </div>
        <div className="component-58-parent">
          <img className="component-38-icon" alt="" src="/component-58.svg" />
          <div className="domestic-international">{`Domestic & International Markets- Accessible worldwide and everywhere`}</div>
        </div>
      </div>
      <div className="macbook-air-6">
        <div className="frame-parent1">
          <div className="home-group">
            <div className="best-sellers"><Link to="/">Home</Link></div>
            {/* <img className="frame-child3" alt="" src="/vector-18.svg" /> */}
          </div>
          <div className="home-group">
            <div className="best-sellers"><Link to="/aboutus">About Us</Link></div>
            <img className="frame-child4" alt="" src="/vector-19.svg" />
          </div>
          <div className="home-group">
            <div className="best-sellers"><Link to="/products">Products</Link></div>
            <img className="frame-child4" alt="" src="/vector-20.svg" />
          </div>
          <div className="home-group">
            <div className="best-sellers"><Link to="/contactus">Contact Us</Link></div>
            <img className="frame-child4" alt="" src="/vector-21.svg" />
          </div>
        </div>
        <div className="phone-2-1-parent">
         <Link> <img className="mdiwhatsapp-icon" alt="" src="/phone-2-1.svg" /></Link>
         <Link><img className="mdiwhatsapp-icon" alt="" src="/mail-1-1.svg" /></Link>
         <Link><img className="mdiwhatsapp-icon" alt="" src="/mdiwhatsapp.svg" /></Link>
        </div>
      </div> 
        <div className='spotlight-header'>
            <div className='spotlight-title'>Spotlight</div></div>
            <div className='spotlight-images'>
                <div className='spotlight-image-1'>
                    <img src='Ellipse 24 (3).png'></img>
                </div>
                <div className='spotlight-image-1'>
                    <img src='Ellipse 24 (3).png'></img>
                </div>
                <div className='spotlight-image-1'>
                    <img src='Ellipse 24 (3).png'></img>
                </div>
                <div className='spotlight-image-1'>
                    <img src='Ellipse 24 (3).png'></img>
                </div>
                <div className='spotlight-image-1'>
                    <img src='Ellipse 24 (3).png'></img>
                </div>
                <div className='spotlight-image-1'>
                    <img src='Ellipse 24 (3).png'></img>
                </div>
                <div className='spotlight-image-1'>
                    <img src='Ellipse 24 (3).png'></img>
                </div>
            </div>
            <div className='product-filter'>
                <button className='product-button-1'>
                    <div className='btn-des'>
                    <div className='product-btn-icon'>
                        <img src='./product-btn-icon.png'></img>
                    </div>
                    <div className='product-btn-des'>Breakfast</div>
                    </div>
                </button>
                <button className='product-button-1'>
                    <div className='btn-des'>
                    <div className='product-btn-icon'>
                        <img src='./product-btn-icon.png'></img>
                    </div>
                    <div className='product-btn-des'>Biryani Masala</div>
                    </div>
                </button>
                <button className='product-button-1'>
                    <div className='btn-des'>
                    <div className='product-btn-icon'>
                        <img src='./product-btn-icon.png'></img>
                    </div>
                    <div className='product-btn-des' >Tea Concentrations</div>
                    </div>
                </button>
            </div>
            <div className='product-more-filter'>
                <div className='filters-products'>
                    <button className='filters-btn'>
                        Mix Powders
                    </button>
                    <button className='filters-btn'>
                        Cook Powders
                    </button>
                    <button className='filters-btn'>
                        Chutney
                    </button>
                    <button className='filters-btn'>
                        Sambhar
                    </button>
                </div>
                <div className='products-sort'>
                    <div className='total-products'>98 Products</div>
                    <div className='products-dropdown'>
                        <button onClick={()=>{}} className='drop-btn'>Sort By</button>
                        <div className='dropdown-content'>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='prod-display'>
                <div className='prod-display-1'>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <Link to = '/productinfor'><button  className='btn-prod-card buynow-btn'>
                        Buy Now
                        </button></Link> 
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    
                </div>
                <div className='prod-display-1'>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    
                </div>
                <div className='prod-display-1'>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    
                </div>
                <div className='prod-display-1'>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    <div className='prod-card'>
                        <div className='prod-card-image'>
                            <img src='./Frame 260 (2).png'></img>
                        </div>
                        <div className='prod-card-title'>Dosa Powder</div>
                        <button className='btn-prod-card buynow-btn'>
                           Buy Now
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className="macbook-air-5">
        <div className="nutryfood-parent">
          <div className="nutryfood">NUTRYFOOD</div>
          <div className="crowned-with-innovations1">
            CROWNED WITH INNOVATIONS
          </div>
        </div>
        <div className="home-parent">
          <div className="best-sellers"><Link to='/'>Home</Link></div>
          <div className="best-sellers"><Link to='/aboutus'>About Us</Link></div>
          <div className="best-sellers"><Link to='/products'>Products</Link></div>
          <div className="best-sellers"><Link to='/contactus'>Contact Us</Link></div>
        </div>
        <div className="component-38-parent">
          <img className="component-38-icon" alt="" src="/component-38.svg" />
          <img className="component-38-icon" alt="" src="/component-39.svg" />
          <img className="component-38-icon" alt="" src="/component-40.svg" />
          <img className="component-38-icon" alt="" src="/component-41.svg" />
          <img className="component-38-icon" alt="" src="/component-42.svg" />
        </div>
        <div className="nutryfood-all-rights">
          © 2024, NutryFood. All rights reserved.
        </div>
      </div>
      </div>
    </div>
  )
}

export default Products