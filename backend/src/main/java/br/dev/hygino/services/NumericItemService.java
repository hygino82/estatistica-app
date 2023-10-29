package br.dev.hygino.services;

import br.dev.hygino.dtos.NumericItemDTO;
import br.dev.hygino.dtos.NumericItemInsertDTO;
import jakarta.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NumericItemService {
    NumericItemDTO insert(NumericItemInsertDTO dto);

    Page<NumericItemDTO> findAll(Pageable pageable);

    NumericItemDTO getItemById(Long id);

    void remove(Long id);

    NumericItemDTO update(Long id, @Valid NumericItemInsertDTO dto);
}
