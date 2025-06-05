import PhotoCard from "../components/PhotoCard";
import styles from "../styles/photopage.module.css";

const images = [
    "/banner.png",
    "/banner.png",
    "/banner.png",
    "/banner.png",
    "/banner.png",
    "/banner.png",
    "/banner.png",
    "/banner.png",
    "/banner.png",
    "/banner.png",
];

export default function PhotoPage() {
    return (
        <div className={styles.grid}>
            {images.map((src, idx) => (
                <PhotoCard key={idx} src={src} alt={`photo ${idx + 1}`} />
            ))}
        </div>
    );
}
