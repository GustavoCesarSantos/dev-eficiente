import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsFutureRule } from './rules/is-future.rule';

export function IsFuture(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsFuture',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsFutureRule,
    });
  };
}
