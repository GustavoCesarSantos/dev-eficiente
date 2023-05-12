import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsFuture', async: true })
@Injectable()
export class IsFutureRule implements ValidatorConstraintInterface {
  async validate(value: string) {
    if (new Date().toISOString() >= new Date(value).toISOString()) return false;
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Data e hora deve ser maior que a data e hora atual';
  }
}
