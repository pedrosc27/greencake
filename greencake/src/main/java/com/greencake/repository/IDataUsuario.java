package com.greencake.repository;

import org.springframework.data.repository.CrudRepository;
import com.greencake.entities.Usuario;

public interface IDataUsuario extends CrudRepository<Usuario, Integer>{

}
