import { Amount } from "../generics/amount";
import { Currency } from "../currency";
import { Language } from "../language";
import { Operation } from "../enums/operation";
import { PaymentInstrument } from "../enums/paymentInstrument";
import { CancellationListResponse } from "../paymentInstruments/transactions/cancellationListResponse";
import { CaptureListResponse } from "../paymentInstruments/transactions/captureListResponse";
import { PaymentIntent } from "../paymentInstruments/enums/paymentIntent";
import { PriceListResponse } from "../paymentInstruments/priceListResponse";
import { ReversalListResponse } from "../paymentInstruments/transactions/reversalListResponse";
import { TransactionListResponse } from "../paymentInstruments/transactions/transactionListResponse";
import { State } from "../enums/state";
import { Urls } from "../generics/urls";
import { PaymentAuthorizationResponse } from "./response models/paymentAuthorizationResponse";
import { PaymentOrderPayeeInfo } from "./paymentOrderPayeeInfo";
import { SaleListResponse } from "./saleListResponse";
import { BaseModel } from "../generics/baseModel";
import * as v from 'class-validator';
import { Type } from "class-transformer";
import { CardPaymentAuthorizationResponse } from "../paymentInstruments/card/cardPaymentAuthorizationResponse";

export class CurrentPayment extends BaseModel{
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.ValidateNested()
    @Type(() =>CardPaymentAuthorizationResponse)
    authorizations: PaymentAuthorizationResponse;
    
    @v.ValidateNested()
    @Type(() => CancellationListResponse)
    cancellations: CancellationListResponse;
    
    @v.ValidateNested()
    @Type(() => CaptureListResponse)
    captures: CaptureListResponse;

    @v.IsString()
    created: string;

    @v.ValidateNested()
    @Type(() => Currency)
    currency: Currency;

    @v.IsString()
    description: string;

    @v.IsEnum(PaymentInstrument)
    instrument: PaymentInstrument;
    
    @v.IsEnum(PaymentIntent)
    intent: PaymentIntent;

    @v.ValidateNested()
    @Type(() => Language)
    language: Language;

    @v.IsNumber()
    number: number;
    
    @v.IsEnum(Operation)
    operation: Operation;

    @v.ValidateNested()
    @Type(() => PaymentOrderPayeeInfo)
    payeeInfo: PaymentOrderPayeeInfo;

    @v.IsString()
    payerReference: string;

    @v.IsString()
    paymentToken: string;

    @v.ValidateNested()
    @Type(() => PriceListResponse)
    prices: PriceListResponse;

    
    @v.ValidateNested()
    @Type(() => ReversalListResponse)
    reversals: ReversalListResponse;
    
    @v.ValidateNested()
    @Type(() =>SaleListResponse)
    sales: SaleListResponse;
    
    @v.IsEnum(State)
    state: State;
    
    @v.ValidateNested()
    @Type(() =>TransactionListResponse)
    transactions: TransactionListResponse;

    @v.IsString()
    updated: string;
    
    @v.ValidateNested()
    @Type(() =>Urls)
    urls: Urls;
    
    @v.IsString()
    userAgent: string;
}