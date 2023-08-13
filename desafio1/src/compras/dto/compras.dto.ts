import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { IsCpfOrCnpj } from '../../customValidations/is-cpf-or-cnpj';
import { Compra } from '../compra.entity';
import { IsCumpomDeDesconto } from 'src/customValidations/is-cupom-de-desconto';

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
  @Type(() => ItemCarrinho)
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

  @IsString()
  @IsCumpomDeDesconto()
  codigoCupomDeDesconto: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Carrinho)
  carrinho: Carrinho;

  public async toModel(): Promise<Compra> {
    const compra = new Compra({ ...this });
    if (this.idEstado) await compra.setIdEstado(this.idEstado);
    if (this.codigoCupomDeDesconto)
      await compra.setCupomDeDesconto(this.codigoCupomDeDesconto);
    return compra;
  }
}

export class DetalharCompraRequest {
  @IsUUID()
  id: string;
}

export class DetalharCompraResponse {
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
  pais: string;

  @IsString()
  estado: string;

  @IsNotEmpty()
  @IsInt()
  telefone: number;

  @IsNotEmpty()
  @IsInt()
  cep: number;

  @IsBoolean()
  temCupomDeDesconto: boolean;

  @IsString()
  @IsCumpomDeDesconto()
  codigoCupomDeDesconto: string;

  @IsInt()
  totalSemDesconto: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Carrinho)
  carrinho: Carrinho;
}
