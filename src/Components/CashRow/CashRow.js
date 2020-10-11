import React from 'react';

const CashRow = ({ cashInfoSingle }) => {
    const quantity = cashInfoSingle.quantity;
    return (
        <>
            {quantity > 0 && <tr>
                <td>{cashInfoSingle.name}</td>
                <td>{cashInfoSingle.price}</td>
                <td>{cashInfoSingle.quantity}</td>
                <td>{cashInfoSingle.price * cashInfoSingle.quantity}</td>
            </tr>
            }
        </>

    );
};

export default CashRow;