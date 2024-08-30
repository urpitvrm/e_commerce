


// import React from "react";
// import "./Banner.scss";
// import BannerImg from "../../../assets/banner-img.png";

// const Banner = () => {
//     const handleJumpToProduct = () => {
//         const jumpToProductElement = document.getElementById("jump-to-products");
//         if (jumpToProductElement) {
//             const jumpPosition = jumpToProductElement.offsetTop - 60;
//             window.scrollTo({
//                 top: jumpPosition,
//                 // behavior: "smooth" // Smooth scroll to the target position
//                 behavior:"auto", 
//             });
//         }
//     };

//     return (
//         <div className="hero-banner">
//             <div className="content">
//                 <div className="text-content">
//                     <h1>SALES</h1>
//                     <p>
//                         Convallis interdum purus adipiscing dis parturient
//                         posuere ac a quam a eleifend montes parturient posuere
//                         curae tempor
//                     </p>
//                     <div className="ctas">
//                         <div className="banner-cta">Read More</div>
//                         <div className="banner-cta v2" onClick={handleJumpToProduct}>Shop Now</div>
//                     </div>
//                 </div>
//                 <img className="banner-img" src={BannerImg} alt="" />
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    const handleJumpToProduct = () => {
        const jumpToProductElement = document.getElementById("jump-to-products");
        if (jumpToProductElement) {
            const jumpPosition = jumpToProductElement.offsetTop - 60;
            window.scrollTo({
                top: jumpPosition,
                behavior: "smooth",
            });
        }
    };

    const handleReadMore = () => {
        const lastPage = document.body.scrollHeight;
        window.scrollTo({
            top: lastPage,
            behavior: "smooth",
        });
    };

    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={handleReadMore}>Read More</div>
                        <div className="banner-cta v2" onClick={handleJumpToProduct}>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;

