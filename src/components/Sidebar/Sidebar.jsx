import css from "./sidebar.module.css";
import ShopBtn from "../../components/ShopBtn/ShopBtn";
const Sidebar=()=>{
    return(
        <div className={css.container}>
        <h2 className={css.title}>Shops:</h2>
        <ul className={css.shopBtnList}>
        <li><ShopBtn>Drugs 24</ShopBtn></li>
        <li><ShopBtn>Pharmacy</ShopBtn></li>
        <li><ShopBtn>Tabletky</ShopBtn></li>
        <li><ShopBtn>Lycky</ShopBtn></li>
        <li><ShopBtn></ShopBtn></li>
        
    </ul>
    </div>
    )
}
export default Sidebar;