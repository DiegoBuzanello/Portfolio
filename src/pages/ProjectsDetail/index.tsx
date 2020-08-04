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
                        {project.details.info.map((item: any) => (
                            <ul key={item.name}>
                                <p>{item.name}</p>
                                <p>{item.url}</p>
                            </ul>
                        ))}

                        {project.details.technologies.map((item: any) => (
                            <ul key={item.name}>
                                <p>{item.name}</p>
                                <p>{item.tecs}</p>
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
