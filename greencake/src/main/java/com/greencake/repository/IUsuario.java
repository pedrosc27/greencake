package com.greencake.repository;

import java.util.List;
import java.util.Optional;
import com.greencake.entities.Usuario;

public interface IUsuario {
		//Regresar listar usuarios
		public List<Usuario> listarUsuarios();
		
		//Buscar productos******
		public Optional<Usuario> buscarProducto(Integer id);
}
