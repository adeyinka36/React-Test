import MyAlert from './MyAlert';
import {Stack, Typography} from '@mui/material';
import {useEffect, useState} from "react";
import {Button} from "@mui/material";

const App = () => {
    const [levels, setLevels] = useState(
        [{
            type: 'warning',
            title: 'Warning',
            status: true,
            content: 'This is a warning message'
        },
        {
            type: 'error',
            title: 'Error',
            status: true,
            content: 'only one alert should be shown at a time'
        },
        {
            type: 'info',
            title: 'Information',
            status: true,
            content: 'This is an information message'
        }]
    )

    function updateLevel(level) {
        let updated = [];
        levels.forEach(item=>{
            if(item.type === level){
                item.status = !item.status;
            }
            updated.push(item)
        })
        setLevels( [...updated])
    }

    useEffect(()=>{
      updateLevel('warning')
    },[])

    function toggleAlert(e){
       updateLevel(e.target.name)
    }

        return (
            <>
                <Stack sx={{width: '600px', padding: '20px'}} spacing={2}>
                    <Typography variant={'h4'}>Alerts</Typography>
                    { levels.map(l=>l.status ? <MyAlert key={l.title} type={l.type} title={l.title} content={l.content} /> : null ) }
                </Stack>
                <div>
                    { levels.map(l=><Button key={l.title}  name={l.type} onClick={toggleAlert}  variant="contained" color="primary" sx={{m: .5}}>Toggle {l.title}</Button>)}
                </div>
            </>
        );
};

export default App;
