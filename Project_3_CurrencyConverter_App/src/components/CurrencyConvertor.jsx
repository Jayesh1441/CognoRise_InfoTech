import React, { useState } from 'react'
import './CurrencyConvertor.css'
import { useEffect } from 'react';
import CurrencyDropDown from './DropDown';

function CurrencyConvertor() {

    const [currencies, setCurrencies] = useState([])
    const [amount, setAmount] = useState(1)

    const [fromcurrency, setFromCurrency] = useState("USD")
    const [tocurrency, setToCurrency] = useState("INR")
    // 'https://api.frankfurter.app/currencies';
    const fetchCurrencies = async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json();

            setCurrencies(Object.keys(data));
        } catch (error) {
            console.log("Error Fetching", error);

        }
    };

    useEffect(() => {
        fetchCurrencies();
    }, []);

    console.log(currencies);

    const convertCorrency = () => {

    }

    const handleFavorite = (currency) => {

    }
    // 'https://api.frankfurter.app/latest?amount=1&from=USD&to=INR';



    return (
        <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
            <h2 className='mb-5 text-2xl font-semibold text-gray-700'>CurrencyConvertor</h2>
            <div className="">
                <CurrencyDropDown currencies={currencies} title='From:' currency={fromcurrency} setFromCurrency={setFromCurrency} handleFavorite={handleFavorite}  />
                swap
                <CurrencyDropDown currencies={currencies} title='To:' currency={tocurrency} setToCurrency={setToCurrency} handleFavorite={handleFavorite}  />
            </div>
            <div className="mt-4">
                <label htmlFor="amount" className='block text-sm font-medium text-gray-700'>
                    Amount:
                </label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='w-ful mt-3 p-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500' />
            </div>
            <div className="flex justify-end mt-6">
                <button onClick={convertCorrency} className='px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus-within:outline-none focus:ring-2 focus:ring-indigo-500 focus-within:ring-offset-2'>Convert</button>
            </div>
            <div className="mt-4 text-lg font-medium text-right text-green-600">
                converted Amount: 69 USD
            </div>
        </div>
    )
}

export default CurrencyConvertor