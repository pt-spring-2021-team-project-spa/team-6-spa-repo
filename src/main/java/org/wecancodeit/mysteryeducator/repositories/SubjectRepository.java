package org.wecancodeit.mysteryeducator.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.models.Subject;

public interface SubjectRepository extends CrudRepository<Subject,Long> {
}
