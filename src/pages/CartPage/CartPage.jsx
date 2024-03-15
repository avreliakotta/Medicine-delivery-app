import css from "./cart-page.module.css";
const CartPage=()=>{
    return(
<div className={css.container}>
<div className={css.mainWrapper}>
<div className={css.formWrapper}>
    <form className={css.formOrder}>
        <div className={css.inputWrapper}>
        <label htmlFor="name" className={css.inputLabel}>Name</label>
        <input type="text" id="name" name="name" autoComplete="off" className={css.input}/>
        </div>
        <div className={css.inputWrapper}>
        <label htmlFor="email" className={css.inputLabel}>Email</label>
        <input type="email" id="email" name="email" autoComplete="off" className={css.input}/>
        </div>
        <div className={css.inputWrapper}>
        <label htmlFor="phone" className={css.inputLabel}>Phone</label>
        <input type="text" id="phone" name="phone" autoComplete="off" className={css.input}/>
        </div>
        <div className={css.inputWrapper}>
        <label htmlFor="address" className={css.inputLabel}>Address</label>
        <input type="text" id="address" name="address" autoComplete="off" className={css.input}/>
        </div>
    </form>
</div>

<div className={css.cartWrapper}>
<ul></ul>
</div>
</div>
<div className={css.wrapper}>
    <p>Total price: </p>
    <button type="submit" className={css.submitBtn}>Submit</button>
</div>

</div>
    )
}
export default CartPage;