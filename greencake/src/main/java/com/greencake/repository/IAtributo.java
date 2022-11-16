//Aquí las interfaces - Repositorio => Establecer las órden sin importar el proceso
package com.greencake.repository;

import java.util.List;
import java.util.Optional;

import com.greencake.entities.Atributo;

public interface IAtributo {
	
//Regresar listar atributos
	public List<Atributo> listarProductos();
	
//Buscar atributo
	public Optional<Atributo> buscarAtributo(Integer id);
		
	
}
