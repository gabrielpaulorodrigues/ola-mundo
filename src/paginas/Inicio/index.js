import Banner from "componentes/banner";
import styles from "./Inicio/Inicio.module.css"

import posts from 'assets/posts.json'

export default function Inicio(){
    return (
        <main>
        <Banner/>

        <ul className={styles.posts}>
            {posts.map((post) => (  
                <li key={post.id}>
                    Post...
                </li>
            ))}
        </ul>

        </main>
    )
}