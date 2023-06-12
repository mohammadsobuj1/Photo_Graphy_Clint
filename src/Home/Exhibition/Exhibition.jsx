import { FaCameraRetro, FaPhotoVideo } from 'react-icons/fa';
import './Gallarey.css'
import HeaderSection from '../../Components/AuthProvider/HeaderSection/HeaderSection';



const Exhibition = () => {
    return (
        <div className='body py-32'>
            <div className="">
                {/* <FaPhotoVideo className='text-2xl md:text-5xl text-orange-400 ' /> */}
                {/* <h1 className=' text-2xl md:text-5xl  font-italic font-bold uppercase underline text-red-500'> exhibition our Super Hero's</h1> */}
                <HeaderSection header={'Photo Showcase'}/>
               
            </div>
            <div className="gallery w-[100%] mx-auto mt-16">
                <span style={{ '--i': 1 }}><img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais" alt="" /></span>
                <span style={{ '--i': 2 }}><img src="https://img.freepik.com/premium-photo/professional-photography-man-take-photo-sunset-sunrise-dramatic-sky-tropical-sea-phuket-thailand_34362-907.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 3 }}><img src="https://img.freepik.com/free-photo/vinatge-camera-with-bokeh-nature-blackground_1150-18221.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 4 }}><img src="https://img.freepik.com/free-photo/silhouette-photographer-who-shoots-sunset-mountains_1150-7357.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=ais" alt="" /></span>


                <span style={{ '--i': 5 }}><img src="https://img.freepik.com/free-photo/professional-photographer-takes-photos-with-camera-tripod-rocky-peak-sunset-dark-tone_335224-432.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 6 }}><img src="https://img.freepik.com/free-photo/skogafoss-waterfall-iceland-guy-red-jacket-looks-skogafoss-waterfall_335224-593.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 7 }}><img src="https://img.freepik.com/premium-photo/woman-taking-photo-forest-with-camera_771703-5606.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 8 }}><img src="https://img.freepik.com/free-photo/person-wearing-yellow-jacket-standing-mesmerizing-waterfall_181624-16503.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais" alt="" /></span>

            </div>



        </div>
    );
};

export default Exhibition;