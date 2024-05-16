import person from '../../assets/Image/about_us/person.jpg';
import parts from '../../assets/Image/about_us/parts.jpg';



const About = () => {


    return (
        <div className="hero min-h-screen bg-base-200 my-7">
        <div className="hero-content flex-col lg:flex-row ">

            <div className='flex-1 relative'>
            <img src={person} className="max-w-sm rounded-lg shadow-2xl relative" />
            <img src={parts} className="max-w-72 rounded-lg shadow-2xl absolute -bottom-14 right-16 border-8 border-indigo-600 " />
            </div>

            

          <div className='flex-1'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;