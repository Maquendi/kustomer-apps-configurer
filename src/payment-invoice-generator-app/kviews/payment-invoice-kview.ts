import { Kview } from "../../kustomer/kustomer.model";

require("@babel/register");

const createApp = (): Kview => {
  const { myFileReader } = require("../../jsx/file-reader").default;

  const template = myFileReader("payment-invoice.jsx");

  console.log("template: ", template);

  return {
    template: template,
    name: "card-js-kview-addi.advanced",
    context: "smartbar-card",
    resource: "customer",
    meta: {
      displayName: "Payment Invoices Generator",
      icon: "receipt-text-check-outline",
      state: "close",
    },
  };
};

const myKeyView = createApp();

export { myKeyView as default };
