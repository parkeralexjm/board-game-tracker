import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import trophy from '../assets/Trophy.png'
import emerald from '../assets/Emerald.png'
import rose from '../assets/Rose.png'
import diamond from '../assets/Diamond.png'
import Image from "next/image";


const pageIndex = [
  {name:'Account', id:'account', icon: emerald},
  {name:'Collection', id:'collection', icon: diamond},
  {name:'Community', id: 'community', icon: rose},
  {name:'High Scores', id: 'highscores', icon: trophy}
]

const PageRoute = () => {
  return (
    <List>
      {pageIndex.map((page) => (
        <ListItem key={page.id} disableGutters>
          {/* encodeURIComponent is used to keep the path utf-s compatable */}
          <ListItemButton component="a" href={`/${encodeURIComponent(page.id)}`} color="primary">
            <Image src={page.icon.src} alt={page.name} height={48} width={48}/>
            <ListItemText primary={page.name} sx={{ pl:1 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}


export { pageIndex, PageRoute };