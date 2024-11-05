export interface PaymentProps {
  name: string;
  info: string;
  img: string;
  price: number;
}

export interface PaymentHistoryProps {
  amount: number;
  type: string;
  date: string;
}

export interface PaymentResponse {
  id: number;
  amount: number;
  paymentType: string;
  date: Date;
  userId: number;
}

export interface PaymentHistoryResponse {
  id: number;
  amount: number;
  paymentType: string;
  date: Date;
}

export type PaymentForm = {
  amount: number;
  paymentType: string;
  date: Date;
  userId: number;
};

export type UserProfile = {
  id: string | number;
};
