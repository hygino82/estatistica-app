package br.dev.hygino.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.dev.hygino.dtos.NumericItemDTO;
import br.dev.hygino.dtos.NumericItemInsertDTO;
import br.dev.hygino.dtos.StatisticInfo;
import br.dev.hygino.entities.NumericItem;
import br.dev.hygino.repositories.NumericitemRepository;
import br.dev.hygino.services.NumericItemService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;

@Service
public class NumericItemServiceImpl implements NumericItemService {
    private final NumericitemRepository numericitemRepository;

    public NumericItemServiceImpl(NumericitemRepository numericitemRepository) {
        this.numericitemRepository = numericitemRepository;
    }

    @Override
    @Transactional
    public NumericItemDTO insert(NumericItemInsertDTO dto) {
        try {
            NumericItem entity;
            Optional<NumericItem> optional = this.numericitemRepository.getItemByValue(dto.value());

            if (optional.isPresent()) {
                entity = optional.get();
                entity.setQuantity(entity.getQuantity() + dto.quantity());
            } else {
                entity = new NumericItem(dto.value(), dto.quantity());
            }
            entity = this.numericitemRepository.saveAndFlush(entity);
            return new NumericItemDTO(entity);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    @Transactional(readOnly = true)
    public Page<NumericItemDTO> findAll(Pageable pageable) {
        Page<NumericItem> page = this.numericitemRepository.findAll(pageable);
        return page.map(NumericItemDTO::new);
    }

    @Override
    @Transactional(readOnly = true)
    public NumericItemDTO getItemById(Long id) {
        NumericItem entity = this.numericitemRepository.getItemById(id)
                .orElseThrow(() -> new IllegalArgumentException("Id: " + id + " not found"));
        return new NumericItemDTO(entity);
    }

    @Override
    public void remove(Long id) {
        this.numericitemRepository.deleteById(id);
    }

    @Override
    @Transactional
    public NumericItemDTO update(Long id, @Valid NumericItemInsertDTO dto) {
        try {
            NumericItem entity = this.numericitemRepository.getReferenceById(id);
            entity.setQuantity(dto.quantity());
            entity.setValue(dto.value());
            entity = this.numericitemRepository.saveAndFlush(entity);
            return new NumericItemDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new IllegalArgumentException("Id: " + id + " not found");
        }
    }

    @Override
    public StatisticInfo getResult() {
        double soma = 0.0;
        double quantidade = 0.0;
        double somaQuad = 0.0;
        List<NumericItem> list = this.numericitemRepository.findAll();

        for (NumericItem item : list) {
            soma += item.getQuantity() * item.getValue();
            quantidade += item.getQuantity();
        }

        double media = soma / quantidade;

        for (NumericItem item : list) {
            somaQuad += Math.pow(item.getValue() - media, 2.0);
        }

        double variancia = somaQuad / quantidade;
        double desvioPadrao = Math.sqrt(variancia);

        return new StatisticInfo(media, soma, variancia, desvioPadrao);
    }
}
