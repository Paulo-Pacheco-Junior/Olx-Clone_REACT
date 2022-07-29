import { Link } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";

const NotFound = (props) => {
  return(
    <PageContainer>
      <PageTitle>Página não encontrada</PageTitle>
      <Link to="/">voltar para a HOME</Link><br/><br/>
    </PageContainer>
  );
}

export default NotFound;