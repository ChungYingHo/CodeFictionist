import styles from './index.module.css';
import Layout from '@theme/Layout';
import avatar from '../../static/img/avatar.JPG'


export default function About(){
    return(
        <Layout>
            <div className='container'>
                <div className={styles.container}>
                    <img src={avatar} className={styles.img}/>
                    <div className={styles.subContainer}>
                        <h1>Hi, I am Jeremy!</h1>
                        <p>
                            我是 Jeremy，一名前端工程師。
                            畢業於 112 大學農藝所，是個跟現在工作八竿子打不著關係的科系。
                        </p>
                        <p>
                            其實畢業的時候我也沒想過我會有一天來寫前端，在轉職時第一個考慮的也是是否要跟同學一樣去當數據工程師或資料分析師，畢竟這才是比較接近老本行技術的領域 (R 語言啊、生物統計那一些)。
                        </p>
                        <p>
                            之後在 Coursera 上上了我人生第一堂前端的課程 (那時我還尚未辭去我統一的工作)，看著那簡簡單單、樸素的作品，我感到成就感滿滿，儘管只是個簡單的 HTML 和 CSS 組成，連簡單的 JavaScript 都沒有的遜炮網站都令我開心不已，從此踏上了這條路。
                        </p>
                        <p>
                            我熱愛小說和電玩，我喜歡那種離開現實沉浸在另一個是接當令一個我的感覺。可以說我的人生少了這兩個，雖然不至於變黑白，但會少了兩個繽紛的色彩吧！<br/>
                            我曾經天馬行空地想過，人死後到底會去哪？總有其思妙想的作家會不會去到他們書中的世界 (什麼輕小說劇情 XD)？於是我一直有個夢想，就是當個小說家。
                        </p>
                        <h3>
                            CodeFictionist，寫程式的小說家，是我對未來的期望，是我對這個網站的期待！
                        </h3>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}