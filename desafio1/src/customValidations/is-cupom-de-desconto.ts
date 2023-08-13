import { registerDecorator, ValidationOptions } from "class-validator";

import { IsCupomDeDescontoRule } from "./rules/is-cupom-de-desconto.rule";

export function IsCumpomDeDesconto(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsCumpomDeDesconto',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsCupomDeDescontoRule,
    });
  };
}
