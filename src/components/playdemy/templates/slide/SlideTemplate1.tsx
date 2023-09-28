import React from 'react';


interface SlideTemplate1Props {
    heading: string;
}


const SlideTemplate1: React.FC<SlideTemplate1Props> = ({ heading }) => {
    return (
        <div id="ib_temp1"
             className="slide-content-flex ib_temp"
             style={{ display: "flex" }}>
            {/* Bg Image */}
            <div id="t1_bg_image"
                    className="slide-img"
                    style={{backgroundImage: 'linear-gradient(rgba(35, 35, 47, 0.8), rgba(35, 35, 47, 0.8)), url("https://uploads-ssl.webflow.com/64a5aee90eaa7440ca8f5993/65007674629a8e7b6c2f5f16_slide1_img.jpg")', opacity: "1"}}>
            </div>
            <div className="slide_content_div">
                <div className="w-layout-blockcontainer slide_container w-container">
                    <div className="title_toc_slide_div">
                        <div className="t1_left_title"
                             style={{ opacity: "1" }}>
                            <div className="title_left_div"></div>
                            {/* Heading */}
                            <div id="t1_l_title"
                                 className="t2_right_title-2">
                                {heading}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SlideTemplate1;
