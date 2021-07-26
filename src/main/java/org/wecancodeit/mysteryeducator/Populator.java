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

        Subject Science = new Subject("testing","Science", planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8,planet9);
        subjectRepo.save(Science);


        Planet Mercury = new Planet("Mercury","first","Zipping around the sun in only 88 days, Mercury is the closest planet to the sun, and it's also the smallest, only a little bit larger than Earth's moon" , planet1);
        Planet Venus = new Planet ("Venus","second","The second planet from the sun, Venus is Earth's twin in size. Venus is an extreme example of the greenhouse effect.", planet2);
        Planet Earth = new Planet("Earth","third","The third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It's the only world known to harbor life.", planet3);
        Planet Mars = new Planet("Mars","fourth","The fourth planet from the sun is Mars, and it's a cold, desert-like place covered in dust. This dust is made of iron oxides, giving the planet its iconic red hue.",planet4);
        Planet Jupiter = new Planet("Jupiter","fifth","The fifth planet from the sun, Jupiter is a giant gas world that is the most massive planet in our solar system - more than twice as massive as all the other planets combined.",planet5);
        Planet Saturn = new Planet("Saturn ","sixth","The sixth planet from the sun, Saturn is known most for its rings. Rings are made of ice and rock.",planet6);
        Planet Uranus = new Planet("Uranus","seventh","Uranus is an oddball, its clouds are made of hydrogen sulfide same chemical that makes rotten eggs smell so foul",planet7);
        Planet Neptune = new Planet( "Neptune","eighth"," Neptune is about the size of Uranus and is known for supersonic strong winds. Neptune is far out and cold. ",planet8);
        Planet Pluto = new Planet ("Pluto","ninth","Once the ninth planet from the sun, Pluto is unlike other planets in many respects. It is smaller than Earth's moon; its orbit is highly elliptical, falling inside Neptune's orbit",planet9);
        planetRepo.save(Mercury);
        planetRepo.save(Venus);
        planetRepo.save(Earth);
        planetRepo.save(Mars);
        planetRepo.save(Jupiter);
        planetRepo.save(Saturn);
        planetRepo.save(Uranus);
        planetRepo.save(Neptune);
        planetRepo.save(Pluto);






    }
}
