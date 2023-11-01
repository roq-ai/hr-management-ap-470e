import { ApplicationInterface } from 'interfaces/application';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobPostInterface {
  id?: string;
  company_id: string;
  title: string;
  description?: string;
  requirements?: string;
  salary?: number;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
  };
}

export interface JobPostGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  title?: string;
  description?: string;
  requirements?: string;
}
