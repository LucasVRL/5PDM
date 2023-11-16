
import searchScreen from './views/searchView';

const handleLogin = () => {
    if (email === 'teste@teste.com' && password === 'senha123') {
      searchScreen();
    } else {
      return false
    }
  };

  export default {
    handleLogin
  };