package com.dinesh.Notebook;



import com.dinesh.Notebook.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note,String>{

}
