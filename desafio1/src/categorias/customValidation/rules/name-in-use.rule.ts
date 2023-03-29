import { Injectable } from '@nestjs/common';

import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { EncontrarCategoriaPeloNomeMemoriaRepository } from '../../repositorios/encontrar-categoia-pelo-nome/encontrar-categoria-pelo-nome-memoria.repository/encontrar-categoria-pelo-nome-memoria.repository';

@ValidatorConstraint({ name: 'NameInUse', async: true })
@Injectable()
export class NameInUseRule implements ValidatorConstraintInterface {
  constructor(
    private encntrarCategoriaRepository: EncontrarCategoriaPeloNomeMemoriaRepository,
  ) {}

  async validate(nome: string) {
    try {
      const categoria = await this.encntrarCategoriaRepository.encontrar(nome);
      if (categoria) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return 'Nome já utilizado.';
  }
}
