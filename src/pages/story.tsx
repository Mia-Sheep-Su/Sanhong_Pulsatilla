import styles from "../styles/story.module.css"

export default function Story() {
    return (
        <div className={styles.mainbox}>
            <div className={styles.img}></div>
            <div className={styles["info-card"]}>
                <div className={styles["info-title"]}>
                    <h3>傳說中<span /></h3>
                </div>
                <p>有一年，有很長的時間都沒下過雨，火紅的太陽把鳥兒們給害苦了。牠們為了喝上一口水，每次都要飛到離樹林非常非常遙遠的那條大河去，一來一回，累得渾身酸痛，往往回到樹林口又渴了。
                    當時，一隻白鶴想出了個主意：「我們從河邊開始向這裏啄出一條河道，水流過來，不是就省力多了嗎？」大家一聽，妙極了！只有一隻鳥心裏嘀咕著說：「要啄那麼長的一條河道，太辛苦了！我才不幹呢。」
                    牠偷偷地把自己的頭髮染成了白色，然後對大家說：“我老了，頭髮都白了！幹不動了。”大家拿它沒辦法，只好隨它去了。河道啄成之後，鳥兒們又有水喝了。牠們盡情地歌唱，以慶祝自己的勞動成果。
                    只有那隻染白了頭的鳥，不敢飛也不敢唱。因為怕別人笑話，只能把頭深深地埋藏起來。而牠頭上的白顏色洗也洗不掉了，從此，人們就叫它“白頭翁”。</p>

            </div>
            <p>來源:<a href="https://www.epochtimes.com/b5/5/11/3/n1107646.htm">https://www.epochtimes.com/b5/5/11/3/n1107646.htm</a></p>
        </div>
    );
}