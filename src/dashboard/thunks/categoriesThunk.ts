import { createAsyncThunk } from "@reduxjs/toolkit";
import type { MuscleProps } from "../interfaces";
import { getCategories } from "../services/categories.config";

export const getCategoriesThunks = createAsyncThunk<MuscleProps[]>(
    "categories/getAll",
    async(_, { rejectWithValue })  => {
        try{
            const response = await getCategories();
            const mapped = response.data.map((cat) => {
              switch (cat.name.toLowerCase().trim()) {
                case "piernas":
                  return {
                    ...cat,
                    name: "Legs",
                    imageUrl: "/images/categories/legs.jpg",
                    textColor: "text-white",
                    gridClass: "md:col-span-2",
                  };
                case "pecho":
                  return {
                    ...cat,
                    name: "Chest",
                    imageUrl: "/images/categories/chest.jpg",
                    textColor: "text-white",
                  };
                case "espalda":
                  return {
                    ...cat,
                    name: "Back",
                    imageUrl: "/images/categories/back.jpg",
                    textColor: "text-white",
                  };
                case "brazos":
                  return {
                    ...cat,
                    name: "Arms",
                    imageUrl: "/images/categories/arms.jpg",
                    textColor: "text-white",
                    gridClass: "md:row-span-2",
                  };
                case "hombros":
                  return {
                    ...cat,
                    name: "Shoulders",
                    imageUrl: "/images/categories/shoulders.jpg",
                    textColor: "text-white",
                    gridClass: "md:row-span-2",
                  };
                default:
                  return {
                    ...cat,
                    bgColor: "bg-gray-200",
                    textColor: "text-black",
                  };
              }
            });
            return mapped;
          } catch (error) {
            if (error instanceof Error) {
              return rejectWithValue(error.message);
            }
            return rejectWithValue("Unknown error occurred");
          }
    }
)