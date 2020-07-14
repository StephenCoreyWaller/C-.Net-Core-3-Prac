import React, { ChangeEvent, FormEvent } from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import { REPLCommand } from 'repl';
import { IActivity } from '../App/model/activity';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';

interface IProp {
    setEditMode: (editMode: boolean) => void; 
    activity: IActivity; 
    createActivity: (activity: IActivity) => void; 
    editActivity: (activity: IActivity) => void; 
}


export const ActivityForm : React.FC<IProp> = ({setEditMode, activity: initalFormState, createActivity, editActivity}) => {

    const initalizeField = () => {

        if(initalFormState){

            return initalFormState; 
        }else{
            return  {
                id: '', 
                title: '', 
                description: '',
                category: '', 
                date: '',
                city: '', 
                venue: '',
            }; 
        };
    };
    const [activity, setActivity] = useState<IActivity>(initalizeField)

    const handleChangeValue = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {name, value} = event.currentTarget;
        setActivity({...activity, [name]: value});
    }
    const handleSubmit = () => {
        
        if(activity.id.length === 0){

            let newActivity = {
                ...activity, 
                id: uuid()
            }
            createActivity(newActivity); 
        }else{
            editActivity(activity); 
        }
        setEditMode(false)
    }
    
    return (
            <Segment clearing>
                <Form onSubmit={handleSubmit} >
                    <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleChangeValue}/>
                    <Form.TextArea rows={2} placeholder='Description' value={activity.description} name='description' onChange={handleChangeValue}/>
                    <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleChangeValue}/>
                    <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleChangeValue}/>
                    <Form.Input placeholder='City'value={activity.city} name='city' onChange={handleChangeValue}/>
                    <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleChangeValue}/>
                    <Button floated='right' positive type='submit' content='Submit' />
                    <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel'/>
                </Form>
            </Segment>
      
    )
}
export default ActivityForm