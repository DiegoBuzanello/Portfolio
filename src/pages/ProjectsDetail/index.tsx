import React from 'react';
import './styles.css';

const ProjectsDetail = ({ project }: any) => {
    console.log(project);
    return (
        <>
            <div id="project-detail-page">
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsDetail;
