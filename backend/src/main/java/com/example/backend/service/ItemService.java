package com.example.backend.service;

import com.example.backend.model.Item;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Value("${data.file.path:data/items.json}")
    private String FILE_PATH;
    private final ObjectMapper mapper = new ObjectMapper();

    @PostConstruct
    public void init() {
        try {
            Path path = Paths.get(FILE_PATH);
            if (path.getParent() != null) {
                Files.createDirectories(path.getParent());
            }
            System.out.println("Ruta del archivo JSON: " + path.toAbsolutePath());
            
            File file = new File(FILE_PATH);
            if (!file.exists()) {
                mapper.writeValue(file, new ArrayList<Item>()); // Crea el [] inicial
            }
        } catch (Exception e) {
            System.err.println("Error inicializando archivo: " + e.getMessage());
        }
    }

    public List<Item> getItems() {
        try {
            File file = new File(FILE_PATH);

            if (!file.exists()) {
                return new ArrayList<>();
            }

            return mapper.readValue(file, new TypeReference<List<Item>>() {});
        } catch (Exception e) {
            throw new RuntimeException("Error reading items", e);
        }
    }

    public Item addItem(Item item) {
        try {
            List<Item> items = getItems();

            item.setId((long) (items.size() + 1));
            items.add(item);

            mapper.writeValue(new File(FILE_PATH), items);

            return item;
        } catch (Exception e) {
            throw new RuntimeException("Error saving item", e);
        }
    }
}