import children from '../../../assets/qZone1.png';
import classroom from '../../../assets/qZone2.png'
import playground from '../../../assets/qZone3.png';
const Qzone = () => {
    return (
        <div>
           <h3>QZone</h3> 
           <img src={children} alt="" />
           <img src={classroom} alt="" />
           <img src={playground} alt="" />
        </div>
    );
};

export default Qzone;