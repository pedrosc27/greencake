package com.greencake.entities;

import javax.persistence.Entity;

@Entity
public class Categoria {
	private int idcategoria_pastel;
	private String nombre_categoria; 
	private String descripcion_categoria;

	public Categoria(int idcategoria_pastel, String nombre_categoria, String descripcion_categoria) {
		this.idcategoria_pastel = idcategoria_pastel;
		this.nombre_categoria = nombre_categoria;
		this.descripcion_categoria = descripcion_categoria;
	}
	
	//Getter
	public int getIdCategoriaPastel(){
		return idcategoria_pastel;
	}
	public String getNombreCategoria() {
		return nombre_categoria;
	}
	public String getDescripcionCategoria() {
		return descripcion_categoria;
	}

}
