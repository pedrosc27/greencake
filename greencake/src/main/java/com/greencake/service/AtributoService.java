//Implementación de la orden de IAtributo de cualq. forma
package com.greencake.service;

import java.util.List;
import java.util.Optional;
import com.greencake.entities.Atributo;
import com.greencake.repository.IDataAtributo;
import com.greencake.repository.IAtributo;

public class AtributoService implements IAtributo {

	private IDataAtributo data;
	
	@Override
	//Método para llamar a la BD
	public List<Atributo> listarProductos() {
		//Método findAll para buscar todos los atributos
		return (List<Atributo>)data.findAll();
	}

	@Override
	public Optional <Atributo> buscarAtributo(Integer id) {
		return data.findById(id);
	}

	public static Iterable<Atributo> getAllAtributo() {
		// Este metodo lo mando el 2do GetMappingo en el controlador
		return null;
	}

	public static Atributo findAtributoById(Integer idatributo) {
		//Este atributo lo mando el controlador
		return null;
	}

}
