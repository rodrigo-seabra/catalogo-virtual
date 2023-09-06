import * as React from 'react';
import { Alert, Autocomplete, Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState,useEffect } from 'react'

function CadastroMovie() {

  const[titulo, setTitulo] = useState("")
  const[descricao, setDescricao] = useState("")
  const[ano, setAno] = useState("")
  const[duraçao, setDuracao] = useState("")
  const[imagem, setImagem] = useState("")
  const [cadastrado, setCadastrado] = useState( false ) 
  const [erro, setErro] = useState( false ) 

  /*const para receber os valores do autocomplete, input de categoria*/
  const options = ["Terror", "Suspense", "Ação", "Comédia", "Drama", "Documentário"];
  const [value, setValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  useEffect(() =>{
    if( cadastrado ){
      setDescricao("")
      setAno("")
      setValue("")
      setImagem("")
      setDuracao("")
      setTitulo("")


  }
  }, [cadastrado])

  function Cadastrar(evento){
    evento.preventDefault();
    fetch("http://10.139.75.32:8080/filmes", {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                        titulo: titulo,
                        descricao: descricao,
                        categoria: inputValue,
                        ano: ano,
                        duraçao: duraçao,
                    })
            })
            .then( (resposta) => resposta.json() )
            .then( (json) => {
                if(json.titulo){
                       setCadastrado( true );
                }else{
                    setErro( true )
                }
            }) 
            .catch( ( erro ) => {
                 setErro( true );
            }) 

  }

  return (
    <Container component="section" maxWidth="sm">
    <Box 
    sx={{
        mt:20,
        borderRadius:"5px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",   
        padding:"20px"             
        
    }}
    >
        <Typography component="h1" variant="h4">Cadastrar Filme</Typography>
        { erro && (<Alert severity="error" sx={{mb:2, mt:2}}>Revise seus dados e tente novamente</Alert>) }
        { cadastrado && (<Alert severity="success" sx={{mb:2, mt:2}}>Cadastro realizado com sucesso</Alert>) }
        <Box component="form"  onSubmit={Cadastrar}>
            <TextField 
            type="text" 
            label="Título" 
            variant="outlined" 
            margin="normal" 
            fullWidth
            
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}

            />
            <TextField 
            type="text" 
            label="Descrição" 
            variant="outlined" 
            margin="normal" 
            fullWidth

            onChange={(e) => setDescricao(e.target.value)}
            value={descricao}
            />
            <TextField 
            type="data" 
            label="Ano" 
            variant="outlined" 
            margin="normal" 
            fullWidth

            onChange={(e) => setAno(e.target.value)}
            value={ano}
            />

            <TextField 
            type="time" 
            label="Duração" 
            variant="outlined" 
            margin="normal" 
            fullWidth

            onChange={(e) => setDuracao(e.target.value)}
            value={duraçao}
            />

          <TextField 
            type="text" 
            label="Imagem" 
            variant="outlined" 
            margin="normal" 
            fullWidth

            onChange={(e) => setImagem(e.target.value)}
            value={imagem}
            />

        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{mt:2, mb:2, fontFamily:"Russo One"}}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Categoria"/>}
        />

            <Button 
            variant='contained' 
            sx={{mt:2, mb:2}}
            type="submit"
            fullWidth
            >Cadastrar</Button>

        </Box>
    </Box>
</Container> 
  )
}

export default CadastroMovie