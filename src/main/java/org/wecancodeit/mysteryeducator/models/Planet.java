package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Planet {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String location;
    private String description;
    @OneToMany(mappedBy = "planet")
    @JsonIgnore
    private Collection<InterestingInfo>interestingInfos;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public String getDescription() {
        return description;
    }

    public Collection<InterestingInfo> getInterestingInfos() {
        return interestingInfos;
    }

    public Planet() {

    }

    public Planet( String name, String location, String description,InterestingInfo...interestingInfos) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.interestingInfos = new ArrayList<>(Arrays.asList(interestingInfos));
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

