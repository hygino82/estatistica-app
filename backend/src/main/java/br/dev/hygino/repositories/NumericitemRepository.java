package br.dev.hygino.repositories;

import br.dev.hygino.entities.NumericItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NumericitemRepository extends JpaRepository<NumericItem, Long> {
}
