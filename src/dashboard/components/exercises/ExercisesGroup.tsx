import Masonry from 'react-masonry-css';
import type { ExercisesGroupProps } from '../../interfaces/exercises/Exercises.props';
import { CardExercise } from './CardExercise';
import { useMemo } from 'react';

export const ExercisesGroup = ({
    exercises,
    selectedExerciseName,
    onExerciseSelected,
  }: ExercisesGroupProps) => {
    const breakpointColumnsObj = {
      default: 3,
      1024: 2,
      640: 1,
    };
  
    const exercisesWithSize = useMemo(() => {
      return exercises.map((exercise) => ({
        ...exercise,
        isLarge: Math.random() < 0.25, // 25% de probabilidad
      }));
    }, [exercises]);
  
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {exercisesWithSize.map((exercise) => (
          <div
            key={`${exercise.name}-${exercise._id}`}
            className={`mb-4 break-inside-avoid`}
          >
            <CardExercise
              exercise={exercise}
              isSelected={selectedExerciseName === exercise.name}
              onClick={() => onExerciseSelected(exercise)}
              isLarge={exercise.isLarge}
            />
          </div>
        ))}
      </Masonry>
    );
  };
  