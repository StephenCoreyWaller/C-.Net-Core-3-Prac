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
    editMode: boolean;  
    setEditMode: (editMode: boolean) => void;  
    setSelectedActivity: (activity: IActivity | null) => void; 
    createActivity: (activity: IActivity) => void; 
    editActivity: (activity: IActivity) => void; 
    deleteActivity: (id: string) => void; 
}

export const ActivitiesDashboard : React.FC<IProps> = 
  ({activities, 
    selectActivity, 
    selectedActivity, 
    setEditMode, 
    editMode, 
    setSelectedActivity, 
    createActivity, 
    editActivity,
    deleteActivity
  }) => {

  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          {activities.map((activity) => (
            <List.Item >
              <ActivityList
               activity={activity}
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}
              >
              </ActivityList>
            </List.Item>
          ))}
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
            {selectedActivity && !editMode && 
              (<ActivityDetails 
                setSelectedActivity={setSelectedActivity} 
                setEditMode={setEditMode} 
                activity={selectedActivity}

              />)
            }
            {editMode && <ActivityForm 
              key={selectedActivity && selectedActivity.id || 0}
              activity={selectedActivity!}
              setEditMode={setEditMode} 
              createActivity={createActivity}
              editActivity={editActivity}
            />}        
      </Grid.Column>
    </Grid>
  );
};
export default ActivitiesDashboard;
