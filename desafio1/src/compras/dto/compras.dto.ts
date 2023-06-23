import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

import { IsCpfOrCnpj } from '../../customValidations/is-cpf-or-cnpj';

class ItemCarrinho {
  @IsNotEmpty()
  @IsInt()
  idLivro: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantidade: number;
}

class Carrinho {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  total: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  itens: ItemCarrinho[];
}

export class CriarCompraRequest {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  sobrenome: string;

  @IsNotEmpty()
  @IsString()
  @IsCpfOrCnpj()
  documento: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  complemento: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  idPais: string;

  @IsNotEmpty()
  @IsString()
  idEstado: string;

  @IsNotEmpty()
  @IsInt()
  telefone: number;

  @IsNotEmpty()
  @IsInt()
  cep: number;

  @ValidateNested()
  carrinho: Carrinho;
}
