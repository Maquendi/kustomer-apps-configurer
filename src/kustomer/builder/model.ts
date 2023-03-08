import { ActionType } from "../kustomer.model";

export abstract class BaseAction {
  private params = null;
  constructor(data: { [key: string]: any }) {
    this.params = {
      ...data,
      ...this.params,
    };
  }
  abstract getActionType(): ActionType;

  getParams() {
    return this.params;
  }
}

export class CustomerUpdateAction extends BaseAction {
  private action: ActionType = ActionType.CUSTOMER_UPDATE;
  constructor(props: { [key: string]: any }) {
    super({
      id: "/#steps.1.attributes.data.customer.id",
      ...props,
    });
  }

  getActionType(): ActionType {
    return this.action;
  }
}

export class CallRestApiAction extends BaseAction {
  private action: ActionType = ActionType.REST_API_JSON;
  constructor(props: { [key: string]: any }) {
    super({
      id: "/#steps.1.attributes.data.customer.id",
      ...props,
    });
  }

  getActionType(): ActionType {
    return this.action;
  }
}

export class KobjectCreateWithCustomer<T> extends BaseAction {
  private action: ActionType = ActionType.KOBJECT_CREATE_WITH_CUSTOMER;
  constructor(props: { klassName: string; attrs: Partial<T> }) {
    super({
      customer: "/#steps.1.attributes.data.customer.id",
      externalId: "/#steps.1.attributes.data.customer.externalId",
      klassName: props.klassName,
      ...props.attrs,
    });
  }

  getActionType(): ActionType {
    return this.action;
  }
}

export interface StepConfig {
  action: BaseAction;
  stepName: string;
}
