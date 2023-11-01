import { JobPostInterface } from 'interfaces/job-post';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  job_post_id: string;
  user_id: string;
  status?: string;
  cover_letter?: string;
  resume?: string;
  created_at?: any;
  updated_at?: any;

  job_post?: JobPostInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_post_id?: string;
  user_id?: string;
  status?: string;
  cover_letter?: string;
  resume?: string;
}
