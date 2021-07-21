package org.wecancodeit.mysteryeducator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.mysteryeducator.models.HashTag;
import org.wecancodeit.mysteryeducator.models.InterestingInfo;
import org.wecancodeit.mysteryeducator.models.Planet;
import org.wecancodeit.mysteryeducator.models.Subject;
import org.wecancodeit.mysteryeducator.repositories.HashTagRepository;
import org.wecancodeit.mysteryeducator.repositories.InterestingInfoRepository;
import org.wecancodeit.mysteryeducator.repositories.PlanetRepository;
import org.wecancodeit.mysteryeducator.repositories.SubjectRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private HashTagRepository hashTagRepo;
    @Resource
    private InterestingInfoRepository interestingRepo;
    @Resource
    private PlanetRepository planetRepo;
    @Resource
    private SubjectRepository subjectRepo;

    @Override
    public void run(String... args) throws Exception {

        Subject Science = new Subject(1,"testing","Science","testing","testing");
        subjectRepo.save(Science);


        Planet Mercury = new Planet(1,"Mercury","first");
        Planet Venus = new Planet (2,"Venus","second");
        Planet Earth = new Planet(3,"Earth","third");
        Planet Mars = new Planet(4,"Mars","fourth");
        Planet Jupiter = new Planet(5,"Jupiter","fifth");
        Planet Saturn = new Planet(6,"Saturn ","sixth");
        Planet Uranus = new Planet(7,"Uranus","seventh");
        Planet Neptune = new Planet( 8,"Neptune","eighth");
        Planet Pluto = new Planet (9,"Pluto","ninth");
        planetRepo.save(Mercury);
        planetRepo.save(Venus);
        planetRepo.save(Earth);
        planetRepo.save(Mars);
        planetRepo.save(Jupiter);
        planetRepo.save(Saturn);
        planetRepo.save(Uranus);
        planetRepo.save(Neptune);
        planetRepo.save(Pluto);

        InterestingInfo planet1 = new InterestingInfo( 1,"testing","testing","testing","testing");
    }
}
