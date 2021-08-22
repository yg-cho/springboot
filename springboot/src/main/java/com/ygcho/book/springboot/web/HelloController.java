package com.ygcho.book.springboot.web;

import com.ygcho.book.springboot.web.dto.HelloResponseDto;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

    @GetMapping("/what")
    public String what() {
        return "what";
    }

    @GetMapping("/hello/dto")
    @RequestMapping(value = "/hello/dto", method = RequestMethod.POST)
    public HelloResponseDto helloDto(@RequestParam("name") String name, @RequestParam("amount") int amount) {
        return new HelloResponseDto(name, amount);
    }
}


