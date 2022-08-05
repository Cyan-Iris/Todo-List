import {React} from 'react';
import styles from './itemStyles.module.css';
export default function Items(props){
    function updateList(){
        const new_list=props.list.filter((each)=>props.id!==each.id);
        props.update(new_list);
    }
    //filter/map: return a new array with that functionality without changing the old one

   
    return(
        <div className={styles.block}>
            <div>{props.text}</div>
            <button onClick={updateList} className={styles.button}>Finish</button>

        </div>
    );

}
