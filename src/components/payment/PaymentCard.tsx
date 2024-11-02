import { PaymentProps } from "@/types/Pay";

function PaymentCard({ name, info, img }: PaymentProps) {
  return (
    <div className="flex px-6 py-3">
      <img src={img} alt="" className="object-cover w-20 h-20 rounded-full" />
      <div className="flex flex-col justify-center px-4">
        <h1 className="text-base text-secondary-celeste font-primary">
          {name}
        </h1>
        <h2 className="text-xs text-[--background-dark] font-primary">
          {info}
        </h2>
      </div>
    </div>
  );
}

export default PaymentCard;
