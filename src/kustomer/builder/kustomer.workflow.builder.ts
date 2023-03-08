import {
  Condition,
  conditionEval,
  Operator,
  Step,
  Transition,
  Trigger,
} from "../kustomer.model";
import { StepConfig } from "./model";
const { v4: uuidv4 } = require("uuid");

export class OnCondition {
  private stepBuilder: StepBuilder;

  transitionTo(condition: Condition, stepBuilder: StepBuilder): OnCondition {
    this.stepBuilder.addTransitions({
      target: stepBuilder.getStep().id,
      condition: condition,
      meta: {
        name: condition.op.toString(),
      },
    });
    return this;
  }
}

export class StepBuilder {
  private step: Step;
  private workFlowBuilder: WorkFlowBuilder;
  private transitions: Transition[] = [];

  constructor(step: Step, workflowBuilder: WorkFlowBuilder) {
    this.step = step;
    this.workFlowBuilder = workflowBuilder;
  }

  public getStep(): Step {
    return this.step;
  }
  public getWorkflowBuilder(): WorkFlowBuilder {
    return this.workFlowBuilder;
  }

  public addTransitions(transitions: Transition) {
    return this.transitions;
  }

  onCondition(): OnCondition {
    return null;
  }
}

export class WorkFlowBuilder {
  private trigger: Trigger;
  private steps: Step[] = [];

  public withTrigger(trigger: { eventName: string }): WorkFlowBuilder {
    this.trigger = {
      transitions: [
        {
          target: "e_r_w7wx8",
          condition: {
            op: Operator.true,
            values: [true],
          },
        },
      ],
      meta: {
        displayName: "pullPaymentReceipt",
      },
      id: "1",
      eventName: trigger.eventName,
      appVersion: "hooks-^1.0.0",
    };
    return this;
  }

  public withStep(config: StepConfig): StepBuilder {
    const step: Step = {
      id: uuidv4(),
      errorCases: [],
      action: config.action.getActionType(),
      params: config.action.getParams(),
      meta: {
        displayName: config.stepName,
      },
      appVersion: "kustomer-^1.9.3",
    };
    this.steps[this.steps.length] = step;
    return new StepBuilder(step, this);
  }

  private getPreviousStep(): Step | null {
    if (this.steps.length === 0) {
      return null;
    }

    return this.steps[this.steps.length - 1];
  }

  public step(index: number): Step | null {
    if (index >= this.steps.length) {
      return null;
    }
    return this.steps[index];
  }

  public withConditions(): WorkFlowBuilder {
    if (this.steps.length === 0) {
      throw new Error("A step is required to add conditions");
    }
    const lastStep = this.steps[this.steps.length - 1];

    lastStep.transitions = [
      {
        target: "",
        condition: {
          op: "",
          values: [],
        },
        meta: {
          name: "",
        },
      },
    ];

    return this;
  }
}

const tester = () => {
  let workFlowBuilder = new WorkFlowBuilder();
};
