import React, { useState } from 'react'
import { useEffect } from 'react';
import CurrencyDropDown from './DropDown';
import { HiArrowsRightLeft } from 'react-icons/hi2';

function CurrencyConvertor() {

    const [currencies, setCurrencies] = useState([])
    const [amount, setAmount] = useState(1)

    const [fromcurrency, setFromCurrency] = useState("USD")
    const [tocurrency, setToCurrency] = useState("INR")

    const [convertedAmt, setConvertedAmt] = useState(null)
    const [converting, setConverting] = useState(false)

    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || ["INR"]
    )
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

    // 'https://api.frankfurter.app/latest?amount=1&from=USD&to=INR';
    const convertCorrency = async () => {
        if (!amount) return
        setConverting(true);
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromcurrency}&to=${tocurrency}`);
            const data = await res.json();

            setConvertedAmt(data.rates[tocurrency] + " " + tocurrency)
        } catch (error) {
            console.log("Error Fetching", error);
        } finally {
            setConverting(false)
        }
    }

    const handleFavorite = (currency) => {
        let updatedFavorites = [...favorites];
        if (favorites.includes(currency)) {
            updatedFavorites = updatedFavorites.filter(fav => fav !== currency)
        }
        else{
            updatedFavorites.push(currency)
        }
        setFavorites(updatedFavorites)
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }

    const swapCurrencies = () => {
        setFromCurrency(tocurrency);
        setToCurrency(fromcurrency);
    }

    return (
        <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
            <h2 className='mb-5 text-2xl font-semibold text-gray-700'>CurrencyConvertor</h2>
            <div className="grid grid-cols-1  gap-4 items-end">
                <CurrencyDropDown favorites={favorites} currencies={currencies} title='From:' currency={fromcurrency} setCurrency={setFromCurrency} handleFavorite={handleFavorite} />
                <div className="flex justify-center -mb-5">
                    <button onClick={swapCurrencies} className='p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300'>
                        <HiArrowsRightLeft className='text-xl text-gray-700' />
                    </button>
                </div>
                <CurrencyDropDown favorites={favorites} currencies={currencies} title='To:' currency={tocurrency} setCurrency={setToCurrency} handleFavorite={handleFavorite} />
            </div>
            <div className="mt-4">
                <label htmlFor="amount" className='block text-sm font-medium text-gray-700'>
                    Amount:
                </label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='w-full mt-3 p-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500' />
            </div>
            <div className="flex justify-end mt-6">
                <button onClick={convertCorrency} className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus-within:outline-none focus:ring-2 focus:ring-indigo-500 focus-within:ring-offset-2
                ${converting ? "animate-pulse" : ""}`}>Convert</button>
            </div>
            {convertedAmt && <div className="mt-4 text-lg font-medium text-right text-green-600">
                converted Amount: {convertedAmt}
            </div>}
        </div>
    )
}

export default CurrencyConvertor