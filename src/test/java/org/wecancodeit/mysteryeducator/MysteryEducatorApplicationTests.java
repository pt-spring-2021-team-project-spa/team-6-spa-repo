package org.wecancodeit.mysteryeducator;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.wecancodeit.mysteryeducator.models.HashTag;
import org.wecancodeit.mysteryeducator.models.InterestingInfo;
import org.wecancodeit.mysteryeducator.models.Planet;
import org.wecancodeit.mysteryeducator.models.Subject;

@SpringBootTest
class MysteryEducatorApplicationTests {

	@Test
	void contextLoads() {
		InterestingInfo tempInfo = new InterestingInfo("17","10000","1000","100");
		Planet tempPlanet = new Planet("mars","mars",tempInfo);
		Subject tempSubject = new Subject("astronomy","type",tempInfo);
		HashTag tempHashTag = new HashTag("name",tempSubject);
	}

}
