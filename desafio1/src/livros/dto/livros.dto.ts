import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
  Min,
} from 'class-validator';
import { IsUnique } from '../../customValidations/is-unique';
import { IsFuture } from '../../customValidations/is-future';
import { Livro } from '../livro.entity';

export class CriarLivroRequest {
  @IsString()
  @IsNotEmpty()
  @IsUnique('Livro', 'Titulo')
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
  @Min(100)
  numeroPaginas: number;

  @IsString()
  @IsNotEmpty()
  @IsUnique('Livro', 'Isbn')
  isbn: string;

  @IsDateString()
  @IsFuture()
  dataPublicacao: string;

  @IsUUID()
  @IsNotEmpty()
  idCategoria: string;

  @IsUUID()
  @IsNotEmpty()
  idAutor: string;

  public toModel(): Livro {
    return new Livro({ ...this });
  }
}

export class ListarLivrosResponse {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  titulo: string;

  constructor(livro: Livro) {
    this.id = livro.getId();
    this.titulo = livro.getTitulo();
  }
}

export class EncontrarLivroRequest {
  @IsUUID()
  id: string;
}
