import { Body, Controller, Post } from '@nestjs/common';

import { CriarCupomDeDescontoMemoriaRepository } from '../repositorios/criar-cupom-de-desconto-memoria.repository';
import { CriarCupomDeDescontoRequest } from '../dto/cupons-de-desconto.dto';

@Controller('cupons')
export class CriarCupomDeDescontoController {
  constructor(
    private readonly criarCupomDeDescontoMemoriaRepository: CriarCupomDeDescontoMemoriaRepository,
  ) {}

  @Post()
  public async criar(
    @Body() criarCupomDeDescontoRequest: CriarCupomDeDescontoRequest,
  ) {
    try {
      const novoCupomDeDesconto = criarCupomDeDescontoRequest.toModel();
      await this.criarCupomDeDescontoMemoriaRepository.criar(
        novoCupomDeDesconto,
      );
    } catch (error) {
      throw error;
    }
  }
}
