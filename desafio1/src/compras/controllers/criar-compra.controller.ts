import { BadRequestException, Body, Controller, Post } from '@nestjs/common';

import { CriarCompraMemoriaRepository } from '../repositorios/criar-compra.memoria.repository';
import { CriarCompraRequest } from '../dto/compras.dto';
import { ValidarTotalCompraService } from '../services/validar-total-compra.service';

@Controller('compras')
export class CriarCompraController {
  constructor(
    private readonly criarCompraMemoriaRepository: CriarCompraMemoriaRepository,
    private readonly validarTotalCompraService: ValidarTotalCompraService,
  ) {}

  @Post()
  public async criarCompra(
    @Body() criarCompraDTO: CriarCompraRequest,
  ): Promise<any> {
    try {
      const novaCompra = await criarCompraDTO.toModel();
      const isValid = await this.validarTotalCompraService.execute(novaCompra);
      if (!isValid) return new BadRequestException('Compra invalida');
      await this.criarCompraMemoriaRepository.criar(novaCompra);
    } catch (error) {
      throw error;
    }
  }
}
