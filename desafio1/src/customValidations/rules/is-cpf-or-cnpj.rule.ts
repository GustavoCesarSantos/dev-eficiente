import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'IsCpfOrCnpj', async: false })
@Injectable()
export class IsCpfOrCnpjRule implements ValidatorConstraintInterface {
  async validate(value: string) {
    if (this.isCpfValid(value)) return true;
    if (this.isCnpjValid(value)) return true;
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Número de cpf ou cnpj invalido.';
  }

  private isCpfValid(cpfNumber: string): boolean {
    return cpf.isValid(cpfNumber);
  }

  private isCnpjValid(cnpjNumber: string): boolean {
    return cnpj.isValid(cnpjNumber);
  }
}
