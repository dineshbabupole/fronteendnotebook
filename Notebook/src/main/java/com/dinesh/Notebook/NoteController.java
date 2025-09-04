package com.dinesh.Notebook;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/notes")
public class NoteController {

    private final NoteService service;
    public NoteController(NoteService service) { this.service = service; }

    @GetMapping
    public List<Note> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public Note getById(@PathVariable String id) { return service.getById(id); }

    @PostMapping
    public Note create(@RequestBody Note note) {
        return service.create(note);
    }

    @PutMapping("/{id}")
    public Note update(@PathVariable String id, @RequestBody Note note) {
        return service.update(id, note);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) { service.delete(id); }
}