import { registerDecorator, ValidationOptions } from 'class-validator';

import { EmailInUseRule } from './rules/email-in-use.rule';

export function EmailInUse(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'EmailInUse',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: EmailInUseRule,
    });
  };
}
