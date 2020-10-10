import React, { useContext } from 'react';
import { CashContext } from '../../App';

const CashMemo = () => {

    const [cashMemoInfo, setCashMemoInfo] = useContext(CashContext);

    const totalPrice = cashMemoInfo.product1Quantity * cashMemoInfo.product1Price + cashMemoInfo.product2Quantity * cashMemoInfo.product2Price + cashMemoInfo.product3Quantity * cashMemoInfo.product3Price + cashMemoInfo.product4Quantity * cashMemoInfo.product4Price + cashMemoInfo.product5Quantity * cashMemoInfo.product5Price + cashMemoInfo.product6Quantity * cashMemoInfo.product6Price + cashMemoInfo.product7Quantity * cashMemoInfo.product7Price;

    return (
        <div className="container">
            <h3>ক্রেতার নামঃ {cashMemoInfo.clientName}</h3>
            <h3>ক্রেতার বয়সঃ {cashMemoInfo.clientAge}</h3>
            <h3>ক্রেতার ঠিকানাঃ {cashMemoInfo.clientAddress}</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">প্রোডাক্টের নাম</th>
                        <th scope="col">একক দাম (৳)</th>
                        <th scope="col">পরিমাণ</th>
                        <th scope="col">দাম</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cashMemoInfo.product1Name}</td>
                        <td>{cashMemoInfo.product1Price}</td>
                        <td>{cashMemoInfo.product1Quantity}</td>
                        <td>{cashMemoInfo.product1Quantity * cashMemoInfo.product1Price}</td>
                    </tr>
                    <tr>
                        <td>{cashMemoInfo.product2Name}</td>
                        <td>{cashMemoInfo.product2Price}</td>
                        <td>{cashMemoInfo.product2Quantity}</td>
                        <td>{cashMemoInfo.product2Quantity * cashMemoInfo.product2Price}</td>
                    </tr>
                    <tr>
                        <td>{cashMemoInfo.product3Name}</td>
                        <td>{cashMemoInfo.product3Price}</td>
                        <td>{cashMemoInfo.product3Quantity}</td>
                        <td>{cashMemoInfo.product3Quantity * cashMemoInfo.product3Price}</td>
                    </tr>
                    <tr>
                        <td>{cashMemoInfo.product4Name}</td>
                        <td>{cashMemoInfo.product4Price}</td>
                        <td>{cashMemoInfo.product4Quantity}</td>
                        <td>{cashMemoInfo.product4Quantity * cashMemoInfo.product4Price}</td>
                    </tr>
                    <tr>
                        <td>{cashMemoInfo.product5Name}</td>
                        <td>{cashMemoInfo.product5Price}</td>
                        <td>{cashMemoInfo.product5Quantity}</td>
                        <td>{cashMemoInfo.product5Quantity * cashMemoInfo.product5Price}</td>
                    </tr>
                    <tr>
                        <td>{cashMemoInfo.product6Name}</td>
                        <td>{cashMemoInfo.product6Price}</td>
                        <td>{cashMemoInfo.product6Quantity}</td>
                        <td>{cashMemoInfo.product6Quantity * cashMemoInfo.product6Price}</td>
                    </tr>
                    <tr>
                        <td>{cashMemoInfo.product7Name}</td>
                        <td>{cashMemoInfo.product7Price}</td>
                        <td>{cashMemoInfo.product7Quantity}</td>
                        <td>{cashMemoInfo.product7Quantity * cashMemoInfo.product7Price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{totalPrice}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => window.print()} className="btn btn-primary mb-5">ক্যাশ মেমো প্রিন্ট করুন</button>
        </div>
    );
};

export default CashMemo;