import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { EncontrarAutorPeloEmailRepository } from '../../repositorio/encontrar-autor-pelo-email.repository/encontrar-autor-pelo-email.repository';

@ValidatorConstraint({ name: 'EmailInUse', async: true })
@Injectable()
export class EmailInUseRule implements ValidatorConstraintInterface {
  constructor(
    private encntrarAutorRepository: EncontrarAutorPeloEmailRepository,
  ) {}

  async validate(email: string) {
    try {
      const autor = await this.encntrarAutorRepository.encontrar(email);
      if (autor) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return 'E-mail já utilizado.';
  }
}
