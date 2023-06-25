import { BadRequestException, NotFoundException } from '@nestjs/common';

import { EncontrarEstadosPeloIdPaisMemoriaRepository } from '../paises/repositorios/encontrar-estados-pelo-id-pais.memoria.repository';

const encontrarEstadosPeloIdPaisRepositorio =
  new EncontrarEstadosPeloIdPaisMemoriaRepository();

export const isValidState = async (idPais: string, idEstado: string) => {
  try {
    const estados = await encontrarEstadosPeloIdPaisRepositorio.encontrar(
      idPais,
    );
    if (!estados.length) {
      throw new BadRequestException('Este país não possui estados');
    }
    const estado = estados.find((estado) => estado.getId() === idEstado);
    if (!estado) {
      throw new NotFoundException('Estado não encontrado');
    }
  } catch (error) {
    throw new BadRequestException(error.message);
  }
};
