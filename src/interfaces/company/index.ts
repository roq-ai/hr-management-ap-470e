import { DepartmentInterface } from 'interfaces/department';
import { EmployeeInterface } from 'interfaces/employee';
import { JobPostInterface } from 'interfaces/job-post';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
  industry_type?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  department?: DepartmentInterface[];
  employee?: EmployeeInterface[];
  job_post?: JobPostInterface[];

  _count?: {
    department?: number;
    employee?: number;
    job_post?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
  industry_type?: string;
  name?: string;
  tenant_id?: string;
}
