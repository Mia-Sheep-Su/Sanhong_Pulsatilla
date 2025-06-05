import styles from "../styles/indexpage.module.css"

export default function Index() {
    return (
        <div className={styles.main}>
            <div className={styles.kvbox}>
                <div className={styles.textbox}>
                    <h2 className={styles["main-title"]}>白頭翁 (Chinese bulbul)</h2>
                    <p className={styles["main-desc"]}>又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</p>
                </div>
            </div>
            <div className={styles["main-overlay"]}>
                <div className={styles["info-grid"]}>
                    <div className={styles["info-card"]}>
                        <div className={styles["info-title"]}>
                            <h3>外觀<span /></h3>
                        </div>
                        <p>白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。</p>
                    </div>
                    <div className={styles["info-card"]}>
                        <div className={styles["info-title"]}>
                            <h3>棲地<span /></h3>
                        </div>
                        <p>白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。</p>
                    </div>
                    <div className={styles["info-card"]}>
                        <div className={styles["info-title"]}>
                            <h3>食性<span /></h3>
                        </div>
                        <p>以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。</p>
                    </div>
                </div>
            </div>
        </div>
    );
}