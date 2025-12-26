import { FormControl, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";


const CustomSelect = styled(Select)(() => ({
    border: "2px solid rgb(226, 226, 226)",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "var(--Avenir)",
    fontWeight: 200,
    height: "40px",
    width: "350px",
    transition: ".2s",
    backgroundColor: "white",

    "@media (max-width: 600px)": {
        width: "100%",
    },
    
    "&:hover": {
        borderColor: "rgb(200, 200, 200)",
    },

    "& .MuiSelect-select": {
        padding: "10px",
    },
    
    "& fieldset": {
        border: "none",
    },
    
    "& #gender-label": {
        fontSize: "6px",
        fontFamily: "var(--Avenir)",
        fontWeight: 200,
        color: "red",
    }
}));

const GenderSelect = ({ gender, setGender }) => {
    return (
        <div className="gender-target-audience">
            <FormControl>
                {/* <InputLabel id="gender-label">Gender</InputLabel> */}
                <CustomSelect
                    labelId="gender-label"
                    id="gender"
                    value={gender || ""}
                    onChange={(e) => setGender(e.target.value)}
                    displayEmpty
                    renderValue={(selected) => selected ? selected : "Select a gender"} // Placeholder
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </CustomSelect>
            </FormControl>
        </div>
    );
};

export default GenderSelect;
