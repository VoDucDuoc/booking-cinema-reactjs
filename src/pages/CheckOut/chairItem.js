import React, {useState} from 'react'
import { addChair } from '../../actions/checkoutAction';
import { useDispatch } from "react-redux";

export default function ChairItem(props) {
    const {chair} = props;
    const status = chair.daDat;
    const dispatch = useDispatch()
    const [isSelected, setIsSelected] = useState(false);
    return (
        <>
          {status ? <button
          style={{cursor: 'not-allowed'}}
          
          disabled
          className={`chairs__item btn chairs__item-booked`}
        >
          {chair.tenGhe}
        </button> : <button
          onClick={() => {
            dispatch(addChair(chair.maGhe, chair.giaVe));
            setIsSelected(!isSelected);
          }}
          className={`chairs__item btn ${isSelected ? 'chairs__item-selected' : ''}`}
        >
          {chair.tenGhe}
        </button>}
        </>
    )
}
