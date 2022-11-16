package com.greencake.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

//import com.greencake.controller.CrossOrigin;
//import com.greencake.controller.RequestMapping;

import com.greencake.entities.Atributo;
import com.greencake.service.AtributoService;

public class AtributoController {

	@Autowired
	AtributoController atributoController;
		
	@GetMapping("/atributo/{idatributo}")
	public @ResponseBody Atributo getAtributoById(@PathVariable("idatributo") Integer idatributo) {
		return AtributoService.findAtributoById(idatributo);
	}

	@GetMapping("/atributo")
	public @ResponseBody Iterable<Atributo> getAllAtributo(){
		return AtributoService.getAllAtributo();
	}

}
