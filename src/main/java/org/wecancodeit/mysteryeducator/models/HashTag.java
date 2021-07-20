package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class HashTag {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ManyToMany(mappedBy = "hashTags")
    private Collection<Planet> planets;

    public HashTag() {

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Collection<Planet> getPlanets() {
        return planets;
    }

    public HashTag(Long id, String name) {
        this.id = id;
        this.name = name;
        planets = new ArrayList<>();

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HashTag hashTag = (HashTag) o;
        return id.equals(hashTag.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

