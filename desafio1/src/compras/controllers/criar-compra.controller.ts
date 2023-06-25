import { Body, Controller, Post } from '@nestjs/common';

import { CriarCompraMemoriaRepository } from '../repositorios/criar-compra.memoria.repository';
import { CriarCompraRequest } from '../dto/compras.dto';

@Controller('compras')
export class CriarCompraController {
  constructor(
    private readonly criarCompraMemoriaRepository: CriarCompraMemoriaRepository,
  ) {}

  @Post()
  public async criarCompra(
    @Body() criarCompraDTO: CriarCompraRequest,
  ): Promise<any> {
    try {
      const novaCompra = criarCompraDTO.toModel();
      await this.criarCompraMemoriaRepository.criar(novaCompra);
    } catch (error) {
      throw error;
    }
  }
}
