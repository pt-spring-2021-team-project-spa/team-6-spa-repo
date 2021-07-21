package org.wecancodeit.mysteryeducator.models;

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
    @OneToMany(mappedBy = "interestingInfos")
    private Subject subject;


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

    public Subject getData() {
        return subject;
    }
    public InterestingInfo(){

    }

    public InterestingInfo(Long id, String age, String distance, String size, String weight) {
        this.id = id;
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
