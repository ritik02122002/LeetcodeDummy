import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice(
    {
        name: "theme",
        initialState: {
            isLightTheme: false
            
        },
        reducers: {
            changeTheme(state, action) {
                if (state.isLightTheme)
                    state.isLightTheme = false;
                else
                    state.isLightTheme = true;
                if (state.isLightTheme) {
                    document.documentElement.classList.remove("dark-mode")
                    document.documentElement.classList.add("light-mode")
                }
                else {
                    document.documentElement.classList.remove("light-mode")
                    document.documentElement.classList.add("dark-mode")
                }

            }
        }
    },
);

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;


