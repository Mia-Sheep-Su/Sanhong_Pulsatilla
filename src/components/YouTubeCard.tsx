import styles from "../styles/YouTubeCard.module.css";

type Props = {
    videoId: string;
};

export default function YouTubeCard({ videoId }: Props) {
    return (
        <div className={styles.videobox}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}