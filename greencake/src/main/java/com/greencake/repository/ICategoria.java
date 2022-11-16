package com.greencake.repository;

import java.util.List;
import java.util.Optional;

import com.greencake.entities.Categoria;

public interface ICategoria {
		//Regresar listar usuarios
		public List<Categoria> listarCategoria();
		
		//Buscar Categoria ???******
		public Optional<Categoria> buscarProducto(Integer id);
}