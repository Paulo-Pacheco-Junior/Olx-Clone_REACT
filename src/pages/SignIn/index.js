import {PageArea} from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import { useState } from 'react';
import { doLogin } from '../../components/helpers/AuthHandler';
import useApi from '../../components/helpers/OlxApi';

const SignIn = () => {
  const api = useApi();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');

    const json = await api.login(email, password);

    if(json.error) {
      setError(json.error);
    }else{
      doLogin(json.token, rememberPassword);
      window.location.href = '/';
    }

    setDisabled(false);
  }

  return(
    <PageContainer>
      <PageTitle>Login</PageTitle>

      {error &&
        <ErrorMessage>{error}</ErrorMessage>
      }

      <PageArea>
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Email</div>
            <div className="area--input">
              <input 
                type="email"
                disabled={disabled}
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input 
                type="password"
                disabled={disabled}
                value={password}
                onChange={e=>setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Lembrar Senha</div>
              <input 
                type="checkbox"
                disabled={disabled}
                checked={rememberPassword}
                onChange={()=>setRememberPassword(!rememberPassword)}
              />
          </label>   
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled} >Fazer Login</button>
            </div>    
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default SignIn;