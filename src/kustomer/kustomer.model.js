export var Operator;
(function (Operator) {
    Operator[Operator["eq"] = 0] = "eq";
    Operator[Operator["true"] = 1] = "true";
    Operator[Operator["dne"] = 2] = "dne";
    Operator[Operator["and"] = 3] = "and";
    Operator[Operator["or"] = 4] = "or";
    Operator[Operator["exists"] = 5] = "exists";
    Operator[Operator["gt"] = 6] = "gt";
})(Operator || (Operator = {}));
export var ActionType;
(function (ActionType) {
    ActionType["REST_API_JSON"] = "kustomer.rest-api.json";
    ActionType["CUSTOMER_UPDATE"] = "kustomer.customer.update";
    ActionType["CUSTOMER_CREATE"] = "kustomer.customer.create";
})(ActionType || (ActionType = {}));
export class RestApiActionParam {
    json;
    headers;
    uri;
    method;
    constructor(json, headers, uri, method) {
        this.json = json;
        this.headers = headers;
        this.uri = uri;
        this.method = method;
    }
    getParams() {
        return this;
    }
}
