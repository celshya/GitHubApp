
import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/RepositoryDetail.css"
import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
const RepositoryDetail = ({ repo }) => {
  
  const { id } = useParams();
  const repository = repo.find((repo) => repo.id === parseInt(id, 10));
  console.log(repository)
  if (!repository) {
    return <p>Repository not found.</p>;
  }

  return (
    <div className='page-container'>
    <Link to="/"><SlArrowLeftCircle size={30} /></Link>
      <div className='profile-container'>
      <div className='avatar-container'> <img src={repository.owner.avatar_url} alt="Avatar" className='avatar'/></div>
       
        <h5>Verified by GitHub</h5>
        <p>GitHub confirms that this app meets the requirements for verification.</p>
        <p>Categories</p>
        <div >
        <button className='dummy-btn'>Code review</button>
        <button className='dummy-btn'>IDEs</button>
        <button className='dummy-btn'>Free</button>
        <button className='dummy-btn'>Paid</button>
        </div>
    
      
      </div>
      <div className='content-container'>
        <p>Application</p>
        <h1>{repository.name}</h1>
        
        <button aria-label="Click me">Set up a Plan</button>
        <p>{repository.description}</p>
        <p>This is a placeholder repository created for demonstration purposes. The dummy-project doesn't contain any real code or files and is solely intended to showcase repository-related functionalities. Feel free to explore the various features offered by GitHub, such as cloning, forking, and creating issues, within this simulated environment.</p>
      </div>
    </div>
  );
};

export default RepositoryDetail;
