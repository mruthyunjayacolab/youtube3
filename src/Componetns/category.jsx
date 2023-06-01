import '../style/category.css'

const Category = () => {

    let categories = [
        { link: "All" },
        { link: "Sports" },
        { link: "Comdey" },
        { link: "Fashion" },
        { link: "Vlogs" },
        { link: "Movies" },
        { link: "Travels " },
        { link: "Movies " },
        { link: "Boolways  " },
        { link: "REacenty Uploded  " },

    ]
    return (

        <div className="Category">

            <ul>

                {
                    categories.map((x) => (


                        <li><a href="#">{x.link}</a></li>

                    ))
                }
            </ul>


        </div >
    );
}

export default Category;