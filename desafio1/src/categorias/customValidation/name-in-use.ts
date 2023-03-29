import { registerDecorator, ValidationOptions } from 'class-validator';

import { NameInUseRule } from './rules/name-in-use.rule';

export function NameInUse(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'NameInUse',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: NameInUseRule,
    });
  };
}
