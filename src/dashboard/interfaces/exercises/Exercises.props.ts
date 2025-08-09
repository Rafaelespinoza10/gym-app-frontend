import type { Exercise } from "./Exercises.model";

export interface CardExercisesProps{
    exercise: Exercise;
    isSelected: boolean;
    onClick: () => void;
}
export interface ExercisesGroupProps {
    exercises: Exercise[];
    selectedExerciseName: string | null;
    onExerciseSelected: (exercise: Exercise) => void;
}


export interface FormRegisterProgressProps{
    exercise:  Exercise | undefined;
}