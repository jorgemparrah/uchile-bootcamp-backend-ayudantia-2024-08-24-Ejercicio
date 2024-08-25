import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsuarioDto {

  @ApiProperty({ })
  correoElectronico: string;

  @ApiProperty()
  contrasena: string;

}
