import React, { useEffect, useState } from 'react';
import { getTeachers } from '../../../api/fakeapi';

import Customtable from '../../../components/common/customTable';
//import AppModal from '../../../components/common/Modal/Modal';
//import AddTeacherForm from '../../../components/teacher/addTeacherForm/teacherForm';
import { Button, FormControl, Form, Row, Col } from 'react-bootstrap';

const TeacherList = () => {

  const [state, setState] = useState({
    teacherList: [],
    teacherLoading: false,
    allTeacher: [],
    headingArray: [
      'User_name',
      'Email_ID',
      'Contact_no.',
      'User_ID',
      ,
    ],
  });

  useEffect(() => {
    setState({ ...state, teacherLoading: true });
    getTeachers().then((techList) => {
      setState({
        ...state,
        teacherLoading: false,
        teacherList: techList,
        allTeacher: techList,
      });
    });
  }, []);

  const onDeleteHandler = (email) => {
    let filteredTeacherList = [...state.teacherList];
    filteredTeacherList = filteredTeacherList.filter((teacher) => {
      return teacher.email !== email;
    });
    setState({ ...state, teacherList: filteredTeacherList });
  };
  const onChangeHandler = (e) => {
    const querry = e.target.value;

    if (!e.target.value) {
      setState({ ...state, teacherList: state.allTeacher });
      return;
    }
    let reformedTeacherList = [...state.allTeacher];
    reformedTeacherList = reformedTeacherList.filter((teacher) => {
      return teacher.teacherName.toLowerCase().includes(querry.toLowerCase());
    });
    setState({ ...state, teacherList: reformedTeacherList });
  };
  const onResetHandler = () => {
    setState({ ...state, teacherList: state.allTeacher });
  };
  const selectHandler = (e) => {
    if (!e.target.value) {
      setState({ ...state, teacherList: state.allTeacher });
      return;
    }
    let filteredTeacherList = [...state.allTeacher];
    filteredTeacherList = filteredTeacherList.filter(
      (teacher) => teacher.designation == e.target.value
    );

    setState({ ...state, teacherList: filteredTeacherList });
  };

  return (
    <div>
      <div className='mt-3'>
        <div className='d-flex flex-row justify-content-between'>
          <Button size='sm' variant='warning' onClick={onResetHandler}>
            Reset Button
          </Button>
        </div>
        <Row className='mt-4'>
          <Col>
            <FormControl
              placeholder='Username'
              aria-label='Username'
              aria-describedby='basic-addon1'
              className='search-bar'
              placeholder='Enter here for search'
              onChange={onChangeHandler}
            />
          </Col>
        </Row>
      </div>
      <div>
        <Customtable
          list={state.teacherList}
          headingArray={state.headingArray}
          uniqueTrait='email'
          linkKey={'teacherName'}
          link={{
            to: '/teachers/details',
          }}
          renderActions={(email) => {
            return (
              <>
                <Button >
                  Get Result
                </Button>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default TeacherList;
