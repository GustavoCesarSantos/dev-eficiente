import { IsEmail, IsString } from 'class-validator';

import { Autor } from '../autor.entity';
import { EmailInUse } from '../customValidation/email-in-use';

export class CriarAutorDTO {
  @IsString()
  nome: string;

  @IsString()
  @IsEmail()
  @EmailInUse()
  email: string;

  @IsString()
  descricao: string;

  public toModel(): Autor {
    return new Autor({
      nome: this.nome,
      email: this.email,
      descricao: this.descricao,
    });
  }
}
