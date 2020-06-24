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

  const handleSelectActivity = (id: string) =>{

    setSelectedActivity(activities.filter(a => a.id === id)[0]);
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
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivitiesDashboard activities={activities} selectActivity={handleSelectActivity} selectedActivity={selectedActivity!}/>
      </Container>
    </Fragment>
  );
};

export default App;
