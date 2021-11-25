const studentsList = [
  {
    name: 'Salman',
    email_id: 'salman@gmail.com',
    role: 'admin',
    phone: '03462870231',
    rollNo: 505,
    password: 'Salman@1234',
  },
  {
    name: 'Awais',
    email_id: 'awais@gmail.com',
    role: 'student',
    phone: '03082392930',
    rollNo: 506,
    password: 'Awais@1234',
  },
  {
    name: 'Ashraf',
    email_id: 'ashraf@gmail.com',
    role: 'student',
    phone: '03007022497',
    rollNo: 511,
    password: 'Ashraf@1234',
  },
  {
    name: 'Asifa',
    email_id: 'asifa@gmail.com',
    role: 'student',
    phone: '03007022497',
    rollNo: 510,
    password: 'Asifa@1234',
  },
  {
    name: 'Abida',
    email_id: 'abida@gmail.com',
    role: 'student',
    phone: '03007022497',
    rollNo: 509,
    password: 'Abida@1234',
  },
  {
    name: 'Mehul',
    email_id: 'm  ehul@gmail.com',
    role: 'admin',
    phone: '03007022497',
    rollNo: 508,
    password: 'Mehul@1234',
  },
];

export const getStudents = (students) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (students?.length > 0) {
        resolve(students);
      } else {
        resolve(studentsList);
      }
    }, 2000);
  });
};

export const getStudentByuser_id = (rollNo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(studentsList.find((student) => student.rollNo == rollNo));
    }, 2000);
  });
};

export const addStudent = async (student) => {
  return await getStudents([...studentsList, student], 2000);
};

const teacherList = [
  {
    name: 'Salman',
    email_id: 'salman@gmail.com',
    phone: '03462870231',
    User_ID: 505,
    
  },
 /* {
    name: 'Awais',
    email_id: 'awais@gmail.com',
    phone: '03082392930',
    User_ID: 506,
  },
  {
    name: 'Ashraf',
    email_id: 'ashraf@gmail.com',
    phone: '03007022497',
    User_ID: 511,
  },
  {
    name: 'Asifa',
    email_id: 'asifa@gmail.com',
    phone: '03007022497',
    User_ID: 510,
  },
  {
    name: 'Abida',
    email_id: 'abida@gmail.com',
    phone: '03007022497',
    User_ID: 509,
  },
  {
    name: 'Mehul',
    email_id: 'm  ehul@gmail.com',
    phone: '03007022497',
    User_ID: 508,
  },*/

  
];

export const getTeachers = (teachers) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (teachers?.length > 0) {
        resolve(teachers);
      } else {
        resolve(teacherList);
      }
    }, 2000);
  });
};
export const getTeacherByEmail = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(teacherList.find((teacher) => teacher.email == email));
    }, 2000);
  });
};

export const addTeacher = async (teacher) => {
  return await getTeachers([...teacherList, teacher], 2000);
};

const users = [
  {
    username: 'msalman',
    password: 'abc1234@',
    role: 'teacher',
  },
  {
    username: 'Ashraf',
    password: 'abc1234@',
    role: 'student',
  },
];

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ...users.find(
          (user) => user.username === username && user.password === password
        ),
        token: 'faketoken:::',
      });
    }, 2000);
  });
}
