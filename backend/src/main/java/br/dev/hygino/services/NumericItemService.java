package br.dev.hygino.services;

import br.dev.hygino.dtos.NumericItemDTO;
import br.dev.hygino.dtos.NumericItemInsertDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NumericItemService {
    NumericItemDTO insert(NumericItemInsertDTO dto);

    Page<NumericItemDTO> findAll(Pageable pageable);
}
