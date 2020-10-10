import React, { useContext } from 'react';
import { CashContext } from '../../App';

const ProductRow = ({ product }) => {

    const { id, name, price } = product;
    const quantity = 0;

    const [ cashMemoInfo, setCashMemoInfo ] = useContext(CashContext);

    const handleOnBlur = (e) => {
        const newCashMemoInfo = {...cashMemoInfo};
        newCashMemoInfo[e.target.name] = Number(e.target.value);
        setCashMemoInfo(newCashMemoInfo);
    } 

    const handleOnChange = () => {

    }

    return (
        <tr>
            <td>{name}</td>
            <td><input onChange={handleOnChange} className="form-control" type="number" name='price' value={price} /></td>
            <td><input onBlur={handleOnBlur} className="form-control" type="number" name={`product${id}Quantity`} defaultValue={quantity} /></td>
        </tr>
    );
};

export default ProductRow;