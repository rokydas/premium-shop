import React, { useContext } from 'react';
import { CashContext } from '../../App';
import CashRow from '../CashRow/CashRow';

const CashMemo = () => {

    const { client, cash } = useContext(CashContext);
    const [clientInfo] = client;
    const [cashMemoInfo] = cash;

    // const totalPrice = cashMemoInfo.product1Quantity * cashMemoInfo.product1Price + cashMemoInfo.product2Quantity * cashMemoInfo.product2Price + cashMemoInfo.product3Quantity * cashMemoInfo.product3Price + cashMemoInfo.product4Quantity * cashMemoInfo.product4Price + cashMemoInfo.product5Quantity * cashMemoInfo.product5Price + cashMemoInfo.product6Quantity * cashMemoInfo.product6Price + cashMemoInfo.product7Quantity * cashMemoInfo.product7Price;
    let totalPrice = 0;
    for (let i = 0; i < cashMemoInfo.length; i++) {
        const element = cashMemoInfo[i];
        totalPrice += element.price * element.quantity;
    }

    return (
        <div className="container">
            <h3 className="mt-5">ক্রেতার নামঃ {clientInfo.clientName}</h3>
            <h3>ক্রেতার বয়সঃ {clientInfo.clientAge}</h3>
            <h3 className="mb-5">ক্রেতার ঠিকানাঃ {clientInfo.clientAddress}</h3>
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
                    {
                        cashMemoInfo.map(cashInfoSingle => <CashRow cashInfoSingle={cashInfoSingle} key={cashInfoSingle.id} />)
                    }
                    <tr>
                        <td></td><td></td><td></td>
                        <td>মোটঃ {totalPrice}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => window.print()} className="btn btn-primary mb-5">ক্যাশ মেমো প্রিন্ট করুন</button>
        </div>
    );
};

export default CashMemo;