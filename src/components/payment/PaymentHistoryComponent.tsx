import { useEffect, useState } from "react";
import PaymentHistoryCard from "./PaymentHistoryCard";
import { getPaymentHistoryUser } from "@/services/paymentService";
import { useAuth } from "@/context/AuthProvider";
import { PaymentHistoryResponse } from "@/types/Pay";
import { useTranslation } from "react-i18next";

function PaymentHistoryComponent() {
  const { t } = useTranslation();
  const [payments, setPayments] = useState<PaymentHistoryResponse[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);
      try {
        const allPayments = await getPaymentHistoryUser(token);
        setPayments(allPayments || []);
      } catch (error) {
        console.error("Error fetching activity:", error);
        setPayments(null);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchActivity();
    }
  }, [token]);

  return (
    <div className="absolute px-2 overflow-x-hidden overflow-y-auto bg-white rounded-lg shadow-2xl min-w-64 right-5 top-20 h-96">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          {t("faq.payment.payment_history.loading")}
        </div>
      ) : payments && payments.length > 0 ? (
        payments.map((payment) => (
          <PaymentHistoryCard
            key={payment.id}
            amount={payment.amount}
            type={payment.paymentType}
            date={new Date(payment.date).toLocaleString()}
          />
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          {t("faq.payment.payment_history.there_are_no_payments")}
        </div>
      )}
    </div>
  );
}

export default PaymentHistoryComponent;
