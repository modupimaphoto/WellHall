import Rooms from './Rooms';
import Spa from './Spa';

import resort_pool from './assets/images/resort_pool.jpg';
import massage_at_spa from './assets/images/massage_at_spa.jpg';

const App = () => {

    
    const handleShowMenu = () => {
        const navigation = document.querySelector('.navigation');
        if(navigation.classList.contains('nav-active')){
            navigation.classList.remove('nav-active');
        }else{
            navigation.classList.add('nav-active');
        }
    }
    const handleHideMenu = () => {
        const navigation = document.querySelector('.navigation');
        if(navigation.classList.contains('nav-active')){
            navigation.classList.remove('nav-active');
        }else{
            navigation.classList.add('nav-active');
        }
    }
    return(
        <>
            <header className='bg-dark'>
                <div className='container d-flex justify-content-between '>
                    <div className='p-2 text-white'>
                        <i className="fa-solid fa-location-dot px-2"></i>
                        47 Norwood, South Africa, Gauteng, 2066
                    </div>
                    <div>
                        <ul className='p-0'>
                            <li className='list-inline-item'>
                                <a href='#' className='p-2 text-decoration-none'>
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='#' className='p-2 text-decoration-none'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='#' className='p-2 text-decoration-none'>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <section className='showcase'>
                <nav>
                    <div className='container d-flex justify-content-between align-items-center p-2'>
                        <div>
                            Harmony Resort
                        </div>
                        <div>
                            <button className='btn-book'>Book Your Stay</button>
                            <i className="fa-solid fa-bars mt-3" onClick={ handleShowMenu}></i>
                        </div>
                    </div>
                    <div className='navigation nav-active'>
                        <i className="fa-solid fa-xmark" onClick={ handleHideMenu}></i>
                        <div>
                            <ul className='p-0'>
                                <li>
                                    <a href='#'>Home</a>
                                </li>
                                <li>
                                    <a href='#'>About Us</a>
                                </li>
                                <li>
                                    <a href='#'>Our Rooms</a>
                                </li>
                                <li>
                                    <a href='#'>Blog</a>
                                </li>
                                <li>
                                    <a href='#'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='container p-3 intro'>
                    <h1 className='display-3'>
                        Welcome to Harmony Resort,
                    </h1>
                    <h3>
                        the ultimate destination for relaxation and rejuvenation. 
                    </h3>
                </div>
            </section>

            <section className='pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>

                        </div>
                        <div className='col-md-6'>
                            <h5>
                                Experience the Harmony of Body, Mind, and Spirit.
                            </h5>
                            <h3>
                                Welcome to Harmony Resort.
                            </h3>
                            <p>
                                Whether you are looking for a romantic getaway, a family vacation, or a solo retreat, we have something for everyone.
                            </p>
                            <p>
                                At Harmony Resort, you can enjoy our luxurious spa treatments, our delicious restaurant cuisine, and our stunning views of the ocean. 
                                You can also explore our nearby attractions, such as the beach, the golf course, and the nature reserve.
                            </p>
                            <p>
                                We invite you to experience the harmony of body, mind, and spirit at our resort. 
                                Book your stay today and discover why we are the best choice for your next vacation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-5 pb-5'>
                <div className='container text-center'>
                    <h5>
                        Inside Our Harmonies, Feel The Moment.
                    </h5>
                    <h3>
                        Video Tour.
                    </h3>
                    <div className='m-auto video bg-dark'>
                        video
                    </div>
                </div>
            </section>

            <section className='pt-5 pb-5'>
                <Rooms />
            </section>

             <section className='pt-5 pb-5'>
                <Spa />
            </section>

            <section className='pt-5 pb-5'>
                <div className='container'>
                    <div className='row g-4'>
                        <div className='col-md-3 text-center'>
                            <h5>
                                Early Bird Offer
                            </h5>
                            <p>
                                Book your room at least 30 days in advance and get 10% off the regular price.
                            </p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <h5>
                                Long Stay Offer
                            </h5>
                            <p>
                                Stay for 5 nights or more and get 15% off the regular price.
                            </p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <h5>
                                Special Occasion Offer
                            </h5>
                            <p>
                               Celebrate your birthday, anniversary, or honeymoon at our resort and get a complimentary cake, a bottle of wine, and a spa voucher.
                            </p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <h5>
                                Referral Offer
                            </h5>
                            <p>
                               Refer a friend or a family member to our resort and get a 20% discount on your next booking.
                            </p>
                        </div>
                    </div>
                    <p>
                        These discounts or offers are valid for a limited time and subject to terms and conditions. <br/>
                        You can apply them online or contact us for more information.
                    </p>
                </div>
            </section>

            
        </>
    )
}
export default App;