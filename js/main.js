
const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectEl = document.createElement('div');
    projectEl.classList.add('project');

    projectEl.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        <a href="${project.live_url}" target="_blank">Live Demo</a>
        <a href="${project.source_url}" target="_blank">Source Code</a>
    `;

    projectList.appendChild(projectEl);
});
