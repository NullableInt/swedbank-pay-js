[@swedbank-pay/sdk](README.md)

# @swedbank-pay/sdk

## Index

### Classes

* [CardPayment](classes/cardpayment.md)
* [Payment](classes/payment.md)
* [PaymentOrder](classes/paymentorder.md)
* [PaymentOrderResponse](classes/paymentorderresponse.md)
* [Purchase](classes/purchase.md)
* [SwedbankBase](classes/swedbankbase.md)

### Interfaces

* [PaymentProperties](interfaces/paymentproperties.md)
* [PaymentResponse](interfaces/paymentresponse.md)

### Type aliases

* [PurchaseInput](README.md#purchaseinput)

### Variables

* [examplePrice](README.md#const-exampleprice)
* [genericResourceScope](README.md#const-genericresourcescope)
* [runOperationScope](README.md#const-runoperationscope)
* [testScope](README.md#const-testscope)

## Type aliases

###  PurchaseInput

Ƭ **PurchaseInput**: *Omit‹PaymentOrderRequestResource, "operation"›*

## Variables

### `Const` examplePrice

• **examplePrice**: *Price[]* = [
  {
    type: 'CreditCard',
    amount: 1500,
    vatAmount: 0,
  },
]

___

### `Const` genericResourceScope

• **genericResourceScope**: *Scope‹›* = nock('https://api.payex.com')
  .get('/generic-resource')
  .reply(200)

___

### `Const` runOperationScope

• **runOperationScope**: *Scope‹›* = nock('https://api.payex.com')
  .get('/test')
  .reply(200)

___

### `Const` testScope

• **testScope**: *Scope‹›* = nock('https://api.payex.com')
  .get('/test-resource')
  .reply(200, PaymentResponse)
