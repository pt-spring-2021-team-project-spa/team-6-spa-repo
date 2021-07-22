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

        Subject Science = new Subject("testing","Science");
        subjectRepo.save(Science);


        Planet Mercury = new Planet("Mercury","first");
        Planet Venus = new Planet ("Venus","second");
        Planet Earth = new Planet("Earth","third");
        Planet Mars = new Planet("Mars","fourth");
        Planet Jupiter = new Planet("Jupiter","fifth");
        Planet Saturn = new Planet("Saturn ","sixth");
        Planet Uranus = new Planet("Uranus","seventh");
        Planet Neptune = new Planet( "Neptune","eighth");
        Planet Pluto = new Planet ("Pluto","ninth");
        planetRepo.save(Mercury);
        planetRepo.save(Venus);
        planetRepo.save(Earth);
        planetRepo.save(Mars);
        planetRepo.save(Jupiter);
        planetRepo.save(Saturn);
        planetRepo.save(Uranus);
        planetRepo.save(Neptune);
        planetRepo.save(Pluto);

        InterestingInfo planet1 = new InterestingInfo( "4.5 billion years","35.98 million mi","3,032 mi","3.285 × 10^23 kg");
        InterestingInfo planet2 = new InterestingInfo("4.53 billion years","67.24 million mi","7,520 mi","4.87 × 1024 kg");
        InterestingInfo planet3 = new InterestingInfo("4.54 billion years","91 million mi","7,917 mi","5.972 × 10^24 kg");
        InterestingInfo planet4 = new InterestingInfo("4.60 billion years","155.6 million mi","4,212 mi","6.39 × 10^23 kg");
        InterestingInfo planet5 = new InterestingInfo("4.60 billion years","468.9 million mi","86,881 mi","1.898 × 10^27 kg");
        InterestingInfo planet6 = new InterestingInfo("4.50 billion years","923.49 million mi","72,367 mi","5.683 × 10^26 kg");
        InterestingInfo planet7 = new InterestingInfo("4.50 billion years","1.83 billion mi","31,518 mi","8.681 × 10^25 kg");
        InterestingInfo planet8 = new InterestingInfo("4.50 billion years","2.78 billion mi","30,599 mi","1.024 × 10^26 kg");
        InterestingInfo planet9 = new InterestingInfo("4.46 billion years","3.7 billion mi","1,476 mi","1.30 x 10^22 kg");
        interestingRepo.save(planet1);
        interestingRepo.save(planet2);
        interestingRepo.save(planet3);
        interestingRepo.save(planet4);
        interestingRepo.save(planet5);
        interestingRepo.save(planet6);
        interestingRepo.save(planet7);
        interestingRepo.save(planet8);
        interestingRepo.save(planet9);




    }
}
