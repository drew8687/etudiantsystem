package com.projetetudiant.etudiantsystem.service;

import com.projetetudiant.etudiantsystem.model.Etudiant;
import com.projetetudiant.etudiantsystem.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtudiantServiceImpl implements EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;

    @Override
    public Etudiant saveStudent(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @Override
    public List<Etudiant> getAllStudents() {
        return etudiantRepository.findAll();
    }
}