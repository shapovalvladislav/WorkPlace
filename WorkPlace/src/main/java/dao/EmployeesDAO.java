package dao;

import java.util.HashMap;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

import domain.Employee;
import schema.EmployeesRequest;

public class EmployeesDAO extends GenericDAO<Employee> {

	public EmployeesDAO(SessionFactory factory) {
		super(Employee.class, factory);
	}
		
	public Employee findById(long id) {
		return super.findById(id);
	}
	
	public List<Employee> getList(EmployeesRequest req) {
		Session session = getFactory().openSession();
		Criteria cr = session.createCriteria(Employee.class);
		if (req.getBossId() != null) {
			cr.add(Restrictions.eq("boss_id", req.getBossId()));
		}
		
		return cr.list();
	}
	
	
}
