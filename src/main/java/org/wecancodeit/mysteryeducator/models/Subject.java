package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.*;

@Entity
public class Subject {
    @Id
    @GeneratedValue
    private Long id;
    private String info;
    private String type;
    @ManyToOne
    private Collection<InterestingInfo> interestingInfos;
    @ManyToMany
    @JsonIgnore
    private Set<HashTag> hashTags;

    public Long getId() {
        return id;
    }

    public String getInfo() {
        return info;
    }

    public String getType() {
        return type;
    }


    public Collection<InterestingInfo> getInterestingInfos() {
        return interestingInfos;
    }

    public Set<HashTag> getHashTags() {
        return hashTags;
    }

    public Subject() {
    }

    public Subject(Long id, String info, String type, InterestingInfo... interestingInfos) {
        this.id = id;
        this.info = info;
        this.type = type;
        this.interestingInfos = new ArrayList<>(Arrays.asList(interestingInfos));
        this.hashTags = new HashSet<>();

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subject subject = (Subject) o;
        return id.equals(subject.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
