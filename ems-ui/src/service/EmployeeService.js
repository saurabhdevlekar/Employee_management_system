import axios from 'axios';

const BASE_URL = "http://localhost:5454/api/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(BASE_URL + "/");
    }

    saveEmployee(employee) {
        return axios.post(BASE_URL + "/save", employee);
    }

    getEmployeeById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    editEmployee(id, employee) {
        return axios.post(`${BASE_URL}/edit/${id}`, employee);
    }

    deleteEmployee(id) {
        return axios.delete(`${BASE_URL}/delete/${id}`)
            .catch(error => {
                console.error("Error deleting employee:", error.response?.data || error.message);
                throw new Error(error.response?.data || "Failed to delete employee.");
            });
    }
}

export default new EmployeeService();


