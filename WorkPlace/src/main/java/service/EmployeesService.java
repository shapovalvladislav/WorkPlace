package service;

import java.util.List;
import dao.DaoFactory;
import dao.EmployeesDAO;
import domain.Employee;
import schema.EmployeesRequest;

public class EmployeesService {

	public static List<Employee> getList(EmployeesRequest req) {
		EmployeesDAO dao = DaoFactory.getEmployeesDAO();
		List<Employee> employees = dao.getList(req);

		return employees;
	}
	
	public static Employee findById(long id) {
		EmployeesDAO dao = DaoFactory.getEmployeesDAO();

		return dao.findById(id);
	}
	
}
