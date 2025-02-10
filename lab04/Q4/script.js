let editingId = null;

function loadProjects() {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    displayProjects(projects);
}

function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
    loadProjects();
}

function addOrUpdateProject() {
    const title = document.getElementById('projectTitle').value.trim();
    const description = document.getElementById('projectDescription').value.trim();
    const status = document.getElementById('projectStatus').value;
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');

    if (editingId) {
        const project = projects.find(p => p.id === editingId);
        project.title = title;
        project.description = description;
        project.status = status;
    } else {
        const id = Date.now();
        projects.push({ id, title, description, status });
    }
    
    saveProjects(projects);
    clearForm();
}

function editProject(id) {
    const project = JSON.parse(localStorage.getItem('projects') || '[]').find(p => p.id === id);
    if (project) {
        document.getElementById('projectTitle').value = project.title;
        document.getElementById('projectDescription').value = project.description;
        document.getElementById('projectStatus').value = project.status;
        editingId = id; 
    }
}

function deleteProject(id) {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]').filter(p => p.id !== id);
    saveProjects(projects);
}

function filterProjects() {
    const status = document.getElementById('filterStatus').value;
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const filteredProjects = status === 'all' ? projects : projects.filter(p => p.status === status);
    displayProjects(filteredProjects);
}

function searchProjects() {
    const search = document.getElementById('searchBox').value.toLowerCase();
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const filteredProjects = projects.filter(p => p.title.toLowerCase().includes(search));
    displayProjects(filteredProjects);
}

function displayProjects(projects) {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';
    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${project.title}</strong>
            <p>${project.description}</p>
            <small>Status: ${project.status}</small>
            <button onclick="editProject(${project.id})">Edit</button>
            <button onclick="deleteProject(${project.id})">Delete</button>
        `;
        projectList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectDescription').value = '';
    document.getElementById('projectStatus').value = 'Pending';
    editingId = null;
}

window.onload = loadProjects;
