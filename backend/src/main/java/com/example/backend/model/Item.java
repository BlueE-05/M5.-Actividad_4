package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Item {

    private Long id;

    @JsonProperty("nombre")
    private String nombre;

    @JsonProperty("grupo")
    private String grupo;

    public Item() {}

    public Item(Long id, String nombre, String grupo) {
        this.id = id;
        this.nombre = nombre;
        this.grupo = grupo;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getGrupo() { return grupo; }
    public void setGrupo(String grupo) { this.grupo = grupo; }
}