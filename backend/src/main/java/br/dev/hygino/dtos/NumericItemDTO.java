package br.dev.hygino.dtos;

import br.dev.hygino.entities.NumericItem;

public record NumericItemDTO(Long id, Double value, Double quantity) {
    public NumericItemDTO(NumericItem entity) {
        this(entity.getId(), entity.getValue(), entity.getQuantity());
    }
}
