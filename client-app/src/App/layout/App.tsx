import React,  { useEffect, useState , Fragment } from "react";
import { Container} from "semantic-ui-react";
import "./styles.css";
import "../../features/NavBar";
import NavBar from "../../features/NavBar";
import ActivitiesDashboard  from "../../features/ActivitiesDashboard"
import { IActivity } from "../model/activity";
import axios from "axios";

const App = () => {
  
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editActivity, editSelectedActivity] = useState(false); 


  const handleSelectActivity = (id: string) =>{

    setSelectedActivity(activities.filter(a => a.id === id)[0]);
    editSelectedActivity(false); 
  }
  const handleEditActivity = () => {

    setSelectedActivity(null); 
    editSelectedActivity(true);
  }
  const handleCreateActivity = (activity: IActivity) => {

    setActivities([...activities, activity])
    setSelectedActivity(activity)
  }
  const handleEditActivities = (activity: IActivity) => {

    setActivities([...activities.filter(a => a.id !== activity.id), activity])
  }
  const handleDeleteActivity = (id: string) => {

    setActivities([...activities.filter(a => a.id !== id)]);
  }

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, [])

  return (
    <Fragment>
      <NavBar CreateActivity={handleEditActivity}/>
      <Container style={{marginTop: '7em'}}>
        <ActivitiesDashboard 
        activities={activities} 
        selectActivity={handleSelectActivity} 
        selectedActivity={selectedActivity!}
        setEditMode={editSelectedActivity}
        editMode={editActivity}
        setSelectedActivity={setSelectedActivity}
        createActivity={handleCreateActivity}
        editActivity={handleEditActivities}
        deleteActivity={handleDeleteActivity}
        />
      </Container> 
    </Fragment>
  );
};

export default App;
