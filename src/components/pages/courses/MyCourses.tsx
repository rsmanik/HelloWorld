import React from 'react';
import CourseCard from '../../playdemy/courses/CourseCard';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function CoursesList() {
  const courses = [
    {
      id: "C1",
      title: 'React Basics',
      imageURL: 'https://uploads-ssl.webflow.com/650bf592843cb575a5d9a63a/650bf592843cb575a5d9a631_daynight-p-130x130q80.png',
    },
    {
      id: "C2",
      title: 'Advanced React Patterns',
      imageURL: 'https://uploads-ssl.webflow.com/650bf592843cb575a5d9a63a/650bf592843cb575a5d9a631_daynight-p-130x130q80.png',
    }
  ];

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            All Courses
          </Typography>
          <Link to="/findacourse">
            <Button color="inherit" onClick={() => console.log('Add Course clicked!')}>
              Add Course
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <Box mt={3} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </Box>
    </div>
  );
}

export default CoursesList;