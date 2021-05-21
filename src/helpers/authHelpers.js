import Api from '/src/Api';

const loadProfile = (dispatchLoggedIn) => {

    Api.getProfile().then(function(profile) {
  
      if(!!profile && !!profile.data)
      {
  
        dispatchLoggedIn(profile.data);
  
      }
  
    });
  
};

export { loadProfile };