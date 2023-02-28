package com.projetetudiant.etudiantsystem.service;
import com.projetetudiant.etudiantsystem.model.Etudiant;
import java.util.List;




public interface EtudiantService {


        public Etudiant saveStudent(Etudiant etudiant);
        public List<Etudiant> getAllStudents();
    }

