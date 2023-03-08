import {
  WorkFlowBuilder,
} from "../../kustomer/builder/kustomer.workflow.builder";
import { CustomerUpdateAction, KobjectCreateWithCustomer } from "../../kustomer/builder/model";
import { Step } from "../../kustomer/kustomer.model";
import { paymentInvoiceKobjectV1 } from "../klasses/constants";
import { PaymentInvoice } from "../klasses/payment-invoice/payment-invoice";




const fromStep = (step: Step) => {
  
}

const paymentInvoiceWorkflow = () => {
  const workFlowBuilder = new WorkFlowBuilder();

  workFlowBuilder.withTrigger({
    eventName: "",
  });

  const createInvoiceStep = workFlowBuilder.withStep({
    stepName: 'Create Invoice',
    action: new KobjectCreateWithCustomer<PaymentInvoice>({
      klassName: paymentInvoiceKobjectV1,
      attrs: {
        loadingBool: true
      },
    }),
  });

  const createPixInvoiceStep = workFlowBuilder.withStep({
    stepName: 'Create Invoice',
    action: new KobjectCreateWithCustomer<PaymentInvoice>({
      klassName: paymentInvoiceKobjectV1,
      attrs: {
        loadingBool: true
      },
    }),
  });

  const createCorresponsalInvoiceStep = workFlowBuilder.withStep({
    stepName: 'Create Invoice',
    action: new KobjectCreateWithCustomer<PaymentInvoice>({
      klassName: paymentInvoiceKobjectV1,
      attrs: {
        loadingBool: true
      },
    }),
  });

  createInvoiceStep
     .getStep()
     .

     

  workFlowBuilder.withStep({
    stepName: 'show is loading',
    action: new CustomerUpdateAction({
      custom: {
        loadingBool: true,
      },
    }),
  });



};
