package com.greencake.repository;

import org.springframework.data.repository.CrudRepository;
import com.greencake.entities.Categoria;

public interface IDataCategoria extends CrudRepository<Categoria, Integer>{
	
}
