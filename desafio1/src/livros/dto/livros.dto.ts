import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { IsUnique } from '../../customValidations/is-unique';
import { IsFuture } from '../../customValidations/is-future';
import { Livro } from '../livro.entity';

export class CriarLivroDTO {
  @IsString()
  @IsNotEmpty()
  @IsUnique('Livro')
  titulo: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 500)
  resumo: string;

  @IsString()
  sumario: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(20)
  preco: number;

  @IsInt()
  @IsNotEmpty()
  @Min(100)
  numeroPaginas: number;

  @IsInt()
  @IsNotEmpty()
  isbn: number;

  @IsDate()
  @IsFuture()
  dataPublicacao: Date;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  public toModel(): Livro {
    return new Livro({ ...this });
  }
}
