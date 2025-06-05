import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/crisis.module.css"
import YouTubeCard from "../components/YouTubeCard";

const videoIds = [
    "Bq4EuPKRCms",
    "Xbi_4WOyLpA",
    "xO7L-EdMaDI"
];

export default function Crisis() {
    const settings = {
        className: "",
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        waitForAnimate: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    adaptiveHeight: false,
                    vertical: true,
                    verticalSwiping: true,
                    beforeChange: function (currentSlide: number, nextSlide: number) {
                        console.log("before change", currentSlide, nextSlide);
                    },
                    afterChange: function (currentSlide: number) {
                        console.log("after change", currentSlide);
                    }
                }
            },
        ]
    };

    return (
        <div className={styles.crisismain}>
            <div className={styles.sliderbox}>
                <Slider {...settings}>
                    {videoIds.map((id) => (
                        <YouTubeCard key={id} videoId={id} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}