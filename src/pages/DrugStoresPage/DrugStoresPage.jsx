import css from "./drug-stores-page.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainPart from "../../components/MainPart/MainPart";
const DrugStoresPage=()=>{
    return(
        <div className={css.container} >
       <Sidebar/>
       <MainPart/>
        </div>
    )
}
export default DrugStoresPage;