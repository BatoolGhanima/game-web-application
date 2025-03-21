
import { Swiper, SwiperSlide } from "swiper/react";

import useGames from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import PlatformIconList from "../PlatformIconList";


// استيراد أنماط Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/SwiperCard.css"

// استيراد وحدات Swiper
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";


const SwiperCard = () => {
;
 
  const { data, isError, isLoading } = useGames();

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={-200} // تقليل المسافة بين العناصر لإعطاء تأثير التداخل
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
      
       
        
      
        {data?.map((game) => (
          <SwiperSlide key={game.id}>
            <div className="container-card  ">
            
                <img className="" src={getCroppedImageUrl(game.background_image)} alt="" />
            
            <div className="overlay-image">
                    <div className="platform-swiper ">
                        <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />
                    </div>
                
                    <h5 >
                        {game.name}{" "}
                    </h5>
            </div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
