import styles from"./BookingSummary.module.css";
import {useSelector} from "react-redux";
import {bookingSelector,priceSelector} from "../../../store/reducers/BookingReducer";
export function BookingSummary(){
    const selectedSeats=useSelector(bookingSelector);
    const seatPrice= useSelector(priceSelector);
    const totalPrice=seatPrice*(selectedSeats.length);
    return(
        <div className={styles.BookingSummary}>
            <div className={styles.item}>
                <p className={styles.itemHeader}>You have choosed seat</p>
                <h3 className={styles.itemContent}>
                    {
                        selectedSeats.map((s,i)=>
                        <span>
                            {s.toString()+(
                                i==selectedSeats.length-1 ?'':',')}
                                </span>
                            )
                            
                        }
                </h3>
            </div>
            <div className={styles.item}>
                <p className={styles.itemHeader}>Total Price</p>
                <h3 className={styles.itemContent}>{totalPrice}</h3>
            </div>
            <div className={styles.item}>
                <a href="#" className={styles.btnProceed}>Proceed</a>
            </div>

        </div>
    );
}