import { nanoid } from 'nanoid';

export const addTutor = tutor => {
  console.log(tutor);
  return {
    type: 'tutors/addTutor',
    payload: {
      id: nanoid(),
      firstName: tutor.firstName,
      lastName: tutor.lastName,
      email: tutor.email,
      phone: tutor.phone,
      city: tutor.city,
      options: tutor.options,
      role: tutor.role,
    },
  };
};

export const deleteTutor = tutorId => {
  console.log(tutorId);
  return {
    type: 'tutors/deleteTutor',
    payload: {
      id: tutorId,
    },
  };
};
