import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    // const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount, showCart, setShowCart } = useContext(Context);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

     const handleJumpToProduct = () => {
        const jumpToProductElement = document.getElementById("jump-to-category");
        if (jumpToProductElement) {
            const jumpPosition = jumpToProductElement.offsetTop - 70;
            window.scrollTo({
                top: jumpPosition,
                behavior: "auto",
            });
        }
    };
    const handlejumptolast=()=>{
        const lastPage = document.body.scrollHeight;
        window.scrollTo({
            top: lastPage,
            behavior: "smooth",
        });
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return <> <header
        className={`main-header ${scrolled ? "sticky-header" : ""}`}
    >
        <div className="header-content">
            <ul className="left">
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={()=>handlejumptolast()}>About</li>
                <li onClick={()=>handleJumpToProduct()}>Catergories</li>
            </ul>
            <div className="center" onClick={() => navigate("/")}>SAYSSTORE</div>
            <div className="right">
                <TbSearch onClick={() => setShowSearch(true)} />
                <AiOutlineHeart />
                <span className="cart-icon" onClick={() => setShowCart(true)}>
                    <CgShoppingCart />
                    {!!cartCount && <span>{cartCount}</span>}
                </span>
            </div>
        </div>
    </header>
        {showCart && <Cart setShowCart={setShowCart} />}
        {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
};

export default Header;
