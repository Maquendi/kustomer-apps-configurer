import { KustomerJsonApp } from "../kustomer/kustomer.model";
import Kviews from "./kviews";
import Settings from "./settings";
import Widgets from "./widgets";

const paymentInvoiceJsonApp: KustomerJsonApp = {
  app: "payment_invoice_generator_app",
  version: "0.0.4",
  appDetails: {
    appDeveloper: {
      name: "maquendi B.N",
      website: "addi.com",
      supportEmail: "maquendi@addi.com"
    },
    externalPlatform: {
      name: "addi",
      website: "addi.com",
    },
    documentationLinks: [
      {
        title: "test title",
        url: "www.addi.com",
      },
    ],
  },
  title: "Payment invoice generator",
  description:
    "An app to help in the generation of pix or bancolombia payment invoices",
  iconUrl:
    "https://pbs.twimg.com/profile_images/1146053597785993217/DcPQyO9Q_400x400.png",
  postInstallMessage:
    "Congratulations! You've installed it, now you can start generating invoices for customers",

  kviews: Kviews,
  settings: Settings,
  widgets: Widgets,
};

export default {
  paymentInvoiceJsonApp,
};
