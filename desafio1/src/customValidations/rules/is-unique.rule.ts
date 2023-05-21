import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { EncontrarAutorPeloEmailRepository } from '../../autores/repositorio/encontrar-autor-pelo-email.repository/encontrar-autor-pelo-email.repository';
import { EncontrarCategoriaPeloNomeMemoriaRepository } from '../../categorias/repositorios/encontrar-categoia-pelo-nome/encontrar-categoria-pelo-nome-memoria.repository/encontrar-categoria-pelo-nome-memoria.repository';
import { EncontrarLivroPeloTituloMemoriaRepository } from '../../livros/repositorios/encontrar-livro-pelo-titulo-memoria.repository';
import { EncontrarLivroPeloIsbnMemoriaRepository } from '../../livros/repositorios/encontrar-livro-pelo-isbn-memoria.repository';
import { EncontrarPaisPeloNomeMemoriaRepository } from '../../paises/repositorios/encontrar-pais-pelo-nome.memoria.repository';

@ValidatorConstraint({ name: 'IsUnique', async: true })
@Injectable()
export class IsUniqueRule implements ValidatorConstraintInterface {
  private errorMessage = '';

  constructor(
    private readonly encontrarAutorRepository: EncontrarAutorPeloEmailRepository,
    private readonly encontrarCategoriaRepository: EncontrarCategoriaPeloNomeMemoriaRepository,
    private readonly encontrarLivroPeloTituloRepository: EncontrarLivroPeloTituloMemoriaRepository,
    private readonly encontrarLivroPeloIsbnRepository: EncontrarLivroPeloIsbnMemoriaRepository,
    private readonly encontrarPaisRepository: EncontrarPaisPeloNomeMemoriaRepository,
  ) {}

  async validate(value: string, args: ValidationArguments) {
    try {
      const [type, subType] = args.constraints;
      let result: any;
      switch (type) {
        case 'Autor':
          result = await this.encontrarAutorRepository.encontrar(value);
          this.errorMessage = 'E-mail já utilizado.';
          break;
        case 'Categoria':
          result = await this.encontrarCategoriaRepository.encontrar(value);
          this.errorMessage = 'Nome já utilizado.';
          break;
        case 'Livro':
          if (subType === 'Titulo') {
            result = await this.encontrarLivroPeloTituloRepository.encontrar(
              value,
            );
            this.errorMessage = 'Titulo do livro já utilizado.';
            break;
          }
          if (subType === 'Isbn') {
            result = await this.encontrarLivroPeloIsbnRepository.encontrar(
              value,
            );
            this.errorMessage = 'Isbn do livro já utilizado.';
            break;
          }
          this.errorMessage = 'Problema para validar livro.';
          return false;
        case 'Pais':
          result = await this.encontrarPaisRepository.encontrar(value);
          this.errorMessage = 'Nome já utilizado.';
          break;
        default:
          return false;
      }
      if (result) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return this.errorMessage;
  }
}
