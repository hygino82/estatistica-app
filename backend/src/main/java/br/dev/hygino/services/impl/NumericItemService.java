package br.dev.hygino.services.impl;

import br.dev.hygino.dtos.NumericItemDTO;
import br.dev.hygino.dtos.NumericItemInsertDTO;

public interface NumericItemService {
    NumericItemDTO insert(NumericItemInsertDTO dto);
}
