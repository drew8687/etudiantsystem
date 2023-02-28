package com.projetetudiant.etudiantsystem.repository;
import com.projetetudiant.etudiantsystem.model.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EtudiantRepository extends JpaRepository<Etudiant,Integer> {

}
