import img from '../images/bannerimages.jpg'

import Category from "./category";

const Home = () => {
    return (

        <div className="home"  >
            < Category />
            <img src={img} style={{ width: "100%", height: "200px" }} alt="" />
        </div >
    );
}

export default Home;