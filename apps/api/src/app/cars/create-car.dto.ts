import { IsInt, IsString, IsBoolean } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly veiculo: string;

  @IsString()
  readonly marca: string;

  @IsInt()
  readonly ano: number;

  @IsString()
  readonly descricao: string;

  @IsBoolean()
  readonly vendido: boolean;
}
