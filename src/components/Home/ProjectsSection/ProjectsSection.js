import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-3.png';
import slide4 from '../../../images/carousel-4.png';
import slide5 from '../../../images/carousel-5.png';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProjectsSection = () => {
    return (
      <section style={{padding:'100px 200px'}} className="container-fluid bg-color-dark " >
            <h2 style={{fontSize:'40px'}} className="text-center text-white mb-5 ">Here are some of <span style={{color:'#3F760B'}} >Our Works</span> </h2>
                <div className="pt-5" >
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        //navigation
                        autoplay={{delay:4000}}
                        pagination={{ clickable: true}}
                        //scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide >
                            <img style={{height:'220px',width:'300px'}} src={slide1} alt="" className="img-fluid"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{height:'220px',width:'300px'}} src={slide2} alt="" className="img-fluid"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{height:'220px',width:'300px'}} src={slide3} alt="" className="img-fluid"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{height:'220px',width:'300px'}} src={slide4} alt="" className="img-fluid"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{height:'220px',width:'300px'}} src={slide5} alt="" className="img-fluid"/>
                        </SwiperSlide>
                        
            
                   </Swiper>
                </div>
            
    </section>
    );
};

export default ProjectsSection;