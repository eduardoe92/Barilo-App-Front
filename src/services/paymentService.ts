import axios from "axios";

import {
  PaymentForm,
  PaymentResponse,
  PaymentHistoryResponse,
} from "@/types/Pay";

const API_URL = import.meta.env.VITE_API_URL;

export const postPaymentUser = async (
  token: string,
  values: PaymentForm
): Promise<PaymentResponse | null> => {
  try {
    const response = await axios.post(`${API_URL}/payments`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al procesar el pago:", error);
    return null;
  }
};

export const handlePayment = async (
  token: string,
  paymentData: PaymentForm
): Promise<void> => {
  try {
    const response = await postPaymentUser(token, paymentData);
    console.log("Pago exitoso:", response);
  } catch (error) {
    console.error(
      "Error al realizar el pago:",
      error.response ? error.response.data : error.message
    );
  }
};

export const getPaymentHistoryUser = async (
  token: string
): Promise<PaymentHistoryResponse[] | null> => {
  try {
    const response = await axios.get(`${API_URL}/payments/history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener el historial de pagos:", error);
    return null;
  }
};
