import React from 'react'
import Activity from './Activity';
import {useSelector} from 'react-redux';

function Workouts() {
    const allActivities = useSelector((state) => state.activities)

    return (
        <div className={"workouts-wrapper"}>
                <h2>My Workouts</h2>
                <button>Add Activity</button>
                {allActivities.map(activity => {
                    console.log(activity);
                    return <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration}/>
                })}
                
        </div>
    )
};

export default Workouts;
