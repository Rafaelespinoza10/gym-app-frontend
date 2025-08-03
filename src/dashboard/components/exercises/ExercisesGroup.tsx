import Masonry from 'react-masonry-css';
import type { ExercisesGroupProps } from '../../interfaces/exercises/Exercises.props';
import { CardExercise } from './CardExercise';

export const ExercisesGroup = ({
  exercises,
  selectedExerciseName,
  onExerciseSelected,
}: ExercisesGroupProps) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {exercises.map((exercise) => {
  
        return (
          <div key={exercise.name} className="mb-4">
            <CardExercise
              exercise={exercise}
              isSelected={selectedExerciseName === exercise.name}
              onClick={() => onExerciseSelected(exercise)}
            />
          </div>
        );
      })}
    </Masonry>
  );
};
