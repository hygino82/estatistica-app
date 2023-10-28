package br.dev.hygino.dtos;

import jakarta.validation.constraints.NotNull;

public record NumericItemInsertDTO(
        @NotNull Double value,
        @NotNull
        Double quantity) {
}
