import React from 'react';
import { ProjectDetail } from '../../components/ProjectDetail';

const ProjectsDetail = ({ project }: any) => {
    console.log(project);
    return (
            <>
                <ProjectDetail>
                    <div className="col-8">
                        <img src={project.details.img} alt="" />
                        <div className="content">
                            <h2>{project.name}</h2>
                            <p>{project.details.text}</p>
                            
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="content">
                            <h2>Technologies</h2>
                            {project.map((item: any) => (
                                <ul key={item.id}>
                                    <span>{item.details.technologies.name}</span>
                                </ul>
                                


                            ))}
                
                            <h3>Titulo sub teste</h3>
                            <p>gddsgsd</p>
                            <h3>Titulo sub teste</h3>
                            <p>gddsgsd</p>
                            <h3>Titulo sub teste</h3>
                            <p>gddsgsd</p>
                            <h2>Título teste</h2>
                            <h3>Titulo sub teste</h3>
                            <p>gddsgsd</p>
                        </div>
                    </div>
                </ProjectDetail>

            
            </>
        );
}

export default ProjectsDetail;
