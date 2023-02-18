import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


const pageIndex = [
  {name:'Account', id:'account'},
  {name:'Collection', id:'collection'},
  {name:'Community', id: 'community'},
  {name:'High Scores', id: 'highscores'}
]

const PagesRoute = () => {
  return (
    <List>
      {pageIndex.map((pages) => (
        <ListItem key={pages.id} disablePadding>
          {/* encodeURIComponent is used to keep the path utf-s compatable */}
          <ListItemButton component="a" href={`/${encodeURIComponent(pages.id)}`} color="primary">
            <ListItemText primary={pages.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}


export { pageIndex, PagesRoute };