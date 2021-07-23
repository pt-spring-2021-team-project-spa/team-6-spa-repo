package org.wecancodeit.mysteryeducator.rest.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.InterestingInfo;
import org.wecancodeit.mysteryeducator.repositories.InterestingInfoRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class InterestingInfoRestController {

    @Resource
    private InterestingInfoRepository interestingInfoRepo;

    @GetMapping("/api/interestingInfos")
    public Collection<InterestingInfo> getInterestingInfos() {
        return (Collection<InterestingInfo>) interestingInfoRepo.findAll();
    }

    @GetMapping("/api/interestingInfos/{interestingInfoId}")
    public InterestingInfo getInterestingInfo(@PathVariable Long interestingInfoId) {
        return interestingInfoRepo.findById(interestingInfoId).get();
    }
}
