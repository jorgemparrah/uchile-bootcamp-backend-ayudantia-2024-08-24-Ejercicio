import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBody, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Usuario } from './entities/usuario.entity';
import { GetUsuarioDto } from './dto/get-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiTags('Creacion y Modificacion')
  @ApiBody({ type: CreateUsuarioDto, description: 'Datos del usuario a crear' })
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto, @Res() res) {
    const usuario = this.usuarioService.create(createUsuarioDto);
    const dto = new GetUsuarioDto();
    dto.id = usuario.id;
    dto.puntosAcumulados = usuario.puntosAcumulados;
    dto.nombre = usuario.nombre;
    dto.correoElectronico = usuario.correoElectronico;
    dto.cuentaVista = usuario.cuentaVista;
    res.status(200).send(usuario);
  }

  @ApiTags('Consulta')
  @ApiQuery({ name: 'nombre', required: false, description: 'Parte del nombre de algún usuario' })
  @Get()
  findAll(@Query("nombre") nombre: string): Usuario[] {
    return this.usuarioService.findAll(nombre);
  }

  @ApiTags('Consulta')
  @ApiParam({ name: 'id', required: true, description: 'Id del usuario', example: 1 })
  @ApiResponse({ status: 200, description: 'Usuario encontrado', type: GetUsuarioDto })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado'})
  @Get(':id')
  findOne(@Param('id') id: string, @Res() res) {
    try {
      const usuario =  this.usuarioService.findOne(+id);
      const dto = new GetUsuarioDto();
      dto.id = usuario.id;
      dto.puntosAcumulados = usuario.puntosAcumulados;
      dto.nombre = usuario.nombre;
      dto.correoElectronico = usuario.correoElectronico;
      dto.cuentaVista = usuario.cuentaVista;
      res.status(200).send(usuario);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }

  @ApiTags('Creacion y Modificacion')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @ApiTags('Creacion y Modificacion')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
