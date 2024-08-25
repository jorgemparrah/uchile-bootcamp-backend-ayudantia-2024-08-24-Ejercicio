import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {

  @ApiProperty({ example: "Jorge", description: "Nombre del usuario" })
  nombre: string;

  @ApiProperty({ example: "jorge.parra@gmail.com", description: "Correo electrónico del usuario" })
  correoElectronico: string;

  @ApiProperty({ example: "12345", description: "Contraseña del usuario", default: "123456" })
  contrasena: string;

}
