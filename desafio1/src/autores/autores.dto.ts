import { z } from 'zod';

export const CriarAutorSchema = z.object({
  nome: z.string().min(3).max(50),
  email: z.string().email(),
  descricao: z.string().min(3).max(400),
  criadoEm: z.date().default(new Date()),
});

export type CriarAutorDTO = z.infer<typeof CriarAutorSchema>;
