const config = require('config.json');
const jwt = require('jsonwebtoken');

const projects = [
    {id:1, supervisor:"ktos", manager:'ktos2', description:"cos", key:"sss", users:[], type:"ss"},
    {id:2, supervisor:"ktos", manager:'ktos2', description:"cos", key:"sss", users:[], type:"ss"},
    {id:3, supervisor:"ktos", manager:'ktos2', description:"cos", key:"sss", users:[], type:"ss"},
    {id:4, supervisor:"ktos", manager:'ktos2', description:"cos", key:"sss", users:[], type:"ss"}

];


module.exports = {
    authenticate,
    getAllProjects,
    getProjectById,
    addProjects
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

async function addProjects(project) {
   projects.push(project);
}

async function getProjectById(id) {
    const project =  projects.find(u => u.id === parseInt(id));
    if (!project) return;
    return p;
}