import {Link } from "react-router-dom";
import styles from "./header.module.css"
function Header (){

    return(
<div className={styles.header}>
    <Link to ="/" className={styles.logo}>Watchew?</Link>
        <ul className={`nav`}>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/">New</Link></li>
            <li><Link to="/">인기</Link></li>
            <li><Link to="/">시청목록</Link></li>
        </ul>
        <input type="text" />
    </div>
    )
    
}

export default Header