package com.xen.springReact;

import com.xen.springReact.model.User;
import com.xen.springReact.model.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final UserRepository repository;

    public Initializer(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Toto", "Titi", "Tutu",
                "Tata").forEach(name ->
                repository.save(new User(name))
        );

        repository.findAll().forEach(System.out::println);
    }
}
