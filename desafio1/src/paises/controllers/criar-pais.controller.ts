import { Body, Controller, Post } from '@nestjs/common';

import { CriarPaisRequest } from '../dto/pais.dto';
import { Pais } from '../pais.entity';
import { CriarPaisMemoriaRepository } from '../repositorios/criar-pais.memoria.repository';

@Controller('pais')
export class CriarPaisController {
  constructor(private criarPaisRepository: CriarPaisMemoriaRepository) {}

  @Post()
  public async criarPais(
    @Body() criarPaisRequest: CriarPaisRequest,
  ): Promise<Pais> {
    const novoPais = criarPaisRequest.toModal();
    const pais = await this.criarPaisRepository.criar(novoPais);
    return pais;
  }
}
