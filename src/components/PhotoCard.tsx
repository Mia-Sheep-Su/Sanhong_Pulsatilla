import styles from "../styles/PhotoCard.module.css"

type Props = {
    src: string;
    alt?: string;
};

export default function PhotoCard({ src, alt = "" }: Props) {
    return (
        <div className={styles.card}>
            <img src={src} alt={alt} className={styles.image} />
        </div>
    );
}