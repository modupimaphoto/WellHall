import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import deluxe from './assets/images/room&suites/deluxe.jpg';
import deluxe_king from './assets/images/room&suites/deluxe_king.jpg';
import superior_deluxe from './assets/images/room&suites/superior_deluxe.jpg';
import grand_deluxe from './assets/images/room&suites/grand_deluxe.png';
import coral_room from './assets/images/room&suites/coral_room.jpg';
import lagoon_room from './assets/images/room&suites/lagoon_room.jpg';
import palm_room from './assets/images/room&suites/palm_room.JPEG';
import zen_room from './assets/images/room&suites/zen_room.jpg';
import loft_room from './assets/images/room&suites/loft_room.JPEG';

const Rooms = () => {

    const splideOptions = {
        perPage: 3,
        rewind: true,
        type: 'loop',
        autoplay: true,
        focus: 'center',
        gap: '.7rem',
        breakpoints: {
            768 : {
                perPage: 1
            }
        }
    }

    return(
        <>
            <div className='container'>
                <div className='text-center'>
                    <h5>
                    Experience The Comfort RoomS
                    </h5>
                    <h3>
                        Rooms and Suites
                    </h3>
                    <p>
                        At Harmony Resort, we offer a variety of accommodation options to suit your needs and preferences. 
                        Whether you are looking for a cozy cottage, a spacious villa, or something in between, we have the perfect room for you.
                    </p>
                    <h6>
                        All our rooms are equipped with modern amenities.
                    </h6>
                    <div className='mb-3'>
                        <span className='p-2'>
                            <i className="fa-solid fa-wifi"></i> Wifi
                        </span>
                        <span className='p-2'>
                            <i className="fa-solid fa-tv"></i> Tv
                        </span>
                        <span className='p-2'>
                            <i className="fa-regular fa-air-conditioner"></i> Air conditioner
                        </span>
                    </div>
                </div>
                
                <Splide aria-label='Rooms and Suites' options={ splideOptions }>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ deluxe } alt='Deluxe' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Deluxe</h5>
                                <h6 className='card-subtitle mb-3'>R1,500 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ deluxe_king } alt='Deluxe King' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Deluxe King</h5>
                                <h6 className='card-subtitle mb-3'>R2,000 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ superior_deluxe } alt='Superior Deluxe' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Superior King</h5>
                                <h6 className='card-subtitle mb-3'>R2,500 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ grand_deluxe } alt='Grand Deluxe' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Grand Deluxe</h5>
                                <h6 className='card-subtitle mb-3'>R3,000 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ coral_room } alt='Coral Room' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Coral Room</h5>
                                <h6 className='card-subtitle mb-3'>R2,000 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ lagoon_room } alt='Lagoon Room' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Lagoon Room</h5>
                                <h6 className='card-subtitle mb-3'>R2,000 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ palm_room } alt='Palm Room' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Palm Room</h5>
                                <h6 className='card-subtitle mb-3'>R3,000 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ zen_room } alt='Zen Room' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Zen Room</h5>
                                <h6 className='card-subtitle mb-3'>R2,500 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='card'>
                            <img src={ loft_room } alt='Loft Room' className='img-fluid card-img-top'/>
                            <div className='card-body'>
                                <h5 className='card-title'>Loft Room</h5>
                                <h6 className='card-subtitle mb-3'>R2,500 per night</h6>
                                <a href='#' className='text-decoration-none text-dark'>
                                    Check Details <i className="fa-solid fa-arrow-right"></i> 
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </>
    )
}
export default Rooms;