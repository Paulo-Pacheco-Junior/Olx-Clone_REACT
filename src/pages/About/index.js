import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PageContainer, PageTitle } from "../../components/MainComponents";


const About = (props) => {
  return(
    <PageContainer>
      <PageTitle>Página Sobre</PageTitle>
      Email: {props.email}<br/><br/>
      <Link to="/">Home</Link>
    </PageContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    
  }  
};

export default connect(mapStateToProps, mapDispatchToProps)(About);