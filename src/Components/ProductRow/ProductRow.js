import React, { useContext } from 'react';
import { CashContext } from '../../App';

const ProductRow = ({ product }) => {

    const { id, name, price } = product;
    const quantity = 0;

    const {cash} = useContext(CashContext);
    const [cashMemoInfo, setCashMemoInfo] = cash;

    const handleOnBlur = (event) => {
        const newCashMemoInfo = cashMemoInfo;
        for (let i = 0; i < newCashMemoInfo.length; i++) {
            const element = newCashMemoInfo[i];
            if(element.id === id) {
                element.quantity = Number(event.target.value);
            }
        }
        setCashMemoInfo(newCashMemoInfo);
    } 

    const handleOnChange = () => {

    }

    return (
        <tr>
            <td>{name}</td>
            <td><input onChange={handleOnChange} className="form-control" type="number" value={price} /></td>
            <td><input onBlur={handleOnBlur} className="form-control" type="number" defaultValue={quantity} /></td>
        </tr>
    );
};

export default ProductRow;