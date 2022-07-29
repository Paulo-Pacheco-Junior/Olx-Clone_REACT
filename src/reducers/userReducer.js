let initialState = {
  email:'Visitante'
};

export default (state = initialState, action) => {

  switch(action.type){
    case 'SET_EMAIL':
      return { ...state, email:action.payload.email };
      break;
  }

  return state;
};