/**
 * The {@code UserAlreadyExistsException$} class represents Functionalities
 *
 * @author ArunKumar D
 */

package com.strix_invoice.app.exceptions.custom;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT)
public class UserAlreadyExistsException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    public UserAlreadyExistsException(String message) {
        super(message);
    }
}