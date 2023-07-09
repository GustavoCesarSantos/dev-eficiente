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
import { Compra } from '../compra.entity';

class ItemCarrinho {
  @IsNotEmpty()
  @IsString()
  idLivro: string;

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

  @IsString()
  idEstado: string;

  @IsNotEmpty()
  @IsInt()
  telefone: number;

  @IsNotEmpty()
  @IsInt()
  cep: number;

  @IsNotEmpty()
  @ValidateNested()
  carrinho: Carrinho;

  public async toModel(): Promise<Compra> {
    const compra = new Compra({ ...this });
    if (this.idEstado) await compra.setIdEstado(this.idEstado);
    return compra;
  }
}
