package br.dev.hygino.services.impl;

import br.dev.hygino.dtos.NumericItemDTO;
import br.dev.hygino.dtos.NumericItemInsertDTO;
import br.dev.hygino.entities.NumericItem;
import br.dev.hygino.repositories.NumericitemRepository;
import br.dev.hygino.services.NumericItemService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Override
    public Page<NumericItemDTO> findAll(Pageable pageable) {
        Page<NumericItem> page = this.numericitemRepository.findAll(pageable);
        return page.map(NumericItemDTO::new);
    }

    @Override
    public NumericItemDTO getItemById(Long id) {
        NumericItem entity = this.numericitemRepository.getItemById(id).orElseThrow(() -> new IllegalArgumentException("Id: " + id + " not found"));
        return new NumericItemDTO(entity);
    }
}
