import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { CriarEstadoRequest } from '../dto/estados.dto';
import { Estado } from '../estado.entity';

@Controller('paises/:idPais/estados')
export class CriarEstadoController {
  constructor(
    private readonly encontrarPaisPeloIdRepository: EncontarPaisPeloIdMemoriaRepository,
    private readonly criarEstadoRepository: CriarEstadoMemoriaRepository,
  ) {}

  @Post()
  public async criarEstado(
    @Param('idPais') idPais: string,
    @Body() criarEstadoRequest: CriarEstadoRequest,
  ): Promise<Estado> {
    const pais = await this.encontrarPaisPeloIdRepository.encontrar(idPais);
    if (!pais) throw new NotFoundException('País não encontrado.');
    const novoEstado = criarEstadoRequest.toModal(pais.getId());
    const estado = await this.criarEstadoRepository.criar(novoEstado);
    return estado;
  }
}
