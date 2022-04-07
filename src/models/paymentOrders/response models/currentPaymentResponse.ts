import { CurrentPayment } from "../currentPayment";

export interface CurrentPaymentResponse {
    paymentOrder: URL;
    menuElementName: string;
    payment: CurrentPayment;
}