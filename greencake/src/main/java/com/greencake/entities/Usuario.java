package com.greencake.entities;
import java.sql.Timestamp;
import javax.persistence.Entity;

@Entity
public class Usuario {

	//Atributos
	private int idcliente;
	private String nombre_cliente;
	private String apellido_cliente;
	private String email;
	private String contrasena;
	private Timestamp fecha_alta;

	//Constructor
	public Usuario (int idcliente, String nombre_cliente, String apellido_cliente, String email, String contrasena) {
		this.idcliente = idcliente;
		this.nombre_cliente = nombre_cliente;
		this.apellido_cliente = apellido_cliente;
		this.email = email;
		this.contrasena = contrasena;
	}
	
	//Inicializar Timestamp
	{
		this.fecha_alta =  new Timestamp(new java.util.Date().getTime());
	}
	
	
	//Getter
	public int getIdCliente() {
		return idcliente;
	}
	public String getNombreCliente() {
		return nombre_cliente;
	}
	public String getApellidoCliente() {
		return apellido_cliente;
	}
	public String getEmail() {
		return email;
	}
	public String getConstrasena() {
		return contrasena;
	}
	public Timestamp getFechaAlta() {
		return fecha_alta;
	}
	
	
	
}