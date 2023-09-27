import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { EncontrarPaisPeloIdMemoriaRepository } from 'src/paises/repositorios/encontrar-pais-pelo-id.memoria.repository';
import { EncontrarEstadoPeloIdMemoriaRepository } from 'src/paises/repositorios/paises/repositorios/encontrar-estado-pelo-id.memoria.repository';
import {
  DetalharCompraRequest,
  DetalharCompraResponse,
} from '../dto/compras.dto';
import { EncontrarCompraPeloIdMemoriaRepository } from '../repositorios/encontrar-compra-pelo-id-memoria.repository';
import { PegarTotalSemDescontoService } from '../services/pegar-total-sem-desconto.service';

@Controller('compras')
export class DetalharCompraController {
  constructor(
    private readonly encontrarCompraPeloIdMemoriaRepository: EncontrarCompraPeloIdMemoriaRepository,
    private readonly encontrarPaisPeloIdMemoriaRepository: EncontrarPaisPeloIdMemoriaRepository,
    private readonly encontrarEstadoPeloIdMemoriaRepository: EncontrarEstadoPeloIdMemoriaRepository,
    private readonly pegarTotalSemDesconto: PegarTotalSemDescontoService,
  ) {}

  @Get(':id')
  public async detalharCompra(
    @Param() param: DetalharCompraRequest,
  ): Promise<DetalharCompraResponse> {
    const compra = await this.encontrarCompraPeloIdMemoriaRepository.encontrar(
      param.id,
    );
    if (!compra) throw new NotFoundException('Compra não encontrada');
    const pais = await this.encontrarPaisPeloIdMemoriaRepository.encontrar(
      compra.getIdPais(),
    );
    if (!pais) throw new NotFoundException('Pais não encontrado');
    const estado = await this.encontrarEstadoPeloIdMemoriaRepository.encontrar(
      compra.getIdEstado() ?? '',
    );
    const cupomDeDesconto = compra.getCupomDeDesconto();
    const temCupomDeDesconto = cupomDeDesconto ? true : false;
    const carrinho = compra.getCarrinho();
    const totalSemDesconto = await this.pegarTotalSemDesconto.execute(compra);
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
      pais: pais.getNome(),
      estado: estado?.getNome() ?? '',
      temCupomDeDesconto,
      codigoCupomDeDesconto: cupomDeDesconto ? cupomDeDesconto.getCodigo() : '',
      totalSemDesconto,
      carrinho,
    };
  }
}
