import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box, Badge } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CourseOutline({ data }) {
    return (
        <div>
            {data.map((topic, index) => (
                <Accordion key={index} style={{ marginBottom: '10px', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        style={{ backgroundColor: '#f6f6f6', justifyContent: 'space-between' }}
                    >
                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>{topic.title}</Typography>
                        <Badge color="primary" badgeContent={topic.concepts.length}   style={{ marginLeft: 'auto',marginRight:'20px' }}/>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box width="100%">
                            {topic.concepts.map((concept, cIndex) => (
                                <Box
                                    key={cIndex}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    mb={1}
                                    pb={0.5}
                                    style={{
                                        borderBottom: cIndex !== topic.concepts.length - 1 ? '1px solid #e0e0e0' : 'none'
                                    }}
                                >
                                    <Typography variant="body1" style={{ marginLeft: '10px', color: '#333' }}>{concept.name}</Typography>
                                    <Box>
                                        <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Action 1</Button>
                                        <Button variant="outlined" color="secondary">Action 2</Button>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default CourseOutline;
