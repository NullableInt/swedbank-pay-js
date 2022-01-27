import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { MetaData } from "../../generics/MetaData-resource";
import { Operation } from "../../enums/operation";
import { Urls } from "../../generics/urls";
import { PaymentIntent } from "../enums/paymentIntent";
import { PrefillInfo } from "../prefillInfo";
import { Price } from "../price";

export interface MobilePayPaymentDetails {
    currency: Currency;
    description: string;
    intent: PaymentIntent;
    language: Language;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    prefillInfo: PrefillInfo;
    prices: Price[];
    urls: Urls;
    userAgent: string;
    metadata: MetaData;
}