package br.dev.hygino.services.impl.impl;

import br.dev.hygino.dtos.NumericItemDTO;
import br.dev.hygino.dtos.NumericItemInsertDTO;
import br.dev.hygino.entities.NumericItem;
import br.dev.hygino.repositories.NumericitemRepository;
import br.dev.hygino.services.impl.NumericItemService;
import org.springframework.stereotype.Service;

@Service
public class NumericItemServiceImpl implements NumericItemService {
    private final NumericitemRepository numericitemRepository;

    public NumericItemServiceImpl(NumericitemRepository numericitemRepository) {
        this.numericitemRepository = numericitemRepository;
    }

    @Override
    public NumericItemDTO insert(NumericItemInsertDTO dto) {
        NumericItem entity = new NumericItem(dto.value(), dto.quantity());
        entity = this.numericitemRepository.saveAndFlush(entity);
        return new NumericItemDTO(entity);
    }
}
