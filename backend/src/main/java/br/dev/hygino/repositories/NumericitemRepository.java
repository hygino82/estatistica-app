package br.dev.hygino.repositories;

import br.dev.hygino.entities.NumericItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface NumericitemRepository extends JpaRepository<NumericItem, Long> {
    @Query("SELECT obj FROM NumericItem obj WHERE obj.id =:id")
    Optional<NumericItem> getItemById(Long id);
}
