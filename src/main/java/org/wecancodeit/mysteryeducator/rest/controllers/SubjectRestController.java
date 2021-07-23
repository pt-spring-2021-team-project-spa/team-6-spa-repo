package org.wecancodeit.mysteryeducator.rest.controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.mysteryeducator.models.HashTag;
import org.wecancodeit.mysteryeducator.models.Subject;
import org.wecancodeit.mysteryeducator.repositories.HashTagRepository;
import org.wecancodeit.mysteryeducator.repositories.SubjectRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
public class SubjectRestController {
    @Resource
    private SubjectRepository subjectRepo;

    @Resource
    private HashTagRepository hashTagRepo;

    @GetMapping("/api/subjects")
    public Collection<Subject> getSubjects() {
        return (Collection<Subject>) subjectRepo.findAll();
    }

    @GetMapping("/api/subjects/{id}")
    public Optional<Subject> getSubject(@PathVariable Long id) {
        return subjectRepo.findById(id);
    }

    @PostMapping("/api/subjects/{id}/add-hashtag")
    public Optional<Subject> addHashTagToSubject(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newHashTag = new JSONObject(body);
        String hashTagName = newHashTag.getString("hashTagName");
        Optional<HashTag> hashTagToAddOpt = hashTagRepo.findByName(hashTagName);
        //if the hashtag exists in the database it can be included on the particular subject
        if (hashTagToAddOpt.isPresent()) {
            Optional<Subject> subjectToAddHashTagToOpt = subjectRepo.findById(id);
            Subject subjectToAddHashTagTo = subjectToAddHashTagToOpt.get();
            subjectToAddHashTagTo.addHashTag(hashTagToAddOpt.get());
            subjectRepo.save(subjectToAddHashTagTo);
        }
        return subjectRepo.findById(id);
    }

}