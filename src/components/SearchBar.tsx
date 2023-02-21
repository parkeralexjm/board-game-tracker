import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const SearchBar = () => {
const [searchInput, setSearchInput] = useState('')

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  return (
    <Paper
    component="form"
    sx={{ pl: '4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: '#FA9B13', borderRadius: '30px' }}
  >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
      </IconButton>
      <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search" onChange={handleChange} value={searchInput}
      />
   </Paper>
  )
}

export default SearchBar;