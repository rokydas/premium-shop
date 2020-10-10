import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CashContext } from '../../App';
import { products } from '../ProductList/ProductList';
import ProductRow from '../ProductRow/ProductRow';
import './Home.css';

const Home = () => {

    const history = useHistory();

    const [ cashMemoInfo, setCashMemoInfo ] = useContext(CashContext);

    const handleOnBlur = (e) => {
        const newCashMemoInfo = {...cashMemoInfo};
        newCashMemoInfo[e.target.name] = e.target.value;
        setCashMemoInfo(newCashMemoInfo);
    }   

    const handleSubmit = () => {
        const newCashMemoInfo = {...cashMemoInfo}
        newCashMemoInfo.isCash = true;
        setCashMemoInfo(newCashMemoInfo);
        history.replace('/cash-memo');
    }

    return (
        <div className="container">
            <br/>
            <h3>নিচের প্রোডাক্ট গুলো থেকে পছন্দমত প্রোডাক্ট গুলোর প্ররিমাণ ও কাস্টমারের তথ্য ইনপুট দিয়ে কাস্টমারের জন্য ডিজিটাল ক্যাশ মেমো প্রিন্ট করুন</h3>
            <form>
                <input onBlur={handleOnBlur} className="form-control" type="text" placeholder="কাস্টমারের নাম" name="clientName"/><br/>
                <input onBlur={handleOnBlur} className="form-control" type="text" placeholder="কাস্টমারের বয়স" name="clientAge"/><br/>
                <input onBlur={handleOnBlur} className="form-control" type="text" placeholder="কাস্টমারের ঠিকানা" name="clientAddress"/><br/>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">প্রোডাক্টের নাম</th>
                        <th scope="col">একক দাম (৳)</th>
                        <th scope="col">পরিমাণ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p => <ProductRow product={p} key={p.id} />))
                    }
                </tbody>
            </table>
            <button onClick={handleSubmit} className="btn btn-primary mb-5">ক্যাশ মেমো তৈরি করুন</button>
        </div>
    );
};

export default Home;