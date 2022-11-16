package com.greencake.entities;

import javax.persistence.Entity;

@Entity
public class Producto {
	//Atributos
	private int idpastel;
	private int idcategoria_pastel;
	private int idatributo_pastel;
	private String nombre_pastel;
	private String descripcion;
	
	
	//Constructor
		public Producto (int idpastel, int idcategoria_pastel, int idatributo_pastel, String nombre_pastel, String descripcion){
			this.idpastel = idpastel;
			this.idcategoria_pastel = idcategoria_pastel;
			this.idatributo_pastel = idatributo_pastel;
			this.nombre_pastel = nombre_pastel;
			this.descripcion = descripcion; 
		}
		
		//Getter
		public int getIdPastel(){  
			return idpastel;
		}
		public int getIdCategoriaPastel(){  
			return idcategoria_pastel;
		}
		public int getIdAtributoPastel(){  
			return idatributo_pastel;
		}
		public String getNombrePastel(){  
			return nombre_pastel;
		}
		public String getDescripcion(){  
			return descripcion;
		}

		
}
