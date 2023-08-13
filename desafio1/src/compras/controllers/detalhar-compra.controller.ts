import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import {
  DetalharCompraRequest,
  DetalharCompraResponse,
} from '../dto/compras.dto';
import { EncontrarCompraPeloIdMemoriaRepository } from '../repositorios/encontrar-compra-pelo-id-memoria.repository';

@Controller('compras')
export class DetalharCompraController {
  constructor(
    private readonly encontrarCompraPeloIdMemoriaRepository: EncontrarCompraPeloIdMemoriaRepository,
  ) {}

  @Get(':id')
  public async detalharCompra(
    @Param() param: DetalharCompraRequest,
  ): Promise<DetalharCompraResponse> {
    const compra = await this.encontrarCompraPeloIdMemoriaRepository.encontrar(
      param.id,
    );
    if (!compra) throw new NotFoundException('Compra não encontrada');
    const pais = '';
    const estado = '';
    const cupomDeDesconto = compra.getCupomDeDesconto();
    const temCupomDeDesconto = cupomDeDesconto ? true : false;
    const carrinho = compra.getCarrinho();
    const totalSemDesconto = 0;
    return {
      cep: compra.getCep(),
      nome: compra.getNome(),
      telefone: compra.getTelefone(),
      cidade: compra.getCidade(),
      complemento: compra.getComplemento(),
      endereco: compra.getEndereco(),
      documento: compra.getDocumento(),
      sobrenome: compra.getSobrenome(),
      email: compra.getEmail(),
      pais,
      estado,
      temCupomDeDesconto,
      codigoCupomDeDesconto: cupomDeDesconto ? cupomDeDesconto.getCodigo() : '',
      totalSemDesconto,
      carrinho,
    };
  }
}
