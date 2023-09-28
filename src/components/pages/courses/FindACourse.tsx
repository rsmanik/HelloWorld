
import React, { useState } from 'react';
import { Card, CardContent, Typography, Stack, Box, Button, Tabs, Tab, Paper } from '@mui/material';

import SitemapBreadcrumb from '../../playdemy/courses/SitemapBreadcrumb';
import CourseOutline from './course-outline-tab';
import CourseProgress from './course-progress-tab';
import { Link } from 'react-router-dom';

const CourseInfo = () => {
    const breadcrumbData = [
        { name: 'Home', url: '/' },
        { name: 'Category', url: '/category' },
        { name: 'Course', url: '/course' }
    ];

    const pythonCourseOutline = [
        {
            title: "Introduction",
            concepts: [
                { name: "What is Python?" },
                { name: "History of Python" },
            ]
        },
        {
            title: "Basic Syntax",
            concepts: [
                { name: "Variables and Data Types" },
                { name: "Operators" },
            ]
        }
        ,
        {
            title: "Basic Syntax",
            concepts: [
                { name: "Variables and Data Types" },
                { name: "Operators" },
            ]
        },
        {
            title: "Basic Syntax",
            concepts: [
                { name: "Variables and Data Types" },
                { name: "Operators" },
            ]
        },
        {
            title: "Basic Syntax",
            concepts: [
                { name: "Variables and Data Types" },
                { name: "Operators" },
            ]
        },
        {
            title: "Basic Syntax",
            concepts: [
                { name: "Variables and Data Types" },
                { name: "Operators" },
            ]
        },
        {
            title: "Basic Syntax",
            concepts: [
                { name: "Variables and Data Types" },
                { name: "Operators" },
            ]
        }
    ];

    const courseTitle = "Your Course Title"; // Adjust as needed

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    const handleSubscribeClick = async () => {
        try {
            const response = await axios.post('/subscribetocourse', { id: courseId });

            if (response.status === 200 && response.data.success) { // adjust the conditions as per your API response
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully subscribed to the course.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = `/courseinfo/${courseId}`;
                    }
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Subscription failed. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Subscription failed. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };



    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100%">

            <CourseOutline data={pythonCourseOutline} />

            <Button variant="contained" color="primary" onClick={handleSubscribeClick}>
                Subscribe
            </Button>
            </Box>
    );
};

export default CourseInfo;
