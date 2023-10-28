package br.dev.hygino.controllers;

import br.dev.hygino.dtos.NumericItemDTO;
import br.dev.hygino.dtos.NumericItemInsertDTO;
import br.dev.hygino.services.impl.NumericItemService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/numeric")
public class NumericItemController {
    private final NumericItemService numericItemService;

    public NumericItemController(NumericItemService numericItemService) {
        this.numericItemService = numericItemService;
    }

    @PostMapping
    public ResponseEntity<NumericItemDTO> insert(@RequestBody @Valid NumericItemInsertDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.numericItemService.insert(dto));
    }
}
