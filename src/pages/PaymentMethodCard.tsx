import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';

const PaymentMethodCard = () => {

    const { t } = useTranslation()

    const navigate = useNavigate();

    const location = useLocation();
    const { stepOneData, stepTwoData, stepThreeData, stepFourData } = location.state || {};
    const [method, setCardNumber] = useState('');

    console.log(stepOneData, stepTwoData, stepThreeData, stepFourData);

    const handlePaymentMethodClick = () => {
        navigate(`/payment`, {
            state: { stepOneData, stepTwoData, stepThreeData, stepFourData, method },
          });
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
        const { name, value } = e.target; // Desestructuración para obtener el nombre y el valor
        
        let formattedValue = value;
            if (name === "expiry") {
                formattedValue = value.replace(/\D/g, '');
            if (formattedValue.length >= 2) {
                formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
            }
        }

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));

        // Si el nombre del input es "number", actualiza cardNumber
        if (name === 'number') {
            setCardNumber(value);
        }
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }


    return (
        <div className="flex flex-col items-center mb-16 card md:mx-36 lg:mx-44 xl:mx-80">
            <div className="flex items-center justify-center my-8">
                <button className="absolute pb-1 text-2xl left-6 text-secondary-celeste" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
                <h1 className="text-2xl font-semibold text-secondary-celeste font-primary">{t('views_payment.payment_method_card.title')}</h1>
            </div>
            <div className="flex flex-col justify-center w-full m-auto card-body">

                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form className='mx-6 mt-6 2xl:max-w-5xl 2xl:mx-96'>
                    <div className="flex flex-col form-group">
                        <label htmlFor="name">{t('views_payment.payment_method_card.cardholder_name')}</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength={30}
                            className="form-control h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-primary text-secondary-celeste border shadow-lg border-primary-blue"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="flex flex-col form-group">
                        <label htmlFor="number">{t('views_payment.payment_method_card.number_card')}</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            maxLength={16}
                            className="form-control h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-primary text-secondary-celeste border shadow-lg border-primary-blue"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="flex justify-between form-row">
                        <div className="flex flex-col form-group col-md-6">
                            <label htmlFor="expiry">{t('views_payment.payment_method_card.expiration_date')}</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength={5}
                                className="form-control w-36 h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-primary text-secondary-celeste border shadow-lg border-primary-blue"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="flex flex-col form-group col-md-6">
                            <label htmlFor="cvc">{t('views_payment.payment_method_card.cvc')}</label>
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength={4}
                                className="form-control w-28 h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-primary text-secondary-celeste border shadow-lg border-primary-blue"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center py-5">
                        <button onClick={() => handlePaymentMethodClick()} className="w-64 h-11 bg-[--secondary-celeste] text-[--active-button-text] rounded-3xl">{t('views_payment.payment_method_card.save_card')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default PaymentMethodCard;