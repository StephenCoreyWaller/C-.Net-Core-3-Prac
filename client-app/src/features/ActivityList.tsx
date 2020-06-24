import React from "react";
import { Item, Image, Segment, Button, Label } from "semantic-ui-react";
import { IActivity } from "../App/model/activity";
import "../App/layout/styles.css";

interface IProp {
  activity: IActivity;
  selectActivity: (id: string) => void;
}

const ActivityList: React.FC<IProp> = ({ activity, selectActivity }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        <Item key={activity.id}>
          <Item.Content>
            <Item.Header as="a">
              <h2>{activity.title}</h2>
            </Item.Header>
            <Item.Meta>  
              <div>{activity.date.toLocaleString().slice(0, 10)}</div>
            </Item.Meta>
            <Item.Description>
              <div>{activity.description}</div>
              <div style={{marginBottom: '1px'}}>{activity.city}, {activity.venue}</div>
            </Item.Description>
            <Item.Extra>
              <Button onClick={() => selectActivity(activity.id)} floated='right' content='view' color='blue'></Button>
              <Label basic content={activity.category}></Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
