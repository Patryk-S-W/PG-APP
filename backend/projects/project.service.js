const config = require('config.js');
const jwt = require('jsonwebtoken');

const projects = [
    {id:1, supervisor:"Ewa E.", manager:'Anastazy', description:"Modelling charge transfer processes in C 2+ –tetrahydrofuran collision for ion-induced radiation damage in DNA building blocks", key:"6hU2@", users:[], type:"Chemia, Biologia" ,raports:""},
    {id:2, supervisor:"Norbert D.", manager:'Anastazy', description:"Dron spadający", key:"5Y8k$", users:[], type:"Elektronika" ,raports:""},
    {id:3, supervisor:"Beata Ż.", manager:'Anastazy', description:"Czołg latający", key:"2Hm^i	", users:[], type:"Elektronika" ,raports:""},
    {id:4, supervisor:"Katarzyna K.", manager:'Anastazy', description:"Badanie przyciagania ziemskiego czujnikiem w smartfonie", key:"!dB4w", users:[], type:"Fizyka" ,raports:""}

];

module.exports = {
    authenticate,
    getAllProjects,
    getProjectById,
    addProject,
    addUserToProject
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getAllProjects() {
    return projects.map(p => {
        return p;
    });
}

async function addProject(project) {  
   projects.push(project);
   return project
}

async function getProjectById(id) {
    const project =  projects.find(u => u.id === parseInt(id));
    if (!project) return;
    return p;
}

async function addUserToProject(idUser,idProject) {
    
    const foundIndex = projects.findIndex(p => p.id == parseInt(idProject));
    projects[foundIndex].users.push(idUser);
    if (foundIndex==-1 ) return;
    return idUser;
}