import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../App/model/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "./ActivityDetails";
import { ActivityForm } from "./ActivityForm";


interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void; 
    selectedActivity: IActivity | null; 
}

export const ActivitiesDashboard : React.FC<IProps> = ({activities, selectActivity, selectedActivity}) => {

  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          {activities.map((activity) => (
            <List.Item >
              <ActivityList activity={activity} selectActivity={selectActivity}></ActivityList>
            </List.Item>
          ))}
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
            {selectedActivity && <ActivityDetails activity={selectedActivity}/>}
            <ActivityForm/>
      </Grid.Column>
    </Grid>
  );
};
export default ActivitiesDashboard;
