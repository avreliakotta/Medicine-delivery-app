import css from "./drug-item.module.css";
const DrugItem=()=>{
    return(
        <li className={css.item}>
        <img  className={css.drugImg}/>
        <h3 className={css.subtitle}></h3>
        <button type="button" className={css.addBtn}>add to Cart</button>
        </li>
    )
}
export default DrugItem;