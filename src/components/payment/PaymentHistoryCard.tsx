import { PaymentHistoryProps } from "@/types/Pay";

function PaymentHistoryCard({ amount, type, date }: PaymentHistoryProps) {
  return (
    <div className="flex py-1 w-60">
      <div className="flex flex-col justify-between w-full p-2 bg-[#0098EF] shadow-md rounded-sm">
        <div className="flex justify-between w-full pb-1">
          <p className="text-base text-[#E4E4E4] font-primary">Pago</p>
          <h1 className="text-base text-[#E4E4E4] font-primary">
            ${amount}
          </h1>
        </div>
        <div className="flex justify-between w-full">
          <h2 className="text-xs text-[#E4E4E4] font-primary">
            {type}
          </h2>
          <h2 className="text-xs text-[#E4E4E4] font-primary">
            {date}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistoryCard;
