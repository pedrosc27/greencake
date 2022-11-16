//Aquí las interfaces - Repositorio => Establecer las órden sin importar el proceso
package com.greencake.repository;

import java.util.List;
import java.util.Optional;

import com.greencake.entities.Producto;

public interface IProducto {
	
	//Regresar listar productos
	public List<Producto> listarProductos();
	
	//Buscar productos
	public Optional<Producto> buscarProducto(Integer id);
		
	
}
