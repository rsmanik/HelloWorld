import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface Course {
    id: number;
    title: string;
    imageURL: string;
}

type MyCourseTileProps = {
    course: Course;
};


const CourseCard: React.FC<MyCourseTileProps> = ({ course }) => {
    return (
        <Card style={{ maxWidth: 345, margin: 16 }}>
            <Link to={`/courseinfo`} style={{ textDecoration: 'none' }}>
                <CardActionArea onClick={() => console.log('Course clicked!')}>
                    <CardMedia
                        component="img"
                        alt={course.title}
                        height="140"
                        image={course.imageURL}
                        title={course.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {course.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}

export default CourseCard;