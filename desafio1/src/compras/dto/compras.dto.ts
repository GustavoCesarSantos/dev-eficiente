import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

import { IsCpfOrCnpj } from '../../customValidations/is-cpf-or-cnpj';

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
}
