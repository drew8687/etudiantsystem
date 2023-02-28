package com.projetetudiant.etudiantsystem.controller;
import com.projetetudiant.etudiantsystem.service.EtudiantService;
import com.projetetudiant.etudiantsystem.model.Etudiant;
import com.projetetudiant.etudiantsystem.service.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.projetetudiant.etudiantsystem.model.Etudiant;
import java.util.List;

@RestController
@RequestMapping("/etudiant")
@CrossOrigin

public class EtudiantController {



        @Autowired
        private EtudiantService etudiantService;

        @PostMapping("/add")
        public String add(@RequestBody Etudiant etudiant) {
            etudiantService.saveStudent(etudiant);
            return "New student is added";
        }

        @GetMapping("/getAll")
        public List<Etudiant> list() {
            return etudiantService.getAllStudents();
        }
    }


