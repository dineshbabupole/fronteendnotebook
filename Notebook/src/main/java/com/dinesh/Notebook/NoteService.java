package com.dinesh.Notebook;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    private final NoteRepository repo;

    public NoteService(NoteRepository repo) {
        this.repo = repo;
    }

    public List<Note> getAll() { return repo.findAll(); }
    public Note getById(String id) { return repo.findById(id).orElse(null); }
    public Note create(Note note) { return repo.save(note); }
    public Note update(String id, Note note) {
        Note existing = repo.findById(id).orElse(null);
        if (existing != null) {
            existing.setTitle(note.getTitle());
            existing.setContent(note.getContent());
            return repo.save(existing);
        }
        return null;
    }
    public void delete(String id) {
        repo.deleteById(id);
    }
}