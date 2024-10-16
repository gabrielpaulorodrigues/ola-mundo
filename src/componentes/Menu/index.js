import { Link} from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

export default function Menu(){
    
    

    console.log(localizacao)

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink>
                    Inicio
                </MenuLink>
                <Link className={styles.link} to='/sobremim'>
                    Sobre mim 
                </Link>
            </nav>
        </header>
    )
}