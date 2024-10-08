import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const PaymentMethodCard = () => {

    const { t } = useTranslation()

    const navigate = useNavigate();

    const handlePaymentMethodClick = () => {
        navigate(`/payment`);
      };

    type Focused = 'number' | 'expiry' | 'cvc' | 'name' | undefined;

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: undefined as Focused
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

    const processPayment = () => {
        console.log("number => ", state.number)
        console.log("name => ", state.name)
        console.log("expiry => ", state.expiry)
        console.log("cvc => ", state.cvc)
        console.log(JSON.stringify(state))
    }

    return (
        <div className="card">
            <div className="flex justify-center items-center my-8">
                <button className="absolute left-6 pb-1 text-[--secondary-celeste] text-2xl"><IoIosArrowBack /></button>
                <h1 className="text-2xl text-[--secondary-celeste] font-['League_Spartan'] font-semibold">{t('views_payment.payment_method_card.title')}</h1>
            </div>
            <div className="card-body">

                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form className='mt-6 mx-6'>
                    <div className="form-group flex flex-col">
                        <label htmlFor="name">{t('views_payment.payment_method_card.cardholder_name')}</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength={30}
                            className="form-control h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-['League_Spartan'] text-[--secondary-celeste]"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group flex flex-col">
                        <label htmlFor="number">{t('views_payment.payment_method_card.number_card')}</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            maxLength={16}
                            className="form-control h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-['League_Spartan'] text-[--secondary-celeste]"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-row flex justify-between">
                        <div className="form-group col-md-6 flex flex-col">
                            <label htmlFor="expiry">{t('views_payment.payment_method_card.expiration_date')}</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength={4}
                                className="form-control w-36 h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-['League_Spartan'] text-[--secondary-celeste]"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group col-md-6 flex flex-col">
                            <label htmlFor="cvc">{t('views_payment.payment_method_card.cvc')}</label>
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength={4}
                                className="form-control w-28 h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-['League_Spartan'] text-[--secondary-celeste]"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-center py-10">
                        <button onClick={() => handlePaymentMethodClick()} className="w-64 h-11 bg-[--secondary-celeste] text-[--active-button-text] rounded-3xl">{t('views_payment.payment_method_card.save_card')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default PaymentMethodCard;