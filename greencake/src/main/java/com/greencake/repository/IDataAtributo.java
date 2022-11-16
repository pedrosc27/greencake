package com.greencake.repository;

import org.springframework.data.repository.CrudRepository;
import com.greencake.entities.Atributo;

//'Importa' los métodos como find CRUD
public interface IDataAtributo extends CrudRepository<Atributo, Integer>{
	
}
