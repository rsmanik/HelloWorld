import React, { useState } from 'react';
import { Card, CardContent, Typography, Stack, Box, Button, Tabs, Tab, Paper } from '@mui/material';

import SitemapBreadcrumb from '../../playdemy/courses/SitemapBreadcrumb';
import CourseOutline from './course-outline-tab';
import CourseProgress from './course-progress-tab';


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


    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100%">
            {/* 1. Breadcrumb Row */}
            <SitemapBreadcrumb levels={breadcrumbData} />

            {/* 2. Course title */}
            <Typography variant="h2" gutterBottom>
                {courseTitle}
            </Typography>

            {/* 3. MUI Stack */}
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                {/* Card 1 - Progress */}
                <Card variant="outlined" style={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" align="center">
                            Progress
                        </Typography>
                        <Typography variant="h3" align="center">
                            12%
                        </Typography>
                    </CardContent>
                </Card>

                {/* Card 2 - Modules Completed */}
                <Card variant="outlined" style={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" align="center">
                            Modules Completed
                        </Typography>
                        <Typography variant="h3" align="center">
                            12/35
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>

            {/* 4. Evaluation Test Button */}
            <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                Take evaluation test
            </Button>

            {/* 5. Tabs Component */}
            <Paper square style={{ marginTop: '16px', width: '100%' }}>
                <Tabs value={selectedTab} onChange={handleTabChange} centered>
                    <Tab label="Course Outline" />
                    <Tab label="Course Progress" />
                </Tabs>
            </Paper>

            {/* Tab content */}
            <Box mt={2} width="100%">
                {selectedTab === 0 && <CourseOutline data={pythonCourseOutline} />}
                {selectedTab === 1 && <CourseProgress />}
            </Box>
        </Box>
    );
};

export default CourseInfo;
