package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Planet {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String location;
    @OneToMany(mappedBy = "subject")
    @JsonIgnore
    private Collection<Planet> planets;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public Collection<Planet> getPlanets() {
        return planets;
    }


    public Planet() {

    }

    public Planet(Long id, String name, String location) {
        this.id = id;
        this.name = name;
        this.location = location;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Planet planet = (Planet) o;
        return id.equals(planet.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

