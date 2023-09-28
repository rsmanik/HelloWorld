import React from 'react';

import {Stack} from '@mui/material';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';


interface QuestionTemplate1Props {
  question: string;
  //options: string[];
}

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SlideTemplate1: React.FC<QuestionTemplate1Props> = ({question}) => {
  return (
      <div id="quetemp3" className="choice4_ques_div quetem3" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <div className="choice4_ques1">
          <div id="t3_question_statement" className="ques_text question_statement">
            {question}
          </div>
        </div>
        <div className="choice4_div">
          <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </div>
      </div>
  );
};


export default SlideTemplate1;
