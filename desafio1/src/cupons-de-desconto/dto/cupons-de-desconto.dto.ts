import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsDateString,
  IsPositive,
} from 'class-validator';
import { IsUnique } from '../../customValidations/is-unique';
import { IsFuture } from '../../customValidations/is-future';
import { CupomDeDesconto } from '../cupom-de-desconto.entity';

export class CriarCupomDeDescontoRequest {
  @IsString()
  @IsNotEmpty()
  @IsUnique('Cupom')
  codigo: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  percentual: number;

  @IsDateString()
  @IsNotEmpty()
  @IsFuture()
  validade: string;

  public toModel(): CupomDeDesconto {
    return new CupomDeDesconto({ ...this });
  }
}
