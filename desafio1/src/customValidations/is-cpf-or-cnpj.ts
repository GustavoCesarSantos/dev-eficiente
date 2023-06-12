import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsCpfOrCnpjRule } from './rules/is-cpf-or-cnpj.rule';

export function IsCpfOrCnpj(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsCpfOrCnpj',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsCpfOrCnpjRule,
    });
  };
}
