import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  lista: Usuario[];
  constructor() {
    this.lista = [
      new Usuario(1, 10, 'Jorge', 'jorgemparrah@gmail.com', '12345'),
      new Usuario(2, 100, 'Carlos', 'carlos@gmail.com', '12345'),
    ];
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    const nuevoUsuario = new Usuario(
      this.lista.length + 1,
      0,
      createUsuarioDto.nombre,
      createUsuarioDto.correoElectronico,
      createUsuarioDto.contrasena
    );
    this.lista.push(nuevoUsuario);
    return nuevoUsuario;
  }

  findAll(nombre: string) {
    if (!nombre) {
      return this.lista;
    }
    const encontrados: Usuario[] = this.lista.filter(usuario => usuario.nombre.includes(nombre));
    return encontrados;
  }

  findOne(id: number) {
    const encontrado = this.lista.find(usuario => usuario.id === id);
    if (!encontrado) {
      throw new Error('Usuario no encontrado');
    }
    return encontrado
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
