import React from "react";
import { CheckoutWithCard } from "@paperxyz/react-client-sdk";


const checkout = () => {
  return (
 
<CheckoutWithCard
  configs={
  "contractId": "914d6c3b-1f67-45e5-9694-c4170b2c868b",
  "walletAddress": "0xc8186a3044D311eec1C1b57342Aaa290F6d90Aa5",
  "title": "Hello World",
  "mintMethod": {
    "name": "claimTo",
    "args": {
      "_to": "$WALLET",
      "_quantity": "$QUANTITY",
      "_tokenId": 0
    },
    "payment": {
      "currency": "MATIC",
      "value": "0.0001  * $QUANTITY"
    }
  }
}
  onPaymentSuccess={(result) => console.log(result)}
  onReview={(result) => console.log(result)}
  onError={(error) => console.error(error)}
  options={{
    colorBackground: '#F7F0FF',
    colorPrimary: '#7371FC',
    colorText: '#222222',
    borderRadius: 6,
    inputBackgroundColor: '#F5EFFF',
    inputBorderColor: '#7371FC',
  }}
/>

  );
};
export default checkout;
