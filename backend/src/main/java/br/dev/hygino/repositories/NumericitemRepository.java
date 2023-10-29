package br.dev.hygino.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.dev.hygino.entities.NumericItem;

public interface NumericitemRepository extends JpaRepository<NumericItem, Long> {
    @Query("SELECT obj FROM NumericItem obj WHERE obj.id =:id")
    Optional<NumericItem> getItemById(Long id);
}
