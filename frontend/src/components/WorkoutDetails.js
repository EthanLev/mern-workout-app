const WorkoutDetails = ({workout}) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (lbs):</strong> {workout.load}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p><strong>Added: </strong>{new Date(workout.createdAt).toLocaleString()}</p>
        </div>
    )
}

export default WorkoutDetails;