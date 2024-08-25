import { ApiProperty } from "@nestjs/swagger";

export class GetUsuarioDto {

  @ApiProperty()
  id: number;
  @ApiProperty()
  puntosAcumulados: number;
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  correoElectronico: string;
  @ApiProperty()
  cuentaVista: string;

}
