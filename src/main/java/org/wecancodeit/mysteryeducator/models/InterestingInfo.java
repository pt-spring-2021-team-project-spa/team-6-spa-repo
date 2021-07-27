package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class InterestingInfo {
    @Id
    @GeneratedValue
    private Long id;
    private String age;
    private String distance;
    private String size;
    private String weight;
    @ManyToOne
    private Subject subject;
    @ManyToOne
    @JsonIgnore
    private Planet planet;


    public Long getId() {
        return id;
    }

    public String getAge() {
        return age;
    }

    public String getDistance() {
        return distance;
    }

    public String getSize() {
        return size;
    }

    public String getWeight() {
        return weight;
    }

    public Subject getSubject() {
        return subject;
    }

    public Planet getPlanet() {
        return planet;
    }

    public InterestingInfo() {

    }

    public InterestingInfo(String age, String distance, String size, String weight) {
        this.age = age;
        this.distance = distance;
        this.size = size;
        this.weight = weight;

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InterestingInfo that = (InterestingInfo) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
