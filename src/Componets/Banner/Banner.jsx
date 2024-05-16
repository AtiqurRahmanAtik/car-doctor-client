import photo_1 from '../../assets/Image/banner/1.jpg';
import photo_2 from '../../assets/Image/banner/2.jpg';
import photo_3 from '../../assets/Image/banner/3.jpg';
import photo_4 from '../../assets/Image/banner/4.jpg';
import photo_5 from '../../assets/Image/banner/5.jpg';

const Banner = () => {

    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={photo_1} className="w-full" />
          <div className="absolute bottom-3 left-7 space-y-3">
           <div className='space-y-3'>
           <h2 className='text-2xl text-red-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Totam, rerum ipsam ullam quis aliquam libero.</h2>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Earum atque consequatur, sed iure provident veniam nostrum maiores dolorem itaque. Eos.</p>

            <div className='flex gap-4'>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
            </div>

           
           <div className='relative  bottom-4 py-4 space-x-3'>
           <a href="#slide4" className="btn btn-circle bg-red-700">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-700">❯</a>
           </div>

           </div>
          </div>
        </div> 

     


        <div id="slide2" className="carousel-item relative w-full">
          <img src={photo_2} className="w-full" />
          <div className="absolute flex gap-3 transform -translate-y-1/2 bottom-7 right-5">
            <a href="#slide1" className="btn btn-circle bg-red-700">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-red-700">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={photo_3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={photo_4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;