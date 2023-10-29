package br.dev.hygino.controllers;

import br.dev.hygino.dtos.NumericItemDTO;
import br.dev.hygino.dtos.NumericItemInsertDTO;
import br.dev.hygino.services.NumericItemService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
    public ResponseEntity<Page<NumericItemDTO>> findAll(Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK).body(this.numericItemService.findAll(pageable));
    }

    @GetMapping("/{id}")
    ResponseEntity<NumericItemDTO> getItemById(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(this.numericItemService.getItemById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remove(@PathVariable("id") Long id) {
        this.numericItemService.remove(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<NumericItemDTO> update(@PathVariable("id") Long id,
            @RequestBody @Valid NumericItemInsertDTO dto) {
        return ResponseEntity.status(HttpStatus.OK).body(this.numericItemService.update(id, dto));
    }
}
