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
import { Categoria } from '../../categorias/categoria.entity';
import { Autor } from '../../autores/autor.entity';

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

export class CriarLivroResponse {
  @IsString()
  @IsNotEmpty()
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
  isbn: string;

  @IsDateString()
  @IsFuture()
  dataPublicacao: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  autor: {
    nome: string;
    email: string;
    descricao: string;
  };

  constructor(livro: Livro, autor: Autor, categoria: Categoria) {
    this.titulo = livro.getTitulo();
    this.resumo = livro.getResumo();
    this.sumario = livro.getSumario();
    this.preco = livro.getPreco();
    this.numeroPaginas = livro.getNumeroPaginas();
    this.isbn = livro.getIsbn();
    this.dataPublicacao = livro.getDataPublicacao();
    this.categoria = categoria.getNome();
    this.autor = {
      nome: autor.getNome(),
      email: autor.getEmail(),
      descricao: autor.getDescricao(),
    };
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

export class EncontrarLivroResponse {
  @IsString()
  @IsNotEmpty()
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
  isbn: string;

  @IsDateString()
  @IsFuture()
  dataPublicacao: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  autor: {
    nome: string;
    email: string;
    descricao: string;
  };

  constructor(livro: Livro, autor: Autor, categoria: Categoria) {
    this.titulo = livro.getTitulo();
    this.resumo = livro.getResumo();
    this.sumario = livro.getSumario();
    this.preco = livro.getPreco();
    this.numeroPaginas = livro.getNumeroPaginas();
    this.isbn = livro.getIsbn();
    this.dataPublicacao = livro.getDataPublicacao();
    this.categoria = categoria.getNome();
    this.autor = {
      nome: autor.getNome(),
      email: autor.getEmail(),
      descricao: autor.getDescricao(),
    };
  }
}
