const initialStateTutors = {
  tutors: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      phone: '+1 302-865-7394',
      email: 'johnsmith@goit.global',
      city: 'New York',
      options: 'Group creation',
      role: 'admin',
    },
    {
      id: 2,
      firstName: 'Antonio',
      lastName: 'García',
      phone: '+34 456 890 302',
      email: 'antonio.garcia@goit.global',
      city: 'Madrid',
      options: 'Group creation, editing teacher profiles',
      role: 'member',
    },
    {
      lastName: 'Ion',
      firstName: 'Test',
      email: 'test@test.com',
      phone: '123456',
      city: 'Test',
      id: 3,
    },
  ],
};

export const tutorsReducer = (state = initialStateTutors, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case 'tutors/addTutor': {
      return { ...state, tutors: [...state.tutors, action.payload] };
    }
    case 'tutors/deleteTutor': {
      return {
        ...state,
        tutors: state.tutors.filter(tutor => tutor.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
