export enum Operator {
  eq, // short for equals, values requires two arguments
  true,
  dne, // short for do not exists, values require one argument,
  and,
  or,
  exists,
  gt, // greater than
}

export const conditionEval = {
  [Operator.eq]: ([v1, v2]) => v1 === v2,
  [Operator.dne]: ([v]) => !!v,
  [Operator.exists]: ([v]) => !v
}

export enum ActionType {
  REST_API_JSON = "kustomer.rest-api.json",
  CUSTOMER_UPDATE = "kustomer.customer.update",
  CUSTOMER_CREATE = "kustomer.customer.create",
  KOBJECT_CREATE_WITH_CUSTOMER = "kustomer.kobject.create-with-customer",
  KOBJECT_CREATE = "kustomer.kobject.create",
  KOBJECT_UPDATE = "kustomer.kobject.update"
}

export interface ActionParam {
  getParams: () => object;
}

export interface Condition {
  op: Operator;
  values: any[];
}

export interface Transition {
  target: string;
  condition: Condition | Condition[];
  meta?: {
    name: string;
  };
}

export interface Step {
  id: string;
  transitions?: Transition[];
  errorCases: any[];
  action: ActionType;
  params: any; // the param will depend on the ActionType of this step
  meta: {
    displayName: string
  },
  appVersion: string
}

export type RestMethod = "GET" | "POST" | "DELETE" | "PUT";

export class RestApiActionParam implements ActionParam {
  constructor(
    public json: boolean,
    public headers: { [key: string]: any },
    public uri: string,
    public method: RestMethod
  ) {}

  getParams(): object {
    return this;
  }
}

export interface Trigger {
  id: string;
  transitions: Transition[];
  meta: {
    displayName: string;
  };
  eventName: string;
  appVersion: string;
}

export interface WorkFlow {
  name: string;
  description: string;
  trigger: Trigger;
  steps: Step[];
}

export interface Widget {}

export interface Action {
  name: string;
  description: string;
  type: "rest_api";
  appSettings: Setting;
  inputTemplate: {
    uri: string;
    method: RestMethod;
    json: boolean;
    headers?: {
      [key: string]: string;
    };
    qs?: string;
    data?: {
      [key: string]: any;
    };
  };
  sampleOutputContext?: {
    [key: string]: any;
  };
  inputSchema?: {
    properties: {
      querystring: {
        type: string;
      };
    };
    required?: [];
    additionalProperties?: boolean;
  };

  outputTemplate: {
    response: string;
    body: string;
  };
  outputSchema?: {
    type: string;
    properties: {
      response: {
        type: string;
      };
      body: {
        type: string;
      };
    };
    additionalProperties: boolean;
  };
}

export interface Event {}

export interface Command {}

export interface Klass<T> {
  name: string;
  icon: string;
  color: string;
  metadata: {
    properties: {
      [Property in keyof T]: {
        displayName: string;
      };
    };
  };
}

export type Tag = "ai" | "analytics" | "csat" | "ecommerce" | "messaging";

export interface Setting {}

export interface SettingsPageConfig {}

export interface Kview {
  name: string; // appName.view.invoice
  template: string;
  resource: string; // customer,company, conversation, kobject.<klass name>
  context: "smartbar-card" | "smartbar-details" | "expanded-timeline";
  meta: {
    icon: string;
    displayName: string;
    state: "open" | "close";
  };
}

export interface DataSubscriptions {}

export interface I18n {}

export interface InboundWebHook {}

export interface OutboundWebHook {}

export interface KustomerJsonApp {
  app: string;
  version: string;
  title: string;
  dependencies?: string[];
  iconUrl: string;
  postInstallMessage?: string;
  description: string;
  appDetails?: {
    appDeveloper: {
      name: string;
      website?: string;
      supportEmail: string;
    };
    externalPlatform?: {
      name: string;
      website: string;
    };
    documentationLinks?: {
      title: string;
      url: string;
    }[];
    tags?: Tag[];
    screenshots?: string[];
    changelog?: {
      [key: string]: string;
    };
  };

  actions?: Action[];
  commands?: Command[];
  dataSubscriptions?: DataSubscriptions[];
  hooks?: InboundWebHook[];
  i18n?: I18n[];
  klasses?: Klass<any>[];
  kviews?: Kview[];
  meta?: {
    [key: string]: string;
  };
  outboundWebhooks?: OutboundWebHook[];
  redirectUris?: string[];
  shortcuts?: string[];
  settings?: Setting;
  settingsPageConfig?: SettingsPageConfig;
  triggers?: Trigger[];
  widgets?: Widget[];
  workflows?: WorkFlow[];
}
