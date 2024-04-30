export interface Session {
    day: string;
    startTime: string;
    endTime: string;
    type: string;
  }
  
  export interface Course {
    courseName: string;
    sessions: Session[];
  }
  
  export type Courses = Course[];
  