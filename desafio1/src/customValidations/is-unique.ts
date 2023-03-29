import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsUniqueRule } from './rules/is-unique.rule';

export function IsUnique(type: string, validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsUnique',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [type],
      options: validationOptions,
      validator: IsUniqueRule,
    });
  };
}
