import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Etudiant() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[etudiant,setetudiants]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const etudiant={name,address}
    console.log(etudiant)
    fetch("http://localhost:8080/etudiant/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(etudiant)

  }).then(()=>{
    console.log("Etudiant Ajouté")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/etudiant/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setetudiants(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Ajouter Etudiant</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Nom d'etudiant" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Adresse d'etudiant" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Valider
</Button>
    </form>
   
    </Paper>
    <h1>Etudiants</h1>

    <Paper elevation={3} style={paperStyle}>

      {etudiant.map(etudiant=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={etudiant.id}>
         Id:{etudiant.id}<br/>
         Name:{etudiant.name}<br/>
         Address:{etudiant.address}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}