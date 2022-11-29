const getcines = async()=>{
    const data = await fetch('https://proyectotr.000webhostapp.com/')
    
    if (data.status==200){
        const cines  = await data.json();
        cines.results.forEach(cine => {
            console.log(cines,razonsocial);
        });
    }
}

getcines();