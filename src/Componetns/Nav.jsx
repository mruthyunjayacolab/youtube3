import imgs from '../images/youtube.png';
import notification from '../images/notification.png';
import videos from '../images/video.png';
import '../style/nav.css';

const Nav = () => {
    return (

        <div className="nav">
            <div className="logo">
                <img src={imgs} style={{ height: "60px" }} className="" alt="" />
            </div>
            <div className="search"><input type="text" placeholder='Search' /></div>
            <div className="userOptions">

                <img src={videos} style={{ height: "40px", paddingTop: "20px" }} class="not" alt="" />

                <img src={notification} style={{ height: "30px", marginLeft: "10px", paddingTop: "20px" }} class="not" alt="" />
                <p class="tex" style={{ fontSize: "18px", marginLeft: "10px", 'borderRadius': '60px', backgroundColor: "Green", }} >M</p>
            </div>
        </div >
    );
}

export default Nav;