import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsFuture', async: true })
@Injectable()
export class IsFutureRule implements ValidatorConstraintInterface {
  async validate(value: Date) {
    if (new Date() >= value) return false;
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Data invalida';
  }
}
