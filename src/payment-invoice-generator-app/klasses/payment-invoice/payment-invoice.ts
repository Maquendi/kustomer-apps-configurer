import { Klass } from "../../../kustomer/kustomer.model";
import { paymentInvoiceKobjectV1 } from "../constants";

// https://pictogrammers.com/library/mdi/icon/receipt-text-check-outline/

export interface PaymentInvoice {
  amountNum: number;
  referenceIdEditableBool: boolean;
  referenceStr: string;
  loadingBool: boolean;
  generatedInvoiceStr: string;
}

const PaymentInvoiceKObject: Klass<PaymentInvoice> = {
  name: paymentInvoiceKobjectV1,
  icon: "receipt-text-check-outline",
  color: "#000",
  metadata: {
    properties: {
      amountNum: {
        displayName: "Amount",
      },
      referenceIdEditableBool: {
        displayName: "",
      },
      referenceStr: {
        displayName: "Pix Reference ID",
      },
      generatedInvoiceStr: {
        displayName: "",
      },
      loadingBool: {
        displayName: "loading",
      },
    },
  },
};

export default {
  PaymentInvoiceKObject,
};
