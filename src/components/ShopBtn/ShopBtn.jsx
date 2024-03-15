import css from "./shop-btn.module.css";
const ShopBtn=({children})=>{
    return(
<button type="type" className={css.shopBtn}>{children}</button>
    )
}
export default ShopBtn;
