package com.greencake.repository;

import org.springframework.data.repository.CrudRepository;
import com.greencake.entities.Producto;

//'Importa' los métodos como find CRUD
public interface IDataProducto extends CrudRepository<Producto, Integer>{
	
}
