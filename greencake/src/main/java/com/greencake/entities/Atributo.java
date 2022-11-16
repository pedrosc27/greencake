package com.greencake.entities;

import javax.persistence.Entity;

@Entity
public class Atributo {
//Atributos
	private int idatributo_pastel; 
	private String tamano;
	private String sabor_pan;
	private String sabor_relleno;
	private String figura_tematica;
	
	
//Constructor
	public Atributo(int idatributo_pastel, String tamano, String sabor_pan, String sabor_relleno, String figura_tematica) {
		this.idatributo_pastel = idatributo_pastel;
		this.tamano = tamano;
		this.sabor_pan = sabor_pan;
		this.sabor_relleno = sabor_relleno;
		this.figura_tematica = figura_tematica;
	}
	
//Getters
	public int getIdAtributoPastel() {
		return idatributo_pastel;
	}
	public String getTamano() {
		return tamano;
	}
	public String getSaborPan() {
		return sabor_pan;
	}
	public String getSaborRelleno() {
		return sabor_relleno;
	}
	public String getFiguraTematica() {
		return figura_tematica;
	}


}
