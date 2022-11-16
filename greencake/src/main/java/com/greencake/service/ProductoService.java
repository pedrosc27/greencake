//Implementación de la orden de IProducto de cualq. forma
package com.greencake.service;

import java.util.List;
import java.util.Optional;
import com.greencake.entities.Producto;
import com.greencake.repository.IDataProducto;
import com.greencake.repository.IProducto;

public class ProductoService implements IProducto {

	private IDataProducto data;
	
	@Override
	//Método para llamar a la BD
	public List<Producto> listarProductos() {
		//Método findAll para buscar todos los productos
		return (List<Producto>)data.findAll();
	}

	@Override
	public Optional <Producto> buscarProducto(Integer id) {
		return data.findById(id);
	}
}
